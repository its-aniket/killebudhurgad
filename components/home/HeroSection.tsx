import Image from "next/image";
import Link from "next/link";

const stats = [
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
        className="text-[#2D5F2E]"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    value: "25+",
    label: "Years in Business",
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
        className="text-[#2D5F2E]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    value: "30+",
    label: "Countries Served",
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
        className="text-[#2D5F2E]"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    value: "14+",
    label: "Premium Products",
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
        className="text-[#2D5F2E]"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    value: "500+",
    label: "Farmer Partners",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col -mt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-spices.png"
          alt="Premium Indian spices"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.48) 50%, rgb(255,255,255) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-0">
        {/* Badge */}
        

        {/* Headline */}
        <h1
          className="font-black text-white leading-none mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 0.95,
          }}
        >
          Premium
          <br />
          Agro Products
        </h1>

        <p
          className="font-serif italic text-[#D4A574] mb-8"
          style={{ fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1.2 }}
        >
          for the World.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl">
          From the fertile soils of Kolhapur to 30+ countries, the finest
          spices, grains and organic commodities with zero compromise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-[#2D5F2E] text-white px-9 py-4 rounded-xl font-bold text-sm hover:bg-[#1e4520] active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-xl"
          >
            Explore Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 text-white px-9 py-4 rounded-xl font-bold text-sm hover:bg-white hover:text-[#2D5F2E] active:scale-95 transition-all backdrop-blur-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 pb-0 mt-16">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-y divide-x-0 md:divide-x md:divide-y-0 divide-gray-100 overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-11 h-11 bg-[#E8F0E8] rounded-xl flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div
                className="text-4xl font-black text-[#2D5F2E] mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
