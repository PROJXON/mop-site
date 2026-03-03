"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Highlights", href: "/highlights" },
  { label: "Upcoming Events", href: "/upcoming" },
  { label: "Sponsor", href: "/partner/sponsor" },
  { label: "FAQs", href: "/faq" },
];

const RSVP_HREF =
  "https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator";

const NavBarClean: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ── Desktop & Mobile Navbar ── */}
      <header className="sticky top-0 z-50 bg-base-100 shadow-md">
        <nav className="flex items-center gap-8 px-4 lg:px-8 h-16">
          {/* Left — Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Momentum Office Party logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline whitespace-nowrap">
              Momentum Office Party
            </span>
            <span className="font-bold text-lg sm:hidden">MOP</span>
          </Link>

          {/* Left — Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — RSVP (always visible) + mobile hamburger */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Link
              href={RSVP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm lg:btn-md"
            >
              RSVP Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Gold accent bar */}
        <div className="h-1 bg-primary" />
      </header>

      {/* ── Mobile Drawer ── */}
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-base-100 z-50 shadow-xl
          transform transition-transform duration-300 ease-in-out lg:hidden
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-base-200">
          <span className="font-bold text-base">Menu</span>
          <button
            className="btn btn-ghost btn-circle btn-sm"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="menu p-4 space-y-1 text-base">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-base py-3"
                onClick={() => setDrawerOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="divider mx-4" />

        <div className="px-4">
          <Link
            href={RSVP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
            onClick={() => setDrawerOpen(false)}
          >
            RSVP Now
          </Link>
        </div>
      </aside>
    </>
  );
};

export default NavBarClean;
