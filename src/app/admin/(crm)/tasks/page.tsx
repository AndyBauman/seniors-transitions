"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Plus,
  AlertTriangle,
  Clock,
  CalendarDays,
  CheckCircle2,
  Circle,
  X,
  Trash2,
} from "lucide-react";
import {
  getTasks,
  getContacts,
  saveTask,
  updateTask,
  deleteTask,
  Task,
  TaskPriority,
  Contact,
  isOverdue,
  getDaysSince,
} from "@/lib/crm-store";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const refresh = useCallback(() => {
    setTasks(getTasks());
    setContacts(getContacts());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const today = new Date().toISOString().split("T")[0];

  const overdueTasks = tasks.filter(
    (t) => !t.completed && isOverdue(t.dueDate) && t.dueDate !== today
  );
  const todayTasks = tasks.filter(
    (t) => !t.completed && t.dueDate === today
  );
  const upcomingTasks = tasks
    .filter((t) => !t.completed && !isOverdue(t.dueDate) && t.dueDate !== today)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const completedTasks = tasks.filter((t) => t.completed);

  const toggleComplete = (id: string, completed: boolean) => {
    updateTask(id, { completed });
    refresh();
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
    refresh();
  };

  const getContactName = (id: string | null) => {
    if (!id) return null;
    return contacts.find((c) => c.id === id)?.name || null;
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Tasks</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          <Plus className="w-4 h-4" /> New Task
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column: Overdue & Today */}
        <div className="space-y-6">
          <TaskSection
            title="Overdue"
            count={overdueTasks.length}
            icon={<AlertTriangle className="w-4 h-4" />}
            color="text-red-400"
            tasks={overdueTasks}
            contacts={contacts}
            onToggle={toggleComplete}
            onDelete={handleDelete}
            getContactName={getContactName}
            emptyMessage="No overdue tasks"
          />

          <TaskSection
            title="Today"
            count={todayTasks.length}
            icon={<Clock className="w-4 h-4" />}
            color="text-yellow-400"
            tasks={todayTasks}
            contacts={contacts}
            onToggle={toggleComplete}
            onDelete={handleDelete}
            getContactName={getContactName}
            emptyMessage="No tasks for today"
          />

          <TaskSection
            title="Upcoming"
            count={upcomingTasks.length}
            icon={<CalendarDays className="w-4 h-4" />}
            color="text-blue-400"
            tasks={upcomingTasks}
            contacts={contacts}
            onToggle={toggleComplete}
            onDelete={handleDelete}
            getContactName={getContactName}
            emptyMessage="No upcoming tasks"
          />
        </div>

        {/* Right Column: Completed */}
        <div>
          <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <h2 className="text-lg font-semibold text-white">Completed</h2>
              <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded">
                {completedTasks.length}
              </span>
            </div>
            {completedTasks.length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-10 h-10 text-gray-700 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  All caught up! No pending tasks.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {completedTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded bg-[#0f1419]/60"
                  >
                    <button
                      onClick={() => toggleComplete(task.id, false)}
                      className="text-green-400 hover:text-green-300 flex-shrink-0"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 line-through truncate">
                        {task.title}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-gray-700 hover:text-red-400 transition-colors flex-shrink-0"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showAddModal && (
        <AddTaskModal
          contacts={contacts}
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

function TaskSection({
  title,
  count,
  icon,
  color,
  tasks,
  contacts,
  onToggle,
  onDelete,
  getContactName,
  emptyMessage,
}: {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
  tasks: Task[];
  contacts: Contact[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  getContactName: (id: string | null) => string | null;
  emptyMessage: string;
}) {
  return (
    <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className={color}>{icon}</span>
        <h2 className={`text-lg font-semibold ${color}`}>{title}</h2>
        <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded">
          {count}
        </span>
      </div>
      {tasks.length === 0 ? (
        <p className="text-sm text-gray-600">{emptyMessage}</p>
      ) : (
        <div className="space-y-2">
          {tasks.map((task) => {
            const contactName = getContactName(task.contactId);
            return (
              <div
                key={task.id}
                className="flex items-start gap-3 p-3 rounded bg-[#0f1419] hover:bg-white/5 transition-colors"
              >
                <button
                  onClick={() => onToggle(task.id, true)}
                  className="text-gray-600 hover:text-green-400 mt-0.5 flex-shrink-0"
                >
                  <Circle className="w-4 h-4" />
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white">{task.title}</p>
                  {task.description && (
                    <p className="text-xs text-gray-500 mt-0.5 truncate">
                      {task.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mt-1">
                    {contactName && (
                      <span className="text-xs text-gray-500">
                        {contactName}
                      </span>
                    )}
                    <span className="text-xs text-gray-600">
                      {task.dueDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-gray-600"
                    }`}
                  />
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-gray-700 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AddTaskModal({
  contacts,
  onClose,
  onSave,
}: {
  contacts: Contact[];
  onClose: () => void;
  onSave: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: new Date().toISOString().split("T")[0],
    contactId: "" as string | null,
    priority: "medium" as TaskPriority,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveTask({
      ...form,
      contactId: form.contactId || null,
      completed: false,
    });
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a2332] rounded-lg border border-gray-700/50 w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <h3 className="text-lg font-semibold text-white">New Task</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Title *</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Description</label>
            <textarea
              rows={2}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Due Date</label>
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Priority</label>
              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value as TaskPriority })
                }
                className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Linked Contact
            </label>
            <select
              value={form.contactId || ""}
              onChange={(e) =>
                setForm({ ...form, contactId: e.target.value || null })
              }
              className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700/50 rounded text-sm text-white focus:outline-none focus:border-coral/50"
            >
              <option value="">None</option>
              {contacts.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.organization}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm font-medium py-2.5 rounded transition-colors"
            >
              Add Task
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
