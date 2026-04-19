// app/Highlights/page.tsx
import React from "react";
import WhoAttended from "@/components/WhoAttended";
import Moments from "@/components/Moments";
import HighlightsHero from "@/components/HighlightsHero";
import HighlightsSections from "@/components/HighlightsSections";

export const metadata = {
  title: "Highlights | Momentum Office Party",
  description:
    "Highlights from Momentum Office Party — curated conversations, intentional icebreakers, and building real community.",
};

const HighlightsPage = () => (
  <div>
    <HighlightsHero />
    <WhoAttended />
    <HighlightsSections eventLink="https://www.eventbrite.com/e/momentum-office-party-networking-las-vegas-spring-social-tickets-1980690107430?aff=oddtdtcreator" />
  </div>
);

export default HighlightsPage;
