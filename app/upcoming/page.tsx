import React from "react";
import UpcomingSchedule from "@/components/UpcomingSchedule";
import HostCTA from "@/components/HostCTA";

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
