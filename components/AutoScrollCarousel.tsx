import React, { ReactNode } from "react";
import styles from "./AutoScrollCarousel.module.css";

interface AutoScrollCarouselProps {
  children: ReactNode;
  itemCount?: number;
}

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({
  children,
  itemCount,
}) => {
  // Count children if itemCount not provided
  const count = itemCount || React.Children.count(children);

  return (
    <div className={styles.autoScrollingCarouselHorizontal}>
      <div
        className={styles.carouselTrack}
        style={{ "--total-items": count } as React.CSSProperties}
      >
        {/* Original set of children */}
        {React.Children.map(children, (child, index) => (
          <div key={`original-${index}`} className={styles.carouselItem}>
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {React.Children.map(children, (child, index) => (
          <div key={`duplicate-${index}`} className={styles.carouselItem}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
