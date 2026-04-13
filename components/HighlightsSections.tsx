"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace with your actual filenames once moved to /public/highlights/

const IMAGES = [
  "/highlights/mop-photo-1.jpg",
  "/highlights/mop-photo-2.jpg",
  "/highlights/mop-photo-3.jpg",
  "/highlights/mop-photo-4.jpg",
];

// ─── Carousel ─────────────────────────────────────────────────────────────────

function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % IMAGES.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full lg:flex-1"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Main image */}
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{
          aspectRatio: "4 / 3",
          boxShadow:
            "0 0 0 1px rgba(212,175,55,0.12), 0 24px 60px rgba(0,0,0,0.5)",
        }}
      >
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`MOP event photo ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gold corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(225deg, rgba(212,175,55,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Photo count badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-widest"
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          {current + 1} / {IMAGES.length}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-4 px-1">
        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to photo ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background:
                  i === current
                    ? "var(--color-primary)"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              width: 36,
              height: 36,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 2L4 7L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              width: 36,
              height: 36,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 2L10 7L5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function HighlightsSections({ eventLink }: { eventLink: string }) {
  return (
    <section
      aria-label="Event Highlights"
      className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24"
      style={{ background: "var(--color-surface-2)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">
        {/* Photo carousel */}
        <PhotoCarousel />

        {/* Text */}
        <div className="flex flex-col gap-5 lg:flex-1">
          <p className="section-label">Past Events</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            High-Energy,{" "}
            <em style={{ color: "var(--color-primary)" }}>
              Professional Atmosphere
            </em>
          </h2>

          <div
            className="w-10 h-px"
            style={{ background: "rgba(212,175,55,0.4)" }}
          />

          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: 480,
            }}
          >
            The event successfully blended a polished cocktail-lounge feel with
            a creative, collaborative energy. By utilizing vibrant lighting and
            upbeat music, the organizers created a space where ambitious
            professionals felt both motivated and relaxed, allowing the energy
            to remain high throughout the evening.
          </p>

          <div className="flex gap-4 flex-wrap pt-2">
            <a
              href={eventLink}
              target="_blank"
              rel="noopener noreferrer"
              className="drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:scale-105 transition-transform"
              style={{
                background: "var(--color-primary)",
                color: "#000",
                padding: "0.85rem 2rem",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Tickets
            </a>
            <a
              href="/partner/sponsor"
              className="hover:scale-105 transition-transform"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.75)",
                padding: "0.85rem 2rem",
                fontWeight: 500,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s",
              }}
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
