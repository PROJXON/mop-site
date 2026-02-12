import React from "react";
import styles from "./WhoAttended.module.css";

interface AttendeeCategory {
  title: string;
  description: string;
}

const WhoAttended: React.FC = () => {
  const categories: AttendeeCategory[] = [
    {
      title: "Entrepreneurs and Founders",
      description:
        "Vision-driven founders connected, exchanged ideas, and explored future collaborations in a high-energy setting.",
    },
    {
      title: "Executives and Business Leaders",
      description:
        "Experienced leaders joined to strengthen relationships, recognize team success, and engage with the Momentum community.",
    },
    {
      title: "Corporate & Sales Teams",
      description:
        "High-performing teams celebrated achievements together while building meaningful professional connections.",
    },
    {
      title: "Digital Creators & Marketers",
      description:
        "Creative professionals expanded their network, shared insights, and captured memorable moments from the event.",
    },
    {
      title: "New Leaders & Rising Talent",
      description:
        "Emerging professionals gained exposure, inspiration, and valuable connections to support their growth journey.",
    },
    {
      title: "Recent Graduates",
      description:
        "The event provided a bridge for recent graduates to transition into the Las Vegas professional community, allowing them to learn success strategies directly from mentors who have walked their path.",
    },
  ];

  return (
    <section className={styles.whoAttended}>
      <h2 className="text-2xl text-center mb-5 mr-2">
        Connect with
        <span className="text-rotate">
          <span>
            <span className="bg-teal-100 text-teal-800 px-1">Founders</span>
            <span className="bg-red-100 text-red-800 px-1">Leaders</span>
            <span className="bg-yellow-100 text-yellow-800 px-1">
              Innovators
            </span>
            <span className="bg-blue-100 text-blue-800 px-1">
              Rising Talents
            </span>
          </span>
        </span>
      </h2>
      <div className={styles.attendeeGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.attendeeCard}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoAttended;
