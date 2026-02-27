"use client";

import CountdownTimer from "./Countdown";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] min-h-[600px] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url(/hero-bg.jpeg)" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D4AF37]" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        {/* Eyebrow label */}
        <p
          className="text-[#D4AF37] text-sm uppercase tracking-[0.25em] mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Projxon Presents
        </p>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Momentum Office Party
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
        </div>

        <p
          className="text-2xl sm:text-3xl italic text-white/90 mb-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Elevate Your Network
        </p>

        <p
          className="text-base text-white/60 mb-10 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-body)" }}
        >
          March 7th, 2026 &bull; 5:00 PM &bull; Las Vegas, NV
        </p>

        {/* Countdown */}
        <div className="mb-10">
          <CountdownTimer targetDate="Mar 07, 2026 20:00:00" />
        </div>

        {/* CTA */}
        <Link
          href="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator"
          target="_blank"
          className="inline-block px-10 py-4 bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-[0.15em] rounded hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-lg shadow-black/30"
          style={{ fontFamily: "var(--font-body)" }}
        >
          RSVP Now
        </Link>
      </div>
    </section>
  );
}
