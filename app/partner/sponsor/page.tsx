import React from "react";
import { SponsorContact, SponsorsCTA } from "@/components/SponsorsCTA";
import MopAudienceMix from "@/components/MopAudienceMix";
import styles from "@/components/SponsorPage.module.css";
import { SponsorTiers } from "@/components/SponsorTiers";
import WhySponsor from "@/components/WhySponsor";
import ActivationsSection from "@/components/ActivationsSection";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TierProps {
  name: string;
  price: string;
  highlight: boolean;
  badge?: string;
  perks: string[];
  paymentLink: string;
}

interface DemographicProps {
  icon: string;
  label: string;
  percent: string;
  description: string;
}

interface ActivationProps {
  category: string;
  items: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TIERS: TierProps[] = [
  //
  // SELECT PACKAGE TO HIGHLIGHT
  //
  {
    name: "Silver",
    price: "$5,000",
    highlight: false,
    perks: [
      "Logo placement on all physical & digital assets",
      "2 VIP tickets to the event",
      "3 social media spotlight posts",
      "Brand mention in event communications",
      "Exhibitor table space",
    ],
    paymentLink:
      "https://buy.stripe.com/aFa28s1IL30haW1aNR8Zq07?locale=en&__embed_source=buy_btn_1SLehKLJQ9d7YBw35PflC49B",
  },
  {
    name: "Gold",
    price: "$10,000",
    highlight: true,
    badge: "Most Popular",
    perks: [
      "Everything in Silver",
      "2–3 minute stage spotlight moment",
      "3 VIP tickets to the event",
      "Podcast mention on The Phelan Focus",
      "Featured interview segment",
      "Priority logo placement",
    ],
    paymentLink:
      "https://buy.stripe.com/14AdRabjldEVd491dh8Zq06?locale=en&__embed_source=buy_btn_1SLefULJQ9d7YBw3ySeoStQQ",
  },
  {
    name: "Platinum",
    price: "$15,000",
    highlight: false,
    perks: [
      "Everything in Gold",
      "Category exclusivity — own your vertical",
      "5 VIP tickets to the event",
      "Recorded fireside chat with distribution",
      "Post-event ROI report (impressions, leads, engagement)",
      "Panel & workshop facilitation opportunity",
      "Dedicated email blast to full network",
    ],
    paymentLink:
      "https://buy.stripe.com/28E3cwevx0S93tz9JN8Zq05?locale=en&__embed_source=buy_btn_1SLebaLJQ9d7YBw3PehX4ohk",
  },
];

const DEMOGRAPHICS: DemographicProps[] = [
  {
    icon: "🚀",
    label: "Young Entrepreneurs",
    percent: "30%",
    description: "Founders & builders aged 21–35 actively scaling ventures",
  },
  {
    icon: "💼",
    label: "Mid-Career Professionals",
    percent: "50%",
    description: "Decision-makers driving strategy at growing companies",
  },
  {
    icon: "🏆",
    label: "Senior Executives",
    percent: "20%",
    description: "C-suite leaders, investors, and industry veterans",
  },
];

const ACTIVATIONS: ActivationProps[] = [
  {
    category: "On-Site",
    items: [
      "Branded exhibitor booth or activation space",
      "Stage time — spotlight, panel, or fireside chat",
      "Product demo zone with curated foot traffic",
      "Branded swag in VIP welcome kits",
      "Signage across venue — banners, screens, lanyards",
    ],
  },
  {
    category: "Digital",
    items: [
      "Logo on event website and all digital collateral",
      "Sponsored content across MOP social channels",
      "Email placement to 15,000+ subscriber network",
      "Co-branded Eventbrite listing feature",
      "Live event story takeovers and real-time tagging",
    ],
  },
  {
    category: "Content",
    items: [
      "Podcast guest spot on The Phelan Focus",
      "Recorded & distributed fireside chat",
      "Post-event recap video feature",
      "Quote & brand inclusion in press materials",
      "Testimonial & case study collaboration",
    ],
  },
];

const SponsorPage = () => (
  <div
    style={{
      background: "var(--color-background-2)",
    }}
  >
    {/* CTA section */}
    <SponsorsCTA />

    {/* Who you reach: Breakdown of attendees, linkedin reach, measurement metrics */}
    <MopAudienceMix />

    {/* sponsor benefits: what sponsors get */}
    <WhySponsor />

    <ActivationsSection />

    {/* Sponsorship packages */}
    <SponsorTiers tiers={TIERS} />

    {/* Event featueres, branding, and merch */}

    {/* Add-ons */}

    {/* Event services */}

    {/* Link to highlights page */}
    {/* Sponsor contact */}
    <SponsorContact />
  </div>
);

export { TIERS, DEMOGRAPHICS, ACTIVATIONS };

export default SponsorPage;
