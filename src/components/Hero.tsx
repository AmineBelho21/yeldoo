"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Star,
  TrendingDown,
  Clock,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const VENUES_STATIC = [
  {
    name: "Hyatt Regency Algiers",
    originalPrice: "24,000",
    newPrice: "14,000",
    slotsLeft: 2,
    gradientFrom: "#17155A",
    gradientTo: "#2D2A8A",
    claimedPercent: 80,
  },
  {
    name: "Restaurant La Médina",
    originalPrice: "8,500",
    newPrice: "4,900",
    slotsLeft: 4,
    gradientFrom: "#7C2D12",
    gradientTo: "#B91C1C",
    claimedPercent: 60,
  },
  {
    name: "Sahara Desert Experience",
    originalPrice: "45,000",
    newPrice: "27,000",
    slotsLeft: 1,
    gradientFrom: "#92400E",
    gradientTo: "#D97706",
    claimedPercent: 90,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VENUES_STATIC.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const venue = VENUES_STATIC[activeIndex];
  const vt = t.hero.venues[activeIndex];

  return (
    <section className="relative bg-yeldoo-navy min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            width: "900px",
            height: "600px",
            background: "radial-gradient(ellipse, #fdcf31 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm font-medium text-white/90">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-[5.25rem] font-bold text-white leading-[1.04] tracking-tight"
            >
              {t.hero.headlinePre}{" "}
              <span className="text-yeldoo-gold italic">{t.hero.headlineGold}</span>{" "}
              {t.hero.headlinePost}
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={itemVariants}
              className="text-white/65 text-lg lg:text-xl leading-[1.75] max-w-[30rem]"
            >
              {t.hero.subCopy}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-yeldoo-gold text-yeldoo-navy font-semibold text-base px-7 py-4 rounded-full hover:bg-yeldoo-gold-dark transition-all hover:scale-105 shadow-lg"
              >
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-medium text-base px-7 py-4 rounded-full border border-white/20 hover:bg-white/15 transition-all"
              >
                {t.hero.cta2}
                <ChevronRight className="w-4 h-4 text-white/60" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10"
            >
              <div className="flex -space-x-2.5">
                {["#b45309", "#7C3AED", "#0891b2", "#059669", "#dc2626"].map((color, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-yeldoo-navy"
                    style={{ background: `linear-gradient(135deg, ${color}99, ${color})` }}
                  />
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yeldoo-gold fill-yeldoo-gold" />
                  ))}
                </div>
                <p className="text-white/50 text-sm">{t.hero.socialProof}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Animated Venue Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Outer decorative border ring */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/20">
              <div className="rounded-2xl overflow-hidden bg-white shadow-2xl">
                {/* Venue image area */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={venue.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-52 flex flex-col justify-between p-5"
                    style={{
                      background: `linear-gradient(135deg, ${venue.gradientFrom}, ${venue.gradientTo})`,
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div className="bg-black/35 backdrop-blur-sm rounded-xl px-3.5 py-2">
                        <p className="text-white/70 text-xs font-medium">{vt.category}</p>
                        <p className="text-white font-semibold text-sm leading-tight">
                          {venue.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-300 text-xs font-semibold tracking-wide">
                          YIELD ACTIVE
                        </span>
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div>
                      <p className="text-white/50 text-xs font-medium">{vt.location}</p>
                      <p className="text-white/80 text-sm">{vt.type}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Price panel */}
                <div className="p-5 space-y-4 bg-white">
                  <div className="flex items-end justify-between">
                    <div className="space-y-1">
                      <p className="text-yeldoo-muted text-xs font-semibold uppercase tracking-widest">
                        {t.hero.ui.liveYieldPrice}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={venue.newPrice}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="font-display text-4xl font-bold text-yeldoo-navy"
                          >
                            {venue.newPrice}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-yeldoo-navy font-semibold text-lg mb-0.5">DA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-yeldoo-muted line-through">
                          {venue.originalPrice} DA
                        </span>
                        <span className="text-xs font-bold text-white bg-emerald-500 px-2 py-0.5 rounded-full">
                          {vt.discount}
                        </span>
                      </div>
                    </div>

                    <div className="bg-yeldoo-gold/10 rounded-xl p-3 text-center border border-yeldoo-gold/20">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={venue.slotsLeft}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="font-display text-2xl font-bold text-yeldoo-navy"
                        >
                          {venue.slotsLeft}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-yeldoo-muted text-xs font-medium">{t.hero.ui.slotsLeft}</p>
                    </div>
                  </div>

                  {/* Fill bar */}
                  <div>
                    <div className="flex justify-between text-xs text-yeldoo-muted mb-1.5 font-medium">
                      <span>{t.hero.ui.fillingFast}</span>
                      <span>{venue.claimedPercent}% {t.hero.ui.claimed}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        key={venue.name}
                        initial={{ width: 0 }}
                        animate={{ width: `${venue.claimedPercent}%` }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-yeldoo-gold rounded-full"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-yeldoo-navy text-white font-semibold py-3.5 rounded-xl hover:bg-yeldoo-navy-light transition-colors flex items-center justify-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-yeldoo-gold fill-yeldoo-gold" />
                    {t.hero.ui.bookNow}
                  </button>
                </div>
              </div>
            </div>

            {/* Floating chip — left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-14 top-1/3 bg-white rounded-2xl shadow-xl border border-yeldoo-border p-4 hidden xl:block"
            >
              <p className="text-yeldoo-muted text-xs font-medium">{t.hero.ui.offPeakSavings}</p>
              <p className="font-display text-xl font-bold text-yeldoo-navy mt-0.5">DA 10,000</p>
              <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-1">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>{t.hero.ui.vsPeak}</span>
              </div>
            </motion.div>

            {/* Floating chip — right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-10 bottom-24 bg-yeldoo-navy rounded-2xl shadow-xl border border-white/10 p-4 hidden xl:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-yeldoo-gold/15 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-yeldoo-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">2h 14m</p>
                  <p className="text-white/45 text-xs">{t.hero.ui.leftAtPrice}</p>
                </div>
              </div>
            </motion.div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {VENUES_STATIC.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-2 bg-yeldoo-gold"
                      : "w-2 h-2 bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`View venue ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
