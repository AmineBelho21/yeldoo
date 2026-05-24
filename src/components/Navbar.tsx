"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoImg from "@/public/logo.webp";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { type Locale } from "@/src/lib/translations";

const LOCALES: { id: Locale; label: string; native: string }[] = [
  { id: "fr", label: "Français", native: "FR" },
  { id: "en", label: "English", native: "EN" },
  { id: "ar", label: "عربي", native: "عر" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.platform, href: "#platform" },
    { label: t.nav.partners, href: "#partners" },
    { label: t.nav.pricing, href: "#" },
    { label: t.nav.about, href: "#" },
  ];

  const currentLang = LOCALES.find((l) => l.id === locale)!;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
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
          <a href="#" className="flex items-center group">
            <Image
              src={logoImg}
              alt="Yeldoo"
              height={40}
              className="h-10 w-auto rounded-md group-hover:scale-105 transition-transform"
            />
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

          {/* Desktop right: language switcher + CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-full border transition-all ${
                  scrolled ? "border-yeldoo-border text-yeldoo-navy hover:border-yeldoo-navy/40" : "border-white/20 text-white hover:border-white/40"
                }`}
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currentLang.native}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full mt-2 end-0 bg-white rounded-xl shadow-xl border border-yeldoo-border min-w-[140px] overflow-hidden z-50"
                  >
                    {LOCALES.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => { setLocale(lang.id); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-yeldoo-cream ${
                          locale === lang.id ? "text-yeldoo-navy bg-yeldoo-gold/10 font-semibold" : "text-yeldoo-muted"
                        }`}
                      >
                        <span className="font-semibold w-5 text-center text-xs">{lang.native}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="#"
              className={`text-sm font-medium transition-colors hover:text-yeldoo-gold ${
                scrolled ? "text-yeldoo-navy" : "text-white"
              }`}
            >
              {t.nav.login}
            </a>
            <a
              href="#"
              className="bg-yeldoo-gold text-yeldoo-navy text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-yeldoo-gold-dark transition-all hover:scale-105 shadow-sm"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: lang pill + burger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full border transition-all ${
                scrolled ? "border-yeldoo-border text-yeldoo-navy" : "border-white/25 text-white"
              }`}
            >
              <Globe className="w-3 h-3" />{currentLang.native}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute top-16 end-6 bg-white rounded-xl shadow-xl border border-yeldoo-border overflow-hidden z-50"
                >
                  {LOCALES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => { setLocale(lang.id); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-yeldoo-cream ${
                        locale === lang.id ? "text-yeldoo-navy bg-yeldoo-gold/10 font-semibold" : "text-yeldoo-muted"
                      }`}
                    >
                      <span className="font-semibold w-5 text-center text-xs">{lang.native}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className={`p-1 rounded-md transition-colors ${
                scrolled ? "text-yeldoo-navy" : "text-white"
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
                <a href="#" className="text-yeldoo-navy text-base font-medium hover:text-yeldoo-gold transition-colors">
                  {t.nav.login}
                </a>
                <a href="#" className="bg-yeldoo-gold text-yeldoo-navy text-base font-semibold px-5 py-3 rounded-full text-center hover:bg-yeldoo-gold-dark transition-colors">
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
