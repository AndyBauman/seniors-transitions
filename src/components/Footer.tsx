import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Choosing Senior Living", href: "/choosing-senior-living" },
];

const familyLinks = [
  { name: "For Families", href: "/for-families" },
  { name: "Help My Parent Move", href: "/help-my-parent-move" },
  { name: "Free Consultation", href: "/free-consultation" },
  { name: "Downsizing Checklist", href: "/resources/downsizing-checklist" },
];

const partnerLinks = [
  { name: "For Professionals", href: "/for-professionals" },
  { name: "Placement Agents", href: "/partners/placement-agents" },
  { name: "Senior Living Communities", href: "/partners/senior-living-communities" },
  { name: "Real Estate Agents", href: "/partners/real-estate-agents" },
  { name: "Elder Law Attorneys", href: "/partners/elder-law-attorneys" },
  { name: "Partner With Us", href: "/partner-with-us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Stats Bar */}
      <div className="border-b border-white/20">
        <div className="container-custom py-4 px-4 md:px-8">
          <p className="text-center text-sm text-white/80">
            Serving families since 2015 • 450+ successful transitions • SRES &
            NASMM certified
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-medium italic text-coral mb-4">
              Senior Transitions Group
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Expert senior transition specialists guiding families with
              compassion and expertise. We handle placement, real estate,
              downsizing, and move management so you can focus on what matters
              most.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-coral transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-coral transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-coral transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-coral transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Families */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              For Families
            </h4>
            <ul className="space-y-2">
              {familyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-coral transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              For Partners
            </h4>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-coral transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/70">
              <a href="tel:5037558555" className="hover:text-coral transition-colors">
                (503) 755-8555
              </a>
              <a href="mailto:info@seniors-transitions.com" className="hover:text-coral transition-colors">
                info@seniors-transitions.com
              </a>
              <span>Mon-Fri: 9am-6pm • Sat: 10am-4pm</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Senior Transitions Group. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-coral text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-coral text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
