"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { TrendingUp, PackageX, Users } from "lucide-react";

interface Stat {
  category: string;
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: Stat[] = [
  {
    category: "Yield Management",
    value: "40",
    suffix: "%",
    prefix: "Up to ",
    label: "Increase in off-peak revenue",
    description:
      "Partner venues consistently achieve 30–40% uplift in revenue during previously dead time slots.",
    icon: TrendingUp,
  },
  {
    category: "Inventory",
    value: "Zero",
    label: "Wasted inventory slots",
    description:
      "Smart real-time yield pricing ensures every room, seat, and experience slot is monetized.",
    icon: PackageX,
  },
  {
    category: "Community",
    value: "10k",
    suffix: "+",
    label: "Active local users",
    description:
      "A growing community of Algerian deal-seekers discovering premium venues through Yeldoo.",
    icon: Users,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function StatsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-yeldoo-cream border-y border-yeldoo-border py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-yeldoo-navy tracking-tight leading-[1.1]">
            Results you can take to the bank
          </h2>
          <p className="text-yeldoo-muted text-lg mt-4 max-w-xl mx-auto">
            Yeldoo's yield engine delivers measurable impact for venues and real savings for users.
          </p>
        </div>

        {/* Stats grid — 3 columns with vertical separators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-yeldoo-border"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.category}
                variants={itemVariants}
                className="px-4 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0 space-y-4"
              >
                {/* Category badge */}
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yeldoo-gold" />
                  <span className="text-yeldoo-muted text-xs font-semibold uppercase tracking-widest">
                    {stat.category}
                  </span>
                </div>

                {/* Number */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    {stat.prefix && (
                      <span className="font-display text-2xl font-bold text-yeldoo-navy/60">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="font-display text-7xl lg:text-8xl font-bold text-yeldoo-navy leading-none tracking-tighter">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="font-display text-4xl font-bold text-yeldoo-gold">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-yeldoo-navy font-semibold text-lg">{stat.label}</p>
                </div>

                {/* Description */}
                <p className="text-yeldoo-muted text-sm leading-relaxed max-w-xs">
                  {stat.description}
                </p>

                {/* Icon */}
                <div className="pt-2">
                  <Icon className="w-5 h-5 text-yeldoo-muted-light" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
