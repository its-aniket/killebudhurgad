"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What certifications do your products carry?",
    answer:
      "Our products are certified by FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India, and carry Phytosanitary Certification — making them compliant for both domestic and international markets.",
  },
  {
    question: "Do you offer bulk and private-label packaging?",
    answer:
      "Yes. We supply in bulk (loose bags, jumbo sacks) as well as retail-ready private-label packs. Minimum order quantities and packaging formats can be customised to your requirements.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We export to over 30 countries across Europe, North America, the Middle East, and Southeast Asia. If you don't see your region listed, reach out — we are always expanding our network.",
  },
  {
    question: "How do I place a bulk order or send an inquiry?",
    answer:
      "You can use the 'Send an Inquiry' form on our Contact page or reach us directly on WhatsApp at +91 91565 19393. Our team typically responds within one business day.",
  },
  {
    question: "What is the typical lead time for an order?",
    answer:
      "Standard lead time is 7–14 business days depending on the product, quantity, and destination. Rush orders may be accommodated — contact us for details.",
  },
  {
    question: "Are samples available before placing a large order?",
    answer:
      "Yes, we provide product samples on request. Sample charges and courier costs may apply and are typically adjusted against your first bulk order.",
  },
];

const spiceImages = [
  { src: "/turmeric.png",     alt: "Turmeric",      rotate: "-rotate-3" },
  { src: "/cardamom.png",     alt: "Cardamom",      rotate: "rotate-2"  },
  { src: "/red-chilli.png",   alt: "Red Chilli",    rotate: "-rotate-2" },
  { src: "/black-pepper.png", alt: "Black Pepper",  rotate: "rotate-3"  },
];

const stats = [
  { value: "30+", label: "Countries Exported" },
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Products Available" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 text-[#2D5F2E] shrink-0 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F9FAF9] transition-colors"
      >
        <span className="font-semibold text-[#2C2C2C] text-sm sm:text-base leading-snug">
          {faq.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pt-1 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-[#F9FAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label — centered above both columns */}
        <div className="text-center mb-12">
          <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-3">
            Got Questions?
          </p>
          <h2
            className="font-black text-[#2C2C2C]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-10">

            {/* Subtitle */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Everything you need to know about sourcing, shipping, and working
              with Kille Bhudargad Agro. Can&apos;t find your answer?{" "}
              <a
                href="/contact"
                className="text-[#2D5F2E] font-semibold hover:underline underline-offset-2"
              >
                Contact our team →
              </a>
            </p>

            {/* Spice image collage */}
            <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 select-none">

              {/* Decorative background blob */}
              <div
                className="absolute inset-0 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #2D5F2E 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              {/* Decorative dotted ring */}
              <div
                className="absolute inset-4 rounded-full border-2 border-dashed border-[#2D5F2E] opacity-15"
                aria-hidden="true"
              />

              {/* Centre large image */}
              <div className="absolute inset-[15%] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                <Image
                  src="/hero-spices.png"
                  alt="Assorted premium spices from Kille Bhudargad Agro"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Corner spice thumbnails */}
              {spiceImages.map((img, i) => {
                const positions = [
                  "top-0 left-0",
                  "top-0 right-0",
                  "bottom-0 left-0",
                  "bottom-0 right-0",
                ];
                return (
                  <div
                    key={img.src}
                    className={`absolute ${positions[i]} w-[26%] aspect-square rounded-2xl overflow-hidden shadow-lg ring-2 ring-white ${img.rotate} transition-transform hover:scale-105 hover:rotate-0 duration-300`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="15vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}

             
            </div>

           
          </div>

          {/* ── RIGHT COLUMN — Accordion ── */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
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
