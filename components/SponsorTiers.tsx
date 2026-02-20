import React from "react";
import styles from "./SponsorPage.module.css";
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
    <>
      <style>{`
        .bg-white\/3 { background: rgba(255,255,255,0.03); }
        .bg-gold\/5 { background: rgba(212,175,55,0.05); }
        .bg-gold\/10 { background: rgba(212,175,55,0.10); }
        .bg-gold\/90 { background: rgba(212,175,55,0.9); }
        .border-white\/10 { border-color: rgba(255,255,255,0.10); }
        .border-white\/20 { border-color: rgba(255,255,255,0.20); }
        .text-white\/30 { color: rgba(255,255,255,0.30); }
        .text-white\/40 { color: rgba(255,255,255,0.40); }
        .text-white\/50 { color: rgba(255,255,255,0.50); }
        .text-white\/60 { color: rgba(255,255,255,0.60); }
        .text-white\/70 { color: rgba(255,255,255,0.70); }
        .text-gold\/60 { color: rgba(212,175,55,0.60); }
        `}</style>
      <div
        className={`relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
          tier.highlight
            ? "border-gold bg-gold/5 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            : "border-white/10 bg-white/3 hover:border-white/20"
        }`}
      >
        {tier.badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-gold text-black text-xs font-bold tracking-widest uppercase px-4 py-1">
              {tier.badge}
            </span>
          </div>
        )}

        <div className="p-8 border-b border-white/10">
          <p
            className={`text-xs tracking-[0.3em] uppercase mb-3 ${
              tier.highlight ? "text-gold" : "text-white/40"
            }`}
          >
            {tier.name}
          </p>
          <p className="font-display text-5xl text-white">{tier.price}</p>
          <p className="text-white/30 text-sm mt-1">one-time investment</p>
        </div>

        <ul className="p-8 flex-1 space-y-3">
          {tier.perks.map((perk, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/70">
              <span className={tier.highlight ? "text-gold" : "text-white/30"}>
                ✦
              </span>
              {perk}
            </li>
          ))}
        </ul>

        <div className="p-8 pt-0">
          <a
            href={tier.paymentLink}
            className={`block w-full text-center py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
              tier.highlight
                ? "bg-gold text-black hover:bg-gold/90"
                : "border border-white/20 text-white hover:border-gold hover:text-gold"
            }`}
          >
            Secure This Tier
          </a>
        </div>
      </div>
    </>
  );
}

export const SponsorTiers: React.FC<{ tiers: TierProps[] }> = ({ tiers }) => {
  return (
    <section id="tiers">
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>
          Sponsorship Packages
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "white",
          }}
        >
          Choose your <em style={{ color: "var(--gold)" }}>tier.</em>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {TIERS.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.8rem",
          marginTop: "2rem",
          letterSpacing: "0.05em",
        }}
      >
        Custom packages available · Reach out to discuss
      </p>
    </section>
  );
};
