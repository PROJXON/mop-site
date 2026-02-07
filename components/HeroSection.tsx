"use client";

import { useEffect, useRef } from "react";
import "./hero-scroll.css";
import CountdownTimer from "./Countdown";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.min(scrollPosition / heroHeight, 1);

      // Parallax effect: move background down at 50% of scroll speed
      const parallaxOffset = scrollPosition * 0.5;

      // Fade out effect: opacity from 1 to 0
      const opacity = 1 - scrollProgress;

      // Apply CSS variables
      heroRef.current.style.setProperty(
        "--scroll-offset",
        `${parallaxOffset}px`
      );
      heroRef.current.style.setProperty("--scroll-opacity", opacity.toString());
      heroRef.current.setAttribute("data-scroll", "true");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero hero-scroll-animate h-[85vh] bg-center bg-cover"
      style={{ backgroundImage: "url(/hero-bg.jpeg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="hero-title mb-5 text-6xl font-bold">
            Momentum Office Party 2026
          </h1>
          <p className="hero-date mb-3 text-xl">March 7th, 2026 • 3:00 PM</p>
          <p className="hero-description mb-8 text-lg opacity-90">
            Get ready for an amazing experience with your colleagues!
          </p>

          {/* Countdown Timer */}
          <div className="hero-countdown">
            <CountdownTimer targetDate="Mar 07, 2026 15:00:00" />
          </div>

          <div className="hero-buttons mt-8 flex gap-4 justify-center">
            <button className="btn btn-outline hover:bg-primary btn-lg">
              RSVP Now
            </button>
            <button className="btn btn-outline btn-lg">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
