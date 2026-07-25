const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#D4A574]"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: "Natural & Sustainable",
    description:
      "Every product traced to certified organic farms across Maharashtra.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#D4A574]"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    title: "International Standards",
    description:
      "FSSAI, ISO certified. Tested at every stage from soil to shipment.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#D4A574]"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: "Farmer Empowerment",
    description:
      "Direct partnerships with 500+ smallholder farming families.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#D4A574]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Direct Export",
    description: "No intermediaries — competitive pricing for global buyers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#2D5F2E] relative" style={{ overflow: 'clip' }}>
      {/* Decorative circles — clipped to section boundary */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5 rounded-full border-[80px] border-white pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-5 rounded-full border-[60px] border-white pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="lg:flex items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2
              className="font-black text-white leading-tight"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 5vw, 52px)",
              }}
            >
              The Promise Behind
              <br />
              Every Export
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed lg:text-right">
            We don&apos;t just ship products — we export the trust, heritage,
            and natural bounty of Kolhapur&apos;s farming communities.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 hover:border-white/20 rounded-2xl p-7 transition-all duration-300 cursor-default group"
            >
              <div className="w-12 h-12 bg-[#D4A574]/15 group-hover:bg-[#D4A574]/25 rounded-xl flex items-center justify-center mb-5 transition-colors">
                {feature.icon}
              </div>
              <h3
                className="font-bold text-white text-base mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
