"use client";

// ─── Types ────────────────────────────────────────────────────────────────────
interface MediaOutlet {
  name: string;
  abbr: string; // short acronym shown in placeholder
  assetUrl?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const FEATURED_ON: MediaOutlet[] = [
  { name: "The Phelan Focus", abbr: "TPF", assetUrl: "/PartnerAssets/TPF Logo - New.png" },
  { name: "Tech Vegas", abbr: "TV", assetUrl: "/PartnerAssets/TechVegas.png" },
  { name: "LeDuc Leadership and Media", abbr: "LLM", assetUrl: "/PartnerAssets/LuDucLM.png" },
];

// Duplicate the list so the marquee loops seamlessly
const TICKER_ITEMS = [...FEATURED_ON, ...FEATURED_ON, ...FEATURED_ON, ...FEATURED_ON, ...FEATURED_ON, ...FEATURED_ON];

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
        {outlet.assetUrl && outlet.assetUrl !== "" && (
          <img src={outlet.assetUrl} alt={outlet.name} />
        )}
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

      <p className="section-label text-center mb-6 relative z-20">
        Featured On
      </p>

      {/* Marquee track */}
      <div className="flex items-center justify-center mt-10" aria-hidden="true">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {TICKER_ITEMS.map((outlet, i) => (
            <LogoPlaceholder key={`${outlet.assetUrl}-${i}`} outlet={outlet} />
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
