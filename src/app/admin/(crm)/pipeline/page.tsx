"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Clock,
  CheckCircle2,
  MapPin,
  RefreshCw,
} from "lucide-react";
import {
  Contact,
  PipelineStage,
  CONTACT_TYPE_LABELS,
  STAGE_LABELS,
  STAGE_COLORS,
  getDaysSince,
} from "@/lib/crm-store";
import { useCrmContactsSync } from "@/hooks/use-crm-contacts-sync";

const STAGES: PipelineStage[] = [
  "new-lead",
  "contacted",
  "meeting-set",
  "proposal",
  "active-partner",
  "inactive",
];

export default function PipelinePage() {
  const { contacts, ready, persistStage } = useCrmContactsSync();
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDrop = async (stage: PipelineStage) => {
    if (!draggedId) return;
    const id = draggedId;
    setDraggedId(null);
    try {
      await persistStage(id, stage);
    } catch {
      alert("Could not save stage. Check your connection.");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  if (!ready) {
    return (
      <div className="p-8 text-gray-500 flex items-center gap-2">
        <RefreshCw className="w-4 h-4 animate-spin" /> Loading pipeline…
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-6 md:p-8 min-w-0 max-w-full">
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Pipeline</h1>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 min-w-0 overscroll-x-contain">
        {STAGES.map((stage) => {
          const stageContacts = contacts.filter((c) => c.stage === stage);
          return (
            <div
              key={stage}
              className="min-w-[280px] w-[280px] flex-shrink-0"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(stage)}
            >
              <div className="bg-[#1a2332] rounded-lg border border-gray-700/50">
                {/* Column Header */}
                <div className="flex items-center justify-between p-3 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${STAGE_COLORS[stage]}`}
                    />
                    <span className="text-sm font-medium text-white">
                      {STAGE_LABELS[stage]}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded">
                    {stageContacts.length}
                  </span>
                </div>

                {/* Cards */}
                <div className="p-2 space-y-2 min-h-[200px]">
                  {stageContacts.map((contact) => (
                    <PipelineCard
                      key={contact.id}
                      contact={contact}
                      onDragStart={() => handleDragStart(contact.id)}
                    />
                  ))}
                  {stageContacts.length === 0 && (
                    <div className="text-center py-8 text-gray-700 text-xs">
                      Drop here
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PipelineCard({
  contact,
  onDragStart,
}: {
  contact: Contact;
  onDragStart: () => void;
}) {
  const daysSince = getDaysSince(contact.lastContacted);

  return (
    <Link
      href={`/admin/contacts/${contact.id}`}
      draggable
      onDragStart={onDragStart}
      className="block bg-[#0f1419] rounded p-3 hover:bg-white/5 transition-colors cursor-grab active:cursor-grabbing border border-transparent hover:border-gray-700/50"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
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
          <p className="text-sm text-white truncate font-medium">
            {contact.name}
          </p>
        </div>
        {contact.starred && (
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />
        )}
      </div>

      <p className="text-xs text-gray-500 mb-1 truncate">
        {contact.organization}
      </p>
      {(contact.city || contact.state) && (
        <p className="text-[10px] text-gray-600 mb-2 flex items-center gap-0.5">
          <MapPin className="w-2.5 h-2.5" />
          {[contact.city, contact.state].filter(Boolean).join(", ")}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {contact.verified && (
            <CheckCircle2 className="w-3 h-3 text-green-400" />
          )}
          <span className="text-xs text-gray-600">
            {CONTACT_TYPE_LABELS[contact.type]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {daysSince !== null && (
            <span
              className={`text-xs flex items-center gap-1 ${daysSince > 14 ? "text-orange-400" : "text-gray-500"}`}
            >
              <Clock className="w-3 h-3" />
              {daysSince}d
            </span>
          )}
          <span
            className={`text-xs font-bold ${
              contact.score >= 80
                ? "text-green-400"
                : contact.score >= 60
                  ? "text-yellow-400"
                  : "text-gray-500"
            }`}
          >
            {contact.score}
          </span>
        </div>
      </div>
    </Link>
  );
}
