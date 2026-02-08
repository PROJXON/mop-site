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
                className="inline-flex items-center gap-3 btn btn-outline btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
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
