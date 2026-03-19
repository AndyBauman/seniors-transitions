"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "All Services", href: "/services" },
      { name: "Placement Services", href: "/services/placement" },
      { name: "Real Estate & Downsizing", href: "/services/real-estate" },
      { name: "Transition Coordination", href: "/services/transition" },
    ],
  },
  {
    name: "For Families",
    href: "/for-families",
    children: [
      { name: "Family Support", href: "/for-families" },
      { name: "Help My Parent Move", href: "/help-my-parent-move" },
      { name: "Choosing Senior Living", href: "/choosing-senior-living" },
      { name: "Resources & Guides", href: "/resources" },
      { name: "Free Consultation", href: "/free-family-consultation" },
    ],
  },
  {
    name: "For Professionals",
    href: "/for-professionals",
    children: [
      { name: "Overview", href: "/for-professionals" },
      { name: "Placement Agents", href: "/partners/placement-agents" },
      { name: "Senior Living Communities", href: "/partners/senior-living-communities" },
      { name: "Real Estate Agents", href: "/partners/real-estate-agents" },
      { name: "Elder Law Attorneys", href: "/partners/elder-law-attorneys" },
      { name: "Partner With Us", href: "/partner-with-us" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <span className="font-serif text-xl md:text-2xl font-medium text-coral italic">
            Senior Transitions Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm text-navy hover:text-coral transition-colors flex items-center gap-1"
                >
                  {item.name}
                  <ChevronDown className="h-3 w-3" />
                </Link>
                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white border border-border shadow-lg py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-navy hover:text-coral hover:bg-muted transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.name}
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
                className="text-sm text-navy hover:text-coral transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center">
          <Link href="/contact" className="btn-primary">
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full py-2 text-base text-navy hover:text-coral"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === item.name && (
                    <div className="pl-4 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-coral"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }}
                        >
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
                  className="block py-2 text-base text-navy hover:text-coral"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
