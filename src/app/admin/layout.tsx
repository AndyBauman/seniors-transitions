"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Kanban,
  ChevronLeft,
  ChevronRight,
  Globe,
  Building,
  UserCheck,
  Briefcase,
  Scale,
} from "lucide-react";
import { seedIfEmpty } from "@/lib/crm-store";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Pipeline", href: "/admin/pipeline", icon: Kanban },
  {
    name: "Contacts",
    href: "/admin/contacts",
    icon: Users,
    children: [
      { name: "All Contacts", href: "/admin/contacts", icon: Users },
      { name: "Placement Agents", href: "/admin/contacts?type=placement-agent", icon: UserCheck },
      { name: "Executive Directors", href: "/admin/contacts?type=executive-director", icon: Briefcase },
      { name: "Communities", href: "/admin/contacts?type=community", icon: Building },
      { name: "Attorneys", href: "/admin/contacts?type=attorney", icon: Scale },
    ],
  },
  { name: "Tasks", href: "/admin/tasks", icon: ClipboardList },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(true);

  useEffect(() => {
    seedIfEmpty();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1419] text-gray-200 flex">
      {/* Sidebar */}
      <aside
        className={`${collapsed ? "w-16" : "w-60"} bg-[#1a2332] border-r border-gray-700/50 flex flex-col transition-all duration-200 flex-shrink-0`}
      >
        <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
          {!collapsed && (
            <Link href="/admin" className="flex items-center gap-2">
              <span className="text-coral font-bold text-sm">STG</span>
              <span className="text-gray-400 text-xs">CRM</span>
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-gray-300 p-1"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 py-4 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  onClick={() => setContactsOpen(!contactsOpen)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    pathname.startsWith("/admin/contacts")
                      ? "bg-coral/10 text-coral"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </button>
                {contactsOpen && !collapsed && (
                  <div className="ml-4 border-l border-gray-700/50 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`flex items-center gap-2 pl-4 pr-4 py-2 text-xs transition-colors ${
                          (pathname === "/admin/contacts" && child.href.includes("?")
                            ? false
                            : pathname + (typeof window !== 'undefined' ? window.location.search : '') === child.href) ||
                          (child.href === "/admin/contacts" && pathname === "/admin/contacts" && !child.href.includes("?"))
                            ? "text-coral"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        <child.icon className="w-3 h-3" />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-coral/10 text-coral"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          )}
        </nav>

        <div className="p-4 border-t border-gray-700/50">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            <Globe className="w-3 h-3" />
            {!collapsed && "View Website"}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
