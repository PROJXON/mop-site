import Info from "@/components/Info";
import WhyAttendMOP from "@/components/Whymop";
import SpeakerSection from "@/components/Speaker";
import Timeline from "@/components/Timeline";
import VenueSection from "@/components/Venue";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Info
        imageUrl="/mop-base.png"
        title="What is the Momentum Office Party"
        descriptionpt1="The Momentum Office party is a curated gathering designed for those who have outgrown traditional networking.
         Hosted by PROJXON at the sophisticated The Assembly by Kiln in Las Vegas, 
         we’ve traded awkward icebreakers and empty business card swaps for intentional, high-level connections."
        descriptionpt2="Set against a backdrop of mid-century modern design and a relaxed cocktail-lounge atmosphere, 
        Momentum brings together a diverse collective of founders, executives, and rising innovators. 
        This isn't just a mixer; it’s a space where ambition is the common language. 
        Whether through structured group interactions or organic, one-on-one breakthroughs, you’ll enter a room of strangers and leave with 
        a community of allies ready to fuel your next big move."
      />

      <WhyAttendMOP />
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-3xl font-bold mb-1">Meet the Speakers</h2>
        <p className="text-lg mb-6 text-center max-w-2xl italic">
          Hear from the visionaries shaping Las Vegas's future.
        </p>
        <SpeakerSection
          speaker={{
            name: "Jane Doe",
            title: "Chief Innovation Officer",
            company: "TechCorp Inc.",
            description:
              "Jane Doe is a visionary leader with over 15 years of experience in driving innovation and growth in the tech industry. As Chief Innovation Officer at TechCorp Inc., she has spearheaded numerous successful initiatives that have transformed the company's product offerings and market presence. Jane is passionate about fostering a culture of creativity and collaboration, and she is dedicated to helping organizations unlock their full potential through strategic innovation.",
            imageUrl: "/speakers/PhelanM.jpeg",
            linkedinUrl: "https://www.linkedin.com/in/janedoe",
          }}
        />
        <SpeakerSection
          speaker={{
            name: "Jane Doe",
            title: "Chief Innovation Officer",
            company: "TechCorp Inc.",
            description:
              "Jane Doe is a visionary leader with over 15 years of experience in driving innovation and growth in the tech industry. As Chief Innovation Officer at TechCorp Inc., she has spearheaded numerous successful initiatives that have transformed the company's product offerings and market presence. Jane is passionate about fostering a culture of creativity and collaboration, and she is dedicated to helping organizations unlock their full potential through strategic innovation.",
            imageUrl: "/speakers/PhelanM.jpeg",
            linkedinUrl: "https://www.linkedin.com/in/janedoe",
          }}
        />
        <SpeakerSection
          speaker={{
            name: "Jane Doe",
            title: "Chief Innovation Officer",
            company: "TechCorp Inc.",
            description:
              "Jane Doe is a visionary leader with over 15 years of experience in driving innovation and growth in the tech industry. As Chief Innovation Officer at TechCorp Inc., she has spearheaded numerous successful initiatives that have transformed the company's product offerings and market presence. Jane is passionate about fostering a culture of creativity and collaboration, and she is dedicated to helping organizations unlock their full potential through strategic innovation.",
            imageUrl: "/speakers/PhelanM.jpeg",
            linkedinUrl: "https://www.linkedin.com/in/janedoe",
          }}
        />
      </div>

      {/* The activity line up */}
      <Timeline />
      {/* Venue Section */}
      <VenueSection />

      {/* Be a part of the Experience */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-3xl font-bold mb-1">Be a Part of the Experience</h2>
        <p className="text-lg mb-6 text-center max-w-2xl italic">
          Elevate the Experience - Join us in shaping the future of networking.
        </p>
        <span>
          By becoming a sponsor or host, you position your brand at the center
          of innovation and connect directly with Las Vegas's most ambitious
          professionals. Support the community that celebrates growth and
          success.
        </span>
        <div className="mt-6">
          <Link
            href="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator"
            target="_blank"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary "
          >
            RSVP
          </Link>
          <Link
            href="/sponsor"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary ml-4 "
          >
            Sponsor
          </Link>
          <Link
            href="/host"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary ml-4 "
          >
            Host
          </Link>
        </div>
      </div>
    </div>
  );
}
