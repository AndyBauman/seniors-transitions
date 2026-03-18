"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "For Families", href: "/for-families" },
  { name: "For Placement Agents", href: "/for-placement-agents" },
  { name: "For Communities", href: "/for-communities" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-navy hover:text-coral transition-colors"
            >
              {item.name}
            </Link>
          ))}
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
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base text-navy hover:text-coral"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
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
