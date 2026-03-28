"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Sponsor {
  name: string;
  tagline?: string;
  assetUrl?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const SPONSORS: Sponsor[] = [
  { name: "Corporate Coworking", tagline: "Workspace Partner", assetUrl: "/PartnerAssets/CorporateCowroking.webp" },
  { name: "Kiln", tagline: "Venue Partner", assetUrl: "/PartnerAssets/Kiln-logo.webp" },
  { name: "Simply Charcuterie", tagline: "Catering Partner", assetUrl: "/PartnerAssets/Simply charcuterie LV.jpeg" },
  { name: "Cootoh", tagline: "Food Partner", assetUrl: "/PartnerAssets/Cootoh.jpeg" },
  { name: "Choice Sound", tagline: "Audio & Production", assetUrl: "/PartnerAssets/ChoiceSoundLogo.webp" },
];

// ─── Card ────────────────────────────────────────────────────────────────────
function SponsorCard({
  sponsor,
  index,
  animate,
}: {
  sponsor: Sponsor;
  index: number;
  animate: boolean;
}) {
  return (
    <div
      aria-label={sponsor.name}
      className={`
        group relative flex flex-col items-center justify-center gap-2
        border border-yellow-400/20 bg-yellow-400/5
        hover:border-yellow-400/50 hover:bg-yellow-400/10
        hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]
        transition-all duration-300
        rounded-sm p-6 min-h-[120px]
        cursor-default select-none
        opacity-0 translate-y-6
        ${animate ? "animate-fade-up" : ""}
      `}
      style={{
        animationDelay: animate ? `${index * 80}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {/* Gold corner accent */}
      {!sponsor.assetUrl && (
        <>
          <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-400/40 group-hover:border-yellow-400/70 transition-colors" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-400/40 group-hover:border-yellow-400/70 transition-colors" />

          <span className="font-display text-3xl text-yellow-400/80 group-hover:text-yellow-400 transition-colors leading-none tracking-widest">
            {sponsor.name}
          </span>
          {sponsor.tagline && (
            <span className="text-white/30 text-[0.6rem] tracking-[0.2em] uppercase">
              {sponsor.tagline}
            </span>
          )}
        </>
      )}
      {sponsor.assetUrl && sponsor.assetUrl !== "" && (
        <img src={sponsor.assetUrl} alt={sponsor.name} />
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SponsorsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="sponsors-heading"
      className="py-14 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Proud Sponsors</p>
          <h2
            id="sponsors-heading"
            className="font-display text-secondary text-3xl sm:text-4xl font-light"
          >
            The brands that{" "}
            <em className="font-display text-yellow-400 not-italic">back the movement.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {SPONSORS.map((sponsor, i) => (
            <SponsorCard
              key={sponsor.name}
              sponsor={sponsor}
              index={i}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
