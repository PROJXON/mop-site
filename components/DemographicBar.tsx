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
    <div ref={ref} className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{demo.icon}</span>
          <span className="text-[var(--color-primary-hover)] font-semibold tracking-wide">
            {demo.label}
          </span>
        </div>
        <span className="font-display text-3xl text-black">{demo.percent}</span>
      </div>
      <div className="h-px bg-white/10 relative overflow-hidden">
        <div
          className="text-[var(--color-primary-hover)] absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
          style={{
            width: visible ? demo.percent : "0%",
            transitionDelay: `${index * 150}ms`,
          }}
        />
      </div>
      <p className="text-[var(--color-surface-2)] text-sm">
        {demo.description}
      </p>
    </div>
  );
}
