"use client";

import React from "react";

const pillars = [
  {
    icon: "◈",
    title: "Brand Visibility",
    body: "Logo placement on every physical and digital touchpoint — venue, Eventbrite, email, social, and post-event content.",
  },
  {
    icon: "◎",
    title: "Thought Leadership",
    body: "Speak on stage, lead a workshop, or guest on The Phelan Focus podcast. Position your brand as an authority.",
  },
  {
    icon: "◉",
    title: "Targeted Reach",
    body: "Direct access to 100+ vetted attendees and 15,000+ in our digital community — founders, execs, and builders.",
  },
  {
    icon: "◌",
    title: "Measurement",
    body: "Platinum sponsors receive a full post-event ROI report covering impressions, engagement, and lead quality.",
  },
];

const WhySponsor = () => {
  return (
    <section className="bg-[#242424]/[.15] py-20 px-4">
      <div className="text-center mb-16">
        <p className="section-label mb-4">Why Sponsor MOP?</p>
        <h2 className="font-display text-white text-[clamp(2.5rem,4vw,3.5rem)] font-light">
          Four pillars of <em className="text-[var(--gold)]">value.</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.07)] mx-32 my-8 rounded-xl overflow-hidden">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="
  bg-[var(--color-surface)] 
  hover:bg-[#e6b800] 
  hover:shadow-lg 
  hover:scale-105 
  transition 
  duration-200 
  p-10 
  rounded-lg
"
          >
            <span className="text-[var(--gold)] opacity-70 mb-5 text-2xl block">
              {pillar.icon}
            </span>
            <h3 className="font-semibold text-white mb-3 tracking-wide">
              {pillar.title}
            </h3>
            <p className="text-white50 text-sm leading-relaxed">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySponsor;
