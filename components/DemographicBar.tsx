"use client";

import { useEffect, useRef, useState } from "react";

interface DemographicProps {
  icon: string;
  label: string;
  percent: string;
  description: string;
}

export default function DemographicBar({
  demo,
  index,
}: {
  demo: DemographicProps;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-black text-white hover:shadow-lg hover:scale-105
        transition duration-200 p-6 sm:p-8 rounded-xl
        opacity-0 translate-y-8
        ${visible ? "animate-fade-up" : ""}
        space-y-3 lg:text-2xl
      `}
      style={{
        border: "1px solid black",
        animationDelay: visible ? `${index * 120}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <span className="text-2xl">{demo.icon}</span> */}
          <span className="font-semibold tracking-wide">
            {demo.label}
          </span>
        </div>
        <span className="font-display text-3xl">{demo.percent}</span>
      </div>
      <div className="h-px bg-[var(--color-accent)]/10 relative overflow-hidden">
        <div
          className="bg-[var(--color-accent)] absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
          style={{
            width: visible ? demo.percent : "0%",
            transitionDelay: `${index * 150}ms`,
          }}
        />
      </div>
      <p className="text-sm leading-relaxed">
        {demo.description}
      </p>
    </div>
  );
}
