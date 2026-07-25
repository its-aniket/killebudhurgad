"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  // Close mobile menu on route change (or resize to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navStyle: React.CSSProperties =
    scrolled || menuOpen
      ? {
          background: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 24px 0 rgba(45,95,46,0.08)",
        }
      : {
          background: "transparent",
          backdropFilter: "none",
          boxShadow: "none",
        };

  const isDark = scrolled || menuOpen;
  const textColor      = isDark ? "#2C2C2C"              : "rgba(255,255,255,0.9)";
  const subTextColor   = isDark ? "rgba(44,44,44,0.7)"   : "rgba(255,255,255,0.85)";
  const logoTextColor  = isDark ? "#2D5F2E"              : "#ffffff";
  const mobileIconColor = isDark ? "#2C2C2C"             : "#ffffff";

  return (
    <>
      <nav className="sticky top-0 z-50 transition-all duration-500" style={navStyle}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform bg-white">
                <Image
                  src="/logo.png"
                  alt="Kille Bhudargad logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="font-bold text-lg tracking-tight transition-colors duration-500" style={{ fontFamily: "'Poppins', sans-serif", color: logoTextColor }}>
                Kille Bhudargad
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative text-sm font-semibold tracking-wide group py-1 transition-colors duration-500" style={{ color: textColor }}>
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#D4A574] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-500" style={{ color: subTextColor }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>EN</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-500" style={{ color: subTextColor }} aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
                </svg>
              </button>
              <Link href="/contact" className="flex items-center gap-2 bg-[#D4A574] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#c4935e] active:scale-95 transition-all shadow-lg">
                Get Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile: hamburger / close toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-300"
              style={{ color: mobileIconColor }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                /* X icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/97 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#2C2C2C] font-semibold text-base py-3 px-4 rounded-xl hover:bg-[#F0F5F0] hover:text-[#2D5F2E] transition-all"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 pt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#D4A574] text-white font-bold text-sm py-3 px-6 rounded-xl hover:bg-[#c4935e] active:scale-95 transition-all shadow-md w-full"
                >
                  Get Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>

              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/919156519393"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] font-semibold text-sm py-3 px-6 rounded-xl hover:bg-[#25D366] hover:text-white transition-all mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
