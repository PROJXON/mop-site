import React from "react";
import Link from "next/link";
import styles from "./SponsorPage.module.css";

const SponsorsCTA = () => {
  return (
    <section
      className="hero-glow"
      style={{
        // Background gradient with subtle animation
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/networking.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        animation: "glowAnimation 15s linear infinite",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div className="card bg-white  my-5 lg:px-30 py-10 opacity-90">
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundSize: "80px 80px",
          }}
        />

        <div style={{ position: "relative", maxWidth: 800 }}>
          <p
            className="section-label animate-fade-up"
            style={{
              marginBottom: "1.5rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              color: "var(--color-primary-active)",
            }}
          >
            Las Vegas, NV · Momentum Office Party
          </p>
          <h1
            className="font-display animate-fade-up delay-1"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              lineHeight: 1,
              fontWeight: 300,
              color: "var(--color-primary-content)",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
            }}
          >
            Sponsor the
            <br />
            <span style={{ color: "var(--color-primary-active)" }}>
              Movement.
            </span>
          </h1>
          <p
            className="animate-fade-up delay-2"
            style={{
              fontSize: "1.1rem",
              color: "var(--color-primary-content)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto 3rem",
            }}
          >
            MOP is where Las Vegas's most ambitious founders, executives, and
            creatives converge. Put your brand at the center of it.
          </p>

          <div
            className="animate-fade-up delay-3"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#tiers"
              className="cta-pulse hover:scale-105 transition-transform"
              style={{
                background: "var(--color-secondary)",
                color: "var(--color-primary)",
                padding: "1rem 2.5rem",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View Sponsorship Tiers
            </a>
            <a
              className="hover:scale-105 transition-transform"
              href="mailto:sponsorships@projxon.com"
              style={{
                border: "var(--color-secondary) 2px solid",
                color: "var(--color-primary-content)",
                padding: "1rem 2.5rem",
                fontWeight: 500,
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s",
              }}
            >
              Talk to a Coordinator
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="animate-fade-up delay-4"
            style={{
              display: "flex",
              gap: "3rem",
              justifyContent: "center",
              marginTop: "5rem",
              padding: "2rem",
              borderTop: "1px solid var(--color-surface)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "100+", label: "Members" },
              { value: "15,000+", label: "Digital Reach" },
              { value: "3", label: "Sponsor Tiers" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p
                  className="font-display "
                  style={{
                    fontSize: "2.5rem",
                    color: "black",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "black",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SponsorContact = () => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 0 6rem",
        color: "var(--color-surface-2)",
      }}
    >
      <p className="section-label" style={{ marginBottom: "1.5rem" }}>
        Ready to Partner?
      </p>
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          fontWeight: 300,
          color: "black",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}
      >
        Let's build something
        <br />
        <em style={{ color: "var(--color-primary-active)" }}>together.</em>
      </h2>
      <p
        style={{
          fontSize: "1rem",
          maxWidth: 480,
          margin: "0 auto 3rem",
          lineHeight: 1.7,
        }}
      >
        Reach out directly and a sponsorship coordinator will respond within 24
        hours to walk you through the right package for your brand.
      </p>

      <a
        href="mailto:sponsorships@projxon.com"
        className="cta-pulse"
        style={{
          display: "inline-block",
          background: "black",
          color: "var(--color-primary)",
          padding: "1.1rem 3rem",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          marginBottom: "2rem",
        }}
      >
        Contact a Sponsorship Coordinator
      </a>

      <p
        style={{
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
        }}
      >
        sponsorships@projxon.com
      </p>
    </section>
  );
};

export { SponsorsCTA, SponsorContact };
