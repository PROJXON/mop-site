"use client";

// ─── Types ────────────────────────────────────────────────────────────────────
interface MediaOutlet {
  name: string;
  abbr: string; // short acronym shown in placeholder
}

// ─── Data ────────────────────────────────────────────────────────────────────
const FEATURED_ON: MediaOutlet[] = [
  { name: "The Phelan Focus", abbr: "TPF" },
  { name: "Tech Vegas", abbr: "TV" },
  { name: "Vegas Startup Scene", abbr: "VSS" },
  { name: "LeDuc Leadership and Media", abbr: "LLM" },
];

// Duplicate the list so the marquee loops seamlessly
const TICKER_ITEMS = [...FEATURED_ON, ...FEATURED_ON, ...FEATURED_ON];

// ─── Placeholder logo card ────────────────────────────────────────────────────
function LogoPlaceholder({ outlet }: { outlet: MediaOutlet }) {
  return (
    <div
      aria-label={outlet.name}
      title={outlet.name}
      className="
        flex-shrink-0
        flex flex-col items-center justify-center gap-1
        w-36 h-16 mx-6
        border border-white/10
        bg-white/3
        hover:border-yellow-400/40 hover:bg-yellow-400/5
        transition-colors duration-300
        rounded-sm
        cursor-default
        select-none
      "
    >
      <span className="font-display text-xl text-yellow-400/70 leading-none tracking-widest">
        {outlet.abbr}
      </span>
      <span className="text-white/30 text-[0.55rem] tracking-[0.2em] uppercase text-center px-2 leading-tight">
        {outlet.name}
      </span>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function FeaturedOnTicker() {
  return (
    <section
      aria-label="Featured on"
      className="py-10 border-y border-white/8 overflow-hidden relative"
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--color-background)] to-transparent" />

      <p className="section-label text-center mb-6 relative z-20">
        As Seen In
      </p>

      {/* Marquee track */}
      <div className="flex items-center" aria-hidden="true">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {TICKER_ITEMS.map((outlet, i) => (
            <LogoPlaceholder key={`${outlet.abbr}-${i}`} outlet={outlet} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly 1/3 of the total width — one full copy of the list */
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
