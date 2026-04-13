"use client";

import React, { useState } from "react";
import Script from "next/script";

// ─── Types ────────────────────────────────────────────────────────────────────

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSection = {
  title: string;
  icon: string;
  items: FAQItem[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_DATA: FAQSection[] = [
  {
    title: "Tickets & Registration",
    icon: "🎟",
    items: [
      {
        question: "Do I need a ticket to attend?",
        answer:
          "Yes, advance registration is required. Walk-ins will only be accepted if space allows.",
      },
      {
        question: "Are tickets refundable or transferable?",
        answer:
          "Tickets are non-refundable, but you may transfer your ticket to another guest by contacting the organizer. They may also be redeemed at a future Momentum Office Party event.",
      },
    ],
  },
  {
    title: "Venue & Arrival",
    icon: "📍",
    items: [
      {
        question: "Is there parking available?",
        answer: "Yes, complimentary parking options are available at the venue.",
      },
      {
        question: "Will there be a tour of the Coworking space?",
        answer:
          "Yes, we'll offer a guided walkthrough so you can experience this brand-new professional hub.",
      },
    ],
  },
  {
    title: "Event Experience",
    icon: "🍸",
    items: [
      {
        question:
          "What makes Momentum Office Party different from other networking events?",
        answer:
          "This isn't about business cards, it's about curated conversations, intentional icebreakers, and building real community.",
      },
      {
        question: "What's the event format?",
        answer:
          "Arrival & cocktails → Icebreakers → Venue tour → Community mingling → Momentum spotlight → Lounge conversations.",
      },
      {
        question: "Will food and drinks be provided?",
        answer: "We will be offering charcuterie and champagne.",
      },
      {
        question: "Who will be there?",
        answer:
          "A curated mix of mid-career professionals, ambitious founders, rising talent, and seasoned leaders giving back.",
      },
    ],
  },
  {
    title: "Hosting & Community",
    icon: "🏢",
    items: [
      {
        question: "Who is hosting Momentum Office Party?",
        answer:
          "Momentum Office Party is hosted by PROJXON, a business optimization firm, and led by CEO Mark Phelan as MC.",
      },
      {
        question: "Is this a one-time event?",
        answer:
          "No, this is a monthly series designed to grow into a recurring community for ambitious professionals.",
      },
      {
        question: "Can my company sponsor the event?",
        answer:
          "Yes! We welcome sponsorships from companies aligned with professional growth and community building. Contact events@projxon.com for more details.",
      },
    ],
  },
  {
    title: "Logistics",
    icon: "⚡",
    items: [
      {
        question: "What should I bring?",
        answer:
          "Yourself, your ideas, and your willingness to connect. Business cards optional, curiosity essential.",
      },
      {
        question: "Do I have to stay the whole time?",
        answer:
          "Not at all. Come when you can, stay as long as you'd like. But you'll want to stay until the end for the full experience.",
      },
      {
        question: "Is there a dress code?",
        answer:
          "Business casual / cocktail lounge attire. Blazers are optional, come polished but comfortable.",
      },
      {
        question: "Is this event 21+?",
        answer:
          "Yes, due to alcohol being served, attendees must be 21 or older.",
      },
      {
        question: "Where is the event located?",
        answer: "Muze Office – 6860 Bermuda Rd Suite 200, Las Vegas, NV 89119",
      },
      {
        question: "How many people will attend?",
        answer:
          "We're expecting 50–100 professionals per event to keep it intimate but dynamic.",
      },
    ],
  },
];

// ─── JSON-LD (FAQPage schema) ─────────────────────────────────────────────────

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
};

// ─── AccordionItem ────────────────────────────────────────────────────────────

function AccordionItem({
  item,
  itemId,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  itemId: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-black/10 first:border-t-0">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${itemId}`}
        id={`faq-question-${itemId}`}
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-4 text-left group"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span className="text-black text-sm sm:text-base leading-relaxed">
          {item.question}
        </span>

        {/* Plus / minus — red accent */}
        <span
          className="relative shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="block w-3 h-[1.5px] bg-[#e03b2f]" />
          <span
            className="block w-[1.5px] h-3 bg-[#e03b2f] absolute transition-opacity duration-200"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
        </span>
      </button>

      {/* Answer — always in DOM for SEO crawlability */}
      <div
        id={`faq-answer-${itemId}`}
        role="region"
        aria-labelledby={`faq-question-${itemId}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <p
          className="text-black/60 text-sm leading-relaxed pb-4 pr-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

// ─── FAQSectionCard ───────────────────────────────────────────────────────────

function FAQSectionCard({
  section,
  openItems,
  onToggle,
}: {
  section: FAQSection;
  openItems: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="bg-[#1a1a1a]/20 border-l-2 border-[#e03b2f] rounded-lg px-6 py-5">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base" aria-hidden="true">
          {section.icon}
        </span>
        <p
          className="text-[#e03b2f] text-[0.6rem] uppercase tracking-[0.35em] font-semibold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {section.title}
        </p>
      </div>

      {/* Accordion items */}
      <div>
        {section.items.map((item, index) => {
          const itemId = `${section.title}-${index}`;
          return (
            <AccordionItem
              key={itemId}
              item={item}
              itemId={itemId}
              isOpen={openItems.has(itemId)}
              onToggle={() => onToggle(itemId)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const FAQs: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(itemId) ? next.delete(itemId) : next.add(itemId);
      return next;
    });
  };

  return (
    <>
      {/* JSON-LD: enables Google FAQ rich results in search */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section className="bg-white py-16 lg:py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <header className="mb-12">
            <p
              className="text-[#e03b2f] text-[0.6rem] uppercase tracking-[0.4em] font-semibold mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Got Questions?
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked
              <br />
              Questions.
            </h1>
            {/* Red rule */}
            <div className="w-10 h-[2px] bg-[#e03b2f] mt-6 mb-5" />
            <p
              className="text-black/50 text-sm leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Everything you need to know about Momentum Office Party events.
            </p>
          </header>

          {/* Section cards */}
          <div className="space-y-3">
            {FAQ_DATA.map((section) => (
              <FAQSectionCard
                key={section.title}
                section={section}
                openItems={openItems}
                onToggle={toggleItem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;