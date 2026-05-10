import Link from "next/link";
import { Waves, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const services = [
  "Weekly Pool Cleaning",
  "Chemical Balancing",
  "Filter Cleaning",
  "Green Pool Recovery",
  "Equipment Inspection",
  "Pool Vacuuming",
];

const pages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white">
      {/* Wave divider */}
      <div className="relative overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 51.8C96 43.7 192 27.3 288 21.7C384 16 480 21.3 576 30C672 38.7 768 50.7 864 49.3C960 48 1056 33.3 1152 25.5C1248 17.7 1344 17.3 1392 17.2L1440 17V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-xl flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block">Martin Pool</span>
                <span className="text-[#00b4d8] text-xs font-medium leading-tight block tracking-widest uppercase">Service</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional pool cleaning and maintenance services. We keep your pool sparkling clean, chemically balanced, and ready for enjoyment year-round.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/martinpoolservice_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#00b4d8] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-[#00b4d8] text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/60 hover:text-[#00b4d8] text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15555555555" className="flex items-center gap-3 text-white/60 hover:text-[#00b4d8] text-sm transition-colors group">
                  <div className="w-8 h-8 bg-white/10 group-hover:bg-[#00b4d8]/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  (555) 555-5555
                </a>
              </li>
              <li>
                <a href="mailto:info@martinpoolservice.com" className="flex items-center gap-3 text-white/60 hover:text-[#00b4d8] text-sm transition-colors group">
                  <div className="w-8 h-8 bg-white/10 group-hover:bg-[#00b4d8]/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  info@martinpoolservice.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  Serving the Local Area
                </div>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center w-full bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#00b4d8]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Martin Pool Service. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Professional Pool Cleaning & Maintenance
          </p>
        </div>
      </div>
    </footer>
  );
}
