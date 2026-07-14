import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Kille Bhudargad Agro Private Limited",
  description:
    "Learn about Kille Bhudargad Agro — 25+ years of premium spice exports from Kolhapur, Maharashtra to 30+ countries worldwide.",
};

// ── Icon helpers ──────────────────────────────────────────────────────────────
const LeafIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: "25+", label: "Years of Excellence", Icon: AwardIcon },
  { value: "30+", label: "Countries Served", Icon: GlobeIcon },
  { value: "14+", label: "Export Products", Icon: LeafIcon },
  { value: "500+", label: "Farmer Partners", Icon: UsersIcon },
];

const coreValues = [
  {
    Icon: LeafIcon,
    title: "Purity First",
    desc: "Every product is tested for quality, purity, and safety before leaving our facilities. No compromises.",
  },
  {
    Icon: HeartIcon,
    title: "Farmer Welfare",
    desc: "We believe thriving farmers produce the best products. Fair pricing and direct partnerships are non-negotiable.",
  },
  {
    Icon: GlobeIcon,
    title: "Global Responsibility",
    desc: "Sustainable farming practices protect the land for future generations while meeting global demand.",
  },
  {
    Icon: TrendingUpIcon,
    title: "Continuous Improvement",
    desc: "From field to shipment, we constantly refine processes to exceed international standards.",
  },
];

const timeline = [
  {
    year: "1999",
    title: "Founded",
    desc: "Kille Bhudargad Agro Private Limited established in Bhudargad, Kolhapur.",
    isRight: false,
  },
  {
    year: "2004",
    title: "First International Shipment",
    desc: "Expanded product range and completed our first international shipment to the UAE.",
    isRight: true,
  },
  {
    year: "2010",
    title: "FSSAI & Spices Board Certified",
    desc: "Obtained FSSAI certification and Spices Board of India registration. Entered European markets.",
    isRight: false,
  },
  {
    year: "2016",
    title: "Organic Certifications",
    desc: "Achieved USDA Organic and EU Organic certifications. Partnered with 200+ smallholder farmers.",
    isRight: true,
  },
  {
    year: "2020",
    title: "ISO 22000 Certified",
    desc: "ISO 22000 food safety certification. Launched direct-export operations to 25+ countries.",
    isRight: false,
  },
  {
    year: "2024",
    title: "500+ Farmer Network",
    desc: "500+ farmer partners. Exporting to 30+ countries across Asia, Europe, the Gulf, and the Americas.",
    isRight: true,
  },
];

const certifications = [
  {
    Icon: ShieldIcon,
    name: "FSSAI Certified",
    desc: "Food Safety & Standards Authority of India",
  },
  {
    Icon: ShieldIcon,
    name: "ISO 22000",
    desc: "Food Safety Management System",
  },
  {
    Icon: ShieldIcon,
    name: "USDA Organic",
    desc: "United States Department of Agriculture",
  },
  {
    Icon: ShieldIcon,
    name: "EU Organic",
    desc: "European Union Organic Certification",
  },
  {
    Icon: ShieldIcon,
    name: "Spices Board India",
    desc: "Government of India Export License",
  },
  {
    Icon: ShieldIcon,
    name: "Phytosanitary",
    desc: "International Plant Protection Certificate",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-[#2C2C2C]">
      <Navbar forceScrolled />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative py-24 bg-[#F0F5F0] overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 rounded-full border-[80px] border-[#2D5F2E] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: text */}
              <div>
                <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                  Our Story
                </p>
                <h1
                  className="font-['Poppins'] font-black text-[#2C2C2C] leading-tight mb-6"
                  style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
                >
                  From Bhudargad&apos;s
                  <br />
                  Farms to the World
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  For over 25 years, Kille Bhudargad Agro Private Limited has been building bridges
                  between the fertile farmlands of Kolhapur, Maharashtra and kitchens and food
                  factories across the globe.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-10">
                  We started as a small family operation with a single belief: that the finest
                  agricultural produce should reach global markets with full traceability, fair
                  pricing for farmers, and uncompromising quality. That belief guides every decision
                  we make today.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/products"
                    className="bg-[#2D5F2E] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1e4520] transition-all flex items-center gap-2 group shadow-lg shadow-green-900/15"
                  >
                    See Our Products{" "}
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-[#D4A574] hover:text-[#D4A574] transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Right: image with floating badges */}
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/about-hero.png"
                    alt="Kille Bhudargad Agro — our fields"
                    width={700}
                    height={500}
                    className="w-full rounded-3xl object-cover shadow-2xl"
                    style={{ maxHeight: 500 }}
                    priority
                  />

                  {/* Bottom-left badge: Farmer Partners */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E8F0E8] rounded-xl flex items-center justify-center">
                      <UsersIcon className="w-5 h-5 text-[#2D5F2E]" />
                    </div>
                    <div>
                      <p className="font-['Poppins'] font-black text-[#2D5F2E] text-2xl leading-none">
                        500+
                      </p>
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mt-1">
                        Farmer Partners
                      </p>
                    </div>
                  </div>

                  {/* Top-right badge: Countries */}
                  <div className="absolute -top-6 -right-6 bg-[#2D5F2E] rounded-2xl shadow-xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <GlobeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-['Poppins'] font-black text-white text-2xl leading-none">
                        30+
                      </p>
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-1">
                        Countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ value, label, Icon }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 bg-[#E8F0E8] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-5 h-5 text-[#2D5F2E]" />
                  </div>
                  <p className="font-['Poppins'] font-black text-[#2D5F2E] text-4xl mb-1">
                    {value}
                  </p>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                What Drives Us
              </p>
              <h2
                className="font-['Poppins'] font-black text-[#2C2C2C] leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Our Core Values
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-[#F9FAF9] border border-gray-100 rounded-2xl p-7 hover:border-[#2D5F2E]/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-[#E8F0E8] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#2D5F2E]" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[#2C2C2C] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline (id="process") ── */}
        <section className="py-24 bg-[#F9FAF9] border-y border-gray-100" id="process">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                Our Journey
              </p>
              <h2
                className="font-['Poppins'] font-black text-[#2C2C2C] leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                25 Years of Growth
              </h2>
            </div>

            <div className="relative">
              {/* Vertical centre line */}
              <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden sm:block" />

              <div className="space-y-10">
                {timeline.map(({ year, title, desc, isRight }) => (
                  <div
                    key={year}
                    className={`relative flex items-start gap-8 ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                  >
                    {/* Card */}
                    <div className={`flex-1 ${isRight ? "lg:text-left" : "lg:text-right"}`}>
                      <div
                        className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow inline-block text-left max-w-sm ${isRight ? "" : "lg:ml-auto"}`}
                      >
                        <p className="text-[#D4A574] font-black text-sm mb-2">{year}</p>
                        <h3 className="font-['Poppins'] font-bold text-[#2C2C2C] mb-2">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>

                    {/* Centre icon */}
                    <div className="hidden lg:flex w-12 h-12 bg-[#2D5F2E] rounded-full items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20 z-10">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Certifications (id="certifications") ── */}
        <section className="py-24" id="certifications">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                Our Credentials
              </p>
              <h2
                className="font-['Poppins'] font-black text-[#2C2C2C] leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Certified for Global Export
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg text-sm leading-relaxed">
                Every product we ship meets the highest international food safety and organic
                standards.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map(({ Icon, name, desc }) => (
                <div
                  key={name}
                  className="bg-[#F9FAF9] border border-gray-100 rounded-2xl p-6 hover:border-[#2D5F2E]/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8F0E8] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#2D5F2E]" />
                    </div>
                    <div>
                      <p className="font-['Poppins'] font-bold text-[#2C2C2C] text-sm">{name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-24 bg-[#2D5F2E] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 rounded-full border-[80px] border-white translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
            <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
              Work With Us
            </p>
            <h2
              className="font-['Poppins'] font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Ready to Source Premium Indian Spices?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              Connect with our export team to discuss your requirements, request samples, or get a
              custom quote. We export to 30+ countries with full documentation and compliance
              support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#D4A574] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#c4935e] transition-all flex items-center gap-2 shadow-lg shadow-amber-900/20"
              >
                Get a Quote{" "}
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products"
                className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:border-white hover:bg-white/10 transition-all"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
