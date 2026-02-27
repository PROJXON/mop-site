import React from "react";

interface VenueRequirement {
  icon: string;
  text: string;
}

const venueRequirements: VenueRequirement[] = [
  {
    icon: "◐",
    text: "Capacity for 80–200 attendees with a flexible seated + standing layout",
  },
  {
    icon: "◐",
    text: "Staging or small stage area with lighting and AV support",
  },
  {
    icon: "◐",
    text: "Attractive aesthetics — high ceilings, modern design, memorable character",
  },
  {
    icon: "◐",
    text: "Parking, elevators, accessibility features, and adequate restrooms",
  },
  {
    icon: "◐",
    text: "Strong WiFi and power infrastructure for presentations and streaming",
  },
  {
    icon: "◐",
    text: "Walkable neighborhood or accessible via public transit",
  },
];

const Host: React.FC = () => {
  return (
    <section id="hosts" className="relative px-6 py-24">
      {/* Subtle glow for hosts section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 45% at 85% 70%, rgba(255,215,0,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section label */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-primary]">
          Host a MOP Event
        </p>

        <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg font-[--font-display] text-4xl font-semibold leading-tight text-white md:text-5xl">
            Your space deserves an audience that appreciates it.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
            We bring a curated, high-energy crowd. You bring the space. Together
            we create something neither of us could pull off alone.
          </p>
        </div>

        {/* Two-column layout: requirements left, callout right */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Requirements list */}
          <div className="rounded-xl border border-[--color-border] bg-[--color-surface] p-8">
            <h3 className="mb-8 font-[--font-display] text-2xl font-semibold text-white">
              What We Look for in a Venue
            </h3>
            <ul className="space-y-5">
              {venueRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-base text-[--color-primary]"
                    aria-hidden="true"
                  >
                    ◆
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">
                    {req.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right callout card */}
          <div className="flex flex-col justify-between rounded-xl border border-[--color-primary]/20 bg-[--color-surface-2] p-8">
            <div>
              <div className="mb-6 inline-block rounded-full border border-[--color-primary]/30 bg-[--color-primary]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-primary]">
                Venue Partnership
              </div>
              <h3 className="mb-4 font-[--font-display] text-2xl font-semibold leading-snug text-white">
                What&apos;s in it for your space?
              </h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Exposure to 200+ professionals in one night",
                  "Revenue sharing opportunities",
                  "Featured in all MOP marketing & social content",
                  "A reusable portfolio moment — photos, video, press",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span
                      className="mt-0.5 text-[--color-primary]"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-[--color-border] bg-[--color-surface] p-4 text-xs leading-relaxed text-white/40">
              Every MOP event is a showcase for the venue. Past hosts have seen
              repeat bookings directly from attendees who discovered their space
              at the event.
            </div>
          </div>
        </div>

        {/* Hosts CTA block */}
        <div className="flex flex-col gap-8 rounded-2xl border border-[--color-border] bg-[--color-surface-2] p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-md">
            <h3 className="mb-3 font-[--font-display] text-3xl font-semibold leading-snug text-white">
              Think your space is the right fit?
            </h3>
            <p className="text-sm leading-relaxed text-white/55">
              We&apos;re selective about venues because the space shapes the
              experience. Tell us about your location and let&apos;s talk.
            </p>
          </div>
          <a
            href="mailto:partners@projxon.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[--color-primary] px-7 py-4 text-sm font-bold tracking-wide text-[--color-primary-content] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[--color-primary-hover]"
          >
            Pitch Your Venue
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Host;
