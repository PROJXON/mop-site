import React from "react";
import { TIERS } from "@/app/partner/sponsor/page";
interface TierProps {
  name: string;
  price: string;
  highlight: boolean;
  badge?: string;
  perks: string[];
  paymentLink: string;
}

function TierCard({ tier }: { tier: TierProps }) {
  return (
    <div
      className={`relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 ${tier.highlight
        ? "border-black/50 bg-black/10 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
        : "border-black/10 bg-black/5 hover:border-black/70"
        }`}
    >
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[var(--color-accent)] text-white text-xs font-bold tracking-widest uppercase px-4 py-1">
            {tier.badge}
          </span>
        </div>
      )}
      <div className="p-8 border-b border-white10">
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-3 ${tier.highlight ? "text-black/80" : "text-black/60"
            } lg:text-sm`}
        >
          {tier.name}
        </p>
        <p className="font-display text-5xl text-black">{tier.price}</p>
        <p className="text-black/50 text-sm mt-1">one-time investment</p>
      </div>
      <ul className="px-8 py-2 flex-1 space-y-3">
        {tier.perks.map((perk, i) => (
          <li key={i} className="flex gap-3 text-sm text-black70">
            <span className={tier.highlight ? "text-black" : "text-black/70"}>
              ✦
            </span>
            {perk}
          </li>
        ))}
      </ul>
      <div className="p-8 pt-0">
        <a
          href={tier.paymentLink}
          target="_blank"
          className={`block w-full text-center py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200 ${tier.highlight
            ? "border border-black/50 text-black hover:border-[var(--color-accent)]/50 hover:text-white hover:bg-[var(--color-accent)]/80"
            : "border text-black border-black/20 hover:border-[var(--color-accent)]/50 hover:text-white hover:bg-[var(--color-accent)]/80"
            }`}
        >
          Secure This Tier
        </a>
      </div>
    </div>
  );
}

export const SponsorTiers: React.FC<{ tiers: TierProps[] }> = ({ tiers }) => {
  return (
    <section className="py-8" style={{ background: "linear-gradient(180deg,#f8f9fb 0%,#eef1f5 100%)" }} id="tiers">
      <div className="text-center mb-16">
        <p className="section-label mb-4">Sponsorship Packages</p>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light text-black">
          Choose your <em className="text-gold">tier.</em>
        </h2>
      </div>
      <div className="mx-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {TIERS.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
      <p className="text-center text-black/50 text-sm mt-8 tracking-wide">
        Custom packages available · Reach out to discuss
      </p>
    </section>
  );
};
