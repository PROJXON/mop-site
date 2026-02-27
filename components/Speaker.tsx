import React from "react";
import Link from "next/link";

interface Speaker {
  name: string;
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
    <div className="py-16 px-4 lg:px-8 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Speaker Image (40%) */}
          <div className="lg:w-2/5">
            <div className="relative hover-3d">
              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                className="w-full h-full rounded-2xl shadow-2xl object-cover aspect-square"
              />
              {/* Optional: Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Right side - Speaker Details (60%) */}
          <div className="lg:w-3/5 space-y-6">
            <div>
              <h3 className="text-4xl font-bold mb-2">{speaker.name}</h3>
              <p className="text-xl text-primary font-semibold">
                {speaker.title}
              </p>
              <p className="text-lg ">{speaker.company}</p>
            </div>

            <p className="text-lg leading-relaxed ">{speaker.description}</p>

            {/* LinkedIn Link */}
            <div className="pt-4">
              <Link
                href={speaker.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn btn-secondary text-sm font-medium transition-colors duration-200 hover:bg-primary/70 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
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
