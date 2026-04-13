"use client"

import { useRef, useState } from "react";

interface HighlightsVideoProps {
    videoSrc?: string;
    posterSrc?: string;
}

const HighlightsVideo: React.FC<HighlightsVideoProps> = ({ videoSrc = "/highlights.mp4", posterSrc }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    return (
        <div
            className="h-full relative rounded-xl overflow-hidden delay2 animate-fade-up"
            style={{
                aspectRatio: "16 / 9",
                boxShadow:
                    "0 0 0 1px rgba(212,175,55,0.15), 0 32px 80px rgba(0,0,0,0.6)",
            }}
        >
            <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Play/Pause button */}
            <button
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute bottom-4 left-4 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                style={{
                    width: 40,
                    height: 40,
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                }}
            >
                {playing ? (
                    /* Pause icon */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="1" width="4" height="12" rx="1" fill="white" />
                        <rect x="8" y="1" width="4" height="12" rx="1" fill="white" />
                    </svg>
                ) : (
                    /* Play icon */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default HighlightsVideo;