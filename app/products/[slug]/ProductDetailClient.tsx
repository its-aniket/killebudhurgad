"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { useLanguage } from "@/lib/LanguageContext";

interface Spec { label: string; value: string; }
interface PackagingOption { size: string; desc: string; }
interface Product {
  slug: string; name: string; category: string; tagline: string;
  description: string; image: string; bgColor: string; tags: string[];
  features: string[]; specs: Spec[]; packaging: PackagingOption[];
}

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function ProductDetailClient({ product, relatedProducts }: {
  product: Product;
  relatedProducts: Product[];
}) {
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#2C2C2C]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar forceScrolled />
      <main>
        {/* Breadcrumb */}
        <div className="bg-[#F0F5F0] border-b border-[#E0EBE0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-[#2D5F2E] hover:text-[#1e4320] font-medium transition-colors">{tr.pd_breadcrumb_home}</Link></li>
                <li aria-hidden="true"><ChevronIcon /></li>
                <li><Link href="/products" className="text-[#2D5F2E] hover:text-[#1e4320] font-medium transition-colors">{tr.pd_breadcrumb_products}</Link></li>
                <li aria-hidden="true"><ChevronIcon /></li>
                <li className="text-gray-500 font-medium" aria-current="page">{product.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Product Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[480px] p-10 lg:sticky lg:top-28" style={{ backgroundColor: product.bgColor }}>
                <Image src={product.image} alt={product.name} width={420} height={420} className="object-contain w-full max-w-[340px] lg:max-w-[420px] drop-shadow-2xl" priority />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-[#F0F5F0] text-[#2D5F2E] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                    {product.category}
                  </span>
                </div>

                <div>
                  <h1 className="text-3xl lg:text-4xl font-black text-[#2C2C2C] leading-tight mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{product.name}</h1>
                  <p className="text-[#2D5F2E] font-semibold text-base">{product.tagline}</p>
                </div>

                <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="bg-[#FDF9F0] border border-[#E8D5B0] text-[#8B6914] text-xs font-semibold px-3 py-1.5 rounded-lg">{tag}</span>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-sm font-bold text-[#2C2C2C] uppercase tracking-widest mb-3">{tr.pd_key_features}</h2>
                  <ul className="space-y-2.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2D5F2E] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div>
                  <h2 className="text-sm font-bold text-[#2C2C2C] uppercase tracking-widest mb-3">{tr.pd_specifications}</h2>
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((spec, idx) => (
                          <tr key={spec.label} className={idx % 2 === 0 ? "bg-[#F8FAF8]" : "bg-white"}>
                            <td className="px-4 py-3 font-semibold text-[#2C2C2C] w-[40%] border-r border-gray-200">{spec.label}</td>
                            <td className="px-4 py-3 text-gray-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Packaging */}
                <div>
                  <h2 className="text-sm font-bold text-[#2C2C2C] uppercase tracking-widest mb-3">{tr.pd_packaging}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {product.packaging.map((pack) => (
                      <div key={pack.size} className="border border-gray-200 rounded-xl p-3 text-center hover:border-[#2D5F2E] hover:bg-[#F0F5F0] transition-all cursor-pointer group">
                        <p className="font-bold text-[#2C2C2C] text-base group-hover:text-[#2D5F2E] transition-colors">{pack.size}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{pack.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-[#2D5F2E] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#1e4320] active:scale-95 transition-all shadow-lg text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    {tr.pd_request_quote}
                  </Link>
                  <a href="https://wa.me/919156519393" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 border-2 border-[#2D5F2E] text-[#2D5F2E] font-bold px-6 py-4 rounded-xl hover:bg-[#2D5F2E] hover:text-white active:scale-95 transition-all text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                    {tr.pd_chat_whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-[#F8FAF8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#D4A574] text-xs font-bold tracking-[0.3em] uppercase mb-2">{tr.pd_explore_more}</p>
              <h2 className="text-3xl font-black text-[#2C2C2C]" style={{ fontFamily: "'Poppins', sans-serif" }}>{tr.pd_related}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link key={rel.slug} href={`/products/${rel.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2D5F2E]/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center h-52 p-8" style={{ backgroundColor: rel.bgColor }}>
                    <Image src={rel.image} alt={rel.name} width={200} height={200} className="object-contain w-full max-w-[160px] drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <span className="text-[#2D5F2E] text-xs font-bold tracking-widest uppercase">{rel.category}</span>
                    <h3 className="text-lg font-bold text-[#2C2C2C] mt-1 mb-2 group-hover:text-[#2D5F2E] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>{rel.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{rel.tagline}</p>
                    <div className="flex items-center gap-1 text-[#2D5F2E] text-sm font-semibold">
                      {tr.prod_view_details}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
