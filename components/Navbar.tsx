import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBarClean: React.FC = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="navbar bg-base-100 px-4 lg:px-8 sticky top-0 z-50 shadow-md hover:cursor-pointer">
        {/* Left side - RSVP / Menu Toggle */}
        <div className="flex-1 lg:flex-none">
          {/* Mobile: Hamburger Menu */}
          <label htmlFor="mobile-drawer" className="btn btn-ghost lg:hidden">
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
          </label>

          {/* Desktop: RSVP Button */}
          <Link
            href="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator"
            target="_blank"
            className="btn btn-primary hidden lg:inline-flex"
          >
            RSVP Now
          </Link>
        </div>

        {/* Center - Logo and Title */}
        <div className="flex-none lg:flex-1 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Momentum Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <span className="text-lg lg:text-xl font-bold hidden sm:inline whitespace-nowrap">
              Momentum Office Party
            </span>
            <span className="text-lg font-bold sm:hidden">MOP</span>
          </Link>
        </div>

        {/* Right side - Menu / RSVP */}
        <div className="flex-1 lg:flex-none flex justify-end">
          {/* Desktop: Menu Icon Dropdown */}
          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-50 p-2 shadow-lg bg-base-100 rounded-box w-64"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/highlights">Highlights</Link>
              </li>
              <li>
                <Link href="/upcoming">Upcoming Events</Link>
              </li>
              <li>
                <details>
                  <summary>Partner</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/partner/sponsor">Sponsor</Link>
                    </li>
                    <li>
                      <Link href="/partner/host">Host Future Events</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Mobile: RSVP Button */}
          <Link
            href="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator"
            target="_blank"
            className="btn btn-[#D4AF37] btn-sm lg:hidden"
          >
            RSVP
          </Link>
        </div>
      </div>

      {/* Primary colored bar underneath */}
      <div className="h-1 bg-primary"></div>

      {/* Mobile Drawer */}
      <div className="drawer drawer-start lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-50">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100 space-y-2">
            {/* Close Button */}
            <li className="mb-4">
              <label
                htmlFor="mobile-drawer"
                className="btn btn-ghost btn-sm justify-start"
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
                Close
              </label>
            </li>

            <li>
              <Link href="/" className="text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/highlights" className="text-lg">
                Highlights
              </Link>
            </li>
            <li>
              <Link href="/upcoming" className="text-lg">
                Upcoming Events
              </Link>
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
            <li>
              <Link href="/faq" className="text-lg">
                FAQs
              </Link>
            </li>

            {/* Divider */}
            <div className="divider"></div>

            {/* RSVP in Drawer */}
            <li>
              <Link
                href="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator"
                target="_blank"
                className="btn btn-primary btn-block"
              >
                RSVP Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBarClean;
