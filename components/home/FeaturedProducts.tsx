"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

export default function FeaturedProducts() {
  const { tr } = useLanguage();

  const products = [
    {
      slug: "rice",
      name: "Basmati Rice",
      category: "Grains",
      description: "Premium long-grain basmati rice, carefully selected for its delicate aroma, fluffy texture, and consistent export quality.",
      tags: ["Premium Grade", "Export Quality", "Bulk Available"],
      image: "/rice.png",
      bgColor: "rgb(245, 245, 240)",
      reverse: false,
    },
    {
      slug: "turmeric",
      name: "Organic Turmeric Powder",
      category: "Spices",
      description: "Golden-bright, certified organic turmeric from Kolhapur's finest farms. Over 25% curcumin content. Available in 1 kg to 50 kg bulk configurations.",
      tags: ["Organic Certified", "Export Grade", "Bulk Available"],
      image: "/turmeric.png",
      bgColor: "rgb(245, 245, 240)",
      reverse: true,
    },
    {
      slug: "red-chilli",
      name: "Chili Powder",
      category: "Spices",
      description: "Bold and spicy red chili that brings vibrant color and rich heat to any recipe. Available as whole dried, flakes, or finely ground powder.",
      tags: ["Sun Dried", "Export Grade", "Bulk Available"],
      image: "/red-chilli.png",
      bgColor: "rgb(240, 245, 240)",
      reverse: false,
    },
    {
      slug: "cumin",
      name: "Cumin Seeds",
      category: "Seeds",
      description: "Warm, earthy cumin seeds with high essential oil content. Machine-cleaned and sorted for reliable export quality.",
      tags: ["Machine Sorted", "Export Grade", "Bulk Available"],
      image: "/cumin.png",
      bgColor: "rgb(240, 245, 240)",
      reverse: true,
    },
  ];

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-3">
              {tr.fp_section_label}
            </p>
            <h2 className="font-black text-[#2C2C2C] leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 52px)" }}>
              {tr.fp_section_title}
            </h2>
          </div>
          <Link href="/products" className="flex items-center gap-2 text-[#2D5F2E] font-bold text-sm hover:text-[#D4A574] transition-colors group self-end sm:self-auto">
            {tr.fp_view_all}
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
        {products.map((product, index) => (
          <div key={product.slug} className={`flex flex-col ${product.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch ${index < products.length - 1 ? "border-b border-gray-100" : ""} group`} style={{ minHeight: "340px" }}>
            {/* Product Image */}
            <div className="lg:w-5/12 overflow-hidden relative cursor-pointer h-64 lg:h-auto" style={{ background: product.bgColor }}>
              <Image src={product.image} alt={product.name} fill className="object-contain p-12 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 41vw" />
              <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#2D5F2E] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {product.category}
              </span>
              <span className="absolute bottom-5 right-5 bg-[#2D5F2E] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Export Grade
              </span>
            </div>

            {/* Product Info */}
            <div className="lg:w-7/12 flex flex-col justify-center px-10 lg:px-16 py-12">
              <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                {tr.fp_featured_label}
              </p>
              <h3 className="text-3xl lg:text-4xl font-black text-[#2C2C2C] mb-5 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold border border-gray-200 text-gray-500 px-3 py-1 rounded-full hover:border-[#2D5F2E] hover:text-[#2D5F2E] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link href={`/products/${product.slug}`} className="bg-[#2D5F2E] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1e4520] active:scale-95 transition-all flex items-center gap-2 group shadow-lg">
                  {tr.fp_view_details}
                  <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/contact" className="border border-gray-200 text-gray-500 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-[#D4A574] hover:text-[#D4A574] transition-all">
                  {tr.fp_bulk_inquiry}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
