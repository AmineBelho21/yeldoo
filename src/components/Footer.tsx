"use client";

import { useRef } from "react";
import Image from "next/image";
import logoImg from "@/public/logo.webp";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-yeldoo-navy overflow-hidden">

      {/* Giant dramatic closing text */}
    {/*  <div ref={ref} className="overflow-hidden border-t border-white/10">
        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white text-center leading-none tracking-tight select-none py-8 lg:py-10"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          {t.footer.closing.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.p>
      </div> */}

      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                {t.footer.cta.heading}
              </h2>
              <p className="text-white/55 text-lg max-w-md leading-relaxed">
                {t.footer.cta.sub}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-yeldoo-gold text-yeldoo-navy font-semibold px-7 py-4 rounded-full hover:bg-yeldoo-gold-dark transition-all hover:scale-105 text-base"
              >
                {t.footer.cta.btn1}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-medium px-7 py-4 rounded-full border border-white/20 hover:bg-white/15 transition-all text-base"
              >
                {t.footer.cta.btn2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10">
            {t.footer.columns.map((col) => (
              <div key={col.heading} className="space-y-3.5">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
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
        <div className="flex items-center gap-2.5">
          <Image src={logoImg} alt="Yeldoo" height={28} className="h-7 w-auto rounded-md" />
          <span>{t.footer.legal}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white/60 transition-colors">Terms and Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-white/60 transition-colors">Cookie Preferences</a>
        </div>
      </div>


    </footer>
  );
}
