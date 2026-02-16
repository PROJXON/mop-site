"use client";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSection = {
  title: string;
  icon: string;
  items: FAQItem[];
};

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
        answer:
          "Yes, complimentary parking options are available at the venue.",
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
        answer:
          "Muze Office – 6860 Bermuda Rd Suite 200, Las Vegas, NV 89119",
      },
      {
        question: "How many people will attend?",
        answer:
          "We're expecting 50–100 professionals per event to keep it intimate but dynamic.",
      },
    ],
  },
];

const FAQs: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleSection = (sectionTitle: string) => {
    setOpenSection(openSection === sectionTitle ? null : sectionTitle);
  };

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-12 lg:py-16 bg-base-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            FAQs
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Find answers to common questions about Momentum Office Party events.
          </p>
        </header>

        <div className="space-y-4">
          {FAQ_DATA.map((section) => (
            <div
              key={section.title}
              className="collapse collapse-plus bg-base-200 border border-base-300"
            >
              <input
                type="checkbox"
                checked={openSection === section.title}
                onChange={() => toggleSection(section.title)}
              />
              <div className="collapse-title text-xl font-semibold">
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </div>
              <div className="collapse-content">
                <div className="space-y-3 pt-2">
                  {section.items.map((item, index) => {
                    const itemId = `${section.title}-${index}`;
                    return (
                      <div
                        key={itemId}
                        className="collapse collapse-arrow bg-base-100 border border-base-300"
                      >
                        <input
                          type="checkbox"
                          checked={openItems.has(itemId)}
                          onChange={() => toggleItem(itemId)}
                        />
                        <div className="collapse-title text-base font-medium">
                          {item.question}
                        </div>
                        <div className="collapse-content">
                          <p className="text-base-content/80">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
