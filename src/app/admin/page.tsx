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
} from "lucide-react";
import {
  getContacts,
  getTasks,
  Contact,
  Task,
  CONTACT_TYPE_LABELS,
  STAGE_LABELS,
  STAGE_COLORS,
  getDaysSince,
  isOverdue,
} from "@/lib/crm-store";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setContacts(getContacts());
    setTasks(getTasks());
  }, []);

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

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
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
          label="Needs Follow-Up"
          value={needsFollowUp.length}
          icon={<Phone className="w-5 h-5 text-orange-400" />}
          color="border-orange-500/30"
        />
        <StatCard
          label="Overdue Tasks"
          value={overdueTasks.length}
          icon={<AlertTriangle className="w-5 h-5 text-red-400" />}
          color="border-red-500/30"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pipeline Overview */}
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Pipeline by Stage
          </h2>
          <div className="space-y-3">
            {(Object.keys(STAGE_LABELS) as Array<keyof typeof STAGE_LABELS>).map(
              (stage) => (
                <div key={stage} className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${STAGE_COLORS[stage]}`}
                  />
                  <span className="text-sm text-gray-400 flex-1">
                    {STAGE_LABELS[stage]}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {stageCount[stage] || 0}
                  </span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
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
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">
              Needs Follow-Up
            </h2>
            <Link
              href="/admin/contacts"
              className="text-xs text-coral hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-3 h-3" />
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
                  className="flex items-center gap-3 p-3 rounded bg-[#0f1419] hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-medium text-orange-400">
                    {contact.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">
                      {contact.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {CONTACT_TYPE_LABELS[contact.type]} •{" "}
                      {contact.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {getDaysSince(contact.nextFollowUp)}d overdue
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">
              Upcoming Tasks
            </h2>
            <Link
              href="/admin/tasks"
              className="text-xs text-coral hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-3 h-3" />
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
                    className="flex items-center gap-3 p-3 rounded bg-[#0f1419]"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">
                        {task.title}
                      </p>
                    </div>
                    <span
                      className={`text-xs ${isOverdue(task.dueDate) ? "text-red-400" : "text-gray-500"}`}
                    >
                      {isOverdue(task.dueDate)
                        ? `${getDaysSince(task.dueDate)}d overdue`
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
        <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
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
                  className="flex items-center gap-3 p-3 rounded bg-[#0f1419] hover:bg-white/5 transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
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
                    <p className="text-xs text-gray-500">
                      {CONTACT_TYPE_LABELS[contact.type]}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${STAGE_COLORS[contact.stage]} text-white`}
                  >
                    {STAGE_LABELS[contact.stage]}
                  </span>
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
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div
      className={`bg-[#1a2332] rounded-lg border ${color} p-4`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {label}
        </span>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
