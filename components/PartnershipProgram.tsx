"use client";
import React from "react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

const partnerBenefits: Benefit[] = [
  {
    icon: "◈",
    title: "Brand Exposure",
    description:
      "Your brand is woven into every touchpoint — signage, emails, social posts, and media assets — so you stay top-of-mind long after the night ends.",
  },
  {
    icon: "◉",
    title: "Foot Traffic & Leads",
    description:
      "Connect directly with a room full of founders, SMBs, and executives who are actively looking for partners and solutions in your space.",
  },
  {
    icon: "◎",
    title: "Revenue & Co-Branding",
    description:
      "From venue revenue-sharing to full marketing partnership deals, we structure arrangements that make the relationship mutually valuable.",
  },
];

const stats: Stat[] = [
  { value: "200+", label: "Expected Attendees" },
  { value: "60%", label: "Decision Makers" },
  { value: "12+", label: "Industries Represented" },
  { value: "3×", label: "Avg. ROI Reported" },
];

export default function PartnershipProgram() {
  return (
    <section id="partnership-program" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-primary]">
          Partners &amp; Vendors
        </p>

        <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg font-[--font-display] text-4xl font-semibold leading-tight text-white md:text-5xl">
            Grow alongside a community that&apos;s building something real.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
            When you partner with us, your brand becomes part of the story — not
            just a logo on a banner.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mb-16 grid grid-cols-2 overflow-hidden rounded-xl border border-[--color-border] md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-[--color-surface] px-6 py-8 text-center ${
                i < stats.length - 1
                  ? "border-b border-[--color-border] md:border-b-0 md:border-r"
                  : ""
              } ${
                i === 1 ? "border-r border-[--color-border] md:border-r" : ""
              }`}
            >
              <div className="mb-1 font-[--font-display] text-4xl font-bold text-[--color-primary] md:text-5xl">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {partnerBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-[--color-border] bg-[--color-surface] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[--color-primary]"
            >
              <div className="mb-5 text-2xl text-[--color-primary]">
                {benefit.icon}
              </div>
              <h3 className="mb-3 font-[--font-display] text-2xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partners CTA block */}
        <div className="flex flex-col gap-8 rounded-2xl border border-[--color-border] bg-[--color-surface-2] p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-md">
            <h3 className="mb-3 font-[--font-display] text-3xl font-semibold leading-snug text-white">
              Ready to be part of the momentum?
            </h3>
            <p className="text-sm leading-relaxed text-white/55">
              We keep our partner roster intentional — brands that genuinely fit
              the community. Reach out and let&apos;s see if it&apos;s a match.
            </p>
          </div>
          <a
            href="mailto:partners@projxon.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[--color-primary] px-7 py-4 text-sm font-bold tracking-wide text-[--color-primary-content] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[--color-primary-hover]"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
