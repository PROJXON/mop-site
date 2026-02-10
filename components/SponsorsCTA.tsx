import React from "react";
import Link from "next/link";

const SponsorsCTA = () => {
  return (
    <div
      style={{
        backgroundColor: "#E68A00",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 2rem",
        color: "#fff",
      }}
    >
      <div className="m-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Extend your reach through MOP </h1>
          <p className="py-6">
            Connect with emerging talents, unlock exclusive benefits, and
            elevate your brand presence. Join our community of sponsors making a
            difference.
          </p>
          <Link href="/partner/sponsor" className="btn btn-primary">
            Find sponsor packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorsCTA;
