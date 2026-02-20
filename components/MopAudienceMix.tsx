import React from "react";
import DemographicBar from "./DemographicBar";
import styles from "./SponsorPage.module.css";
import { DEMOGRAPHICS } from "@/app/partner/sponsor/page";

interface DemographicProps {
  icon: string;
  label: string;
  percent: string;
  description: string;
}

const MopAudienceMix: React.FC = () => {
  return (
    <section
      style={{
        margin: "2rem 8rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
      }}
      id="audience"
    >
      <div>
        <p className={styles.sectionLabel} style={{ marginBottom: "1rem" }}>
          Who You'll Reach
        </p>
        <h2
          className={styles.fontDisplay}
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "white",
            marginBottom: "1.5rem",
          }}
        >
          A room full of
          <br />
          <em style={{ color: "var(--gold)" }}>decision-makers.</em>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.8,
            fontSize: "0.95rem",
          }}
        >
          MOP attendees aren't passive participants — they're founders building
          companies, professionals closing deals, and executives shaping
          industries. Your brand earns real attention from people who act on it.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {DEMOGRAPHICS.map((demo, i) => (
          <DemographicBar key={demo.label} demo={demo} index={i} />
        ))}
      </div>
    </section>
  );
};

export default MopAudienceMix;
