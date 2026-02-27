"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ActivationProps {
  category: string;
  items: string[];
}

const ACTIVATIONS: ActivationProps[] = [
  {
    category: "On-Site",
    items: [
      "Branded exhibitor booth or activation space",
      "Stage time — spotlight, panel, or fireside chat",
      "Product demo zone with curated foot traffic",
      "Branded swag in VIP welcome kits",
      "Signage across venue — banners, screens, lanyards",
    ],
  },
  {
    category: "Digital",
    items: [
      "Logo on event website and all digital collateral",
      "Sponsored content across MOP social channels",
      "Email placement to 15,000+ subscriber network",
      "Co-branded Eventbrite listing feature",
      "Live event story takeovers and real-time tagging",
    ],
  },
  {
    category: "Content",
    items: [
      "Podcast guest spot on The Phelan Focus",
      "Recorded & distributed fireside chat",
      "Post-event recap video feature",
      "Quote & brand inclusion in press materials",
      "Testimonial & case study collaboration",
    ],
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────
function ActivationCard({
  activation,
  index,
  animate,
}: {
  activation: ActivationProps;
  index: number;
  animate: boolean;
}) {
  return (
    <div
      className={`
        border border-white/10 p-6 sm:p-8 md:p-10 rounded-xl
        bg-white/5 hover:border-white/20 transition-colors duration-300
        opacity-0 translate-y-8
        ${animate ? "animate-fade-up" : ""}
      `}
      style={{
        animationDelay: animate ? `${index * 120}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      <p className="section-label mb-4 sm:mb-6">{activation.category}</p>
      <ul className="flex flex-col gap-3 sm:gap-4">
        {activation.items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 sm:gap-3 text-white/65 text-sm sm:text-base leading-relaxed"
          >
            <span className="text-yellow-400/50 mt-0.5 shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ActivationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto px-4 sm:px-8 py-12 sm:pb-20">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="font-display font-light text-white text-3xl sm:text-4xl md:text-5xl">
          How your brand <em className="text-primary not-italic">shows up.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {ACTIVATIONS.map((activation, index) => (
          <ActivationCard
            key={activation.category}
            activation={activation}
            index={index}
            animate={animate}
          />
        ))}
      </div>
    </section>
  );
}
