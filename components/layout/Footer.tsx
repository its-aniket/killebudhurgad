"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { getLocalizedCategory } from "@/lib/products";

const socialLinks = [
  {
    label: "Instagram", href: "#",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>),
  },
  {
    label: "Facebook", href: "#",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>),
  },
  {
    label: "LinkedIn", href: "#",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>),
  },
  {
    label: "Twitter", href: "#",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>),
  },
];

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 -ml-1 transition-opacity text-[#D4A574]" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Footer() {
  const { lang, tr } = useLanguage();

  const companyLinks = [
    { label: tr.nav_about,             href: "/about" },
    { label: tr.footer_our_process,    href: "/about#process" },
    { label: tr.cert_label,            href: "/about#certifications" },
    { label: tr.footer_careers,        href: "/contact" },
  ];

  const productLinks = [
    { label: getLocalizedCategory("spices", lang), href: "/products?cat=Spices" },
    { label: `${getLocalizedCategory("seeds", lang)} & ${getLocalizedCategory("grains", lang)}`, href: "/products?cat=Seeds" },
    { label: getLocalizedCategory("herbs", lang), href: "/products" },
    { label: tr.footer_organic, href: "/products" },
  ];

  const supportLinks = [
    { label: tr.nav_contact,         href: "/contact" },
    { label: tr.fp_bulk_inquiry,     href: "/contact" },
    { label: tr.footer_shipping,     href: "/contact" },
    { label: tr.footer_faqs,         href: "/about#faq" },
  ];

  const footerLegalLinks = [
    { label: tr.footer_privacy, href: "#" },
    { label: tr.footer_terms,   href: "#" },
    { label: tr.footer_cookies, href: "#" },
  ];

  return (
    <footer>
      <div className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
          <div className="grid grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">

            {/* Brand Column */}
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow">
                  <Image src="/logo.png" alt="Kille Bhudargad logo" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <span className="font-bold text-lg text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Kille Bhudargad Agro
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                {tr.footer_tagline}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#D4A574] text-gray-400 hover:text-white transition-all duration-200 flex items-center justify-center">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden lg:block col-span-1" />

            {/* Company Links */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h4 className="text-[#D4A574] text-xs font-bold tracking-[0.2em] uppercase mb-5">{tr.footer_company}</h4>
              <ul className="space-y-3.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight />{link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h4 className="text-[#D4A574] text-xs font-bold tracking-[0.2em] uppercase mb-5">{tr.footer_products}</h4>
              <ul className="space-y-3.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight />{link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h4 className="text-[#D4A574] text-xs font-bold tracking-[0.2em] uppercase mb-5">{tr.footer_support}</h4>
              <ul className="space-y-3.5">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight />{link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-12 lg:col-span-3">
              <h4 className="text-[#D4A574] text-xs font-bold tracking-[0.2em] uppercase mb-5">{tr.footer_get_in_touch}</h4>
              <div className="space-y-3.5">
                <a href="https://maps.google.com/?q=Bhudargad,Kolhapur,Maharashtra" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.06] group-hover:bg-[#2D5F2E] flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <span className="text-sm leading-relaxed">Bhudargad, Kolhapur<br />Maharashtra, India</span>
                </a>
                <a href="tel:+919156519393" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.06] group-hover:bg-[#2D5F2E] flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                  </span>
                  <span className="text-sm leading-relaxed">+91 9156519393</span>
                </a>
                <a href="mailto:killebhudargadprivatelimited@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.06] group-hover:bg-[#2D5F2E] flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                  </span>
                  <span className="text-sm leading-relaxed break-all">killebhudargadprivatelimited@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-gray-600 text-xs">
              © 2026 Kille Bhudargad Agro Private Limited. {tr.footer_rights}
            </p>
            <div className="flex items-center gap-6">
              {footerLegalLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-gray-600 text-xs hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
