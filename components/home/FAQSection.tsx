"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const spiceImages = [
  { src: "/turmeric.png",     alt: "Turmeric",     rotate: "-rotate-3" },
  { src: "/cardamom.png",     alt: "Cardamom",     rotate: "rotate-2"  },
  { src: "/red-chilli.png",   alt: "Red Chilli",   rotate: "-rotate-2" },
  { src: "/black-pepper.png", alt: "Black Pepper", rotate: "rotate-3"  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 text-[#2D5F2E] shrink-0 ${open ? "rotate-180" : "rotate-0"}`} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FAQItem({ question, answer, isOpen, onToggle, index }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void; index: number;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button onClick={onToggle} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F9FAF9] transition-colors">
        <span className="font-semibold text-[#2C2C2C] text-sm sm:text-base leading-snug">{question}</span>
        <ChevronIcon open={isOpen} />
      </button>
      <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pt-1 text-gray-500 text-sm leading-relaxed border-t border-gray-100">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { tr } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: tr.faq_q1, answer: tr.faq_a1 },
    { question: tr.faq_q2, answer: tr.faq_a2 },
    { question: tr.faq_q3, answer: tr.faq_a3 },
    { question: tr.faq_q4, answer: tr.faq_a4 },
    { question: tr.faq_q5, answer: tr.faq_a5 },
    { question: tr.faq_q6, answer: tr.faq_a6 },
  ];

  const toggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="py-20 bg-[#F9FAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-3">
            {tr.faq_label}
          </p>
          <h2 className="font-black text-[#2C2C2C]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)" }}>
            {tr.faq_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-10">
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              {tr.faq_subtext}{" "}
              <a href="/contact" className="text-[#2D5F2E] font-semibold hover:underline underline-offset-2">
                {tr.faq_contact_link}
              </a>
            </p>

            {/* Spice image collage */}
            <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 select-none">
              <div className="absolute inset-0 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #2D5F2E 0%, transparent 70%)" }} aria-hidden="true" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#2D5F2E] opacity-15" aria-hidden="true" />
              <div className="absolute inset-[15%] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                <Image src="/hero-spices.png" alt="Assorted premium spices" fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover" />
              </div>
              {spiceImages.map((img, i) => {
                const positions = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"];
                return (
                  <div key={img.src} className={`absolute ${positions[i]} w-[26%] aspect-square rounded-2xl overflow-hidden shadow-lg ring-2 ring-white ${img.rotate} transition-transform hover:scale-105 hover:rotate-0 duration-300`}>
                    <Image src={img.src} alt={img.alt} fill sizes="15vw" className="object-cover" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column — Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
