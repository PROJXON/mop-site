"use client";

import React, { useEffect, useRef, useState } from "react";

interface AccordionItem {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  bullets: string[];
}

const items: AccordionItem[] = [
  {
    title: "Who You'll Meet",
    description:
      "Connect with industry leaders, innovative thinkers, and passionate professionals from across the city. Build meaningful relationships with people you've never met and strengthen your existing network.",
    imageUrl: "/whyAttend/whyAttend-2.jpg",
    imageAlt: "Networking at MOP",
    bullets: [
      "Entrepreneurs and startup founders",
      "Creative professionals and designers",
      "Tech leaders and engineers",
      "Special guest speakers and industry experts",
    ],
  },
  {
    title: "What You Will Gain",
    description:
      "Take away valuable insights, fresh perspectives, and actionable strategies. Gain inspiration from success stories and discover new opportunities for growth.",
    imageUrl: "/whyAttend/whyAttend-3.jpg",
    imageAlt: "Learning experiences at MOP",
    bullets: [
      "High-value professional connections",
      "Industry insights and emerging trends",
      "Career and business opportunities",
      "Exclusive event announcements",
    ],
  },
  {
    title: "What to Bring",
    description:
      "Come prepared to make the most of your MOP experience. Here's everything you'll need for a successful and enjoyable evening.",
    imageUrl: "/whyAttend/whyAttend-1.png",
    imageAlt: "Event essentials",
    bullets: [
      "Business cards for networking",
      "Comfortable business casual attire",
      "Positive attitude and open mind",
      "Your enthusiasm and energy",
    ],
  },
];

// ─── Single animated accordion item ─────────────────────────────────────────
function AnimatedAccordionItem({
  item,
  index,
  defaultOpen,
}: {
  item: AccordionItem;
  index: number;
  defaultOpen: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (

    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <details
        name="mop-accordion"
        open={defaultOpen}
        className={`
          group
          border border-[#D4AF37]/20 rounded-lg shadow-sm overflow-hidden
          bg-white
          relative
          transition-shadow duration-300
          hover:shadow-[0_0_24px_rgba(212,175,55,0.15)]
        `}
      >
        {/* Animated gold underline — sits at the bottom of the summary */}
        <div
          className="
            absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37]
            group-hover:w-full
            transition-all duration-500 ease-out
            pointer-events-none z-10
          "
        />

        {/* Summary row */}
        <summary className="flex items-center justify-between gap-4 px-8 py-6 cursor-pointer list-none hover:bg-[#D4AF37]/5 transition-colors duration-200">
          <div className="flex items-center gap-4">
            <span
              className="text-[#D4AF37] text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              0{index + 1}
            </span>
            <h3
              className="text-xl text-[#2B2B2B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h3>
          </div>

          {/* Chevron */}
          <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </summary>

        {/* Content */}
        <div className="px-8 pb-8 pt-2">
          <div className="w-full h-[1px] bg-[#D4AF37]/20 mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Text + bullets */}
            <div className="space-y-5">
              <p
                className="text-[#2B2B2B]/70 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[#2B2B2B]/80 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative group/img">
              <div className="absolute -inset-1 rounded-xl border border-[#D4AF37]/20 group-hover/img:border-[#D4AF37]/50 transition-colors duration-300" />
              <div className="overflow-hidden rounded-xl shadow-md shadow-black/10">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
const WhyAttendMOP: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-[var(--color-background-2)]">
      {/* Top gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#D4AF37]" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p
          className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] text-center mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          The Experience
        </p>
        <h2
          className="text-4xl sm:text-5xl text-[#2B2B2B] text-center mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Why Attend MOP?
        </h2>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <AnimatedAccordionItem
              key={item.title}
              item={item}
              index={index}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#D4AF37]" />
    </section>
  );
};

export default WhyAttendMOP;