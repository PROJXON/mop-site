// app/Highlights/page.tsx
import React from "react";
import WhoAttended from "@/components/WhoAttended";
import Moments from "@/components/Moments";
import HighlightsHero from "@/components/HighlightsHero";
import HighlightsSections from "@/components/HighlightsSections";

const HighlightsPage = () => (
  <div>
    <HighlightsHero />
    <WhoAttended />
    <HighlightsSections />
  </div>
);

export default HighlightsPage;
