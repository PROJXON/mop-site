"use client";

import React, { useRef, useEffect, useState } from "react";

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

function PillarCard({
  pillar,
  animate,
  index,
}: {
  pillar: (typeof pillars)[0];
  animate: boolean;
  index: number;
}) {
  return (
    <div
      className={`
        bg-white/10 hover:bg-yellow-400/20 hover:shadow-lg hover:scale-105
        transition duration-200 p-6 sm:p-8 rounded-xl
        opacity-0 translate-y-8
        ${animate ? "animate-fade-up" : ""}
      `}
      style={{
        animationDelay: animate ? `${index * 120}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      <span className="text-yellow-400 opacity-70 mb-5 text-2xl block">
        {pillar.icon}
      </span>
      <h3 className="font-semibold text-white mb-2 tracking-wide">
        {pillar.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">{pillar.body}</p>
    </div>
  );
}

const WhySponsor = () => {
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
    <section
      ref={sectionRef}
      className="bg-neutral-900/80 py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="text-center mb-10 sm:mb-16">
        <p className="uppercase tracking-widest text-yellow-400/80 text-xs font-semibold mb-4">
          Why Sponsor MOP?
        </p>
        <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-light">
          Four pillars of <em className="text-yellow-400 not-italic">value.</em>
        </h2>
      </div>
      <div
        className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 
        bg-white/5 p-10 sm:p-6 rounded-xl  
      "
      >
        {pillars.map((pillar, i) => (
          <PillarCard
            key={pillar.title}
            pillar={pillar}
            animate={animate}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default WhySponsor;
