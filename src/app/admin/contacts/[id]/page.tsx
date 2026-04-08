"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  Building,
  Star,
  Clock,
  CalendarDays,
  Save,
  Trash2,
} from "lucide-react";
import {
  getContact,
  updateContact,
  deleteContact,
  Contact,
  ContactType,
  PipelineStage,
  CONTACT_TYPE_LABELS,
  STAGE_LABELS,
  STAGE_COLORS,
  getDaysSince,
} from "@/lib/crm-store";

export default function ContactDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [contact, setContact] = useState<Contact | null>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<Partial<Contact>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const c = getContact(params.id as string);
    if (c) {
      setContact(c);
      setForm(c);
    }
  }, [params.id]);

  if (!contact) {
    return (
      <div className="p-8 text-gray-500">Contact not found.</div>
    );
  }

  const handleSave = () => {
    updateContact(contact.id, form);
    setContact({ ...contact, ...form } as Contact);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = () => {
    if (confirm("Delete this contact permanently?")) {
      deleteContact(contact.id);
      router.push("/admin/contacts");
    }
  };

  const handleMarkContacted = () => {
    const today = new Date().toISOString().split("T")[0];
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 14);
    const next = nextWeek.toISOString().split("T")[0];

    updateContact(contact.id, {
      lastContacted: today,
      nextFollowUp: next,
    });
    setContact({
      ...contact,
      lastContacted: today,
      nextFollowUp: next,
    });
    setForm({
      ...form,
      lastContacted: today,
      nextFollowUp: next,
    });
  };

  const daysSince = getDaysSince(contact.lastContacted);

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      <Link
        href="/admin/contacts"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Contacts
      </Link>

      {saved && (
        <div className="mb-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-2 rounded">
          Contact saved successfully.
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${
              contact.type === "placement-agent"
                ? "bg-cyan-500/20 text-cyan-400"
                : contact.type === "executive-director"
                  ? "bg-purple-500/20 text-purple-400"
                  : contact.type === "community"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-gray-500/20 text-gray-400"
            }`}
          >
            {contact.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white">{contact.name}</h1>
              {contact.starred && (
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              )}
            </div>
            <p className="text-gray-400 text-sm">
              {contact.title}
              {contact.title && contact.organization && " • "}
              {contact.organization}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`text-xs px-2 py-0.5 rounded ${STAGE_COLORS[contact.stage]} text-white`}
              >
                {STAGE_LABELS[contact.stage]}
              </span>
              <span className="text-xs text-gray-500">
                {CONTACT_TYPE_LABELS[contact.type]}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleMarkContacted}
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-medium px-3 py-2 rounded transition-colors"
          >
            <Phone className="w-3 h-3" /> Mark Contacted
          </button>
          <button
            onClick={() => setEditing(!editing)}
            className="text-xs text-gray-400 hover:text-white border border-gray-700/50 px-3 py-2 rounded transition-colors"
          >
            {editing ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Contact Info & Last Contacted */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-white">Contact Info</h3>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-coral transition-colors"
            >
              <Phone className="w-4 h-4" /> {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-coral transition-colors"
            >
              <Mail className="w-4 h-4" /> {contact.email}
            </a>
            {contact.organization && (
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Building className="w-4 h-4" /> {contact.organization}
              </div>
            )}
          </div>

          <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-white">Activity</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Last Contacted
              </span>
              <span
                className={`text-xs font-medium ${
                  daysSince !== null && daysSince > 14
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                {daysSince !== null ? `${daysSince} days ago` : "Never"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <CalendarDays className="w-3 h-3" /> Next Follow-Up
              </span>
              <span className="text-xs font-medium text-gray-300">
                {contact.nextFollowUp || "Not set"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Score</span>
              <span
                className={`text-xs font-bold ${
                  contact.score >= 80
                    ? "text-green-400"
                    : contact.score >= 60
                      ? "text-yellow-400"
                      : "text-gray-400"
                }`}
              >
                {contact.score}
              </span>
            </div>
          </div>
        </div>

        {/* Edit Form / Notes */}
        <div className="lg:col-span-2">
          {editing ? (
            <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white">
                Edit Contact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Name</label>
                  <input
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Organization</label>
                  <input
                    value={form.organization || ""}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Email</label>
                  <input
                    value={form.email || ""}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Phone</label>
                  <input
                    value={form.phone || ""}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Type</label>
                  <select
                    value={form.type || ""}
                    onChange={(e) => setForm({ ...form, type: e.target.value as ContactType })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  >
                    {Object.entries(CONTACT_TYPE_LABELS).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Stage</label>
                  <select
                    value={form.stage || ""}
                    onChange={(e) => setForm({ ...form, stage: e.target.value as PipelineStage })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  >
                    {Object.entries(STAGE_LABELS).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Next Follow-Up</label>
                  <input
                    type="date"
                    value={form.nextFollowUp || ""}
                    onChange={(e) => setForm({ ...form, nextFollowUp: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Score</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={form.score || 0}
                    onChange={(e) => setForm({ ...form, score: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Notes</label>
                <textarea
                  rows={4}
                  value={form.notes || ""}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50 resize-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1.5 bg-coral hover:bg-coral/90 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                >
                  <Save className="w-4 h-4" /> Save Changes
                </button>
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-1.5 text-red-400 hover:text-red-300 border border-red-400/30 text-sm px-4 py-2 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
              <h3 className="text-sm font-semibold text-white mb-3">Notes</h3>
              <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-wrap">
                {contact.notes || "No notes yet."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
