"use client";

import { useRef, useState } from "react";

interface HighlightsHeroProps {
  /**
   * Path to your video file placed in /public
   * e.g. "/highlights-2024.mp4"
   */
  videoSrc?: string;
  /**
   * Optional poster image shown before the video loads
   * e.g. "/highlights-poster.jpg"
   */
  posterSrc?: string;
}

export default function HighlightsHero({
  videoSrc = "/highlights.mp4",
  posterSrc,
}: HighlightsHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 px-6 sm:px-12 lg:px-20"
      style={{ background: "var(--color-background)" }}
      aria-label="MOP Highlights"
    >
      {/* Subtle gold glow top-left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Left: Text ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <p className="section-label">Las Vegas, NV · Momentum Office Party</p>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "white",
            }}
          >
            See what
            <br />
            <em
              style={{
                color: "var(--color-primary)",
                fontStyle: "italic",
              }}
            >
              MOP
            </em>{" "}
            is about.
          </h1>

          <p
            className="delay1 animate-fade-up"
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: 420,
            }}
          >
            Founders, executives, and creatives in one room. Real connections,
            real energy, real Las Vegas. This is the Momentum Office Party.
          </p>

          <div className="flex gap-4 flex-wrap delay2 animate-fade-up">
            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse hover:scale-105 transition-transform"
              style={{
                background: "var(--color-primary)",
                color: "#000",
                padding: "0.9rem 2.25rem",
                fontWeight: 700,
                fontSize: "0.75rem",
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
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.8)",
                padding: "0.9rem 2.25rem",
                fontWeight: 500,
                fontSize: "0.75rem",
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

          {/* Mini stats row */}
          <div
            className="delay3 animate-fade-up flex gap-8 pt-4 flex-wrap"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              marginTop: "0.5rem",
            }}
          >
            {[
              { value: "100+", label: "Attendees" },
              { value: "15K+", label: "Digital Reach" },
              { value: "Las Vegas", label: "Nevada" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--color-primary)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: 3,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Video ────────────────────────────────────────── */}
        <div
          className="relative rounded-xl overflow-hidden delay2 animate-fade-up"
          style={{
            aspectRatio: "16 / 9",
            boxShadow:
              "0 0 0 1px rgba(212,175,55,0.15), 0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute bottom-4 left-4 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              width: 40,
              height: 40,
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            {playing ? (
              /* Pause icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="1" width="4" height="12" rx="1" fill="white" />
                <rect x="8" y="1" width="4" height="12" rx="1" fill="white" />
              </svg>
            ) : (
              /* Play icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white" />
              </svg>
            )}
          </button>

          {/* Gold corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(225deg, rgba(212,175,55,0.3) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>

      {/* primary color short bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[3px]"
        style={{ background: "var(--color-primary)" }}
      />
    </section>
  );
}
