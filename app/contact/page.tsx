"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { useLanguage } from "@/lib/LanguageContext";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const { tr } = useLanguage();

  const contactItems = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>),
      label: tr.contact_addr_label,
      value: "Bhudargad, Kolhapur\nMaharashtra — 416 212, India",
      href: "https://maps.google.com/?q=Bhudargad,Kolhapur,Maharashtra",
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>),
      label: tr.contact_phone_label,
      value: "+91 9156519393",
      href: "tel:+919156519393",
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>),
      label: tr.contact_email_label,
      value: "killebhudargadprivatelimited@gmail.com",
      href: "mailto:killebhudargadprivatelimited@gmail.com",
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>),
      label: tr.contact_hours_label,
      value: tr.contact_hours_value,
      href: null,
    },
  ];

  const inquiryTypes = [
    tr.contact_inq_bulk,
    tr.contact_inq_sample,
    tr.contact_inq_label,
    tr.contact_inq_pricing,
    tr.contact_inq_cert,
    tr.contact_inq_partner,
    tr.contact_inq_other,
  ];
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "", inquiryType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (replace with actual API call)
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-white text-[#2C2C2C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar forceScrolled />

      <main>
        {/* ── Hero ── */}
        <section className="bg-[#F0F5F0] py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
              {tr.contact_reach_label}
            </p>
            <h1 className="font-black text-[#2C2C2C] leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 5vw, 60px)" }}>
              {tr.contact_hero_title}
            </h1>
            <p className="text-gray-500 max-w-xl text-base leading-relaxed">
              {tr.contact_hero_sub}
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Left: Contact info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                    {tr.contact_details_label}
                  </p>
                  <h2 className="font-black text-[#2C2C2C] leading-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 32px)" }}>
                    {tr.contact_details_title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F0E8] flex items-center justify-center flex-shrink-0 text-[#2D5F2E]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="text-[#2C2C2C] text-sm leading-relaxed hover:text-[#2D5F2E] transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#2C2C2C] text-sm leading-relaxed whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp quick CTA */}
                <div className="bg-[#F0FFF4] border border-[#25D366]/30 rounded-2xl p-6">
                  <p className="font-bold text-[#2C2C2C] text-sm mb-2">{tr.contact_whatsapp_title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{tr.contact_whatsapp_sub}</p>
                  <a href="https://wa.me/919156519393" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#1da851] active:scale-95 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                    {tr.contact_whatsapp_btn}
                  </a>
                </div>
              </div>

              {/* Right: Inquiry form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="bg-[#F0FFF4] border border-[#2D5F2E]/20 rounded-2xl p-10 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#2D5F2E] flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <h3 className="text-xl font-black text-[#2C2C2C] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{tr.contact_success_title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">{tr.contact_success_sub}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5">
                    <h2 className="text-xl font-black text-[#2C2C2C] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>{tr.contact_form_title}</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_name} <span className="text-red-500">*</span></label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_company}</label>
                        <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Imports Ltd." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_email} <span className="text-red-500">*</span></label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_phone}</label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="country" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_country} <span className="text-red-500">*</span></label>
                        <input id="country" name="country" type="text" required value={form.country} onChange={handleChange} placeholder="United Kingdom" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all" />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_inquiry_type}</label>
                        <select id="inquiryType" name="inquiryType" value={form.inquiryType} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all bg-white">
                          <option value="">{tr.contact_inquiry_select}</option>
                          {inquiryTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{tr.contact_message} <span className="text-red-500">*</span></label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={tr.contact_message_placeholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F2E] focus:ring-1 focus:ring-[#2D5F2E] transition-all resize-none" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-[#2D5F2E] text-white font-bold py-4 rounded-xl hover:bg-[#1e4520] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg text-sm">
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>
                          {tr.contact_sending}
                        </>
                      ) : (
                        <>
                          {tr.contact_send}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </>
                      )}
                    </button>
                    <p className="text-gray-400 text-xs text-center">{tr.contact_privacy}</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick CTA strip ── */}
        <section className="py-12 bg-[#F9FAF9] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
                {tr.cert_label}
              </p>
              {["FSSAI Certified", "ISO 22000", "USDA Organic", "EU Organic", "Spices Board India"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2D5F2E]" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {cert}
                </div>
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
