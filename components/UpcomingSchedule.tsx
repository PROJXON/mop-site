"use client";
import React, { useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

type SocialLink = {
  label: string;
  href?: string;
};

type EventItem = {
  title?: string;
  date?: string;
  sortKey?: string;
  social?: SocialLink[];
};

type CityBlock = {
  city: string;
  imageUrl?: string;
  events?: EventItem[];
};

type YearSection = {
  year: string;
  cities: CityBlock[];
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const UPCOMING_SCHEDULE: YearSection[] = [
  {
    year: "2026",
    cities: [
      {
        city: "Las Vegas",
        imageUrl: "/images/upcoming/klinoffice.png",
        events: [
          {
            title: `"Outdoor Mixer!"`,
            date: "October 3th, 2026",
            sortKey: "2026-10-03",
            social: [
              { label: "Link", href: "https://www.wework.com/" },
              { label: "Instagram", href: "https://www.instagram.com/wework" },
              { label: "Facebook", href: "https://www.facebook.com/WeWork/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/wework/posts/?feedView=all" },
            ],
          },
        ],
      },
      {
        city: "Chicago",
        imageUrl: "/images/upcoming/wework.png",
        events: [
          {
            title: `"Community Mixer!"`,
            date: "June 6th, 2026",
            sortKey: "2026-06-06",
            social: [
              { label: "Link", href: "https://www.wework.com/" },
              { label: "Instagram", href: "https://www.instagram.com/wework" },
              { label: "Facebook", href: "https://www.facebook.com/WeWork/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/wework/posts/?feedView=all" },
            ],
          },
        ],
      },
      {
        city: "San Francisco",
        imageUrl: "/images/upcoming/wework.png",
        events: [
          {
            title: `"Community Mixer!"`,
            date: "August 8th, 2026",
            sortKey: "2026-08-08",
            social: [
              { label: "Link", href: "https://kiln.com/" },
              { label: "Instagram", href: "https://www.instagram.com/kiln.co/" },
              { label: "Facebook", href: "https://www.facebook.com/gatheratkiln/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/gatheratkiln/posts/?feedView=all" },
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2027",
    cities: [
      { city: "Las Vegas", imageUrl: "/images/upcoming/dummy1.png", events: [{ date: "March, 2027", sortKey: "2027-03-01" }] },
      { city: "Los Angeles", imageUrl: "/images/upcoming/dummy2.png", events: [{ date: "June, 2027", sortKey: "2027-06-01" }] },
      { city: "Seattle", imageUrl: "/images/upcoming/dummy3.png", events: [{ date: "August, 2027", sortKey: "2027-08-01" }] },
    ],
  },
  {
    year: "2028",
    cities: [
      { city: "Las Vegas", imageUrl: "/images/upcoming/dummy1.png" },
      { city: "New York", imageUrl: "/images/upcoming/dummy2.png" },
      { city: "San Diego", imageUrl: "/images/upcoming/dummy3.png" },
    ],
  },
  {
    year: "2029",
    cities: [
      { city: "London", imageUrl: "/images/upcoming/dummy1.png" },
      { city: "Athens", imageUrl: "/images/upcoming/dummy2.png" },
      { city: "Mumbai", imageUrl: "/images/upcoming/dummy3.png" },
    ],
  },
];

const COMING_UP = UPCOMING_SCHEDULE.filter((y) => y.year === "2026");
const FUTURE = UPCOMING_SCHEDULE.filter((y) => parseInt(y.year) > 2026);

type Tab = "coming-up" | "future";

// ─── Social badge ──────────────────────────────────────────────────────────────

function SocialBadge({ link }: { link: SocialLink }) {
  const base =
    "inline-block px-3 py-1 text-[0.6rem] uppercase tracking-[0.15em] font-semibold border transition-all duration-200";
  if (link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-[var(--color-primary)]/50 text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)]`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {link.label}
      </a>
    );
  }
  return (
    <span
      className={`${base} border-white/20 text-white/30 cursor-not-allowed`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {link.label}
    </span>
  );
}

// ─── Editorial Card ────────────────────────────────────────────────────────────

function EditorialCard({
  city,
  event,
  yearLabel,
}: {
  city: CityBlock;
  event: EventItem | null;
  yearLabel: string;
}) {
  const isTBA = !event || (!event.title && !event.social);

  return (
    <article className="group relative overflow-hidden rounded-sm">
      {/* Image layer */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#111]">
        {city.imageUrl ? (
          <img
            src={city.imageUrl}
            alt={`${city.city} Momentum Office Party`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          /* Fallback: geometric dark tile */
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(45deg, #111 0px, #111 10px, #1a1a1a 10px, #1a1a1a 20px)",
            }}
          />
        )}

        {/* Gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* TBA overlay */}
        {isTBA && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border border-white/10 px-6 py-3 text-center backdrop-blur-sm">
              <p
                className="text-white/30 text-[0.6rem] uppercase tracking-[0.4em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Details TBA
              </p>
            </div>
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          {/* City + year */}
          <div className="flex items-end justify-between mb-2">
            <h3
              className="text-white text-2xl sm:text-3xl font-light leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {city.city}
            </h3>
          </div>

          {/* Gold rule */}
          <div className="w-8 h-[1px] bg-[var(--color-accent)] mb-3" />

          {event && (
            <div className="space-y-2">
              {event.title && (
                <p
                  className="text-white/90 text-base italic"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {event.title}
                </p>
              )}
              {event.date && (
                <p
                  className="text-white/50 text-xs uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {event.date}
                </p>
              )}
              {event.social && event.social.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {event.social.map((s) => (
                    <SocialBadge key={s.label} link={s} />
                  ))}
                </div>
              )}
            </div>
          )}

          {!event && (
            <p
              className="text-white/40 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Dates and themes to be announced.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Year block renderer ───────────────────────────────────────────────────────

function renderEntries(sections: YearSection[]) {
  return sections.map((section) => {
    const entries =
      section.cities.flatMap((city) =>
        city.events && city.events.length > 0
          ? city.events.map((event) => ({ city, event }))
          : [{ city, event: null as EventItem | null }]
      ) ?? [];

    entries.sort((a, b) => {
      const ak = a.event?.sortKey;
      const bk = b.event?.sortKey;
      if (ak && bk) return ak.localeCompare(bk);
      if (ak) return -1;
      if (bk) return 1;
      return a.city.city.localeCompare(b.city.city);
    });

    return (
      <div key={section.year} className="space-y-6">
        {/* Year label */}
        <div className="flex items-center gap-4">
          <span
            className="text-[var(--color-accent)] text-xl uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {section.year}
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries.map(({ city, event }, idx) => (
            <EditorialCard
              key={`${section.year}-${city.city}-${event?.sortKey ?? idx}`}
              city={city}
              event={event}
              yearLabel={section.year}
            />
          ))}
        </div>
      </div>
    );
  });
}

// ─── Main Component ────────────────────────────────────────────────────────────

const UpcomingSchedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("coming-up");

  return (
    <section
      className="py-16 lg:py-24"
      style={{ background: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Header */}
        <header className="mb-12 text-center">
          {/* Gold overline */}
          <p
            className="text-[var(--color-primary)] text-[0.65rem] uppercase tracking-[0.4em] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Momentum Office Party Roadmap
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Upcoming Events
          </h1>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
          </div>

          <p
            className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore the Momentum Office Party cities and mixers across the current roadmap.
          </p>
        </header>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-3">
          {(
            [
              { id: "coming-up", label: "Coming Up" },
              { id: "future", label: "Future" },
            ] as { id: Tab; label: string }[]
          ).map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`
                  px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300
                  ${isActive
                    ? "bg-[var(--color-primary)] text-black shadow-[0_0_24px_rgba(212,175,55,0.3)]"
                    : "border border-white/20 text-white/60 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
                  }
                `}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {activeTab === "coming-up"
            ? renderEntries(COMING_UP)
            : renderEntries(FUTURE)}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSchedule;