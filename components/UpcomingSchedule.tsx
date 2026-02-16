 "use client";
import React, { useState } from "react";

type SocialLink = {
  label: string;
  href?: string;
};

type EventItem = {
  title?: string;
  date?: string;
  sortKey?: string; // ISO-like date string for ordering
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


const UPCOMING_SCHEDULE: YearSection[] = [
  {
    year: "2026",
    cities: [
      {
        city: "Las Vegas",
        imageUrl:
          "/images/upcoming/klinoffice.png",
        events: [
          {
            title: `"Outdoor Mixer!"`,
            date: "March 7th, 2026",
            sortKey: "2026-03-07",
            social: [
              { label: "Link", href: "https://kiln.com/" },
              { label: "Instagram", href: "https://www.instagram.com/kiln.co/" },
              { label: "Facebook", href: "https://www.facebook.com/gatheratkiln/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/gatheratkiln/posts/?feedView=all" },
            ],
          },
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
        imageUrl:
          "/images/upcoming/wework.png",
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
        imageUrl:
          "/images/upcoming/wework.png",
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
      {
        city: "Las Vegas",
        imageUrl:
          "/images/upcoming/dummy1.png",
        events: [
          {
            date: "March, 2027",
            sortKey: "2027-03-01",
          },
        ],
      },
      {
        city: "Los Angeles",
        imageUrl:
          "/images/upcoming/dummy2.png",
        events: [
          {
            date: "June, 2027",
            sortKey: "2027-06-01",
          },
        ],
      },
      {
        city: "Seattle",
        imageUrl:
          "/images/upcoming/dummy3.png",
        events: [
          {
            date: "August, 2027",
            sortKey: "2027-08-01",
          },
        ],
      },
    ],
  },
  {
    year: "2028",
    cities: [
      {
        city: "Las Vegas",
        imageUrl:
          "/images/upcoming/dummy1.png",
      },
      {
        city: "New York",
        imageUrl:
          "/images/upcoming/dummy2.png",
      },
      {
        city: "San Diego",
        imageUrl:
          "/images/upcoming/dummy3.png",
      },
    ],
  },
  {
    year: "2029",
    cities: [
      {
        city: "London",
        imageUrl:
          "/images/upcoming/dummy1.png",
      },
      {
        city: "Athens",
        imageUrl:
          "/images/upcoming/dummy2.png",
      },
      {
        city: "Mumbai",
        imageUrl:
          "/images/upcoming/dummy3.png",
      },
    ],
  },
];

const UpcomingSchedule: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  const activeSection = activeYear
    ? UPCOMING_SCHEDULE.find((y) => y.year === activeYear) ?? null
    : null;

  return (
    <section className="py-12 lg:py-16 bg-base-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Upcoming
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Explore the upcoming Momentum Office Party cities and mixers, based
            on the current roadmap.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {UPCOMING_SCHEDULE.map((yearSection) => {
            const isActive = activeYear === yearSection.year;
            return (
              <button
                key={yearSection.year}
                type="button"
                className={`btn btn-sm md:btn-md ${
                  isActive ? "btn-primary" : "btn-outline btn-primary"
                }`}
                onClick={() =>
                  setActiveYear(isActive ? null : yearSection.year)
                }
              >
                {yearSection.year}
              </button>
            );
          })}
        </div>

        {activeSection ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-l-4 border-primary pl-3">
              {activeSection.year}
            </h2>

            {(() => {
              const entries =
                activeSection.cities.flatMap((city) =>
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
                <div className="grid gap-6 md:grid-cols-2">
                  {entries.map(({ city, event }, idx) => (
                    <article
                      key={`${activeSection.year}-${city.city}-${event?.sortKey ?? idx}`}
                      className="card bg-base-200 shadow-sm border border-base-300/60"
                    >
                      {city.imageUrl && (
                        <figure className="h-40 w-full overflow-hidden rounded-t-2xl">
                          <img
                            src={city.imageUrl}
                            alt={`${city.city} Momentum Office Party location`}
                            className="h-full w-full object-cover"
                          />
                        </figure>
                      )}
                      <div className="card-body space-y-3">
                        <h3 className="text-xl font-semibold">{city.city}</h3>

                        {event ? (
                          <div className="rounded-lg bg-base-100/80 border border-base-300 p-3 space-y-1">
                            {event.title && (
                              <p className="font-medium">{event.title}</p>
                            )}
                            {event.date && (
                              <p className="text-sm text-base-content/70">
                                {event.date}
                              </p>
                            )}
                            {event.social && event.social.length > 0 && (
                              <div className="pt-1">
                                <div className="text-xs uppercase tracking-wide text-base-content/60 mb-1">
                                  Social
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {event.social.map((s) =>
                                    s.href ? (
                                      <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-xs btn-outline btn-primary"
                                      >
                                        {s.label}
                                      </a>
                                    ) : (
                                      <span
                                        key={s.label}
                                        className="btn btn-xs btn-outline btn-primary btn-disabled"
                                      >
                                        {s.label}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-base-content/70">
                            Details to be announced. Stay tuned for dates and
                            mixer themes in {city.city}.
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              );
            })()}
          </div>
        ) : (
          <p className="text-center text-base-content/60">
            Select a year above to view scheduled cities and mixers.
          </p>
        )}
      </div>
    </section>
  );
};

export default UpcomingSchedule;

