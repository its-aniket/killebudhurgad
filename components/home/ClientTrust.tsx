"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { clientCompanies, clientTrustCopy } from "@/lib/client-companies";

export default function ClientTrust() {
  const { lang, tr } = useLanguage();
  const copy = clientTrustCopy[lang];

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="client-trust-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A574]">
            {tr.test_label}
          </p>
          <h2 id="client-trust-title" className="font-black leading-tight text-[#2C2C2C]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(30px, 4vw, 48px)" }}>
            {copy.title}
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#D4A574]" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clientCompanies.map((client, index) => (
            <li key={client.name} className="flex flex-col overflow-hidden rounded-3xl border border-[#E8EDE6] bg-white">
              <div className="relative mx-7 my-6 h-36 shrink-0 sm:h-40">
                <Image src={client.src} alt={client.name} fill sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 230px" className="object-contain" />
              </div>
              <div className="flex-1 border-t border-[#E8EDE6] bg-[#F9FAF7] px-6 py-6">
                <h3 className="text-lg font-bold text-[#2D5F2E]">
                  <a href={client.url} className="inline-flex items-center gap-2 rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D5F2E]">
                    <bdi>{client.name}</bdi><span aria-hidden="true" className="text-sm text-[#8B704E]">↗</span>
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{copy.descriptions[index]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
