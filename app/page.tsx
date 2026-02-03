import CountdownTimer from "@/components/Countdown";
import Info from "@/components/Info";
import WhyAttendMOP from "@/components/Whymop";
import SpeakerSection from "@/components/Speaker";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <section
        className="hero h-[85vh] bg-center bg-cover"
        style={{ backgroundImage: "url(/hero-bg.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-6xl font-bold">
              Momentum Office Party 2026
            </h1>
            <p className="mb-3 text-xl">March 7th, 2026 • 3:00 PM</p>
            <p className="mb-8 text-lg opacity-90">
              Get ready for an amazing experience with your colleagues!
            </p>

            {/* Countdown Timer */}
            <CountdownTimer targetDate="Mar 07, 2026 15:00:00" />

            <div className="mt-8 flex gap-4 justify-center">
              <button className="btn btn-primary btn-lg">RSVP Now</button>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      {/*  The Momentum Office party is a curated gathering designed for those who have outgrown traditional networking. Hosted by PROJXON at the sophisticated The Assembly by Kiln in Las Vegas, we’ve traded awkward icebreakers and empty business card swaps for intentional, high-level connections.

Set against a backdrop of mid-century modern design and a relaxed cocktail-lounge atmosphere, Momentum brings together a diverse collective of founders, executives, and rising innovators. This isn't just a mixer; it’s a space where ambition is the common language. Whether through structured group interactions or organic, one-on-one breakthroughs, you’ll enter a room of strangers and leave with a community of allies ready to fuel your next big move.

*/}
      <Info
        imageUrl="/mop-base.jpeg"
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
      <SpeakerSection
        speaker={{
          name: "Jane Doe",
          title: "Chief Innovation Officer",
          company: "TechCorp Inc.",
          description:
            "Jane Doe is a visionary leader with over 15 years of experience in driving innovation and growth in the tech industry. As Chief Innovation Officer at TechCorp Inc., she has spearheaded numerous successful initiatives that have transformed the company's product offerings and market presence. Jane is passionate about fostering a culture of creativity and collaboration, and she is dedicated to helping organizations unlock their full potential through strategic innovation.",
          imageUrl: "/speakers/jane-doe.jpg",
          linkedinUrl: "https://www.linkedin.com/in/janedoe",
        }}
      />
      {/* end of page */}
    </div>
  );
}
