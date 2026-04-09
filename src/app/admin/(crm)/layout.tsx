"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  LogOut,
  Menu,
  X,
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

export default function AdminCrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    seedIfEmpty();
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  const handleLogout = async () => {
    setMobileNavOpen(false);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const desktopSidebarWidth = collapsed ? "lg:w-16" : "lg:w-60";

  return (
    <div className="min-h-screen bg-[#0f1419] text-gray-200 flex flex-col lg:flex-row max-w-[100vw] overflow-x-hidden">
      {/* Mobile top bar */}
      <header className="flex lg:hidden items-center justify-between gap-3 px-3 py-3 bg-[#1a2332] border-b border-gray-700/50 flex-shrink-0 z-30">
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          className="p-2 rounded-md text-gray-300 hover:bg-white/10 -ml-1"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/admin" className="flex items-center gap-2 min-w-0">
          <span className="text-coral font-bold text-sm truncate">STG</span>
          <span className="text-gray-400 text-xs truncate">CRM</span>
        </Link>
        <div className="w-10 flex-shrink-0" aria-hidden />
      </header>

      {/* Mobile overlay */}
      {mobileNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 flex flex-col
          w-60 max-w-[min(100vw-3rem,16rem)] ${desktopSidebarWidth} bg-[#1a2332] border-r border-gray-700/50
          transition-transform duration-200 ease-out lg:transition-[width] lg:duration-200
          ${mobileNavOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
          lg:translate-x-0
          flex-shrink-0
        `}
      >
        <div className="p-4 border-b border-gray-700/50 flex items-center justify-between gap-2">
          <Link
            href="/admin"
            className={`flex items-center gap-2 min-w-0 ${collapsed ? "lg:hidden" : ""}`}
            onClick={() => setMobileNavOpen(false)}
          >
            <span className="text-coral font-bold text-sm">STG</span>
            <span className="text-gray-400 text-xs">CRM</span>
          </Link>
          <div className="flex items-center gap-1 ml-auto">
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:block text-gray-500 hover:text-gray-300 p-1"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileNavOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-300 p-1"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 py-4 space-y-1 overflow-y-auto overscroll-contain">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => setContactsOpen(!contactsOpen)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    pathname.startsWith("/admin/contacts")
                      ? "bg-coral/10 text-coral"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span className={`text-left truncate ${collapsed ? "lg:hidden" : ""}`}>{item.name}</span>
                </button>
                {contactsOpen && (
                  <div className={collapsed ? "lg:hidden" : ""}>
                  <div className="ml-4 border-l border-gray-700/50 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setMobileNavOpen(false)}
                        className={`flex items-center gap-2 pl-4 pr-4 py-2 text-xs transition-colors ${
                          (pathname === "/admin/contacts" && child.href.includes("?")
                            ? false
                            : pathname + (typeof window !== "undefined" ? window.location.search : "") === child.href) ||
                          (child.href === "/admin/contacts" && pathname === "/admin/contacts" && !child.href.includes("?"))
                            ? "text-coral"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        <child.icon className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-coral/10 text-coral"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className={`truncate ${collapsed ? "lg:hidden" : ""}`}>{item.name}</span>
              </Link>
            )
          )}
        </nav>

        <div className="p-4 border-t border-gray-700/50 space-y-2 flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
            onClick={() => setMobileNavOpen(false)}
          >
            <Globe className="w-3 h-3 flex-shrink-0" />
            <span className={collapsed ? "lg:hidden" : ""}>View Website</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-400 transition-colors w-full text-left"
          >
            <LogOut className="w-3 h-3 flex-shrink-0" />
            <span className={collapsed ? "lg:hidden" : ""}>Sign out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0 w-full max-w-full overflow-x-hidden lg:overflow-y-auto lg:max-h-screen">
        {children}
      </main>
    </div>
  );
}
