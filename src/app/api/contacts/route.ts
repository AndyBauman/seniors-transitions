import { after, NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { isAdminRequest } from "@/lib/admin-auth";
import { blankNullText, toPublicLead } from "@/lib/lead-intake";
import { sendLeadAlert } from "@/lib/lead-alert";

export async function GET(request: NextRequest) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const isAdmin = await isAdminRequest(request);
  const row = isAdmin ? blankNullText(body) : toPublicLead(body);
  if (!row) {
    return NextResponse.json(
      { error: "Please include your name and a phone number or email." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("contacts")
    .insert(row)
    .select()
    .single();

  if (error) {
    console.error("Contact insert failed", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!isAdmin) {
    after(() => sendLeadAlert(data));
    return NextResponse.json({ ok: true, id: data.id }, { status: 201 });
  }

  return NextResponse.json(data, { status: 201 });
}
