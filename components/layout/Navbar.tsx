"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { languages } from "@/lib/translations";
import { categoryIds, getLocalizedCategory, getLocalizedProduct, products } from "@/lib/products";

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const { lang, setLang, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const langRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { label: tr.nav_home,     href: "/" },
    { label: tr.nav_products, href: "/products" },
    { label: tr.nav_about,    href: "/about" },
    { label: tr.nav_contact,  href: "/contact" },
  ];

  // Live-filtered results
  const results = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products.map((product) => getLocalizedProduct(product, lang)).filter((product) => product.searchTerms.some((term) => term.includes(q)) || product.category.toLowerCase().includes(q));
  }, [lang, searchQuery]);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(forceScrolled || window.scrollY > 20);
    handleScroll();
    if (forceScrolled) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen, searchOpen]);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus the search field and let Escape close every temporary navigation layer.
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeSearch();
      setLangOpen(false);
      setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [closeSearch, searchOpen]);

  const navStyle: React.CSSProperties =
    scrolled || menuOpen
      ? { background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", boxShadow: "0 1px 24px 0 rgba(45,95,46,0.08)" }
      : { background: "transparent", backdropFilter: "none", boxShadow: "none" };

  const isDark = scrolled || menuOpen;
  const textColor       = isDark ? "#2C2C2C"            : "rgba(255,255,255,0.9)";
  const subTextColor    = isDark ? "rgba(44,44,44,0.7)" : "rgba(255,255,255,0.85)";
  const logoTextColor   = isDark ? "#2D5F2E"            : "#ffffff";
  const mobileIconColor = isDark ? "#2C2C2C"            : "#ffffff";

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 transition-all duration-500" style={navStyle}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={() => { setMenuOpen(false); setLangOpen(false); }}>
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0 p-1">
                <Image src="/kb-logo.svg" alt="Kille Bhudargad logo" width={44} height={44} className="object-contain w-full h-full" priority />
              </div>
              <span className="font-bold text-lg tracking-tight transition-colors duration-500" style={{ fontFamily: "'Poppins', sans-serif", color: logoTextColor }}>
                Kille Bhudargad Agro
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setLangOpen(false)} className="relative text-sm font-semibold tracking-wide group py-1 transition-colors duration-500" style={{ color: textColor }}>
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#D4A574] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">

              {/* Language Dropdown */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => {
                    setLangOpen((open) => !open);
                    closeSearch();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-500 hover:bg-black/5"
                  style={{ color: subTextColor }}
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                  aria-label="Select language"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span>{currentLang?.code.toUpperCase() ?? "EN"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-200 ${langOpen ? "rotate-90" : ""}`}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                {langOpen && (
                  <div
                    role="listbox"
                    aria-label="Language selector"
                    className="absolute end-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 py-2 max-h-80 overflow-y-auto"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        role="option"
                        aria-selected={lang === l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-[#F0F5F0] ${
                          lang === l.code ? "bg-[#E8F0E8] text-[#2D5F2E] font-semibold" : "text-[#2C2C2C]"
                        }`}
                      >
                        <span>{l.nativeName}</span>
                        <span className="text-xs text-gray-400 ml-2">{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search button */}
              <button
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-500 hover:bg-black/5"
                style={{ color: subTextColor }}
                aria-label={tr.nav_search}
                onClick={() => {
                  setSearchOpen(true);
                  setLangOpen(false);
                  setMenuOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
                </svg>
              </button>

              <Link href="/contact" className="flex items-center gap-2 bg-[#D4A574] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#c4935e] active:scale-95 transition-all shadow-lg">
                {tr.nav_get_quote}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger / close */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-300"
              style={{ color: mobileIconColor }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open);
                setLangOpen(false);
                closeSearch();
              }}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-gray-100 bg-white/97 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-[#2C2C2C] font-semibold text-base py-3 px-4 rounded-xl hover:bg-[#F0F5F0] hover:text-[#2D5F2E] transition-all">
                  {link.label}
                </Link>
              ))}

              {/* Mobile language grid */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Language</p>
                <div className="grid grid-cols-3 gap-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setMenuOpen(false); }}
                      className={`flex flex-col items-center py-2 px-1 rounded-xl text-xs transition-colors ${
                        lang === l.code ? "bg-[#E8F0E8] text-[#2D5F2E] font-bold" : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-semibold text-[11px]">{l.nativeName}</span>
                      <span className="text-[9px] text-gray-400 mt-0.5">{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <Link href="/contact" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#D4A574] text-white font-bold text-sm py-3 px-6 rounded-xl hover:bg-[#c4935e] active:scale-95 transition-all shadow-md w-full">
                  {tr.nav_get_quote}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>

              <a href="https://wa.me/919156519393" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] font-semibold text-sm py-3 px-6 rounded-xl hover:bg-[#25D366] hover:text-white transition-all mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                {tr.fab_label}
              </a>
            </div>
          </div>
        )}
      </nav>
      {forceScrolled && <div aria-hidden="true" className="h-20" />}

      {/* ── Search Overlay ────────────────────────────────────────────────────── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeSearch}
          />

          {/* Panel */}
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* Input row */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0" aria-hidden="true">
                <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={tr.prod_search_placeholder}
                className="flex-1 text-base text-[#2C2C2C] placeholder-gray-400 outline-none bg-transparent"
                aria-label={`${tr.nav_search} ${tr.nav_products}`}
                aria-autocomplete="list"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                aria-label="Close search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Results */}
            {searchQuery.trim() === "" ? (
              <div className="px-5 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{tr.prod_filter_label}</p>
                <div className="flex flex-wrap gap-2">
                  {categoryIds.map((cat) => (
                    <Link
                      key={cat}
                      href={`/products?search=${encodeURIComponent(getLocalizedCategory(cat, lang))}`}
                      onClick={closeSearch}
                      className="px-3 py-1.5 bg-[#F0F5F0] text-[#2D5F2E] text-sm font-semibold rounded-full hover:bg-[#2D5F2E] hover:text-white transition-colors"
                    >
                      {getLocalizedCategory(cat, lang)}
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  {tr.prod_search_placeholder}
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <p className="text-sm font-semibold text-gray-500 mb-1">{tr.prod_no_results} &ldquo;{searchQuery}&rdquo;</p>
                <p className="text-xs text-gray-400">{tr.prod_no_results_sub}</p>
              </div>
            ) : (
              <ul role="listbox" className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                {results.map((product) => (
                  <li key={product.slug} role="option" aria-selected="false">
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={closeSearch}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-[#F0F5F0] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#F5F5F0] flex items-center justify-center overflow-hidden shrink-0">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full p-1"
                          />
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2D5F2E]/30" aria-hidden="true">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#2C2C2C] group-hover:text-[#2D5F2E] transition-colors truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-400">{product.category}</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-[#2D5F2E] group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden="true">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Footer */}
            <div className="border-t border-gray-100 px-5 py-2.5 flex items-center justify-between bg-gray-50/60">
              <p className="text-[11px] text-gray-400">
                {results.length > 0
                  ? `${results.length} ${results.length !== 1 ? tr.prod_found_plural : tr.prod_found}`
                  : tr.prod_search_placeholder}
              </p>
              <kbd className="text-[10px] bg-white border border-gray-200 text-gray-400 px-2 py-0.5 rounded font-mono shadow-sm">ESC</kbd>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
