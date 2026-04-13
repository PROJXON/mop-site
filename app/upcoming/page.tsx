import React from "react";
import UpcomingSchedule from "@/components/UpcomingSchedule";
import HostCTA from "@/components/HostCTA";

export const metadata = {
  title: "Upcoming Events | Momentum Office Party",
  description: "Upcoming events for Momentum Office Party — curated conversations, intentional icebreakers, and building real community.",
  keywords: ["Upcoming Events", "Momentum Office Party", "Networking", "Las Vegas", "PROJXON", "Mark Phelan"],
  openGraph: {
    title: "Upcoming Events | Momentum Office Party",
    description: "Upcoming events for Momentum Office Party — curated conversations, intentional icebreakers, and building real community.",
    url: "https://www.momentumofficeparty.com/upcoming",
    siteName: "Momentum Office Party",
  }
};

const UpcomingPage: React.FC = () => {
  const email = "events@projxon.com";

  return (
    <div>
      <UpcomingSchedule />
      <HostCTA email={email} />
    </div>
  );
};

export default UpcomingPage;
