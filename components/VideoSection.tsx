import React from 'react';
import HighlightsVideo from './HighlightsVideo';
import Link from 'next/link';

const VideoSection = () => {
    return (
        <section className="bg-[var(--color-surface)]">
            {/* Subtle red accent line at top */}
            <div className="top-0 mx-auto w-24 h-[2px] bg-[var(--color-accent)]" />

            <div className="justify-center flex-col gap-4 pt-16">
                <p
                    className="text-white text-sm uppercase tracking-[0.2em] text-center mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Highlights
                </p>

                <h2
                    className="text-4xl sm:text-5xl text-white text-center mb-16"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    See the highlights of our latest event
                </h2>
            </div>

            <div className="mt-16 max-w-5xl mx-auto mb-16">
                <HighlightsVideo />
                <Link href="/highlights" className="mt-4 block text-center text-lg text-white/60 hover:text-white transition-colors duration-300">See More</Link>
            </div>

            {/* bottom accent */}
            <div className="mt-4 bottom-0 mx-auto w-24 h-[2px] bg-[var(--color-accent)]" />


        </section>
    )
}

export default VideoSection