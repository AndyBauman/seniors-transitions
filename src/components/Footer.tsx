import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
];

const partnerLinks = [
  { name: "For Families", href: "/for-families" },
  { name: "For Placement Agents", href: "/for-placement-agents" },
  { name: "For Communities", href: "/for-communities" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-medium italic text-coral mb-4">
              Senior Transitions Group
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Expert senior transition specialists guiding families with
              compassion and expertise.
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

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:8007842273"
                  className="text-white/70 hover:text-coral transition-colors"
                >
                  (800) 784-2273
                </a>
              </li>
              <li className="text-white/70">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
              </li>
              <li>
                <a
                  href="mailto:info@seniors-transitions.com"
                  className="text-white/70 hover:text-coral transition-colors"
                >
                  info@seniors-transitions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
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
