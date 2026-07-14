const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#D4A574]"
    aria-hidden="true"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const Stars = ({ size = 16, count = 5 }: { size?: number; count?: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} size={size} />
    ))}
  </div>
);

const smallTestimonials = [
  {
    initial: "S",
    quote:
      '"Their wheat grains meet our strict European standards. Organic certification and traceability gives us immense confidence."',
    name: "Sarah Williams",
    company: "Organic Foods Ltd, UK",
  },
  {
    initial: "R",
    quote:
      '"Excellent packaging, on-time delivery. Direct-from-farmer approach ensures freshest spices at competitive export prices."',
    name: "Rajesh Patel",
    company: "Global Traders, Oman",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
            Client Trust
          </p>
          <h2
            className="font-black text-[#2C2C2C] leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
            }}
          >
            Words from
            <br />
            Our Partners
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured Testimonial */}
          <div className="lg:col-span-3 bg-[#2D5F2E] rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative quote mark */}
            <div
              className="absolute -top-8 -right-8 text-white/5 font-black select-none"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "140px",
                lineHeight: 1,
              }}
            >
              &quot;
            </div>

            <div className="relative z-10">
              <Stars size={16} />
              <p className="text-white/90 text-xl leading-relaxed italic font-light mt-6">
                &quot;Kille Bhudargad Agro has been our most reliable partner for
                premium turmeric and cardamom. Their quality consistency over
                the last 3 years has been remarkable. We recommend them to every
                buyer looking for genuine Indian exports.&quot;
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-10 pt-8 border-t border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-[#D4A574]/20 flex items-center justify-center text-[#D4A574] font-black text-xl">
                A
              </div>
              <div>
                <p className="font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Ahmed Al-Fayed
                </p>
                <p className="text-white/50 text-sm">Al-Noor Spices, Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Small Testimonials */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {smallTestimonials.map((t) => (
              <div
                key={t.name}
                className="flex-1 border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:border-gray-200 transition-all"
              >
                <Stars size={14} />
                <p className="text-gray-600 italic text-sm leading-relaxed mt-4 mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F0E8] flex items-center justify-center text-[#2D5F2E] font-black">
                    {t.initial}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#2C2C2C] text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
