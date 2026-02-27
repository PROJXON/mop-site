import { Calendar, Clock, MapPin, LucideIcon } from "lucide-react";

interface EventDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
}

const details: EventDetail[] = [
  {
    icon: Calendar,
    label: "Date",
    value: "March 7, 2026",
    subtext: "Friday Evening",
  },
  {
    icon: Clock,
    label: "Time",
    value: "5:00 PM - 9:00 PM",
    subtext: "PST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "The Assembly",
    subtext: "Las Vegas, Nevada",
  },
];

export function EventDetails() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl text-[#2B2B2B] text-center mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Event Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.label}
                className="bg-white border border-[#D4AF37]/20 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 rounded-full mb-4">
                  <Icon className="text-[#D4AF37]" size={28} />
                </div>
                <h3
                  className="text-[#2B2B2B] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {detail.label}
                </h3>
                <p
                  className="text-xl text-[#2B2B2B] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {detail.value}
                </p>
                <p
                  className="text-[#2B2B2B]/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {detail.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
