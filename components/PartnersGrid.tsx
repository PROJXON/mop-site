"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Partner {
  name: string;
  abbr: string;
  tagline?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const PARTNERS: Partner[] = [
  { name: "Quick Contact", abbr: "QC", tagline: "Networking" },
  { name: "Thread Trends", abbr: "TT", tagline: "Fashion & Apparel" },
  { name: "Peaceful Events", abbr: "PE", tagline: "Event Production" },
  { name: "Dore Fotos Media", abbr: "DF", tagline: "Photography" },
  { name: "Dead Sprint Radio", abbr: "DS", tagline: "Media & Broadcast" },
  { name: "Social Alignment", abbr: "SA", tagline: "Marketing" },
  { name: "702 Designs", abbr: "7D", tagline: "Creative Agency" },
  { name: "Pilula", abbr: "PL", tagline: "Health & Wellness" },
  { name: "Lomar", abbr: "LM", tagline: "Brand Partner" },
];

// ─── Card ────────────────────────────────────────────────────────────────────
function PartnerCard({
  partner,
  index,
  animate,
}: {
  partner: Partner;
  index: number;
  animate: boolean;
}) {
  return (
    <div
      aria-label={partner.name}
      className={`
        group relative flex flex-col items-center justify-center gap-1.5
        border border-white/10 bg-white/3
        hover:border-white/25 hover:bg-white/6
        hover:-translate-y-0.5
        transition-all duration-300
        rounded-sm p-5 min-h-[100px]
        cursor-default select-none
        opacity-0 translate-y-6
        ${animate ? "animate-fade-up" : ""}
      `}
      style={{
        animationDelay: animate ? `${index * 60}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      <span className="font-display text-2xl text-white/50 group-hover:text-white/80 transition-colors leading-none tracking-widest">
        {partner.abbr}
      </span>
      <span className="text-white/60 text-xs font-medium tracking-wide text-center group-hover:text-white/80 transition-colors">
        {partner.name}
      </span>
      {partner.tagline && (
        <span className="text-white/20 text-[0.55rem] tracking-[0.2em] uppercase group-hover:text-white/40 transition-colors">
          {partner.tagline}
        </span>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function PartnersGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="partners-heading"
      className="py-14 px-4 sm:px-8 border-t border-white/8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Community Partners</p>
          <h2
            id="partners-heading"
            className="font-display text-white text-3xl sm:text-4xl font-light"
          >
            Built with{" "}
            <em className="text-white/60 not-italic">Las Vegas's best.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {PARTNERS.map((partner, i) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              index={i}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
