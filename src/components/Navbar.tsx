"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Waves } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a2540]/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00b4d8] to-[#0a8fad] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block">
                Martin Pool
              </span>
              <span className="text-[#00b4d8] text-xs font-medium leading-tight block tracking-widest uppercase">
                Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+15555555555"
              className="hidden sm:flex items-center gap-2 text-[#00b4d8] hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-0.5"
            >
              Free Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0a2540]/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-white/80 hover:text-white px-4 py-3 rounded-xl hover:bg-white/10 transition-all font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+15555555555"
                  className="flex items-center justify-center gap-2 text-[#00b4d8] border border-[#00b4d8]/30 py-3 rounded-full font-semibold hover:bg-[#00b4d8]/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-gradient-to-r from-[#00b4d8] to-[#0a8fad] text-white py-3 rounded-full font-semibold"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
