"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { featuredProductSlugs, getLocalizedProduct, getProduct, products } from "@/lib/products";

const ArrowRight = () => <span aria-hidden="true">→</span>;

export default function FeaturedProducts() {
  const { lang, tr } = useLanguage();
  const featuredProducts = featuredProductSlugs.map(getProduct).filter((product) => product !== undefined).map((product) => getLocalizedProduct(product, lang));
  const viewAllLabel = tr.fp_view_all.replace(/\p{N}+/u, new Intl.NumberFormat(lang).format(products.length));

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-3">{tr.fp_section_label}</p>
            <h2 className="font-black text-[#2C2C2C] leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 52px)" }}>{tr.fp_section_title}</h2>
          </div>
          <Link href="/products" className="flex items-center gap-2 text-[#2D5F2E] font-bold text-sm hover:text-[#D4A574] transition-colors group self-end sm:self-auto">{viewAllLabel}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
        {featuredProducts.map((product, index) => (
          <div key={product.slug} className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch ${index < featuredProducts.length - 1 ? "border-b border-gray-100" : ""} group`} style={{ minHeight: "340px" }}>
            <div className="lg:w-5/12 overflow-hidden relative h-64 lg:h-auto" style={{ background: product.bgColor }}>
              {product.image && <Image src={product.image} alt={product.name} fill className="object-contain p-12 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 41vw" />}
              <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#2D5F2E] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">{product.category}</span>
              <span className="absolute bottom-5 right-5 bg-[#2D5F2E] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">{product.tags[0]}</span>
            </div>
            <div className="lg:w-7/12 flex flex-col justify-center px-10 lg:px-16 py-12">
              <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">{tr.fp_featured_label}</p>
              <h3 className="text-3xl lg:text-4xl font-black text-[#2C2C2C] mb-5 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>{product.name}</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">{product.tags.map((tag) => <span key={tag} className="text-xs font-semibold border border-gray-200 text-gray-500 px-3 py-1 rounded-full">{tag}</span>)}</div>
              <div className="flex items-center gap-4">
                <Link href={`/products/${product.slug}`} className="bg-[#2D5F2E] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1e4520] transition-all flex items-center gap-2 shadow-lg">{tr.fp_view_details}<ArrowRight /></Link>
                <Link href="/contact" className="border border-gray-200 text-gray-500 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-[#D4A574] hover:text-[#D4A574] transition-all">{tr.fp_bulk_inquiry}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
