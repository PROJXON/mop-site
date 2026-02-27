"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface VenueImage {
  url: string;
  alt: string;
}

interface VenueDetails {
  name: string;
  date: string;
  time: string;
  timezone: string;
  address: string;
  websiteUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  images: VenueImage[];
}

const VenueSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const venue: VenueDetails = {
    name: "The Assembly by Kiln",
    date: "March 7th, 2026",
    time: "5pm - 9pm",
    timezone: "PST",
    address: "8460 Rozita Lee Ave, Las Vegas, NV 89113",
    websiteUrl: "https://kiln.com/communities/las-vegas-assembly/",
    linkedinUrl: "https://linkedin.com/company/theassemblybykiln",
    instagramUrl: "https://instagram.com/theassemblybykiln",
    images: [
      {
        url: "/Venue/Assembly Bar.jpg",
        alt: "Assembly Bar - Full service beverage station",
      },
      {
        url: "/Venue/Assembly Courtyard Angle.jpg",
        alt: "Assembly Courtyard - Outdoor gathering space",
      },
      {
        url: "/Venue/Assembly Courtyard.jpg",
        alt: "Assembly Courtyard - Main outdoor venue",
      },
      {
        url: "/Venue/Assembly High tops.jpg",
        alt: "Assembly High tops - Standing collaboration area",
      },
      {
        url: "/Venue/Assembly Rount Tops.jpg",
        alt: "Assembly Round Tables - Intimate discussion areas",
      },
    ],
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
    }, 5000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, venue.images.length]);

  const handlePrevImage = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex(
      (prev) => (prev - 1 + venue.images.length) % venue.images.length
    );
  };

  const handleNextImage = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentImageIndex(index);
  };

  return (
    <section className="bg-neutral-900/50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 animate-fade-up">
          <p className="section-label mb-3">Event Details</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2">
            Where we gather.
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            A thoughtfully curated venue in the heart of Las Vegas, designed for
            meaningful connections and premium experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Carousel - Left on desktop, top on mobile */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Image Container */}
            <div
              ref={carouselRef}
              className="relative bg-black/40 rounded-xl overflow-hidden aspect-video border border-white/10"
            >
              {/* Images */}
              {venue.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                    quality={85}
                  />
                </div>
              ))}

              {/* Navigation Buttons - Visible on all screens */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-yellow-400/70 text-white hover:text-black transition-all duration-200 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-yellow-400/70 text-white hover:text-black transition-all duration-200 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <p className="text-white/80 text-xs sm:text-sm font-medium">
                  {currentImageIndex + 1} / {venue.images.length}
                </p>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 justify-center sm:justify-start flex-wrap">
              {venue.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex
                      ? "bg-yellow-400 w-3 h-3"
                      : "bg-white/30 hover:bg-white/50 w-2.5 h-2.5"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentImageIndex}
                />
              ))}
            </div>
          </div>

          {/* Venue Details - Right on desktop, bottom on mobile */}
          <div className="flex flex-col justify-start">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-white/20 transition-colors duration-300">
              {/* Venue Name */}
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-6">
                {venue.name}
              </h3>

              {/* Event Details */}
              <div className="space-y-4 mb-8">
                {/* Date */}
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 mt-0.5 text-lg flex-shrink-0">
                    📅
                  </span>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-widest font-medium">
                      Date
                    </p>
                    <p className="text-white text-sm sm:text-base font-medium">
                      {venue.date}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 mt-0.5 text-lg flex-shrink-0">
                    🕐
                  </span>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-widest font-medium">
                      Time
                    </p>
                    <p className="text-white text-sm sm:text-base font-medium">
                      {venue.time} {venue.timezone}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-3 items-start">
                  <span className="text-yellow-400 mt-0.5 text-lg flex-shrink-0">
                    📍
                  </span>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-widest font-medium">
                      Location
                    </p>
                    <p className="text-white text-sm sm:text-base font-medium">
                      {venue.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-8" />

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={venue.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-yellow-400/10 border border-yellow-400/30 hover:border-yellow-400/70 hover:bg-yellow-400/20 text-yellow-400 py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium"
                >
                  Visit Website
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                <div className="flex gap-2">
                  <a
                    href={venue.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white py-2.5 px-3 rounded-lg transition-all duration-200 text-sm font-medium"
                    aria-label="Visit LinkedIn"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={venue.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white py-2.5 px-3 rounded-lg transition-all duration-200 text-sm font-medium"
                    aria-label="Visit Instagram"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
