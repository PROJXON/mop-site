interface HostCTAProps {
  email: string;
}

export default function HostCTA({ email }: HostCTAProps) {
  return (
    <section
      id="contact"
      style={{ background: "var(--color-background)" }}
      className="px-4 sm:px-12 lg:px-20 pb-20 sm:pb-28"
    >
      {/* Full-width gold rule */}
      <div className="w-full h-[1px] bg-white/10 mb-16" />

      <div className="max-w-4xl mx-auto text-center space-y-6">

        {/* Overline */}
        <p
          className="text-[var(--color-accent)] text-[0.65rem] uppercase tracking-[0.4em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Expand the Movement
        </p>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Host the Momentum Office Party at
          <br />
          <em className="text-[var(--color-accent)] not-italic">your Venue.</em>
        </h2>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
          <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
        </div>

        {/* Body */}
        <p
          className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Interested in bringing the Momentum Office Party experience to your market?
          Reach out and let's build something together.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <a
            href={`mailto:${email}`}
            className="
              inline-block px-10 py-4
              bg-[var(--color-primary)] text-black
              text-xs font-bold uppercase tracking-[0.2em]
              hover:bg-[var(--color-accent)] hover:scale-105
              transition-all duration-300
              shadow-[0_0_24px_rgba(212,175,55,0.2)]
            "
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get in Touch
          </a>
        </div>

        {/* Email shown below button */}
        <p
          className="text-white/25 text-xs tracking-[0.15em] pt-1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {email}
        </p>
      </div>
    </section>
  );
}
