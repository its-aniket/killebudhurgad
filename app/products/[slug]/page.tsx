import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

// ── Types ──────────────────────────────────────────────────────────────────────

interface Spec {
  label: string;
  value: string;
}

interface PackagingOption {
  size: string;
  desc: string;
}

interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  bgColor: string;
  tags: string[];
  features: string[];
  specs: Spec[];
  packaging: PackagingOption[];
}

// ── Product Data ───────────────────────────────────────────────────────────────

const products: Record<string, Product> = {
  turmeric: {
    slug: "turmeric",
    name: "Organic Turmeric Powder",
    category: "Spices",
    tagline: "Golden-bright, certified organic turmeric",
    description:
      "Our premium Organic Turmeric Powder is sourced from the finest farms in Kolhapur, Maharashtra. With over 25% curcumin content, it delivers exceptional quality and potency. Each batch is carefully processed to preserve natural oils and active compounds, ensuring maximum freshness and health benefits.",
    image: "/turmeric.png",
    bgColor: "rgb(253, 249, 240)",
    tags: ["Organic Certified", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "Over 25% curcumin content — premium quality guaranteed",
      "Certified organic — no pesticides or synthetic additives",
      "Sun-dried and stone-ground to preserve natural oils",
      "Available in 1 kg to 1000 kg configurations",
      "Full export documentation provided",
    ],
    specs: [
      { label: "Origin", value: "Kolhapur, Maharashtra, India" },
      { label: "Form", value: "Powder / Whole / Finger" },
      { label: "Curcumin Content", value: "≥ 3.5% (min)" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Colour Value", value: "≥ 500 ASTA" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Certification", value: "FSSAI, ISO 22000, USDA Organic" },
    ],
    packaging: [
      { size: "1 kg", desc: "Retail / Sample" },
      { size: "5 kg", desc: "Small Bulk" },
      { size: "25 kg", desc: "Commercial" },
      { size: "50 kg", desc: "Wholesale" },
    ],
  },
  "black-pepper": {
    slug: "black-pepper",
    name: "Malabar Black Pepper",
    category: "Spices",
    tagline: "The King of Spices — bold and pungent",
    description:
      "Premium Malabar Black Pepper sourced directly from the spice gardens of Kerala. Sun-dried to lock in natural oils and sharp heat. Available as whole peppercorns or ground powder, with full FSSAI certification and export documentation.",
    image: "/black-pepper.png",
    bgColor: "rgb(240, 245, 240)",
    tags: ["Sun Dried", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "5–7% piperine content for superior pungency",
      "Machine-cleaned, graded peppercorns",
      "Available whole, cracked, or ground",
      "Available in 1 kg to 500 kg configurations",
      "Phytosanitary certificate provided",
    ],
    specs: [
      { label: "Origin", value: "Kerala & Karnataka, India" },
      { label: "Form", value: "Whole / Ground / Cracked" },
      { label: "Piperine Content", value: "≥ 5%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Bulk Density", value: "500–600 g/L" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Certification", value: "FSSAI, Spices Board India" },
    ],
    packaging: [
      { size: "1 kg", desc: "Retail / Sample" },
      { size: "5 kg", desc: "Small Bulk" },
      { size: "25 kg", desc: "Commercial" },
      { size: "50 kg", desc: "Wholesale" },
    ],
  },
  cardamom: {
    slug: "cardamom",
    name: "Premium Cardamom",
    category: "Spices",
    tagline: "Hand-picked green cardamom pods",
    description:
      "Our Premium Cardamom pods are hand-picked at peak maturity from South Indian spice gardens. Known for their intense floral aroma and rich flavor, these pods are sun-dried and carefully graded for export excellence.",
    image: "/cardamom.png",
    bgColor: "rgb(245, 248, 245)",
    tags: ["Hand-Picked", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "Intense floral aroma — harvested at peak maturity",
      "Bold green color — naturally sun-dried",
      "Sizes 6mm–8mm+ available",
      "Available in 1 kg to 100 kg configurations",
      "Full export documentation",
    ],
    specs: [
      { label: "Origin", value: "Kerala & Karnataka, India" },
      { label: "Form", value: "Whole Pods / Seeds" },
      { label: "Size", value: "6mm – 8mm+" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Volatile Oil", value: "≥ 4%" },
      { label: "Shelf Life", value: "18 months" },
      { label: "Certification", value: "FSSAI, Spices Board India" },
    ],
    packaging: [
      { size: "500 g", desc: "Retail / Sample" },
      { size: "1 kg", desc: "Small Pack" },
      { size: "10 kg", desc: "Commercial" },
      { size: "25 kg", desc: "Wholesale" },
    ],
  },
  "red-chilli": {
    slug: "red-chilli",
    name: "Chili Powder & Flakes",
    category: "Spices",
    tagline: "Bold, fiery red chili — whole, flakes, or powder",
    description:
      "Our premium Red Chili is sourced from sun-drenched farms across Maharashtra and Andhra Pradesh. Available as whole dried chilies, flakes, or finely ground powder — delivering vibrant color and rich heat to any recipe.",
    image: "/red-chilli.png",
    bgColor: "rgb(250, 242, 240)",
    tags: ["Sun Dried", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "High ASTA color value — deep red, vibrant appearance",
      "Available whole, flakes, or powder",
      "Low moisture content for extended shelf life",
      "Available in 1 kg to 500 kg configurations",
      "Phytosanitary certificate provided",
    ],
    specs: [
      { label: "Origin", value: "Maharashtra & Andhra Pradesh, India" },
      { label: "Form", value: "Whole / Flakes / Powder" },
      { label: "ASTA Color", value: "≥ 80" },
      { label: "Moisture", value: "≤ 11%" },
      { label: "Capsaicin", value: "0.1% – 0.3%" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Certification", value: "FSSAI, APEDA Certified" },
    ],
    packaging: [
      { size: "1 kg", desc: "Retail / Sample" },
      { size: "5 kg", desc: "Small Bulk" },
      { size: "25 kg", desc: "Commercial" },
      { size: "50 kg", desc: "Wholesale" },
    ],
  },
};

// ── Static Params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return {};
  return {
    title: `${product.name} — Kille Bhudargad Agro`,
    description: product.description,
  };
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) notFound();

  // Related products: all except current
  const relatedProducts = Object.values(products).filter(
    (p) => p.slug !== slug
  );

  return (
    <div
      className="min-h-screen bg-white text-[#2C2C2C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar forceScrolled />

      <main>
        {/* ── Breadcrumb ── */}
        <div className="bg-[#F0F5F0] border-b border-[#E0EBE0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-[#2D5F2E] hover:text-[#1e4320] font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-[#2D5F2E] hover:text-[#1e4320] font-medium transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </li>
                <li className="text-gray-500 font-medium" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Main Product Section ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left: Product Image */}
              <div
                className="rounded-2xl overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[480px] p-10 lg:sticky lg:top-28"
                style={{ backgroundColor: product.bgColor }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={420}
                  height={420}
                  className="object-contain w-full max-w-[340px] lg:max-w-[420px] drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Right: Product Details */}
              <div className="flex flex-col gap-6">

                {/* Category badge */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#F0F5F0] text-[#2D5F2E] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                    {product.category}
                  </span>
                </div>

                {/* Name & Tagline */}
                <div>
                  <h1
                    className="text-3xl lg:text-4xl font-black text-[#2C2C2C] leading-tight mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {product.name}
                  </h1>
                  <p className="text-[#2D5F2E] font-semibold text-base">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#FDF9F0] border border-[#E8D5B0] text-[#8B6914] text-xs font-semibold px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-sm font-bold text-[#2C2C2C] uppercase tracking-widest mb-3">
                    Key Features
                  </h2>
                  <ul className="space-y-2.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2D5F2E] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications Table */}
                <div>
                  <h2 className="text-sm font-bold text-[#2C2C2C] uppercase tracking-widest mb-3">
                    Specifications
                  </h2>
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((spec, idx) => (
                          <tr
                            key={spec.label}
                            className={idx % 2 === 0 ? "bg-[#F8FAF8]" : "bg-white"}
                          >
                            <td className="px-4 py-3 font-semibold text-[#2C2C2C] w-[40%] border-r border-gray-200">
                              {spec.label}
                            </td>
                            <td className="px-4 py-3 text-gray-600">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Packaging Options */}
                <div>
                  <h2 className="text-sm font-bold text-[#2C2C2C] uppercase tracking-widest mb-3">
                    Packaging Options
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {product.packaging.map((pack) => (
                      <div
                        key={pack.size}
                        className="border border-gray-200 rounded-xl p-3 text-center hover:border-[#2D5F2E] hover:bg-[#F0F5F0] transition-all cursor-pointer group"
                      >
                        <p className="font-bold text-[#2C2C2C] text-base group-hover:text-[#2D5F2E] transition-colors">
                          {pack.size}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">{pack.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#2D5F2E] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#1e4320] active:scale-95 transition-all shadow-lg text-sm"
                  >
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
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Request a Quote
                  </Link>
                  <a
                    href="https://wa.me/919156519393"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-[#2D5F2E] text-[#2D5F2E] font-bold px-6 py-4 rounded-xl hover:bg-[#2D5F2E] hover:text-white active:scale-95 transition-all text-sm"
                  >
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
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Related Products ── */}
        <section className="py-16 bg-[#F8FAF8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#D4A574] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Explore More
              </p>
              <h2
                className="text-3xl font-black text-[#2C2C2C]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Related Products
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2D5F2E]/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image area */}
                  <div
                    className="flex items-center justify-center h-52 p-8 transition-all duration-300"
                    style={{ backgroundColor: rel.bgColor }}
                  >
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      width={200}
                      height={200}
                      className="object-contain w-full max-w-[160px] drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <span className="text-[#2D5F2E] text-xs font-bold tracking-widest uppercase">
                      {rel.category}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#2C2C2C] mt-1 mb-2 group-hover:text-[#2D5F2E] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {rel.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {rel.tagline}
                    </p>
                    <div className="flex items-center gap-1 text-[#2D5F2E] text-sm font-semibold">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
