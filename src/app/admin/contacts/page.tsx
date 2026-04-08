"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Plus,
  Search,
  Star,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  X,
} from "lucide-react";
import {
  getContacts,
  saveContact,
  deleteContact,
  Contact,
  ContactType,
  PipelineStage,
  CONTACT_TYPE_LABELS,
  STAGE_LABELS,
  STAGE_COLORS,
  getDaysSince,
  isOverdue,
} from "@/lib/crm-store";

export default function ContactsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-gray-500">Loading...</div>}>
      <ContactsContent />
    </Suspense>
  );
}

function ContactsContent() {
  const searchParams = useSearchParams();
  const typeFilter = searchParams.get("type") as ContactType | null;

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const refresh = useCallback(() => {
    let all = getContacts();
    if (typeFilter) all = all.filter((c) => c.type === typeFilter);
    setContacts(all);
  }, [typeFilter]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.organization.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm("Delete this contact?")) {
      deleteContact(id);
      refresh();
    }
  };

  const pageTitle = typeFilter
    ? CONTACT_TYPE_LABELS[typeFilter] + "s"
    : "All Contacts";

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">{pageTitle}</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          <Plus className="w-4 h-4" /> New Contact
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-[#1a2332] border border-gray-700/50 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-coral/50"
        />
      </div>

      {/* Table */}
      <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700/50">
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">
                  Contact
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">
                  Organization
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide hidden md:table-cell">
                  Type
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide hidden lg:table-cell">
                  Stage
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide hidden lg:table-cell">
                  Last Contacted
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide hidden xl:table-cell">
                  Follow-Up
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">
                  Score
                </th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((contact) => {
                const daysSince = getDaysSince(contact.lastContacted);
                const followUpOverdue = isOverdue(contact.nextFollowUp);

                return (
                  <tr
                    key={contact.id}
                    className="border-b border-gray-700/30 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/contacts/${contact.id}`}
                        className="flex items-center gap-3"
                      >
                        {contact.starred && (
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-sm text-white font-medium hover:text-coral transition-colors">
                            {contact.name}
                          </p>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {contact.phone}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1 hidden sm:flex">
                              <Mail className="w-3 h-3" />
                              {contact.email}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-400">
                      {contact.organization}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-gray-400">
                        {CONTACT_TYPE_LABELS[contact.type]}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${STAGE_COLORS[contact.stage]} text-white`}
                      >
                        {STAGE_LABELS[contact.stage]}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {daysSince !== null ? (
                        <span
                          className={`text-xs flex items-center gap-1 ${daysSince > 14 ? "text-orange-400" : "text-gray-400"}`}
                        >
                          <Clock className="w-3 h-3" />
                          {daysSince}d ago
                        </span>
                      ) : (
                        <span className="text-xs text-gray-600">Never</span>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden xl:table-cell">
                      {contact.nextFollowUp ? (
                        <span
                          className={`text-xs flex items-center gap-1 ${followUpOverdue ? "text-red-400" : "text-gray-400"}`}
                        >
                          {followUpOverdue && (
                            <AlertCircle className="w-3 h-3" />
                          )}
                          {contact.nextFollowUp}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-600">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
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
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-gray-600 hover:text-red-400 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 py-8 text-center text-gray-500 text-sm"
                  >
                    No contacts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddModal && (
        <AddContactModal
          defaultType={typeFilter}
          onClose={() => setShowAddModal(false)}
          onSave={() => {
            refresh();
            setShowAddModal(false);
          }}
        />
      )}
    </div>
  );
}

function AddContactModal({
  defaultType,
  onClose,
  onSave,
}: {
  defaultType: ContactType | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: defaultType || ("placement-agent" as ContactType),
    organization: "",
    title: "",
    notes: "",
    stage: "new-lead" as PipelineStage,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveContact({
      ...form,
      lastContacted: null,
      nextFollowUp: null,
      score: 50,
      starred: false,
    });
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <h3 className="text-lg font-semibold text-white">New Contact</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Type</label>
              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value as ContactType })
                }
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              >
                {Object.entries(CONTACT_TYPE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Organization</label>
              <input
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Stage</label>
            <select
              value={form.stage}
              onChange={(e) =>
                setForm({ ...form, stage: e.target.value as PipelineStage })
              }
              className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
            >
              {Object.entries(STAGE_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Notes</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50 resize-none"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm font-medium py-2.5 rounded transition-colors">
              Save Contact
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2.5 border border-gray-700/50 text-gray-400 text-sm rounded hover:bg-white/5 transition-colors">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
