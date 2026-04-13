import Info from "@/components/Info";
import WhyAttendMOP from "@/components/Whymop";
import SpeakerSection from "@/components/SpeakerSection";
import Timeline from "@/components/Timeline";
import VenueSection from "@/components/Venue";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FeaturedOnTicker from "@/components/FeaturedOnTicker";
import SponsorsGrid from "@/components/SponsorsGrid";
import PartnersGrid from "@/components/PartnersGrid";
import VideoSection from "@/components/VideoSection";


export default function Home() {
  return (
    <div>
      <HeroSection />

      <Info
        imageUrl="/mop-base.png"
        title="What is the Momentum Office Party"
        descriptionpt1="The Momentum Office Party is a curated gathering for those who have outgrown traditional networking. Hosted by PROJXON at The Assembly by Kiln in Las Vegas, we’ve traded awkward icebreakers and surface-level exchanges for meaningful conversations that spark real collaboration and growth."
        descriptionpt2="Designed with intention and energy, Momentum brings together founders, executives, and emerging leaders ready to connect with purpose. This isn’t a casual mixer—it’s a space where ambition meets authenticity. Whether through guided discussions or natural, one-on-one breakthroughs, you’ll enter with curiosity and leave with a network that’s invested in your next move.
        "/>
      <VideoSection />

      <WhyAttendMOP />

      <SpeakerSection />

      <section id="partners">
        {/* Subtle red accent line at top */}
        <div className="w-24 mx-auto h-[2px] bg-[var(--color-accent)]" />

        {/* The activity line up */}
        <div className="py-10"></div>
        <FeaturedOnTicker />
        <div className="py-10"></div>
        <SponsorsGrid />
        <div className="py-10"></div>
        <PartnersGrid />
        <div className="py-10"></div>
        <div className="w-24 mx-auto h-[2px] bg-[var(--color-accent)]" />
      </section>

      <Timeline />
      {/* Venue Section */}
      <VenueSection />

      {/* Be a part of the Experience */}
      <div className="flex flex-col items-center justify-center py-10 bg-[var(--color-primary)] text-white">
        <h2 className="text-3xl text-secondary font-bold mb-1">
          Be a Part of the Experience
        </h2>
        <p className="text-lg text-secondary mb-6 text-center max-w-2xl italic">
          Elevate the Experience - Join us in shaping the future of networking.
        </p>
        <span className="text-secondary mx-10 text-center">
          By becoming a sponsor, you position your brand at the center of
          innovation and connect directly with Las Vegas's most ambitious
          professionals. Support the community that celebrates growth and
          success.
        </span>
        <div className="mt-6">
          <Link
            href="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator"
            target="_blank"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary hover:bg-[var(--color-accent)] hover:text-white"
          >
            RSVP
          </Link>
          <Link
            href="/partner/sponsor"
            className="btn btn-primary px-6 py-3 text-lg font-semibold text-secondary hover:bg-[var(--color-accent)] hover:text-white ml-4 "
          >
            Sponsor
          </Link>
        </div>
      </div>
    </div>
  );
}
