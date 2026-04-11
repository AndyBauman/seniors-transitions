"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  UserCheck,
  Building,
  AlertTriangle,
  ArrowRight,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import {
  getTasks,
  Task,
  CONTACT_TYPE_LABELS,
  STAGE_LABELS,
  STAGE_COLORS,
  getDaysSince,
  isOverdue,
} from "@/lib/crm-store";
import { useCrmContactsSync } from "@/hooks/use-crm-contacts-sync";

export default function AdminDashboard() {
  const { contacts, ready } = useCrmContactsSync();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
  }, [ready]);

  const activePartners = contacts.filter((c) => c.stage === "active-partner");
  const needsFollowUp = contacts.filter(
    (c) => c.nextFollowUp && isOverdue(c.nextFollowUp)
  );
  const overdueTasks = tasks.filter(
    (t) => !t.completed && isOverdue(t.dueDate)
  );
  const todayTasks = tasks.filter(
    (t) =>
      !t.completed &&
      t.dueDate === new Date().toISOString().split("T")[0]
  );
  const upcomingTasks = tasks.filter(
    (t) =>
      !t.completed &&
      !isOverdue(t.dueDate) &&
      t.dueDate !== new Date().toISOString().split("T")[0]
  );

  const verifiedContacts = contacts.filter((c) => c.verified);
  const unverifiedContacts = contacts.filter((c) => !c.verified);

  const contactsByType = {
    "placement-agent": contacts.filter((c) => c.type === "placement-agent"),
    "executive-director": contacts.filter((c) => c.type === "executive-director"),
    community: contacts.filter((c) => c.type === "community"),
    family: contacts.filter((c) => c.type === "family"),
    attorney: contacts.filter((c) => c.type === "attorney"),
  };

  const stageCount = contacts.reduce(
    (acc, c) => {
      acc[c.stage] = (acc[c.stage] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  if (!ready) {
    return (
      <div className="p-8 text-gray-500 flex items-center gap-2">
        <RefreshCw className="w-4 h-4 animate-spin" /> Loading dashboard…
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-6 md:p-8 min-w-0 max-w-full">
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-6 sm:mb-8 min-w-0">
        <StatCard
          label="Total Contacts"
          value={contacts.length}
          icon={<Users className="w-5 h-5 text-blue-400" />}
          color="border-blue-500/30"
        />
        <StatCard
          label="Active Partners"
          value={activePartners.length}
          icon={<UserCheck className="w-5 h-5 text-green-400" />}
          color="border-green-500/30"
        />
        <StatCard
          label="Communities"
          value={contactsByType.community.length}
          icon={<Building className="w-5 h-5 text-purple-400" />}
          color="border-purple-500/30"
        />
        <StatCard
          label="Placement Agents"
          value={contactsByType["placement-agent"].length}
          icon={<UserCheck className="w-5 h-5 text-cyan-400" />}
          color="border-cyan-500/30"
        />
        <StatCard
          label="Verified"
          value={verifiedContacts.length}
          icon={<ShieldCheck className="w-5 h-5 text-green-400" />}
          color="border-green-500/30"
          subtitle={`${unverifiedContacts.length} unverified`}
        />
        <StatCard
          label="Needs Follow-Up"
          value={needsFollowUp.length}
          icon={<Phone className="w-5 h-5 text-orange-400" />}
          color="border-orange-500/30"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 min-w-0">
        {/* Pipeline Overview */}
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-4 sm:p-6 min-w-0 overflow-hidden">
          <h2 className="text-base sm:text-lg font-semibold text-white mb-4">
            Pipeline by Stage
          </h2>
          <div className="space-y-3 min-w-0">
            {(Object.keys(STAGE_LABELS) as Array<keyof typeof STAGE_LABELS>).map(
              (stage) => (
                <div
                  key={stage}
                  className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-center sm:gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${STAGE_COLORS[stage]}`}
                    />
                    <span className="text-sm text-gray-400 min-w-0 truncate">
                      {STAGE_LABELS[stage]}
                    </span>
                    <span className="text-sm font-medium text-white flex-shrink-0 tabular-nums">
                      {stageCount[stage] || 0}
                    </span>
                  </div>
                  <div className="w-full sm:w-24 sm:flex-shrink-0 bg-gray-700 rounded-full h-2 min-w-0">
                    <div
                      className={`h-2 rounded-full ${STAGE_COLORS[stage]}`}
                      style={{
                        width: `${contacts.length ? ((stageCount[stage] || 0) / contacts.length) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Needs Follow-Up */}
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-4 sm:p-6 min-w-0 overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-4 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold text-white truncate">
              Needs Follow-Up
            </h2>
            <Link
              href="/admin/contacts"
              className="text-xs text-coral hover:underline flex items-center gap-1 flex-shrink-0 whitespace-nowrap"
            >
              View all <ArrowRight className="w-3 h-3 flex-shrink-0" />
            </Link>
          </div>
          {needsFollowUp.length === 0 ? (
            <p className="text-gray-500 text-sm">All caught up!</p>
          ) : (
            <div className="space-y-3">
              {needsFollowUp.slice(0, 6).map((contact) => (
                <Link
                  key={contact.id}
                  href={`/admin/contacts/${contact.id}`}
                  className="flex items-start sm:items-center gap-3 p-3 rounded bg-[#0f1419] hover:bg-white/5 transition-colors min-w-0"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-medium text-orange-400 flex-shrink-0">
                    {contact.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">
                      {contact.name}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2 break-words">
                      {CONTACT_TYPE_LABELS[contact.type]} •{" "}
                      {contact.organization}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p
                      className="text-[11px] sm:text-xs text-red-400 flex items-center justify-end gap-0.5 sm:gap-1 whitespace-nowrap"
                      title={`${getDaysSince(contact.nextFollowUp)} days overdue`}
                    >
                      <Clock className="w-3 h-3 flex-shrink-0 hidden sm:block" />
                      <span>
                        {getDaysSince(contact.nextFollowUp)}d
                        <span className="hidden sm:inline"> overdue</span>
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-4 sm:p-6 min-w-0 overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-4 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold text-white truncate">
              Upcoming Tasks
            </h2>
            <Link
              href="/admin/tasks"
              className="text-xs text-coral hover:underline flex items-center gap-1 flex-shrink-0 whitespace-nowrap"
            >
              View all <ArrowRight className="w-3 h-3 flex-shrink-0" />
            </Link>
          </div>
          {[...overdueTasks, ...todayTasks, ...upcomingTasks].length === 0 ? (
            <p className="text-gray-500 text-sm">No pending tasks.</p>
          ) : (
            <div className="space-y-2">
              {[...overdueTasks, ...todayTasks, ...upcomingTasks]
                .slice(0, 5)
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start sm:items-center gap-2 sm:gap-3 p-3 rounded bg-[#0f1419] min-w-0"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 sm:mt-0 ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white break-words line-clamp-2 sm:truncate sm:line-clamp-none">
                        {task.title}
                      </p>
                    </div>
                    <span
                      className={`text-[11px] sm:text-xs flex-shrink-0 whitespace-nowrap text-right ${isOverdue(task.dueDate) ? "text-red-400" : "text-gray-500"}`}
                      title={task.dueDate}
                    >
                      {isOverdue(task.dueDate)
                        ? (
                          <>
                            {getDaysSince(task.dueDate)}d
                            <span className="hidden sm:inline"> overdue</span>
                          </>
                        )
                        : task.dueDate === new Date().toISOString().split("T")[0]
                          ? "Today"
                          : task.dueDate}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Recent Contacts */}
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-4 sm:p-6 min-w-0 overflow-hidden">
          <h2 className="text-base sm:text-lg font-semibold text-white mb-4">
            Recently Added
          </h2>
          <div className="space-y-3">
            {contacts
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .slice(0, 5)
              .map((contact) => (
                <Link
                  key={contact.id}
                  href={`/admin/contacts/${contact.id}`}
                  className="flex items-start sm:items-center gap-2 sm:gap-3 p-3 rounded bg-[#0f1419] hover:bg-white/5 transition-colors min-w-0"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
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
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">
                      {contact.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {CONTACT_TYPE_LABELS[contact.type]}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 max-w-[40%] sm:max-w-none justify-end">
                    {contact.verified && (
                      <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 hidden sm:block" />
                    )}
                    <span
                      className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded truncate max-w-full ${STAGE_COLORS[contact.stage]} text-white`}
                    >
                      {STAGE_LABELS[contact.stage]}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
  subtitle,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
}) {
  return (
    <div
      className={`bg-[#1a2332] rounded-lg border ${color} p-3 sm:p-4 min-w-0 overflow-hidden`}
    >
      <div className="flex items-center justify-between gap-1 mb-2 min-w-0">
        <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide leading-tight line-clamp-2">
          {label}
        </span>
        <span className="flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      {subtitle && (
        <p className="text-[10px] text-gray-600 mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}
