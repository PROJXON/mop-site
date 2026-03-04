import Info from "@/components/Info";
import WhyAttendMOP from "@/components/Whymop";
import SpeakerSection from "@/components/Speaker";
import Timeline from "@/components/Timeline";
import VenueSection from "@/components/Venue";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { EventDetails } from "@/components/EventDetail";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventDetails />

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
            name: "Mark W. Phelan",
            role: "Host",
            title: "CEO + Founder",
            company: "PROJXON",
            description:
              "Phelan is a Technical Program Manager, founder, and former U.S. Army officer with over 18 years of leadership experience and 12+ years delivering complex programs across cloud infrastructure, AI-enabled platforms, enterprise systems, and operations. Through PROJXON and The Phelan Focus, he helps founders, executives, and teams scale by building clear systems for execution, automation, and operational discipline—ensuring growth is driven by structure and strategy rather than burnout or guesswork. Known for a no-fluff approach, he focuses on practical frameworks, measurable outcomes, and disciplined leadership that turns plans into results.",
            imageUrl: "/speakers/Phelan.JPEG",
            linkedinUrl: "https://www.linkedin.com/in/phelanmarkw/",
          }}
        />
        <SpeakerSection
          speaker={{
            name: "Dave Burlin",
            role: "MC",
            title: "Founder",
            company: "Burlin Enterprises",
            description:
              "Dave Burlin is a United States Marine Corps Veteran, entrepreneur, and community builder known for connecting people, ideas, and opportunities across the Las Vegas business ecosystem. He serves as the Nevada State Coordinator for Global Entrepreneurship Week and works with VetsInTech to expand opportunities for Veterans in entrepreneurship and technology. Dave is also the creator of Freedom Week, an initiative dedicated to supporting Veteran entrepreneurs and strengthening the military-connected business community. Dave is the host of the Dave Means Business Podcast, where he explores leadership, partnerships, and the power of authentic relationships in business. In addition to his work in the entrepreneurial ecosystem, Dave has spent years in the event industry as a DJ and emcee, performing at more than 350 weddings and corporate events across the Las Vegas Valley with Choice Sound LV, helping expand their entertainment business while building a reputation for bringing energy, professionalism, and connection to every event he hosts. Dave believes that “networking is not about getting the next invoice — it’s about unlocking infinite opportunities in every person you meet.",
            imageUrl: "/speakers/DaveBurlin.jpg",
            linkedinUrl: "https://www.linkedin.com/in/daveburlin/",
          }}
        />
      </div>

      {/* The activity line up */}
      <Timeline />
      {/* Venue Section */}
      <VenueSection />

      {/* Be a part of the Experience */}
      <div className="flex flex-col items-center justify-center py-10 bg-black text-white">
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
            href="/partner/sponsor"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary ml-4 "
          >
            Sponsor
          </Link>
          <Link
            href="/partner/host"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary ml-4 "
          >
            Host
          </Link>
        </div>
      </div>
    </div>
  );
}
