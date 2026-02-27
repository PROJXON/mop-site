"use client";

import React from "react";

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
    imageUrl: "https://picsum.photos/800/400?random=1",
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
    imageUrl: "https://picsum.photos/800/400?random=2",
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
    imageUrl: "https://picsum.photos/800/400?random=3",
    imageAlt: "Event essentials",
    bullets: [
      "Business cards for networking",
      "Comfortable business casual attire",
      "Positive attitude and open mind",
      "Your enthusiasm and energy",
    ],
  },
];

const WhyAttendMOP: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-[#F5F5F0]">
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
            <details
              key={item.title}
              name="mop-accordion"
              open={index === 0}
              className="group bg-white border border-[#D4AF37]/20 rounded-lg shadow-sm overflow-hidden"
            >
              {/* Summary row */}
              <summary className="flex items-center justify-between gap-4 px-8 py-6 cursor-pointer list-none hover:bg-[#D4AF37]/5 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  {/* Gold index number */}
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

                {/* Chevron — rotates when open via group-open */}
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
                {/* Gold divider */}
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
          ))}
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#D4AF37]" />
    </section>
  );
};

export default WhyAttendMOP;
