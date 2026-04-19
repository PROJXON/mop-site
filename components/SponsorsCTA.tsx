// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: Stat[] = [
  { value: "100+", label: "Members" },
  { value: "15,000+", label: "Digital Reach" },
  { value: "3", label: "Sponsor Tiers" },
];

// ─── SponsorsCTA ──────────────────────────────────────────────────────────────

const SponsorsCTA = () => {
  return (
    <section
      className="hero-glow flex flex-col items-center justify-center text-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sponsorwall.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        animation: "glowAnimation 15s linear infinite",
        minHeight: "85vh",
      }}
    >
      <div className="card bg-white my-5 lg:px-30 py-10 opacity-90">
        <div style={{ position: "relative", maxWidth: 800 }}>

          {/* Overline */}
          <p
            className="section-label animate-fade-up"
            style={{
              marginBottom: "1.5rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              color: "var(--color-primary-active)",
            }}
          >
            Las Vegas, NV · Momentum Office Party
          </p>

          {/* Headline */}
          <h1
            className="font-display animate-fade-up delay-1"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              lineHeight: 1,
              fontWeight: 300,
              color: "var(--color-primary-content)",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
            }}
          >
            Sponsor the
            <br />
            <span style={{ color: "var(--color-primary-active)" }}>
              Movement.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-up delay-2"
            style={{
              fontSize: "1.1rem",
              color: "var(--color-primary-content)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto 3rem",
            }}
          >
            MOP is where Las Vegas's most ambitious founders, executives, and
            creatives converge. Put your brand at the center of it.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-3 flex flex-wrap justify-center gap-4">
            <a
              href="#tiers"
              className="bg-black text-white hover:scale-105 transition-transform"
              style={{
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
              href="mailto:events@projxon.com"
              className="border border-black bg-white text-black hover:scale-105 transition-all duration-200"
              style={{
                padding: "1rem 2.5rem",
                fontWeight: 500,
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Talk to a Coordinator
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="animate-fade-up delay-4 flex flex-wrap justify-center gap-12"
            style={{
              marginTop: "5rem",
              padding: "2rem",
              borderTop: "1px solid var(--color-surface)",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-display"
                  style={{ fontSize: "2.5rem", color: "black", lineHeight: 1 }}
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
      </div>
    </section>
  );
};

// ─── SponsorContact ───────────────────────────────────────────────────────────

const SponsorContact = () => {
  const EMAIL = "events@projxon.com";

  return (
    <section className="text-center py-8 pb-24 text-[var(--color-surface-2)] bg-black/20">

      <p className="section-label" style={{ marginBottom: "1.5rem" }}>
        Ready to Partner?
      </p>

      <h2
        className="font-display"
        style={{
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          fontWeight: 300,
          color: "black",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}
      >
        Let's build something
        <br />
        <em style={{ color: "var(--color-primary)" }}>together.</em>
      </h2>

      <p
        style={{
          fontSize: "1rem",
          maxWidth: 480,
          margin: "0 auto 3rem",
          lineHeight: 1.7,
        }}
      >
        Reach out directly and a sponsorship coordinator will respond within 24
        hours to walk you through the right package for your brand.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{
          display: "inline-block",
          background: "black",
          color: "var(--color-primary)",
          padding: "1.1rem 3rem",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          marginBottom: "2rem",
        }}
      >
        Contact a Sponsorship Coordinator
      </a>

      <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>{EMAIL}</p>
    </section>
  );
};

// ─── Exports ──────────────────────────────────────────────────────────────────

export { SponsorsCTA, SponsorContact };