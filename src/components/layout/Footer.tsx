import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400">Theoraux</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Intelligent Automation. Streamline operation &amp; cut task to
              unlock efficiency and drive growth.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/112286976"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582763437544"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {["About", "Services", "Portfolio", "Pricing", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Custom Software",
                "UI/UX Design",
                "Automation",
                "E-Commerce",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-sm text-gray-400">
                  bunquintheodore@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-sm text-gray-400">
                  (+63) 962 993 5762
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary-400" />
                <span className="text-sm text-gray-400">Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Theoraux. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-400"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
