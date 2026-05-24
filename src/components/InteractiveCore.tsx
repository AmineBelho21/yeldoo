"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Building2,
  UtensilsCrossed,
  Compass,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  ArrowUpRight,
} from "lucide-react";

type TabId = "hotels" | "restaurants" | "experiences";

interface RoomSlot {
  type: string;
  original: string;
  deal: string;
  badge: string;
  slots: number;
  fillPercent: number;
}

interface MockupStat {
  label: string;
  value: string;
  trend: string;
  positive: boolean;
}

interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  features: string[];
  mockup: {
    title: string;
    subtitle: string;
    rooms: RoomSlot[];
    stats: MockupStat[];
  };
}

const tabs: Tab[] = [
  {
    id: "hotels",
    label: "Hotels",
    icon: Building2,
    tagline: "Smart Room Yield",
    description:
      "Convert empty rooms into revenue by connecting last-minute travelers to the right room at the right dynamic price — automatically.",
    features: [
      "Real-time occupancy dashboard",
      "AI-powered yield pricing",
      "Partner revenue analytics",
    ],
    mockup: {
      title: "Atlas Luxury Hotel",
      subtitle: "Algiers · 5-star · Live yield active",
      rooms: [
        { type: "Deluxe Room", original: "18,000", deal: "11,200", badge: "38%", slots: 3, fillPercent: 70 },
        { type: "Executive Suite", original: "35,000", deal: "21,000", badge: "40%", slots: 1, fillPercent: 90 },
        { type: "Junior Suite", original: "28,000", deal: "17,500", badge: "37%", slots: 2, fillPercent: 80 },
      ],
      stats: [
        { label: "Occupancy", value: "94%", trend: "+12%", positive: true },
        { label: "Rev / Room", value: "16,400 DA", trend: "+23%", positive: true },
      ],
    },
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: UtensilsCrossed,
    tagline: "Table Yield Engine",
    description:
      "Transform quiet service windows into fully-booked dining experiences with dynamic per-cover pricing and effortless reservation management.",
    features: [
      "Off-peak table yield pricing",
      "No-show protection system",
      "Real-time reservation tracking",
    ],
    mockup: {
      title: "La Médina Restaurant",
      subtitle: "Casbah, Algiers · Fine Dining · Active",
      rooms: [
        { type: "Lunch Menu (2-course)", original: "4,500", deal: "2,700", badge: "40%", slots: 8, fillPercent: 50 },
        { type: "Private Dining Room", original: "12,000", deal: "7,200", badge: "40%", slots: 1, fillPercent: 90 },
        { type: "Chef's Table", original: "9,500", deal: "5,700", badge: "40%", slots: 2, fillPercent: 80 },
      ],
      stats: [
        { label: "Table turnover", value: "+2.3×", trend: "+0.8×", positive: true },
        { label: "Off-peak covers", value: "67", trend: "+34", positive: true },
      ],
    },
  },
  {
    id: "experiences",
    label: "Experiences",
    icon: Compass,
    tagline: "Experience Slots",
    description:
      "Fill every tour, workshop, and adventure slot with smart group-rate optimization and a dynamic capacity management engine.",
    features: [
      "Automated group rate optimization",
      "Dynamic capacity management",
      "Experience discovery engine",
    ],
    mockup: {
      title: "Tassili Desert Tours",
      subtitle: "Illizi, Algeria · Luxury Adventure · Active",
      rooms: [
        { type: "2-day Sahara Trek", original: "65,000", deal: "39,000", badge: "40%", slots: 2, fillPercent: 80 },
        { type: "Tassili Rock Art Tour", original: "32,000", deal: "19,200", badge: "40%", slots: 4, fillPercent: 60 },
        { type: "Luxury Camp Night", original: "28,000", deal: "16,800", badge: "40%", slots: 3, fillPercent: 70 },
      ],
      stats: [
        { label: "Slot utilization", value: "89%", trend: "+31%", positive: true },
        { label: "Avg group size", value: "4.2", trend: "+1.8", positive: true },
      ],
    },
  },
];

const mockupVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25 } },
};

export default function InteractiveCore() {
  const [activeTab, setActiveTab] = useState<TabId>("hotels");
  const active = tabs.find((t) => t.id === activeTab)!;
  const ActiveIcon = active.icon;

  return (
    <section id="platform" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-yeldoo-gold font-semibold text-sm uppercase tracking-widest">
            <BarChart3 className="w-4 h-4" />
            How Yeldoo Works
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-yeldoo-navy mt-3 leading-[1.08] tracking-tight max-w-2xl">
            One platform. Every lifestyle category.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">
          {/* ── Left panel ── */}
          <div className="space-y-10">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      isActive
                        ? "bg-yeldoo-navy text-white border-yeldoo-navy shadow-sm"
                        : "bg-white text-yeldoo-muted border-yeldoo-border hover:border-yeldoo-navy/30 hover:text-yeldoo-navy"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-yeldoo-gold/10 rounded-full px-4 py-1.5">
                  <ActiveIcon className="w-3.5 h-3.5 text-yeldoo-gold" />
                  <span className="text-yeldoo-navy text-xs font-semibold tracking-wider uppercase">
                    {active.tagline}
                  </span>
                </div>

                <p className="text-yeldoo-muted text-lg leading-relaxed">{active.description}</p>

                <ul className="space-y-3.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yeldoo-gold mt-0.5 shrink-0" />
                      <span className="text-yeldoo-navy font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-yeldoo-navy font-semibold text-sm hover:text-yeldoo-gold transition-colors border-b-2 border-yeldoo-gold pb-0.5"
                >
                  Learn more about {active.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Users, label: "Partner venues", value: "200+" },
                { icon: TrendingUp, label: "Avg yield uplift", value: "+38%" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-yeldoo-cream border border-yeldoo-border rounded-xl p-4"
                >
                  <Icon className="w-4 h-4 text-yeldoo-muted mb-2" />
                  <p className="font-display text-2xl font-bold text-yeldoo-navy">{value}</p>
                  <p className="text-yeldoo-muted text-xs font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel — Dashboard mockup ── */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={mockupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-yeldoo-cream rounded-2xl border border-yeldoo-border overflow-hidden shadow-lg"
              >
                {/* Mockup header bar */}
                <div className="bg-yeldoo-navy px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <ActiveIcon className="w-4 h-4 text-yeldoo-gold" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{active.mockup.title}</p>
                      <p className="text-white/50 text-xs">{active.mockup.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300 text-xs font-semibold">LIVE</span>
                  </div>
                </div>

                {/* Slots list */}
                <div className="p-4 space-y-3">
                  {active.mockup.rooms.map((room, i) => (
                    <motion.div
                      key={room.type}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                      className="bg-white rounded-xl border border-yeldoo-border p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-yeldoo-navy font-semibold text-sm">{room.type}</p>
                        <span className="text-xs font-bold text-white bg-emerald-500 px-2.5 py-0.5 rounded-full">
                          -{room.badge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-yeldoo-navy">
                            {room.deal} DA
                          </span>
                          <span className="text-sm text-yeldoo-muted line-through">
                            {room.original}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-yeldoo-gold/10 rounded-lg px-2.5 py-1">
                          <Zap className="w-3 h-3 text-yeldoo-gold" />
                          <span className="text-yeldoo-navy font-semibold text-xs">
                            {room.slots} left
                          </span>
                        </div>
                      </div>

                      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${room.fillPercent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 + 0.3 }}
                          className="h-full bg-yeldoo-gold rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats footer */}
                <div className="grid grid-cols-2 divide-x divide-yeldoo-border border-t border-yeldoo-border">
                  {active.mockup.stats.map((stat) => (
                    <div key={stat.label} className="px-5 py-4">
                      <p className="text-yeldoo-muted text-xs font-medium uppercase tracking-wider mb-1">
                        {stat.label}
                      </p>
                      <p className="font-display text-xl font-bold text-yeldoo-navy">{stat.value}</p>
                      <div
                        className={`inline-flex items-center gap-1 text-xs font-semibold mt-1 ${
                          stat.positive ? "text-emerald-600" : "text-red-500"
                        }`}
                      >
                        <TrendingUp className="w-3 h-3" />
                        {stat.trend}
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
