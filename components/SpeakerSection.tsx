import React from 'react'
import SpeakerCard from './Speaker'

interface SpeakerProps {
    speaker: {
        name: string;
        role: string;
        title: string;
        company: string;
        description: string;
        imageUrl: string;
        linkedinUrl: string;
    };
}



const SpeakerSection = () => {
    return (
        <section id="speakers" className="flex flex-col items-center justify-center bg-[var(--color-surface)]">
            {/* Subtle red accent line at top */}
            <div className="w-24 h-[2px] bg-[var(--color-accent)]" />


            <div className="flex flex-col items-center justify-center py-10 bg-[var(--color-surface)]">
                <h2 className="text-white text-3xl font-bold mb-1">Meet the Speakers</h2>
                <p className="text-white/70 text-lg mb-6 text-center max-w-2xl italic">
                    Hear from the visionaries shaping Las Vegas's future.
                </p>
            </div>
            <SpeakerCard
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
            <div className="divider w-1/2 my-10 mx-auto" />
            <SpeakerCard
                speaker={{
                    name: "Dave Burlin",
                    role: "MC",
                    title: "Founder",
                    // VetsInTech; Nevada State Coordinator for Global Entrpreneurship week
                    company: "VetsInTech | State Coordinator for Global Entrpreneurship week",
                    description:
                        "Dave Burlin is a United States Marine Corps Veteran, entrepreneur, and community builder known for connecting people, ideas, and opportunities across the Las Vegas business ecosystem. He serves as the Nevada State Coordinator for Global Entrepreneurship Week and works with VetsInTech to expand opportunities for Veterans in entrepreneurship and technology. Dave is also the creator of Freedom Week, an initiative dedicated to supporting Veteran entrepreneurs and strengthening the military-connected business community. Dave is the host of the Dave Means Business Podcast, where he explores leadership, partnerships, and the power of authentic relationships in business. In addition to his work in the entrepreneurial ecosystem, Dave has spent years in the event industry as a DJ and emcee, performing at more than 350 weddings and corporate events across the Las Vegas Valley with Choice Sound LV, helping expand their entertainment business while building a reputation for bringing energy, professionalism, and connection to every event he hosts. Dave believes that “networking is not about getting the next invoice — it’s about unlocking infinite opportunities in every person you meet.",
                    imageUrl: "/speakers/DaveBurlin.jpg",
                    linkedinUrl: "https://www.linkedin.com/in/daveburlin/",
                }}
            />

            {/* Subtle red accent line at bottom */}
            <div className="w-24 h-[2px] bg-[var(--color-accent)]" />

        </section>
    )
}

export default SpeakerSection