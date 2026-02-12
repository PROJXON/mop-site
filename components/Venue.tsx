"use client";

import React from "react";
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
      { url: "/Assembly Bar Area.jpg", alt: "Bar Area" },
      { url: "/Assembly Bar.jpg", alt: "Bar" },
      { url: "/Assembly Courtyard Angle.jpg", alt: "Courtyard Alt" },
      { url: "/Assembly Courtyard.jpg", alt: "Courtyard" },
      { url: "/Assembly High tops.jpg", alt: "High tops" },
      { url: "/Assembly Rount Tops.jpg", alt: "Rount Tops" },
    ],
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="carousel rounded-box w-[70vw]">
        <div className="carousel-item w-full">
          <img
            src={venue.images[1].url}
            alt={venue.images[1].alt}
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={venue.images[2].url}
            alt={venue.images[2].alt}
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={venue.images[3].url}
            alt={venue.images[3].alt}
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={venue.images[4].url}
            alt={venue.images[4].alt}
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={venue.images[5].url}
            alt={venue.images[5].alt}
            className="w-full"
          />
        </div>
      </div>
      <div className="ml-8">
        <h2 className="text-2xl font-bold mb-4">{venue.name}</h2>
        <p className="mb-2">
          <strong>Date:</strong> {venue.date}
        </p>
        <p className="mb-2">
          <strong>Time:</strong> {venue.time} ({venue.timezone})
        </p>
        <p className="mb-4">
          <strong>Address:</strong> {venue.address}
        </p>
        <div className="flex gap-4">
          <Link
            href={venue.websiteUrl}
            className="btn btn-primary text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </Link>
          <Link
            href={venue.linkedinUrl}
            className="btn btn-secondary text-primary"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href={venue.instagramUrl}
            className="btn btn-secondary text-primary"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VenueSection;
