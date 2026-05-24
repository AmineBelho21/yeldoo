"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Partners", href: "#partners" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-yeldoo-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-yeldoo-navy rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-yeldoo-gold fill-yeldoo-gold" />
            </div>
            <span
              className={`font-display text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-yeldoo-navy" : "text-white"
              }`}
            >
              yeldoo
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-yeldoo-gold ${
                  scrolled ? "text-yeldoo-navy/70" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className={`text-sm font-medium transition-colors hover:text-yeldoo-gold ${
                scrolled ? "text-yeldoo-navy" : "text-white"
              }`}
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-yeldoo-gold text-yeldoo-navy text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-yeldoo-gold-dark transition-all hover:scale-105 shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className={`lg:hidden p-1 rounded-md transition-colors ${
              scrolled ? "text-yeldoo-navy" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white/98 backdrop-blur-xl border-t border-yeldoo-border lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-yeldoo-navy/70 text-base font-medium hover:text-yeldoo-navy transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-yeldoo-border flex flex-col gap-3">
                <a
                  href="#"
                  className="text-yeldoo-navy text-base font-medium hover:text-yeldoo-gold transition-colors"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="bg-yeldoo-gold text-yeldoo-navy text-base font-semibold px-5 py-3 rounded-full text-center hover:bg-yeldoo-gold-dark transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
