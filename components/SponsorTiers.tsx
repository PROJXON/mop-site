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
      className={`relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
        tier.highlight
          ? "border-white/50 bg-gold10 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
          : "border-white10 bg-white3 hover:border-white20"
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-black text-xs font-bold tracking-widest uppercase px-4 py-1">
            {tier.badge}
          </span>
        </div>
      )}
      <div className="p-8 border-b border-white10">
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-3 ${
            tier.highlight ? "text-gold" : "text-white40"
          }`}
        >
          {tier.name}
        </p>
        <p className="font-display text-5xl text-white">{tier.price}</p>
        <p className="text-white30 text-sm mt-1">one-time investment</p>
      </div>
      <ul className="p-8 flex-1 space-y-3">
        {tier.perks.map((perk, i) => (
          <li key={i} className="flex gap-3 text-sm text-white70">
            <span className={tier.highlight ? "text-gold" : "text-white30"}>
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
          className={`block w-full text-center py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
            tier.highlight
              ? "border border-white/50 text-[var(--color-surface-2)] hover:border-primary/50 hover:text-primary"
              : "border text-white border-white/20 hover:border-black hover:text-black"
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
    <section className="bg-[#242424]/[.15] py-16" id="tiers">
      <div className="text-center mb-16">
        <p className="section-label mb-4">Sponsorship Packages</p>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light text-white">
          Choose your <em className="text-gold">tier.</em>
        </h2>
      </div>
      <div className="mx-32 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {TIERS.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
      <p className="text-center text-white30 text-sm mt-8 tracking-wide">
        Custom packages available · Reach out to discuss
      </p>
    </section>
  );
};
