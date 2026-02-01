import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBarResponsive: React.FC = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="navbar bg-base-100 px-4 lg:px-8">
        {/* Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        {/* Left side - Logo and Name */}
        <div className="flex-1">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {/* Logo placeholder - replace with your actual logo */}
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-content font-bold text-xl">M</span>
            </div>
            <span className="text-lg lg:text-xl font-bold hidden sm:inline">
              Momentum Office Party
            </span>
            <span className="text-lg font-bold sm:hidden">Momentum</span>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1 gap-2">
            {/* Homepage Button */}
            <li>
              <Link href="/" className="btn btn-ghost">
                Homepage
              </Link>
            </li>

            {/* RSVP Button */}
            <li>
              <Link href="/rsvp" className="btn btn-ghost">
                RSVP
              </Link>
            </li>

            {/* Highlights Button */}
            <li>
              <Link href="/highlights" className="btn btn-ghost">
                Highlights
              </Link>
            </li>

            {/* Calendar Dropdown */}
            <li>
              <details>
                <summary className="btn btn-ghost">Calendar</summary>
                <ul className="p-2 bg-base-100 rounded-box z-50 w-52 shadow-lg">
                  <li>
                    <Link href="/events/upcoming">Upcoming Events</Link>
                  </li>
                  <li>
                    <Link href="/events/past">Past Events</Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Partner Dropdown */}
            <li>
              <details>
                <summary className="btn btn-ghost">Partner</summary>
                <ul className="p-2 bg-base-100 rounded-box z-50 w-52 shadow-lg">
                  <li>
                    <Link href="/partner/sponsor">Sponsor</Link>
                  </li>
                  <li>
                    <Link href="/partner/host">Host Future Events</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Grey bar underneath */}
      <div className="h-1 bg-gray-300"></div>

      {/* Mobile Drawer */}
      <div className="drawer drawer-end lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-50">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100">
            <li>
              <Link href="/" className="text-lg">
                Homepage
              </Link>
            </li>
            <li>
              <Link href="/rsvp" className="text-lg">
                RSVP
              </Link>
            </li>
            <li>
              <Link href="/highlights" className="text-lg">
                Highlights
              </Link>
            </li>

            {/* Calendar Section */}
            <li>
              <details>
                <summary className="text-lg">Calendar</summary>
                <ul>
                  <li>
                    <Link href="/events/upcoming">Upcoming Events</Link>
                  </li>
                  <li>
                    <Link href="/events/past">Past Events</Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Partner Section */}
            <li>
              <details>
                <summary className="text-lg">Partner</summary>
                <ul>
                  <li>
                    <Link href="/partner/sponsor">Sponsor</Link>
                  </li>
                  <li>
                    <Link href="/partner/host">Host Future Events</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBarResponsive;
