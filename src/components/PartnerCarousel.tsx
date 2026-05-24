"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, TrendingUp } from "lucide-react";

interface PartnerMetric {
  label: string;
  value: string;
}

interface Partner {
  id: number;
  name: string;
  category: string;
  location: string;
  tagline: string;
  metrics: PartnerMetric[];
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  featured: boolean;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Hôtel El Djazaïr",
    category: "Luxury Hotel",
    location: "Algiers, Algeria",
    tagline: "Tripled off-peak revenue with smart yield rooms",
    metrics: [
      { label: "Occupancy increase", value: "+42%" },
      { label: "Wasted room nights", value: "–0" },
    ],
    gradientFrom: "#0f0c29",
    gradientTo: "#17155A",
    accentColor: "#fdcf31",
    featured: true,
  },
  {
    id: 2,
    name: "Brasserie des Facultés",
    category: "Fine Dining",
    location: "Oran, Algeria",
    tagline: "Lunch covers doubled in 60 days on Yeldoo",
    metrics: [
      { label: "Weekday covers", value: "+2.1×" },
      { label: "Reduction in no-shows", value: "–67%" },
    ],
    gradientFrom: "#3b0764",
    gradientTo: "#6b21a8",
    accentColor: "#c084fc",
    featured: false,
  },
  {
    id: 3,
    name: "Spa Zéphyr by Atlas",
    category: "Wellness & Spa",
    location: "Constantine, Algeria",
    tagline: "Yeldoo filled every quiet Tuesday slot in a week",
    metrics: [
      { label: "Mid-week utilization", value: "97%" },
      { label: "Revenue per slot", value: "+33%" },
    ],
    gradientFrom: "#064e3b",
    gradientTo: "#065f46",
    accentColor: "#6ee7b7",
    featured: false,
  },
  {
    id: 4,
    name: "Excursion Sahara Premium",
    category: "Luxury Experience",
    location: "Tamanrasset, Algeria",
    tagline: "Every tour slot now departs full — even off-season",
    metrics: [
      { label: "Slot utilization", value: "94%" },
      { label: "Seasonal revenue lift", value: "+58%" },
    ],
    gradientFrom: "#78350f",
    gradientTo: "#92400e",
    accentColor: "#fcd34d",
    featured: false,
  },
  {
    id: 5,
    name: "Riad El Andalous",
    category: "Boutique Hotel",
    location: "Tlemcen, Algeria",
    tagline: "Boutique occupancy hit 91% vs 54% year-prior",
    metrics: [
      { label: "Occupancy rate", value: "91%" },
      { label: "ADR improvement", value: "+29%" },
    ],
    gradientFrom: "#3f3f46",
    gradientTo: "#18181b",
    accentColor: "#d4d4d8",
    featured: false,
  },
];

function PartnerCard({ partner, isFeatured }: { partner: Partner; isFeatured: boolean }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-yeldoo-border group cursor-pointer flex flex-col ${
        isFeatured ? "row-span-2" : ""
      }`}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${partner.gradientFrom}, ${partner.gradientTo})`,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className={`relative z-10 flex flex-col h-full p-6 ${isFeatured ? "justify-between min-h-[420px]" : "justify-between min-h-[220px]"}`}>
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ color: partner.accentColor, borderColor: `${partner.accentColor}40`, backgroundColor: `${partner.accentColor}15` }}
            >
              {partner.category}
            </span>
            <div className="flex items-center gap-1.5 pt-0.5">
              <MapPin className="w-3 h-3 text-white/40" />
              <span className="text-white/50 text-xs">{partner.location}</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-4 h-4 text-white/70" />
          </div>
        </div>

        {/* Bottom */}
        <div className="space-y-4">
          <div>
            <h3 className="text-white font-display font-bold text-xl lg:text-2xl leading-tight">
              {partner.name}
            </h3>
            <p className={`text-white/65 mt-1.5 leading-snug ${isFeatured ? "text-base" : "text-sm"}`}>
              &ldquo;{partner.tagline}&rdquo;
            </p>
          </div>

          {/* Metric chips */}
          <div className="flex flex-wrap gap-2">
            {partner.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-black/25 backdrop-blur-sm rounded-xl px-3.5 py-2 border border-white/10"
              >
                <p
                  className="font-display text-xl font-bold leading-none"
                  style={{ color: partner.accentColor }}
                >
                  {m.value}
                </p>
                <p className="text-white/50 text-xs mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {isFeatured && (
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity opacity-70 hover:opacity-100"
              style={{ color: partner.accentColor }}
            >
              <TrendingUp className="w-4 h-4" />
              Read their full story
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PartnerCarousel() {
  const [page, setPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardsPerPage = 3;
  const totalPages = Math.ceil((partners.length - 1) / (cardsPerPage - 1));

  return (
    <section id="partners" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-yeldoo-gold font-semibold text-sm uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              Partner Success Stories
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-yeldoo-navy mt-3 leading-[1.1] tracking-tight">
              We help our partners win <br className="hidden sm:block" />
              again and again and again&hellip;
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-3 shrink-0"
          >
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-yeldoo-border flex items-center justify-center text-yeldoo-navy hover:bg-yeldoo-navy hover:text-white hover:border-yeldoo-navy transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="w-10 h-10 rounded-full border border-yeldoo-border flex items-center justify-center text-yeldoo-navy hover:bg-yeldoo-navy hover:text-white hover:border-yeldoo-navy transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="#"
              className="ml-2 text-sm font-semibold text-yeldoo-navy border-b border-yeldoo-navy pb-0.5 hover:text-yeldoo-gold hover:border-yeldoo-gold transition-colors hidden sm:inline-block"
            >
              Read more case studies
            </a>
          </motion.div>
        </div>

        {/* Masonry-style card grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]"
          >
            {/* Featured card — spans 2 rows */}
            <PartnerCard partner={partners[0]} isFeatured />

            {/* Secondary cards */}
            {partners.slice(1, 5).map((partner) => (
              <PartnerCard key={partner.id} partner={partner} isFeatured={false} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
