"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, TrendingUp } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const PARTNERS_STATIC = [
  {
    id: 1,
    name: "Hôtel El Djazaïr",
    metrics: ["+42%", "–0"],
    gradientFrom: "#0f0c29",
    gradientTo: "#17155A",
    accentColor: "#fdcf31",
    featured: true,
  },
  {
    id: 2,
    name: "Brasserie des Facultés",
    metrics: ["+2.1×", "–67%"],
    gradientFrom: "#3b0764",
    gradientTo: "#6b21a8",
    accentColor: "#c084fc",
    featured: false,
  },
  {
    id: 3,
    name: "Spa Zéphyr by Atlas",
    metrics: ["97%", "+33%"],
    gradientFrom: "#064e3b",
    gradientTo: "#065f46",
    accentColor: "#6ee7b7",
    featured: false,
  },
  {
    id: 4,
    name: "Excursion Sahara Premium",
    metrics: ["94%", "+58%"],
    gradientFrom: "#78350f",
    gradientTo: "#92400e",
    accentColor: "#fcd34d",
    featured: false,
  },
  {
    id: 5,
    name: "Riad El Andalous",
    metrics: ["91%", "+29%"],
    gradientFrom: "#3f3f46",
    gradientTo: "#18181b",
    accentColor: "#d4d4d8",
    featured: false,
  },
];

interface PartnerCardProps {
  staticData: typeof PARTNERS_STATIC[0];
  translated: { category: string; location: string; tagline: string; metricLabels: string[] };
  isFeatured: boolean;
  readStory: string;
}

function PartnerCard({ staticData, translated, isFeatured, readStory }: PartnerCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-yeldoo-border group cursor-pointer flex flex-col ${
        isFeatured ? "row-span-2" : ""
      }`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${staticData.gradientFrom}, ${staticData.gradientTo})`,
        }}
      />
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light"
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E\")" }} />

      <div className={`relative z-10 flex flex-col h-full p-6 ${isFeatured ? "justify-between min-h-[420px]" : "justify-between min-h-[220px]"}`}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ color: staticData.accentColor, borderColor: `${staticData.accentColor}40`, backgroundColor: `${staticData.accentColor}15` }}
            >
              {translated.category}
            </span>
            <div className="flex items-center gap-1.5 pt-0.5">
              <MapPin className="w-3 h-3 text-white/40" />
              <span className="text-white/50 text-xs">{translated.location}</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-4 h-4 text-white/70" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-white font-display font-bold text-xl lg:text-2xl leading-tight">
              {staticData.name}
            </h3>
            <p className={`text-white/65 mt-1.5 leading-snug ${isFeatured ? "text-base" : "text-sm"}`}>
              &ldquo;{translated.tagline}&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {staticData.metrics.map((val, i) => (
              <div
                key={i}
                className="bg-black/25 backdrop-blur-sm rounded-xl px-3.5 py-2 border border-white/10"
              >
                <p
                  className="font-display text-xl font-bold leading-none"
                  style={{ color: staticData.accentColor }}
                >
                  {val}
                </p>
                <p className="text-white/50 text-xs mt-0.5">{translated.metricLabels[i]}</p>
              </div>
            ))}
          </div>

          {isFeatured && (
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity opacity-70 hover:opacity-100"
              style={{ color: staticData.accentColor }}
            >
              <TrendingUp className="w-4 h-4" />
              {readStory}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PartnerCarousel() {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardsPerPage = 3;
  const totalPages = Math.ceil((PARTNERS_STATIC.length - 1) / (cardsPerPage - 1));

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
              {t.partners.sectionLabel}
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-yeldoo-navy mt-3 leading-[1.1] tracking-tight">
              {t.partners.heading}
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
              {t.partners.moreCaseStudies}
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
            <PartnerCard
              staticData={PARTNERS_STATIC[0]}
              translated={t.partners.items[0]}
              isFeatured
              readStory={t.partners.readStory}
            />
            {PARTNERS_STATIC.slice(1, 5).map((p, i) => (
              <PartnerCard
                key={p.id}
                staticData={p}
                translated={t.partners.items[i + 1]}
                isFeatured={false}
                readStory={t.partners.readStory}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
