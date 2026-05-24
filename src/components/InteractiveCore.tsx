"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Building2, UtensilsCrossed, Compass, CheckCircle, TrendingUp, BarChart3, Users, Zap, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

type TabId = "hotels" | "restaurants" | "experiences";

const TAB_ICONS: Record<TabId, React.ComponentType<{ className?: string }>> = {
  hotels: Building2,
  restaurants: UtensilsCrossed,
  experiences: Compass,
};

const TAB_STATIC = {
  hotels: {
    rooms: [
      { original: "18,000", deal: "11,200", badge: "38%", slots: 3, fillPercent: 70 },
      { original: "35,000", deal: "21,000", badge: "40%", slots: 1, fillPercent: 90 },
      { original: "28,000", deal: "17,500", badge: "37%", slots: 2, fillPercent: 80 },
    ],
    stats: [
      { value: "94%", trend: "+12%", positive: true },
      { value: "16,400 DA", trend: "+23%", positive: true },
    ],
  },
  restaurants: {
    rooms: [
      { original: "4,500", deal: "2,700", badge: "40%", slots: 8, fillPercent: 50 },
      { original: "12,000", deal: "7,200", badge: "40%", slots: 1, fillPercent: 90 },
      { original: "9,500", deal: "5,700", badge: "40%", slots: 2, fillPercent: 80 },
    ],
    stats: [
      { value: "+2.3×", trend: "+0.8×", positive: true },
      { value: "67", trend: "+34", positive: true },
    ],
  },
  experiences: {
    rooms: [
      { original: "65,000", deal: "39,000", badge: "40%", slots: 2, fillPercent: 80 },
      { original: "32,000", deal: "19,200", badge: "40%", slots: 4, fillPercent: 60 },
      { original: "28,000", deal: "16,800", badge: "40%", slots: 3, fillPercent: 70 },
    ],
    stats: [
      { value: "89%", trend: "+31%", positive: true },
      { value: "4.2", trend: "+1.8", positive: true },
    ],
  },
};

const mockupVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25 } },
};

export default function InteractiveCore() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>("hotels");

  const tabIds: TabId[] = ["hotels", "restaurants", "experiences"];
  const activeText = t.core.tabs[activeTab];
  const activeStatic = TAB_STATIC[activeTab];
  const ActiveIcon = TAB_ICONS[activeTab];

  return (
    <section id="platform" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-yeldoo-gold font-semibold text-sm uppercase tracking-widest">
            <BarChart3 className="w-4 h-4" />{t.core.sectionLabel}
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-yeldoo-navy mt-3 leading-[1.08] tracking-tight max-w-2xl">
            {t.core.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">
          <div className="space-y-10">
            <div className="flex flex-wrap gap-3">
              {tabIds.map((id) => {
                const Icon = TAB_ICONS[id];
                const isActive = activeTab === id;
                return (
                  <button key={id} onClick={() => setActiveTab(id)}
                    className={"inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 " + (isActive ? "bg-yeldoo-navy text-white border-yeldoo-navy shadow-sm" : "bg-white text-yeldoo-muted border-yeldoo-border hover:border-yeldoo-navy/30 hover:text-yeldoo-navy")}
                  >
                    <Icon className="w-4 h-4" />{t.core.tabs[id].label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-yeldoo-gold/10 rounded-full px-4 py-1.5">
                  <ActiveIcon className="w-3.5 h-3.5 text-yeldoo-gold" />
                  <span className="text-yeldoo-navy text-xs font-semibold tracking-wider uppercase">{activeText.tagline}</span>
                </div>
                <p className="text-yeldoo-muted text-lg leading-relaxed">{activeText.description}</p>
                <ul className="space-y-3.5">
                  {activeText.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yeldoo-gold mt-0.5 shrink-0" />
                      <span className="text-yeldoo-navy font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-yeldoo-navy font-semibold text-sm hover:text-yeldoo-gold transition-colors border-b-2 border-yeldoo-gold pb-0.5">
                  {activeText.learnMore}<ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Users, label: t.core.partnerVenuesLabel, value: "200+" },
                { icon: TrendingUp, label: t.core.avgYieldLabel, value: "+38%" },
              ].map(({ icon: Icon, label, value }: { icon: React.ComponentType<{className?:string}>, label: string, value: string }) => (
                <div key={label} className="bg-yeldoo-cream border border-yeldoo-border rounded-xl p-4">
                  <Icon className="w-4 h-4 text-yeldoo-muted mb-2" />
                  <p className="font-display text-2xl font-bold text-yeldoo-navy">{value}</p>
                  <p className="text-yeldoo-muted text-xs font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} variants={mockupVariants} initial="hidden" animate="visible" exit="exit"
                className="bg-yeldoo-cream rounded-2xl border border-yeldoo-border overflow-hidden shadow-lg">
                <div className="bg-yeldoo-navy px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <ActiveIcon className="w-4 h-4 text-yeldoo-gold" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{activeText.mockupTitle}</p>
                      <p className="text-white/50 text-xs">{activeText.mockupSubtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300 text-xs font-semibold">LIVE</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {activeStatic.rooms.map((room, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 + 0.1 }}
                      className="bg-white rounded-xl border border-yeldoo-border p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-yeldoo-navy font-semibold text-sm">{activeText.roomTypes[i]}</p>
                        <span className="text-xs font-bold text-white bg-emerald-500 px-2.5 py-0.5 rounded-full">-{room.badge}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-yeldoo-navy">{room.deal} DA</span>
                          <span className="text-sm text-yeldoo-muted line-through">{room.original}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-yeldoo-gold/10 rounded-lg px-2.5 py-1">
                          <Zap className="w-3 h-3 text-yeldoo-gold" />
                          <span className="text-yeldoo-navy font-semibold text-xs">{room.slots}</span>
                        </div>
                      </div>
                      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: room.fillPercent + "%" }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 + 0.3 }} className="h-full bg-yeldoo-gold rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-yeldoo-border border-t border-yeldoo-border">
                  {activeStatic.stats.map((stat, i) => (
                    <div key={i} className="px-5 py-4">
                      <p className="text-yeldoo-muted text-xs font-medium uppercase tracking-wider mb-1">{activeText.statLabels[i]}</p>
                      <p className="font-display text-xl font-bold text-yeldoo-navy">{stat.value}</p>
                      <div className={"inline-flex items-center gap-1 text-xs font-semibold mt-1 " + (stat.positive ? "text-emerald-600" : "text-red-500")}>
                        <TrendingUp className="w-3 h-3" />{stat.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
