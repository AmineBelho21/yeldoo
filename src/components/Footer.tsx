"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const footerLinks = {
  Home: ["Home", "Platform Tour", "Login"],
  Product: ["The System", "Yield Engine", "Capital", "Integrations"],
  Modules: ["Yield Management", "Restaurants", "Hotels", "Experiences"],
  About: ["About Yeldoo", "Partner Program", "Careers"],
  "Get in touch": ["Book a demo", "Contact us"],
  Resources: ["Success stories", "Blog", "ROI Calculator"],
  "Follow us": ["Instagram", "LinkedIn", "X / Twitter"],
  "Solutions": ["Independent brands", "Franchise networks", "Enterprise groups"],
};

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-yeldoo-navy overflow-hidden">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Want better margins?
              </h2>
              <p className="text-white/55 text-lg max-w-md leading-relaxed">
                Tell us how we can help maximize your venue's revenue and help your customers
                discover you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-yeldoo-gold text-yeldoo-navy font-semibold px-7 py-4 rounded-full hover:bg-yeldoo-gold-dark transition-all hover:scale-105 text-base"
              >
                List your venue
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-medium px-7 py-4 rounded-full border border-white/20 hover:bg-white/15 transition-all text-base"
              >
                Discover deals
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="space-y-3.5">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/70 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yeldoo-navy border border-white/20 rounded flex items-center justify-center">
            <Zap className="w-3 h-3 text-yeldoo-gold fill-yeldoo-gold" />
          </div>
          <span>© 2026 Yeldoo. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white/60 transition-colors">Terms and Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-white/60 transition-colors">Cookie Preferences</a>
        </div>
      </div>

      {/* Giant dramatic closing text */}
      <div ref={ref} className="overflow-hidden border-t border-white/10">
        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white text-center leading-none tracking-tight select-none py-8 lg:py-10"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          No seat empty.
          <br />
          No experience missed.
        </motion.p>
      </div>
    </footer>
  );
}
