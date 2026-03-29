import React from 'react';
import HighlightsVideo from './HighlightsVideo';
import Link from 'next/link';

const VideoSection = () => {
    return (
        <section className="bg-[var(--color-surface)] py-16">
            <div className="justify-center flex-col gap-4">
                <div className="font-display text-center justify-center text-white">
                    Highlights
                </div>
                <div className="text-center justify-center text-white text-3xl">
                    See the highlights of our latest event
                </div>
            </div>

            <div className="mt-16 max-w-7xl mx-auto mb-16">
                <HighlightsVideo />
                <Link href="/highlights" className="mt-4 block text-center text-lg text-accent">See More</Link>
            </div>
        </section>
    )
}

export default VideoSection