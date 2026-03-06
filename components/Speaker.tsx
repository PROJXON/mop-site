import React from "react";
import Link from "next/link";

interface Speaker {
  name: string;
  role: string;
  title: string;
  company: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

interface SpeakerSectionProps {
  speaker: Speaker;
}

const SpeakerSection: React.FC<SpeakerSectionProps> = ({ speaker }) => {
  return (
    <div className="py-16 px-4 lg:px-8 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — Image */}
          <div className="lg:w-2/5">
            <div className="relative">
              {/* Gold corner accent — top left */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-sm z-10 pointer-events-none" />
              {/* Gold corner accent — bottom right */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] rounded-br-sm z-10 pointer-events-none" />

              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                className="w-full rounded-lg shadow-2xl object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Gold glow behind image */}
              <div className="absolute inset-0 rounded-lg shadow-[0_0_60px_rgba(212,175,55,0.15)] pointer-events-none" />
            </div>
          </div>

          {/* Right — Details */}
          <div className="lg:w-3/5 space-y-6">

            {/* Gold overline */}
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--font-body)" }}>
              Featured Speaker
            </p>

            {/* Name */}
            <h3
              className="text-5xl sm:text-6xl font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {speaker.name}
            </h3>

            {/* Gold divider */}
            <div className="w-12 h-[2px] bg-[#D4AF37]" />

            {/* Role / title / company */}
            <div className="space-y-1">
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold"
                style={{ fontFamily: "var(--font-body)" }}>
                {speaker.role}
              </p>
              <p className="text-white/90 text-xl"
                style={{ fontFamily: "var(--font-display)" }}>
                {speaker.title}
              </p>
              <p className="text-white/50 text-base uppercase tracking-widest text-sm"
                style={{ fontFamily: "var(--font-body)" }}>
                {speaker.company}
              </p>
            </div>

            {/* Description */}
            <p className="text-white/70 text-base leading-relaxed border-l-2 border-[#D4AF37]/40 pl-5"
              style={{ fontFamily: "var(--font-body)" }}>
              {speaker.description}
            </p>

            {/* LinkedIn CTA */}
            <div className="pt-2">
              <Link
                href={speaker.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  border border-[#D4AF37] text-[#D4AF37]
                  px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold
                  hover:bg-[#D4AF37] hover:text-black
                  transition-all duration-300
                "
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                Find on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;