import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { buildCanonicalSeedContacts } from "@/lib/crm-seed";

export async function POST() {
  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 }
    );
  }

  const { count } = await supabase
    .from("contacts")
    .select("id", { count: "exact", head: true });

  if ((count ?? 0) > 0) {
    return NextResponse.json({
      seeded: false,
      message: "Table already has data",
      count,
    });
  }

  const rows = buildCanonicalSeedContacts();

  const { error } = await supabase.from("contacts").insert(rows);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ seeded: true, count: rows.length });
}
