"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [scrolled, setScrolled] = useState(forceScrolled);

  useEffect(() => {
    // If forceScrolled, always show white navbar regardless of scroll position
    if (forceScrolled) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check on mount too
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  // When scrolled: white bg + shadow. When at top: transparent.
  const navStyle: React.CSSProperties = scrolled
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

  // Text colors flip between white (over hero) and dark (scrolled)
  const textColor = scrolled ? "#2C2C2C" : "rgba(255,255,255,0.9)";
  const subTextColor = scrolled ? "rgba(44,44,44,0.7)" : "rgba(255,255,255,0.85)";
  const logoTextColor = scrolled ? "#2D5F2E" : "#ffffff";
  const mobileIconColor = scrolled ? "#2C2C2C" : "#ffffff";

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#2D5F2E] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                aria-hidden="true"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span
              className="font-bold text-lg tracking-tight transition-colors duration-500"
              style={{ fontFamily: "'Poppins', sans-serif", color: logoTextColor }}
            >
              Kille Bhudargad
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold tracking-wide group py-1 transition-colors duration-500"
                style={{ color: textColor }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#D4A574] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <button
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-500"
              style={{ color: subTextColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>EN</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Search */}
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-500"
              style={{ color: subTextColor }}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </button>

            {/* Get Quote CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#D4A574] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#c4935e] active:scale-95 transition-all shadow-lg"
            >
              Get Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center transition-colors duration-500"
            style={{ color: mobileIconColor }}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
}
