"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { useLanguage } from "@/lib/LanguageContext";
import { categoryIds, getLocalizedCategory, getLocalizedProduct, getLocalizedRiceLabel, products, type CategoryId } from "@/lib/products";

type FilterCategory = "all" | "rice" | CategoryId;

function categoryFromSearchParam(value: string | null): FilterCategory {
  const normalized = value?.toLowerCase();
  if (normalized === "rice") return "rice";
  return categoryIds.includes(normalized as CategoryId) ? normalized as CategoryId : "all";
}

function ImagePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#2D5F2E]/20" aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    </div>
  );
}

function ProductsContent() {
  const { lang, tr } = useLanguage();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(() => categoryFromSearchParam(searchParams.get("cat")));
  const [search, setSearch] = useState(() => searchParams.get("search") ?? "");
  const localizedProducts = useMemo(() => products.map((product) => getLocalizedProduct(product, lang)), [lang]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return localizedProducts.filter((product) => {
      const categoryMatches = activeCategory === "all"
        || (activeCategory === "rice" ? product.slug.includes("rice") : product.categoryId === activeCategory);
      const searchMatches = query === "" || product.searchTerms.some((term) => term.includes(query)) || product.category.toLowerCase().includes(query);
      return categoryMatches && searchMatches;
    });
  }, [activeCategory, localizedProducts, search]);

  const categories: FilterCategory[] = ["all", ...categoryIds, "rice"];

  return (
    <div className="min-h-screen bg-white text-[#2C2C2C]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar forceScrolled />
      <section className="bg-[#F0F5F0] py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">{tr.prod_catalogue_label}</p>
          <h1 className="font-black text-[#2C2C2C] leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 5vw, 60px)" }}>{tr.prod_hero_title}</h1>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">{tr.prod_hero_sub}</p>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeCategory === category ? "bg-[#2D5F2E] text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {category === "all" ? tr.prod_cat_all : category === "rice" ? getLocalizedRiceLabel(lang) : getLocalizedCategory(category, lang)}
              </button>
            ))}
          </div>
          <input type="search" placeholder={tr.prod_search_placeholder} value={search} onChange={(event) => setSearch(event.target.value)} className="px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] w-52 transition-all" />
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-gray-500 mb-8">{filtered.length} {filtered.length !== 1 ? tr.prod_found_plural : tr.prod_found}</p>
          {filtered.length === 0 ? (
            <div className="py-20 text-center"><p className="text-lg font-semibold mb-2">{tr.prod_no_results}</p><p className="text-sm text-gray-500">{tr.prod_no_results_sub}</p></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-[#2D5F2E]/30 hover:shadow-xl transition-all">
                  <div className="h-60 flex items-center justify-center p-8 relative" style={{ backgroundColor: product.bgColor }}>
                    {product.image ? <Image src={product.image} alt={product.name} width={240} height={240} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500" /> : <ImagePlaceholder />}
                    <span className="absolute top-4 left-4 bg-white/90 text-[#2D5F2E] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">{product.category}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-black text-[#2C2C2C] mb-3 group-hover:text-[#2D5F2E] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>{product.name}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">{product.tags.slice(0, 2).map((tag) => <span key={tag} className="text-xs font-semibold border border-gray-200 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>)}</div>
                    <span className="text-[#2D5F2E] text-sm font-bold">{tr.prod_view_details} →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default function ProductsPage() {
  return <Suspense><ProductsContent /></Suspense>;
}
