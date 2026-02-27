import React from "react";

interface InfoProps {
  title: string;
  descriptionpt1: string;
  descriptionpt2?: string;
  imageUrl?: string;
}

const Info: React.FC<InfoProps> = ({
  title,
  descriptionpt1,
  descriptionpt2,
  imageUrl,
}) => {
  return (
    <section className="relative isolate overflow-hidden bg-(--color-surface-2)/80 py-20 px-6">
      {/* Subtle gold accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#D4AF37]" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p
          className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] text-center mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          About the Event
        </p>

        <h2
          className="text-4xl sm:text-5xl text-white text-center mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gold vertical bar accent */}
            <div className="border-l-4 border-[#D4AF37] pl-6 space-y-4">
              <p
                className="text-lg text-white/90 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {descriptionpt1}
              </p>
              {descriptionpt2 && (
                <p
                  className="text-lg text-white/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {descriptionpt2}
                </p>
              )}
            </div>

            {/* Small decorative gold divider */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-[1px] bg-[#D4AF37]" />
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <div className="w-8 h-[1px] bg-[#D4AF37]" />
            </div>
          </div>

          {/* Image — 3 cols */}
          {imageUrl && (
            <div className="lg:col-span-3">
              <div className="relative group">
                {/* Gold border frame offset */}
                <div className="absolute -inset-1 rounded-2xl border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-colors duration-300" />
                <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Subtle gold accent line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#D4AF37]" />
    </section>
  );
};

export default Info;
