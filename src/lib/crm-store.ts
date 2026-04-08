export type ContactType =
  | "placement-agent"
  | "executive-director"
  | "community"
  | "family"
  | "attorney"
  | "other";

export type PipelineStage =
  | "new-lead"
  | "contacted"
  | "meeting-set"
  | "proposal"
  | "active-partner"
  | "inactive";

export type TaskPriority = "low" | "medium" | "high";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: ContactType;
  organization: string;
  title: string;
  notes: string;
  stage: PipelineStage;
  lastContacted: string | null;
  nextFollowUp: string | null;
  createdAt: string;
  score: number;
  starred: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  contactId: string | null;
  priority: TaskPriority;
  createdAt: string;
}

const CONTACTS_KEY = "stg_crm_contacts";
const TASKS_KEY = "stg_crm_tasks";

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// --- Contacts ---

export function getContacts(): Contact[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CONTACTS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getContactsByType(type: ContactType): Contact[] {
  return getContacts().filter((c) => c.type === type);
}

export function getContact(id: string): Contact | undefined {
  return getContacts().find((c) => c.id === id);
}

export function saveContact(contact: Omit<Contact, "id" | "createdAt">): Contact {
  const contacts = getContacts();
  const newContact: Contact = {
    ...contact,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  contacts.push(newContact);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  return newContact;
}

export function updateContact(id: string, updates: Partial<Contact>): Contact | null {
  const contacts = getContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  contacts[idx] = { ...contacts[idx], ...updates };
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  return contacts[idx];
}

export function deleteContact(id: string): void {
  const contacts = getContacts().filter((c) => c.id !== id);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

// --- Tasks ---

export function getTasks(): Task[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTask(task: Omit<Task, "id" | "createdAt">): Task {
  const tasks = getTasks();
  const newTask: Task = {
    ...task,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  return newTask;
}

export function updateTask(id: string, updates: Partial<Task>): Task | null {
  const tasks = getTasks();
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  tasks[idx] = { ...tasks[idx], ...updates };
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  return tasks[idx];
}

export function deleteTask(id: string): void {
  const tasks = getTasks().filter((t) => t.id !== id);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// --- Seed Data ---

export function seedIfEmpty(): void {
  if (typeof window === "undefined") return;
  const contacts = getContacts();
  if (contacts.length > 0) return;

  const today = new Date();
  const daysAgo = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() - n);
    return d.toISOString().split("T")[0];
  };
  const daysFromNow = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + n);
    return d.toISOString().split("T")[0];
  };

  const sampleContacts: Contact[] = [
    {
      id: generateId(),
      name: "Sarah Mitchell",
      email: "sarah@sunriseplacements.com",
      phone: "503-555-1201",
      type: "placement-agent",
      organization: "Sunrise Senior Placements",
      title: "Senior Placement Advisor",
      notes: "Covers Portland metro. Refers 2-3 families/month. Prefers email.",
      stage: "active-partner",
      lastContacted: daysAgo(5),
      nextFollowUp: daysFromNow(9),
      createdAt: daysAgo(90),
      score: 92,
      starred: true,
    },
    {
      id: generateId(),
      name: "David Park",
      email: "dpark@carenavigators.com",
      phone: "503-555-1202",
      type: "placement-agent",
      organization: "Care Navigators NW",
      title: "Owner / Lead Advisor",
      notes: "High-volume referral partner. Monthly check-in calls preferred.",
      stage: "active-partner",
      lastContacted: daysAgo(18),
      nextFollowUp: daysFromNow(3),
      createdAt: daysAgo(120),
      score: 88,
      starred: true,
    },
    {
      id: generateId(),
      name: "Jennifer Adams",
      email: "jadams@bridgeseniorcare.com",
      phone: "503-555-1203",
      type: "placement-agent",
      organization: "Bridge Senior Care",
      title: "Placement Specialist",
      notes: "New partnership. Sent intro packet. Follow up for first referral.",
      stage: "contacted",
      lastContacted: daysAgo(12),
      nextFollowUp: daysFromNow(2),
      createdAt: daysAgo(15),
      score: 65,
      starred: false,
    },
    {
      id: generateId(),
      name: "Robert Chen",
      email: "rchen@maplegroveAL.com",
      phone: "503-555-2301",
      type: "executive-director",
      organization: "Maple Grove Assisted Living",
      title: "Executive Director",
      notes: "32-unit AL in Lake Oswego. Open to accepting our referrals. Tours welcomed.",
      stage: "active-partner",
      lastContacted: daysAgo(8),
      nextFollowUp: daysFromNow(6),
      createdAt: daysAgo(60),
      score: 85,
      starred: true,
    },
    {
      id: generateId(),
      name: "Linda Tran",
      email: "ltran@evergreenmc.com",
      phone: "503-555-2302",
      type: "executive-director",
      organization: "Evergreen Memory Care",
      title: "Director of Operations",
      notes: "Specializes in memory care. Has current availability. Quick move-ins OK.",
      stage: "active-partner",
      lastContacted: daysAgo(22),
      nextFollowUp: daysFromNow(1),
      createdAt: daysAgo(45),
      score: 80,
      starred: false,
    },
    {
      id: generateId(),
      name: "Mark Johnson",
      email: "mjohnson@silverleafsenior.com",
      phone: "503-555-2303",
      type: "executive-director",
      organization: "Silver Leaf Senior Living",
      title: "Executive Director",
      notes: "Large campus, IL/AL/MC. Met at OSLA conference. Interested in partnership.",
      stage: "meeting-set",
      lastContacted: daysAgo(3),
      nextFollowUp: daysFromNow(4),
      createdAt: daysAgo(10),
      score: 72,
      starred: false,
    },
    {
      id: generateId(),
      name: "Sunrise of Portland",
      email: "admissions@sunriseportland.com",
      phone: "503-555-3401",
      type: "community",
      organization: "Sunrise Senior Living",
      title: "Admissions Coordinator",
      notes: "National chain. Portland location has 60 units. Accepts Medicaid waivers.",
      stage: "active-partner",
      lastContacted: daysAgo(14),
      nextFollowUp: daysFromNow(7),
      createdAt: daysAgo(100),
      score: 90,
      starred: true,
    },
    {
      id: generateId(),
      name: "Brookdale Beaverton",
      email: "community@brookdalebeaverton.com",
      phone: "503-555-3402",
      type: "community",
      organization: "Brookdale Senior Living",
      title: "Community Relations",
      notes: "IL/AL community. Good reputation. Waitlist for some units.",
      stage: "active-partner",
      lastContacted: daysAgo(30),
      nextFollowUp: daysAgo(2),
      createdAt: daysAgo(80),
      score: 78,
      starred: false,
    },
    {
      id: generateId(),
      name: "The Springs at Lake Oswego",
      email: "info@springslakeoswego.com",
      phone: "503-555-3403",
      type: "community",
      organization: "The Springs Living",
      title: "Sales Director",
      notes: "Upscale community. Higher price point. Great for families with budget.",
      stage: "contacted",
      lastContacted: daysAgo(7),
      nextFollowUp: daysFromNow(14),
      createdAt: daysAgo(20),
      score: 70,
      starred: false,
    },
    {
      id: generateId(),
      name: "Patricia Williams",
      email: "pwilliams@gmail.com",
      phone: "503-555-4501",
      type: "family",
      organization: "",
      title: "Daughter of client",
      notes: "Mom needs AL. Home in Beaverton, 3BR, needs minor work. Motivated.",
      stage: "new-lead",
      lastContacted: null,
      nextFollowUp: daysFromNow(0),
      createdAt: daysAgo(1),
      score: 85,
      starred: false,
    },
    {
      id: generateId(),
      name: "James Wilson",
      email: "jwilson@law-nw.com",
      phone: "503-555-5601",
      type: "attorney",
      organization: "Northwest Elder Law",
      title: "Elder Law Attorney",
      notes: "Handles Medicaid planning. Refers families with real estate needs.",
      stage: "active-partner",
      lastContacted: daysAgo(10),
      nextFollowUp: daysFromNow(11),
      createdAt: daysAgo(70),
      score: 82,
      starred: false,
    },
  ];

  localStorage.setItem(CONTACTS_KEY, JSON.stringify(sampleContacts));

  const sampleTasks: Task[] = [
    {
      id: generateId(),
      title: "Follow up with David Park",
      description: "Monthly check-in call. Ask about new referrals.",
      dueDate: daysFromNow(3),
      completed: false,
      contactId: sampleContacts[1].id,
      priority: "high",
      createdAt: daysAgo(1),
    },
    {
      id: generateId(),
      title: "Send partnership packet to Jennifer Adams",
      description: "Follow up on intro meeting. Include case studies.",
      dueDate: daysFromNow(2),
      completed: false,
      contactId: sampleContacts[2].id,
      priority: "medium",
      createdAt: daysAgo(2),
    },
    {
      id: generateId(),
      title: "Tour at Silver Leaf with Mark Johnson",
      description: "Walk the campus. Discuss referral process.",
      dueDate: daysFromNow(4),
      completed: false,
      contactId: sampleContacts[5].id,
      priority: "medium",
      createdAt: daysAgo(1),
    },
    {
      id: generateId(),
      title: "Call Patricia Williams — new family lead",
      description: "Mom needs AL placement. Home in Beaverton. Reach out ASAP.",
      dueDate: daysFromNow(0),
      completed: false,
      contactId: sampleContacts[9].id,
      priority: "high",
      createdAt: daysAgo(1),
    },
    {
      id: generateId(),
      title: "Re-engage Brookdale Beaverton",
      description: "Last contact was 30 days ago. Check on availability and pricing updates.",
      dueDate: daysAgo(2),
      completed: false,
      contactId: sampleContacts[7].id,
      priority: "high",
      createdAt: daysAgo(5),
    },
  ];

  localStorage.setItem(TASKS_KEY, JSON.stringify(sampleTasks));
}

// --- Helpers ---

export const CONTACT_TYPE_LABELS: Record<ContactType, string> = {
  "placement-agent": "Placement Agent",
  "executive-director": "Executive Director",
  community: "Community",
  family: "Family",
  attorney: "Attorney",
  other: "Other",
};

export const STAGE_LABELS: Record<PipelineStage, string> = {
  "new-lead": "New Lead",
  contacted: "Contacted",
  "meeting-set": "Meeting Set",
  proposal: "Proposal",
  "active-partner": "Active Partner",
  inactive: "Inactive",
};

export const STAGE_COLORS: Record<PipelineStage, string> = {
  "new-lead": "bg-blue-500",
  contacted: "bg-yellow-500",
  "meeting-set": "bg-purple-500",
  proposal: "bg-orange-500",
  "active-partner": "bg-green-500",
  inactive: "bg-gray-500",
};

export function getDaysSince(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function isOverdue(dateStr: string | null): boolean {
  if (!dateStr) return false;
  return new Date(dateStr) < new Date(new Date().toISOString().split("T")[0]);
}
