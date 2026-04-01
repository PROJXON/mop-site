"use client";

import React, { useState } from "react";

interface AgendaItem {
    time: string;
    label: string;
    title: string;
    description: string;
}

const agendaItems: AgendaItem[] = [
    {
        time: "5:00 PM",
        label: "Doors Open",
        title: "Arrivals & Welcome",
        description: "Check-in, Cocktails, Introductions",
    },
    {
        time: "5:15 PM – 5:30 PM",
        label: "Networking 101",
        title: "Learn New Skills",
        description:
            "For those of you who are rusty or fresh on the networking scene",
    },
    {
        time: "5:30 PM – 5:40 PM",
        label: "Collaborative Activity",
        title: "Group 1",
        description: "Be the first to connect!",
    },
    {
        time: "6:00 PM – 6:10 PM",
        label: "Momentum Moment",
        title: "Round 1",
        description: 'Raffle + Speaker + Challenge 1 – "Name Badge Bingo"',
    },
    {
        time: "6:30 PM – 6:40 PM",
        label: "Collaborative Activity",
        title: "Group 2",
        description: "Connect with Crowd!",
    },
    {
        time: "7:00 PM – 7:10 PM",
        label: "Momentum Moment",
        title: "Round 2",
        description: 'Raffle + Speaker + Challenge 2 – "LinkedIn Limbo"',
    },
    {
        time: "7:30 PM – 7:40 PM",
        label: "Collaborative Activity",
        title: "Group 3",
        description: "Make New Connections",
    },
    {
        time: "8:00 PM – 8:10 PM",
        label: "Momentum Moment",
        title: "Round 3",
        description: 'Raffle + Speaker + Challenge 3 – "Coffee Connect"',
    },
    {
        time: "8:45 PM – 8:50 PM",
        label: "Last Call",
        title: "Wrap Up",
        description:
            "Wrap up Conversations, exchange Contacts, and set next chats.",
    },
    {
        time: "9:00 PM",
        label: "Doors Close",
        title: "Head to the After Party",
        description:
            "Guests leave energized, connected, and registered for the next event.",
    },
];

// ─── Mobile card: always fully expanded, left-side timeline ──────────────────
function MobileAgendaItem({ item }: { item: AgendaItem }) {
    return (
        <li className="relative flex gap-4 pl-10">
            {/* Dot on the left line */}
            <div className="absolute left-0 top-1 flex items-center justify-center w-8">
                <div className="w-3 h-3 rounded-full border-2 border-[var(--color-accent)] bg-[#1a1a1a]" />
            </div>

            {/* Card content */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs font-bold text-[var(--color-accent)] mb-0.5">{item.time}</p>
                <p className="text-xs italic text-white/50 mb-2">{item.label}</p>
                <p
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {item.title}
                </p>
                <p
                    className="text-xs italic text-white/60"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    {item.description}
                </p>
            </div>
        </li>
    );
}

// ─── Desktop card: alternating, hover-interactive ────────────────────────────
function DesktopAgendaItem({
    item,
    index,
}: {
    item: AgendaItem;
    index: number;
}) {
    const [hovered, setHovered] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <li className="relative flex items-center gap-0 group">
            {/* Left side — time label (even items) */}
            <div
                className={`w-[calc(50%-28px)] pr-6 flex flex-col items-end transition-all duration-300 ${isEven ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                {isEven && (
                    <div
                        className={`text-right transition-all duration-300 ${hovered ? "translate-x-[-4px] text-[var(--color-accent)]" : "text-white"
                            }`}
                    >
                        <span className="block text-base font-bold">
                            {item.time}
                        </span>
                        <span className="block text-sm italic text-white/60">
                            {item.label}
                        </span>
                    </div>
                )}
            </div>

            {/* Center dot */}
            <div className="relative z-10 flex items-center justify-center w-14 shrink-0">
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-300 cursor-pointer ${hovered
                        ? "bg-[var(--color-accent)] border-[var(--color-accent)] scale-125 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                        : "bg-transparent border-[var(--color-accent)]/60"
                        }`}
                />
            </div>

            {/* Right side — time label (odd items) */}
            <div
                className={`w-[calc(50%-28px)] pl-6 flex flex-col items-start transition-all duration-300 ${!isEven ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                {!isEven && (
                    <div
                        className={`text-left transition-all duration-300 ${hovered ? "translate-x-[4px] text-[var(--color-accent)]" : "text-white"
                            }`}
                    >
                        <span className="block text-base font-bold">
                            {item.time}
                        </span>
                        <span className="block text-sm italic text-white/60">
                            {item.label}
                        </span>
                    </div>
                )}
            </div>

            {/* Hover card */}
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`absolute ${isEven
                    ? "right-0 left-[calc(50%+28px)]"
                    : "left-0 right-[calc(50%+28px)]"
                    } cursor-pointer`}
            >
                <div
                    className={`rounded-xl border px-5 py-4 transition-all duration-300 ${hovered
                        ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)] shadow-[0_0_20px_rgba(212,175,55,0.25)] -translate-y-1"
                        : "bg-white/5 border-white/10"
                        }`}
                >
                    <p
                        className={`text-base font-bold mb-0.5 transition-colors duration-300 ${hovered ? "text-white" : "text-white/60"
                            }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {item.title}
                    </p>
                    <p
                        className="text-sm italic text-white/70"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        {item.description}
                    </p>
                </div>
            </div>
        </li>
    );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Timeline() {
    return (
        <section id="timeline" className="px-4 bg-[var(--color-surface)]">
            {/* Subtle red accent line at top */}
            <div className="w-24 mx-auto h-[2px] bg-[var(--color-accent)]" />

            <div className="pt-10 pb-16">
                {/* Header */}
                <div className="text-center mb-14 ">
                    <h2
                        className="text-4xl sm:text-5xl text-white mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Event Timeline
                    </h2>
                    <div className="flex items-center justify-center gap-3 my-4">
                        <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                        <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
                    </div>
                    <p
                        className="text-white/60 text-lg italic"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        An outline of the exciting activities planned for the evening
                    </p>
                </div>

                {/* ── Mobile layout (< md) ── */}
                <div className="md:hidden max-w-lg mx-auto relative">
                    {/* Left vertical line */}
                    <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-[#D4AF37]/20" />
                    <ul className="flex flex-col gap-6">
                        {agendaItems.map((item, index) => (
                            <MobileAgendaItem key={index} item={item} />
                        ))}
                    </ul>
                </div>

                {/* ── Desktop layout (≥ md) ── */}
                <div className="hidden md:block max-w-3xl mx-auto relative">
                    {/* Center vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#D4AF37]/20" />
                    <ul className="flex flex-col gap-8">
                        {agendaItems.map((item, index) => (
                            <DesktopAgendaItem key={index} item={item} index={index} />
                        ))}
                    </ul>
                </div>

            </div>

            {/* Subtle red accent line at top */}
            <div className="w-24 mx-auto h-[2px] bg-[var(--color-accent)]" />

        </section>
    );
}