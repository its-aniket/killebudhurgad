"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { useLanguage } from "@/lib/LanguageContext";
import { brandStory } from "@/lib/brand-story";

export default function AboutPage() {
  const { lang, tr } = useLanguage();
  const story = brandStory[lang];
  return (
    <div className="min-h-screen bg-white text-[#2C2C2C]">
      <Navbar forceScrolled />
      <main>
        {story.map((chapter, index) => (
          <section key={index} id={index === 1 ? "process" : index === 2 ? "certifications" : undefined}
            className={`scroll-mt-24 overflow-hidden py-16 sm:py-24 ${index === 3 || index === 1 ? "bg-[#2D5F2E] text-white" : index % 2 === 0 ? "bg-[#F4F5ED]" : "bg-white"}`}>
            <div className={`mx-auto max-w-7xl px-6 lg:px-10 ${index === 3 ? "max-w-4xl text-center" : "grid items-center gap-10 lg:grid-cols-2 lg:gap-16"}`}>
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#B88A59]">{index === 0 ? tr.about_story_label : `0${index + 1} /`}</p>
                {index === 0 ? (
                  <h1 className="font-['Poppins'] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{chapter.title}</h1>
                ) : (
                  <h2 className="font-['Poppins'] text-3xl font-bold leading-tight sm:text-4xl">{chapter.title}</h2>
                )}
                <div className={`my-7 h-1 w-16 rounded-full bg-[#D4A574] ${index === 3 ? "mx-auto" : ""}`} />
                <p className={`text-base leading-8 ${index === 3 || index === 1 ? "text-white/80" : "text-gray-600"}`}>{chapter.body}</p>
                {index === 0 && <Link href="/products" className="mt-8 inline-flex rounded-xl bg-[#2D5F2E] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#1e4520]">{tr.about_hero_cta_products}</Link>}
              </div>
              {index === 0 && <Image src="/about-hero.png" alt={chapter.title} width={700} height={700} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" priority />}
              {index === 1 && <div className="rounded-3xl border border-white/20 bg-white/10 p-8 sm:p-12"><p className="font-['Poppins'] text-2xl font-semibold leading-relaxed text-white">{chapter.callout}</p></div>}
              {index === 2 && <Image src="/hero-spices-img.png" alt={chapter.title} width={900} height={700} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/3] w-full rounded-3xl object-cover lg:order-first" />}
              {index === 3 && <div className="mt-10 flex flex-wrap justify-center gap-4"><Link href="/contact" className="rounded-xl bg-[#D4A574] px-8 py-3.5 text-sm font-bold text-[#1c351d] hover:bg-[#e2b887]">{tr.about_cta_quote}</Link><Link href="/products" className="rounded-xl border border-white/40 px-8 py-3.5 text-sm font-semibold hover:bg-white/10">{tr.about_cta_browse}</Link></div>}
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
