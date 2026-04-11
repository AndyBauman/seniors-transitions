"use client";

import { Suspense, useEffect, useState, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Plus,
  Search,
  Star,
  Phone,
  Clock,
  AlertCircle,
  X,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Filter,
  SlidersHorizontal,
} from "lucide-react";
import {
  getContacts,
  saveContact as localSaveContact,
  updateContact as localUpdateContact,
  deleteContact as localDeleteContact,
  syncDirectoryContactsFromBundle,
  getCrmSeedVersion,
  Contact,
  ContactType,
  PipelineStage,
  CONTACT_TYPE_LABELS,
  STAGE_LABELS,
  STAGE_COLORS,
  getDaysSince,
  isOverdue,
} from "@/lib/crm-store";
import {
  fetchContacts,
  apiSaveContact,
  apiUpdateContact,
  apiDeleteContact,
  apiSeedContacts,
  isApiAvailable,
} from "@/lib/crm-api";
import { websiteHref, stripWebsiteProtocol } from "@/lib/website-utils";

type SortField =
  | "name"
  | "city"
  | "state"
  | "phone"
  | "website"
  | "type"
  | "stage"
  | "lastContacted"
  | "nextFollowUp"
  | "score"
  | "verified";

type SortDir = "asc" | "desc";

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
  const [verifiedFilter, setVerifiedFilter] = useState<
    "all" | "verified" | "unverified"
  >("all");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [typeFilterLocal, setTypeFilterLocal] = useState<string>("all");
  const [syncingDirectory, setSyncingDirectory] = useState(false);
  const [useApi, setUseApi] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [showFilters, setShowFilters] = useState(false);

  const refresh = useCallback(async () => {
    try {
      if (useApi) {
        let all = await fetchContacts();
        if (typeFilter) all = all.filter((c) => c.type === typeFilter);
        setContacts(all);
      } else {
        let all = getContacts();
        if (typeFilter) all = all.filter((c) => c.type === typeFilter);
        setContacts(all);
      }
    } catch {
      let all = getContacts();
      if (typeFilter) all = all.filter((c) => c.type === typeFilter);
      setContacts(all);
    } finally {
      setLoading(false);
    }
  }, [typeFilter, useApi]);

  useEffect(() => {
    isApiAvailable().then((ok) => {
      setUseApi(ok);
      if (ok) {
        apiSeedContacts().catch(() => {});
      }
    });
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const states = useMemo(
    () =>
      [
        ...new Set(
          contacts
            .map((c) => c.state)
            .filter(Boolean)
        ),
      ].sort(),
    [contacts]
  );

  const stages = useMemo(
    () =>
      [
        ...new Set(
          contacts
            .map((c) => c.stage)
            .filter(Boolean)
        ),
      ].sort(),
    [contacts]
  );

  const types = useMemo(
    () =>
      [
        ...new Set(
          contacts
            .map((c) => c.type)
            .filter(Boolean)
        ),
      ].sort(),
    [contacts]
  );

  const filtered = useMemo(() => {
    let result = contacts.filter((c) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.organization.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.website.toLowerCase().includes(q) ||
        c.placementTargets.toLowerCase().includes(q) ||
        c.notes.toLowerCase().includes(q);
      const matchesVerified =
        verifiedFilter === "all" ||
        (verifiedFilter === "verified" && c.verified) ||
        (verifiedFilter === "unverified" && !c.verified);
      const matchesState = stateFilter === "all" || c.state === stateFilter;
      const matchesStage = stageFilter === "all" || c.stage === stageFilter;
      const matchesType =
        typeFilterLocal === "all" || c.type === typeFilterLocal;
      return (
        matchesSearch &&
        matchesVerified &&
        matchesState &&
        matchesStage &&
        matchesType
      );
    });

    result.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "name":
          cmp = a.name.localeCompare(b.name);
          break;
        case "city":
          cmp = (a.city || "").localeCompare(b.city || "");
          break;
        case "state":
          cmp = (a.state || "").localeCompare(b.state || "");
          break;
        case "phone":
          cmp = (a.phone || "").localeCompare(b.phone || "");
          break;
        case "website":
          cmp = (a.website || "").localeCompare(b.website || "");
          break;
        case "type":
          cmp = (CONTACT_TYPE_LABELS[a.type] || "").localeCompare(
            CONTACT_TYPE_LABELS[b.type] || ""
          );
          break;
        case "stage":
          cmp = (STAGE_LABELS[a.stage] || "").localeCompare(
            STAGE_LABELS[b.stage] || ""
          );
          break;
        case "lastContacted": {
          const aDate = a.lastContacted || "";
          const bDate = b.lastContacted || "";
          cmp = aDate.localeCompare(bDate);
          break;
        }
        case "nextFollowUp": {
          const aDate = a.nextFollowUp || "";
          const bDate = b.nextFollowUp || "";
          cmp = aDate.localeCompare(bDate);
          break;
        }
        case "score":
          cmp = a.score - b.score;
          break;
        case "verified":
          cmp = (a.verified ? 1 : 0) - (b.verified ? 1 : 0);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [
    contacts,
    search,
    verifiedFilter,
    stateFilter,
    stageFilter,
    typeFilterLocal,
    sortField,
    sortDir,
  ]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this contact?")) return;
    try {
      if (useApi) await apiDeleteContact(id);
      else localDeleteContact(id);
      refresh();
    } catch {
      localDeleteContact(id);
      refresh();
    }
  };

  const toggleVerified = async (id: string, current: boolean) => {
    const updates = {
      verified: !current,
      verifiedDate: !current ? new Date().toISOString().split("T")[0] : null,
    };
    try {
      if (useApi) await apiUpdateContact(id, updates);
      else localUpdateContact(id, updates);
    } catch {
      localUpdateContact(id, updates);
    }
    refresh();
  };

  const pageTitle = typeFilter
    ? CONTACT_TYPE_LABELS[typeFilter] + "s"
    : "All Contacts";

  const handleSyncDirectory = async () => {
    if (
      !confirm(
        "Merge the latest directory contacts bundled with this site into your CRM? Rows that match by website or phone are enriched; new organizations are added. Tasks and contact IDs are kept."
      )
    )
      return;
    setSyncingDirectory(true);
    try {
      if (!useApi) {
        const { previousCount, nextCount } = syncDirectoryContactsFromBundle();
        refresh();
        alert(
          `Directory sync complete. Contacts: ${previousCount} → ${nextCount}.`
        );
      } else {
        alert("Sync is handled server-side with Supabase. Try refreshing.");
        refresh();
      }
    } finally {
      setSyncingDirectory(false);
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field)
      return <ChevronsUpDown className="w-3 h-3 text-gray-600 ml-1 inline" />;
    return sortDir === "asc" ? (
      <ChevronUp className="w-3 h-3 text-coral ml-1 inline" />
    ) : (
      <ChevronDown className="w-3 h-3 text-coral ml-1 inline" />
    );
  };

  const verifiedCount = filtered.filter((c) => c.verified).length;
  const unverifiedCount = filtered.filter((c) => !c.verified).length;

  const activeFilterCount =
    (verifiedFilter !== "all" ? 1 : 0) +
    (stateFilter !== "all" ? 1 : 0) +
    (stageFilter !== "all" ? 1 : 0) +
    (typeFilterLocal !== "all" ? 1 : 0);

  if (loading) {
    return (
      <div className="p-8 text-gray-500 flex items-center gap-2">
        <RefreshCw className="w-4 h-4 animate-spin" /> Loading contacts…
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-6 md:p-8 min-w-0 max-w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">{pageTitle}</h1>
          <p className="text-xs text-gray-500 mt-1">
            {filtered.length} contacts • {verifiedCount} verified •{" "}
            {unverifiedCount} unverified
            {useApi && (
              <span className="ml-2 text-green-500">● synced</span>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-end">
          <button
            type="button"
            onClick={handleSyncDirectory}
            disabled={syncingDirectory}
            title={`Merge directory data shipped with this build (seed v${getCrmSeedVersion()}). Use after deploy if counts look stale.`}
            className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-200 text-sm font-medium px-3 py-2 rounded transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-4 h-4 ${syncingDirectory ? "animate-spin" : ""}`}
            />
            Sync directory
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            <Plus className="w-4 h-4" /> New Contact
          </button>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search name, city, phone, website, networks, notes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#1a2332] border border-gray-700/50 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-coral/50"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-3 py-2.5 border rounded text-sm font-medium transition-colors ${
            showFilters || activeFilterCount > 0
              ? "bg-coral/10 border-coral/30 text-coral"
              : "bg-[#1a2332] border-gray-700/50 text-gray-300 hover:border-gray-600"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-coral text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-[#1a2332] border border-gray-700/50 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter Contacts
            </h3>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setVerifiedFilter("all");
                  setStateFilter("all");
                  setStageFilter("all");
                  setTypeFilterLocal("all");
                }}
                className="text-xs text-coral hover:text-coral/80 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] text-gray-500 uppercase mb-1">
                Status
              </label>
              <select
                value={verifiedFilter}
                onChange={(e) =>
                  setVerifiedFilter(
                    e.target.value as typeof verifiedFilter
                  )
                }
                className="w-full px-2.5 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              >
                <option value="all">All Status</option>
                <option value="verified">Verified Only</option>
                <option value="unverified">Unverified Only</option>
              </select>
            </div>
            {states.length > 1 && (
              <div>
                <label className="block text-[10px] text-gray-500 uppercase mb-1">
                  State
                </label>
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full px-2.5 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                >
                  <option value="all">All States</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label className="block text-[10px] text-gray-500 uppercase mb-1">
                Stage
              </label>
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="w-full px-2.5 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              >
                <option value="all">All Stages</option>
                {stages.map((s) => (
                  <option key={s} value={s}>
                    {STAGE_LABELS[s as PipelineStage] || s}
                  </option>
                ))}
              </select>
            </div>
            {!typeFilter && (
              <div>
                <label className="block text-[10px] text-gray-500 uppercase mb-1">
                  Type
                </label>
                <select
                  value={typeFilterLocal}
                  onChange={(e) => setTypeFilterLocal(e.target.value)}
                  className="w-full px-2.5 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
                >
                  <option value="all">All Types</option>
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {CONTACT_TYPE_LABELS[t as ContactType] || t}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[1180px] text-left">
            <thead>
              <tr className="border-b border-gray-700/50">
                <th className="w-10 px-2 py-3 sticky left-0 z-10 bg-[#1a2332] border-r border-gray-700/30">
                  <button
                    type="button"
                    onClick={() => handleSort("verified")}
                    className="group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-600 mx-auto group-hover:text-gray-400 transition-colors" />
                    {sortField === "verified" && (
                      <SortIcon field="verified" />
                    )}
                  </button>
                </th>
                <SortableHeader
                  field="name"
                  label="Company / agent name"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                  className="min-w-[200px]"
                />
                <SortableHeader
                  field="city"
                  label="City"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                />
                <SortableHeader
                  field="state"
                  label="State"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                />
                <SortableHeader
                  field="phone"
                  label="Phone(s)"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                  className="min-w-[140px]"
                />
                <SortableHeader
                  field="website"
                  label="Website"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                  className="min-w-[160px]"
                />
                <th className="px-3 py-3 text-xs text-gray-500 uppercase tracking-wide min-w-[180px]">
                  Networks / placement focus
                </th>
                <th className="px-3 py-3 text-xs text-gray-500 uppercase tracking-wide min-w-[220px]">
                  Notes
                </th>
                <SortableHeader
                  field="type"
                  label="Type"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                />
                <SortableHeader
                  field="stage"
                  label="Stage"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                />
                <SortableHeader
                  field="lastContacted"
                  label="Last contact"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                />
                <SortableHeader
                  field="nextFollowUp"
                  label="Follow-up"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                />
                <SortableHeader
                  field="score"
                  label="Score"
                  currentField={sortField}
                  currentDir={sortDir}
                  onSort={handleSort}
                  className="text-center w-14"
                />
                <th className="w-10 px-2 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((contact) => {
                const daysSince = getDaysSince(contact.lastContacted);
                const followUpOverdue = isOverdue(contact.nextFollowUp);
                const networks = contact.placementTargets?.trim() || "";

                return (
                  <tr
                    key={contact.id}
                    className="border-b border-gray-700/30 hover:bg-white/5 transition-colors align-top"
                  >
                    <td className="px-2 py-3 text-center sticky left-0 z-10 bg-[#1a2332] border-r border-gray-700/30">
                      <button
                        type="button"
                        onClick={() =>
                          toggleVerified(contact.id, contact.verified)
                        }
                        title={
                          contact.verified
                            ? `Verified ${contact.verifiedDate || ""}`
                            : "Mark as verified"
                        }
                        className="group"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 transition-colors ${
                            contact.verified
                              ? "text-green-400 fill-green-400/20"
                              : "text-gray-700 group-hover:text-gray-500"
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-3 py-3 min-w-0">
                      <Link
                        href={`/admin/contacts/${contact.id}`}
                        className="text-sm text-white font-medium hover:text-coral leading-snug block"
                      >
                        {contact.starred && (
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 inline mr-1 align-middle" />
                        )}
                        {contact.name}
                        {contact.verified && (
                          <span className="ml-2 text-[10px] text-green-400 align-middle">
                            ✓
                          </span>
                        )}
                      </Link>
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-300 max-w-[120px]">
                      {contact.city?.trim() || "—"}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-300 whitespace-nowrap">
                      {contact.state?.trim() || "—"}
                    </td>
                    <td
                      className="px-3 py-3 text-xs text-gray-400 whitespace-pre-wrap break-words max-w-[200px]"
                      title={contact.phone}
                    >
                      {contact.phone?.trim() ? (
                        <span className="flex items-start gap-1">
                          <Phone className="w-3 h-3 flex-shrink-0 mt-0.5 text-gray-600" />
                          {contact.phone}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-3 py-3 text-xs min-w-0 max-w-[200px]">
                      {contact.website?.trim() ? (
                        <a
                          href={websiteHref(contact.website)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 inline-flex items-start gap-1 break-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3 flex-shrink-0 mt-0.5" />
                          <span>
                            {stripWebsiteProtocol(contact.website)}
                          </span>
                        </a>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-500 max-w-[240px]">
                      <span
                        className="line-clamp-3"
                        title={networks || undefined}
                      >
                        {networks ? networks : "—"}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-500 max-w-[280px]">
                      <span className="line-clamp-3" title={contact.notes}>
                        {contact.notes?.trim() || "—"}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-[10px] text-gray-500 whitespace-nowrap">
                      {CONTACT_TYPE_LABELS[contact.type]}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded ${STAGE_COLORS[contact.stage]} text-white whitespace-nowrap`}
                      >
                        {STAGE_LABELS[contact.stage]}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-xs whitespace-nowrap">
                      {daysSince !== null ? (
                        <span
                          className={`flex items-center gap-1 ${daysSince > 14 ? "text-orange-400" : "text-gray-400"}`}
                        >
                          <Clock className="w-3 h-3 flex-shrink-0" />
                          {daysSince}d
                        </span>
                      ) : (
                        <span className="text-gray-600">Never</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-xs whitespace-nowrap">
                      {contact.nextFollowUp ? (
                        <span
                          className={`inline-flex items-center gap-1 ${followUpOverdue ? "text-red-400" : "text-gray-400"}`}
                        >
                          {followUpOverdue && (
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          )}
                          {contact.nextFollowUp}
                        </span>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span
                        className={`text-xs font-bold tabular-nums ${
                          contact.score >= 80
                            ? "text-green-400"
                            : contact.score >= 60
                              ? "text-yellow-400"
                              : "text-gray-500"
                        }`}
                      >
                        {contact.score}
                      </span>
                    </td>
                    <td className="px-2 py-3">
                      <button
                        type="button"
                        onClick={() => handleDelete(contact.id)}
                        className="text-gray-700 hover:text-red-400 transition-colors"
                        aria-label="Delete contact"
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
                    colSpan={14}
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

      {showAddModal && (
        <AddContactModal
          defaultType={typeFilter}
          useApi={useApi}
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

function SortableHeader({
  field,
  label,
  currentField,
  currentDir,
  onSort,
  className,
}: {
  field: SortField;
  label: string;
  currentField: SortField;
  currentDir: SortDir;
  onSort: (f: SortField) => void;
  className?: string;
}) {
  const isActive = currentField === field;
  return (
    <th
      className={`px-3 py-3 text-xs text-gray-500 uppercase tracking-wide whitespace-nowrap ${className || ""}`}
    >
      <button
        type="button"
        onClick={() => onSort(field)}
        className={`inline-flex items-center gap-0.5 hover:text-gray-300 transition-colors ${isActive ? "text-gray-300" : ""}`}
      >
        {label}
        {isActive ? (
          currentDir === "asc" ? (
            <ChevronUp className="w-3 h-3 text-coral" />
          ) : (
            <ChevronDown className="w-3 h-3 text-coral" />
          )
        ) : (
          <ChevronsUpDown className="w-3 h-3 text-gray-600" />
        )}
      </button>
    </th>
  );
}

function AddContactModal({
  defaultType,
  useApi,
  onClose,
  onSave,
}: {
  defaultType: ContactType | null;
  useApi: boolean;
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
    website: "",
    city: "",
    state: "OR",
    placementTargets: "",
    stage: "new-lead" as PipelineStage,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const contact = {
        ...form,
        lastContacted: null,
        nextFollowUp: null,
        score: 50,
        starred: false,
        verified: false,
        verifiedDate: null,
      };
      if (useApi) await apiSaveContact(contact);
      else localSaveContact(contact);
      onSave();
    } catch {
      localSaveContact({
        ...form,
        lastContacted: null,
        nextFollowUp: null,
        score: 50,
        starred: false,
        verified: false,
        verifiedDate: null,
      });
      onSave();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <h3 className="text-lg font-semibold text-white">New Contact</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Name *
              </label>
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
                  <option key={k} value={k}>
                    {v}
                  </option>
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
              <label className="block text-xs text-gray-400 mb-1">
                Organization
              </label>
              <input
                value={form.organization}
                onChange={(e) =>
                  setForm({ ...form, organization: e.target.value })
                }
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
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">City</label>
              <input
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">State</label>
              <input
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Website
              </label>
              <input
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Placement Targets
            </label>
            <input
              value={form.placementTargets}
              onChange={(e) =>
                setForm({ ...form, placementTargets: e.target.value })
              }
              placeholder="e.g. Assisted living; memory care; adult care homes"
              className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white placeholder-gray-600 focus:outline-none focus:border-coral/50"
            />
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
                <option key={k} value={k}>
                  {v}
                </option>
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
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm font-medium py-2.5 rounded transition-colors disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save Contact"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 border border-gray-700/50 text-gray-400 text-sm rounded hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
