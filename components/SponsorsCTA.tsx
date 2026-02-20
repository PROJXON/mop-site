import React from "react";
import Link from "next/link";
import styles from "./SponsorPage.module.css";

const SponsorsCTA = () => {
  return (
    <section
      className={styles.heroGlow}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 4rem",
        background: "linear-gradient(to bottom, black, gold)",
        position: "relative",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div style={{ position: "relative", maxWidth: 800 }}>
        <p
          className="section-label animate-fade-up"
          style={{
            marginBottom: "1.5rem",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
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
            color: "white",
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
          }}
        >
          Sponsor the
          <br />
          <span style={{ color: "var(--gold)" }}>Movement.</span>
        </h1>
        <p
          className="animate-fade-up delay-2"
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.5)",
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
            className="cta-pulse"
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
            href="mailto:sponsorships@projxon.com"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
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
            borderTop: "1px solid rgba(212,175,55,0.15)",
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
                  color: "white",
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
    </section>
  );
};

export default SponsorsCTA;
