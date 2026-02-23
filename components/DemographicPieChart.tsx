"use client";

import { useState } from "react";

export interface DemographicProps {
  icon: string;
  label: string;
  percent: string;
  description: string;
}

interface PieChartProps {
  data: DemographicProps[];
}

const SLICE_COLORS = [
  "#FF3B3B",
  "#0057FF",
  "#FF8C00",
  "#00B37A",
  "#9B30FF",
  "#FFD600",
  "#FF3E9D",
];

function getSlices(data: DemographicProps[]) {
  let cumulative = 0;
  return data.map((item, i) => {
    const pct = parseFloat(item.percent.replace("%", ""));
    const startAngle = cumulative;
    cumulative += pct;
    return {
      ...item,
      pct,
      startAngle,
      endAngle: cumulative,
      color: SLICE_COLORS[i % SLICE_COLORS.length],
    };
  });
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, (endAngle / 100) * 360);
  const end = polarToCartesian(cx, cy, r, (startAngle / 100) * 360);
  const largeArcFlag = endAngle - startAngle > 50 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

export default function DemographicPieChart({ data }: PieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const slices = getSlices(data);
  const cx = 160;
  const cy = 160;
  const r = 130;
  const innerR = 60;
  const active = activeIndex !== null ? slices[activeIndex] : null;

  return (
    <div
      data-testid="demographic-pie-chart"
      style={{
        fontFamily: "'DM Serif Display', 'Georgia', serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* SVG Pie */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <svg
            width={320}
            height={320}
            viewBox="0 0 320 320"
            role="img"
            aria-label="Demographic breakdown pie chart"
          >
            {slices.map((slice, i) => {
              const isActive = activeIndex === i;
              const path = describeArc(cx, cy, r, slice.startAngle, slice.endAngle);
              const midAngle =
                ((slice.startAngle + slice.endAngle) / 2 / 100) * 360 - 90;
              const rad = (midAngle * Math.PI) / 180;
              const offsetX = isActive ? Math.cos(rad) * 10 : 0;
              const offsetY = isActive ? Math.sin(rad) * 10 : 0;

              return (
                <g
                  key={i}
                  style={{
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  data-testid={`pie-slice-${i}`}
                >
                  <path
                    d={path}
                    fill={slice.color}
                    stroke="#fff"
                    strokeWidth={3}
                    style={{
                      filter: isActive
                        ? `drop-shadow(0 4px 16px ${slice.color}88)`
                        : "none",
                      transition: "filter 0.2s, opacity 0.2s",
                      opacity: activeIndex !== null && !isActive ? 0.45 : 1,
                    }}
                  />
                </g>
              );
            })}

            {/* Donut hole */}
            <circle cx={cx} cy={cy} r={innerR} fill="#fff" />

            {/* Center content */}
            {active ? (
              <>
                <text x={cx} y={cy - 10} textAnchor="middle" fontSize="26" dominantBaseline="middle">
                  {active.icon}
                </text>
                <text
                  x={cx}
                  y={cy + 16}
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="700"
                  fill={active.color}
                  fontFamily="'DM Mono', monospace"
                >
                  {active.percent}
                </text>
              </>
            ) : (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#aaa"
                fontFamily="'DM Mono', monospace"
              >
                HOVER A SLICE
              </text>
            )}
          </svg>
        </div>

        {/* Info Panel */}
        <div
          style={{
            minWidth: "220px",
            maxWidth: "300px",
            minHeight: "160px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {active ? (
            <div
              key={activeIndex}
              data-testid="active-slice-panel"
              style={{
                borderLeft: `4px solid ${active.color}`,
                paddingLeft: "1.25rem",
                animation: "fadeSlideIn 0.2s ease",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{active.icon}</div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: active.color,
                  textTransform: "uppercase",
                  marginBottom: "0.35rem",
                }}
              >
                {active.percent} of attendees
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  lineHeight: 1.2,
                  marginBottom: "0.6rem",
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                {active.label}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "#555",
                  lineHeight: 1.6,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {active.description}
              </div>
            </div>
          ) : (
            <div
              style={{
                color: "#ccc",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Select a segment to learn more about our attendees
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem 1.5rem",
          justifyContent: "center",
        }}
        data-testid="chart-legend"
      >
        {slices.map((slice, i) => (
          <button
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            data-testid={`legend-item-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.35rem 0.6rem",
              borderRadius: "4px",
              opacity: activeIndex !== null && activeIndex !== i ? 0.4 : 1,
              transition: "opacity 0.2s, background 0.15s",
              backgroundColor:
                activeIndex === i ? `${slice.color}12` : "transparent",
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: slice.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#333",
                fontWeight: activeIndex === i ? 700 : 400,
              }}
            >
              {slice.icon} {slice.label}
            </span>
          </button>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;700&family=DM+Sans:wght@400;700&display=swap');
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
