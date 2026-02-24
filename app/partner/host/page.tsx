import React from "react";
import PartnershipProgram from "@/components/PartnershipProgram";
import WhySponsor from "@/components/WhySponsor";
import Link from "next/link";
import Host from "@/components/Host";

const HostPage = () => (
  <div className="mx-auto py-8 gap-5 items-center justify-center bg-(--color-background-2)">
    {/* Hero / title */}
    <div className="text-center">
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-4">
        Join the MOP Partnership Program
      </h1>
      <p className="text-lg text-primary-content mb-6">
        Become a valued partner of MOP and gain exclusive access to our
        passionate community of music enthusiasts.
      </p>

      {/* links to partner section and host section */}
      <div>
        <Link href="#partnership-program" className="btn btn-primary">
          Explore Partnership Program
        </Link>
        <Link href="#hosts" className="btn btn-secondary ml-4">
          Host future events
        </Link>
      </div>
    </div>

    {/* Current Partners  - Partners card*/}

    {/* Partnership program */}
    <PartnershipProgram />
    <Host />
  </div>
);

export default HostPage;
