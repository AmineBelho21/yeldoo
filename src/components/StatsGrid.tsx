"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { TrendingUp, PackageX, Users } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const STAT_ICONS = [TrendingUp, PackageX, Users];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function StatsGrid() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Localised static values for zero / labels per locale
  const statDisplayValues = [
    { prefix: t.lang === "fr" ? "Jusqu'\u00e0 " : t.lang === "ar" ? "\u062d\u062a\u0649 " : "Up to ", value: "40", suffix: "%" },
    { prefix: undefined, value: t.lang === "fr" ? "Z\u00e9ro" : t.lang === "ar" ? "\u0635\u0641\u0631" : "Zero", suffix: undefined },
    { prefix: undefined, value: "10k", suffix: "+" },
  ];

  return (
    <section ref={ref} className="bg-yeldoo-cream border-y border-yeldoo-border py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-yeldoo-navy tracking-tight leading-[1.1]">
            {t.stats.heading}
          </h2>
          <p className="text-yeldoo-muted text-lg mt-4 max-w-xl mx-auto">{t.stats.sub}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-yeldoo-border"
        >
          {t.stats.items.map((item, idx) => {
            const Icon = STAT_ICONS[idx];
            const display = statDisplayValues[idx];
            return (
              <motion.div key={item.category} variants={itemVariants} className="px-4 md:px-10 py-8 md:py-0 first:ps-0 last:pe-0 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yeldoo-gold" />
                  <span className="text-yeldoo-muted text-xs font-semibold uppercase tracking-widest">{item.category}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    {display.prefix && (
                      <span className="font-display text-2xl font-bold text-yeldoo-navy/60">{display.prefix}</span>
                    )}
                    <span className="font-display text-7xl lg:text-8xl font-bold text-yeldoo-navy leading-none tracking-tighter">{display.value}</span>
                    {display.suffix && (
                      <span className="font-display text-4xl font-bold text-yeldoo-gold">{display.suffix}</span>
                    )}
                  </div>
                  <p className="text-yeldoo-navy font-semibold text-lg">{item.label}</p>
                </div>
                <p className="text-yeldoo-muted text-sm leading-relaxed max-w-xs">{item.description}</p>
                <div className="pt-2"><Icon className="w-5 h-5 text-yeldoo-muted-light" /></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
