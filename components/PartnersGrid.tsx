"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Partner {
  name: string;
  abbr: string;
  tagline?: string;
  assetUrl?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const PARTNERS: Partner[] = [
  { name: "Quick Contact", abbr: "QC", tagline: "Networking", assetUrl: "/PartnerAssets/Quick Contact.jpg" },
  { name: "Thread Trends", abbr: "TT", tagline: "Fashion & Apparel", assetUrl: "/PartnerAssets/Thread Trends.jpg" },
  { name: "Peaceful Events", abbr: "PE", tagline: "Event Production", assetUrl: "/PartnerAssets/Peaceful Events.jpeg" },
  { name: "Dore Fotos Media", abbr: "DF", tagline: "Photography", assetUrl: "/PartnerAssets/Dore Fotos Media.jpeg" },
  { name: "Dead Sprint Radio", abbr: "DS", tagline: "Media & Broadcast", assetUrl: "/PartnerAssets/DeadSpirntRadio.webp" },
  { name: "Social Alignment", abbr: "SA", tagline: "Marketing", assetUrl: "/PartnerAssets/SocialAlignmentLogo.jpg" },
  { name: "702 Designs", abbr: "7D", tagline: "Creative Agency", assetUrl: "/PartnerAssets/702Designs.jpg" },
  { name: "Pilula", abbr: "PL", tagline: "Health & Wellness", assetUrl: "/PartnerAssets/PilulaLogo.png" },
  { name: "Lomar", abbr: "LM", tagline: "Brand Partner", assetUrl: "/PartnerAssets/Lomar.png" },
];

// Triple the list so the marquee loops without a visible seam
const TRACK_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

// ─── Card ─────────────────────────────────────────────────────────────────────
function PartnerCard({ partner }: { partner: Partner }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = !!partner.assetUrl && !imgError;

  return (
    <div
      aria-label={partner.name}
      title={partner.name}
      className="
        group relative flex-shrink-0
        flex flex-col items-center justify-center gap-2
        w-48 h-32 mx-3
        border border-white/10 bg-white/3 rounded-sm
        hover:border-white/25 hover:bg-white/7
        hover:-translate-y-0.5
        transition-all duration-300
        cursor-default select-none overflow-hidden
      "
    >
      {hasImage ? (
        <div className="relative w-full h-full">
          <Image
            src={partner.assetUrl!}
            alt={partner.name}
            fill
            className="object-contain p-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            onError={() => setImgError(true)}
            sizes="192px"
          />
        </div>
      ) : (
        <>
          <span className="font-display text-2xl text-white/40 group-hover:text-white/70 transition-colors tracking-widest leading-none">
            {partner.abbr}
          </span>
          <span className="text-white/50 text-xs font-medium tracking-wide text-center px-3 group-hover:text-white/75 transition-colors">
            {partner.name}
          </span>
          {partner.tagline && (
            <span className="text-white/20 text-[0.55rem] tracking-[0.2em] uppercase group-hover:text-white/40 transition-colors">
              {partner.tagline}
            </span>
          )}
        </>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function PartnersCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="partners-heading"
      className={`
        py-14 border-t border-white/8 overflow-hidden relative
        opacity-0 translate-y-6
        ${visible ? "animate-fade-up" : ""}
      `}
      style={{ animationFillMode: "forwards" }}
    >
      {/* Header */}
      <div className="text-center mb-10 px-4 relative z-20">
        <p className="section-label mb-3">Community Partners</p>
        <h2
          id="partners-heading"
          className="font-display text-secondary/40 text-3xl sm:text-4xl font-light"
        >
          Built with{" "}
          <em className="text-secondary">Las Vegas&apos;s best.</em>
        </h2>
      </div>

      {/* Scrolling track */}
      <div aria-hidden="true">
        <div className="flex items-center partners-marquee">
          {TRACK_ITEMS.map((partner, i) => (
            <PartnerCard key={`${partner.abbr}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Accessible static list for screen readers / SEO */}
      <ul className="sr-only">
        {PARTNERS.map((p) => (
          <li key={p.name}>{p.name} — {p.tagline}</li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .partners-marquee {
          animation: partners-scroll 28s linear infinite;
          will-change: transform;
          width: max-content;
        }
        .partners-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}