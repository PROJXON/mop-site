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
    <section className="bg-#000000/.2 p-2 animate-fadeIn" id="audience">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 py-16 px-4 md:px-5 lg:max-w-10/12">
        <div>
          <p
            className="section-label mb-1"
            style={{ color: "var(--color-primary-content)" }}
          >
            Who You'll Reach
          </p>
          <h2
            className={styles.fontDisplay}
            style={{
              color: "var(--color-surface-2)",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            A room full of
            <br />
            <em style={{ color: "var(--color-primary)" }}>decision-makers.</em>
          </h2>
          <p
            style={{
              lineHeight: 1.8,
              fontSize: "0.95rem",
            }}
          >
            MOP attendees aren't passive participants — they're founders
            building companies, professionals closing deals, and executives
            shaping industries. Your brand earns real attention from people who
            act on it.
          </p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {DEMOGRAPHICS.map((demo, i) => (
            <DemographicBar key={demo.label} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MopAudienceMix;
