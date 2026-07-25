"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

// ── Product Data ──────────────────────────────────────────────────────────────

type Category = "Spices" | "Seeds" | "Herbs";

interface Product {
  slug: string;
  name: string;
  category: Category;
  description: string;
  image: string | null;
  bgColor: string;
  tags: string[];
}

const allProducts: Product[] = [
  {
    slug: "turmeric",
    name: "Organic Turmeric Powder",
    category: "Spices",
    description:
      "Golden bright, certified organic turmeric from Kolhapur's finest farms. Over 25% curcumin content. Available in 1 kg to 50 kg bulk configurations.",
    image: "/turmeric.png",
    bgColor: "rgb(245, 245, 240)",
    tags: ["Organic Certified", "Export Grade"],
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "Spices",
    description:
      "Bold, pungent black pepper the king of spices. Sun dried to lock in natural oils and sharp heat. Export grade, FSSAI certified, full documentation.",
    image: "/black-pepper.png",
    bgColor: "rgb(240, 245, 240)",
    tags: ["Sun Dried", "Export Grade"],
  },
  {
    slug: "red-chilli",
    name: "Chili Powder",
    category: "Spices",
    description:
      "Bold and spicy red chili that brings vibrant color and rich heat to any recipe. Available as whole dried, flakes, or finely ground powder.",
    image: "/red-chilli.png",
    bgColor: "rgb(240, 245, 240)",
    tags: ["Sun Dried", "Export Grade"],
  },
  {
    slug: "dry-ginger",
    name: "Dry Ginger",
    category: "Spices",
    description:
      "High quality dried ginger with a strong aroma and spicy flavor, naturally supporting immunity and digestion. Available whole, split, or powdered.",
    image: null,
    bgColor: "rgb(245, 245, 240)",
    tags: ["Sun Dried", "Export Grade"],
  },
  {
    slug: "cumin",
    name: "Cumin Seeds",
    category: "Seeds",
    description:
      "Warm, earthy cumin with high essential oil content. Cleaned and machine sorted for maximum purity. Trusted by spice importers across the Gulf and Europe.",
    image: "/cumin.png",
    bgColor: "rgb(240, 245, 240)",
    tags: ["Machine Sorted", "Export Grade"],
  },
  {
    slug: "coriander",
    name: "Coriander Seeds",
    category: "Seeds",
    description:
      "Mild, citrusy coriander seeds from Rajasthan and Maharashtra farms. Machine cleaned, split-free, and packed for long-haul export.",
    image: "/coriander.png",
    bgColor: "rgb(245, 245, 240)",
    tags: ["Machine Cleaned", "Export Grade"],
  },
  {
    slug: "fenugreek",
    name: "Fenugreek Seeds",
    category: "Seeds",
    description:
      "Aromatic, slightly bitter fenugreek seeds rich in dietary fibre. Widely used in food, nutraceutical, and cosmetic industries globally.",
    image: "/fenugreek.png",
    bgColor: "rgb(240, 245, 240)",
    tags: ["Machine Cleaned", "Export Grade"],
  },
  {
    slug: "fennel",
    name: "Fennel Seeds",
    category: "Seeds",
    description:
      "Fragrant spice with a sweet and mild flavor, often used in traditional medicine to support digestion and overall well being.",
    image: null,
    bgColor: "rgb(245, 245, 240)",
    tags: ["Machine Cleaned", "Export Grade"],
  },
  {
    slug: "sesame",
    name: "Sesame Seeds",
    category: "Seeds",
    description:
      "Classic premium seeds prized for their smooth flavor and rich oil content, commonly used in culinary dishes and traditional sweets.",
    image: null,
    bgColor: "rgb(240, 245, 240)",
    tags: ["Machine Sorted", "Export Grade"],
  },
  {
    slug: "mint",
    name: "Mint Leaves",
    category: "Herbs",
    description:
      "Aromatic leaves with a sweet, refreshing flavor, known for supporting digestion and providing a natural sense of freshness.",
    image: null,
    bgColor: "rgb(240, 245, 240)",
    tags: ["Shade Dried", "Export Grade"],
  },
  {
    slug: "basil",
    name: "Basil Leaves",
    category: "Herbs",
    description:
      "Fresh, sacred, and aromatic leaves perfect for health supplements and immunity boosting. Naturally rich in antioxidants and essential oils.",
    image: null,
    bgColor: "rgb(245, 245, 240)",
    tags: ["Hand-Harvested", "Organic Certified"],
  },
  {
    slug: "moringa",
    name: "Moringa Leaves",
    category: "Herbs",
    description:
      "Powerful dried leaves packed with rich nutrients, naturally boosting energy and strengthening immunity. Known as the \"miracle tree\" superfood.",
    image: null,
    bgColor: "rgb(240, 245, 240)",
    tags: ["Superfood", "Organic Certified"],
  },
  {
    slug: "curry-leaves",
    name: "Curry Leaves",
    category: "Herbs",
    description:
      "Highly aromatic green leaves widely used to enrich flavor in traditional cuisine while supporting natural wellness and digestion.",
    image: null,
    bgColor: "rgb(245, 245, 240)",
    tags: ["Shade Dried", "Export Grade"],
  },
];

const categories = ["All", "Spices", "Seeds", "Herbs"] as const;
type FilterCategory = (typeof categories)[number];

// ── Leaf placeholder for products without an image ────────────────────────────
function ImagePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#2D5F2E]/20"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div
      className="min-h-screen bg-white text-[#2C2C2C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar forceScrolled />

      {/* ── Hero Banner ── */}
      <section className="bg-[#F0F5F0] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
            Our Catalogue
          </p>
          <h1
            className="font-black text-[#2C2C2C] leading-tight mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
            }}
          >
            Premium Agro Products
          </h1>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">
            Certified organic spices, seeds, and grains sourced from
            Kolhapur&apos;s finest farms and export ready worldwide.
          </p>
        </div>
      </section>

      {/* ── Sticky Filter + Search Bar ── */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap">
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
              className="text-gray-400"
              aria-hidden="true"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#2D5F2E] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
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
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              type="search"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] w-52 transition-all"
            />
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-gray-400 mb-8">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg font-semibold mb-2">No products found</p>
              <p className="text-sm">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div
                    className="overflow-hidden relative"
                    style={{
                      background: product.bgColor,
                      height: "220px",
                    }}
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <ImagePlaceholder />
                    )}
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#2D5F2E] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                    {/* Export Grade badge on hover */}
                    <span className="absolute bottom-3 right-3 bg-[#2D5F2E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Export Grade
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-[#2C2C2C] text-base mb-2 leading-snug group-hover:text-[#2D5F2E] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold border border-gray-200 text-gray-400 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="flex items-center gap-1.5 text-[#2D5F2E] text-sm font-bold mt-auto group/btn">
                      View Details
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
                        className="group-hover/btn:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-[#F9FAF9] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="font-black text-[#2C2C2C] mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 3.5vw, 40px)",
            }}
          >
            Need a custom product or bulk order?
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            We work with importers, distributors, and food manufacturers
            worldwide. Get in touch for custom specifications, private labelling,
            and volume pricing.
          </p>
          <Link
            href="/contact"
            className="bg-[#2D5F2E] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1e4520] transition-all inline-flex items-center gap-2 group shadow-lg"
          >
            Request a Custom Quote
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
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
