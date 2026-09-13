"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsAppFAB() {
  const { tr } = useLanguage();

  return (
    <a
      href="https://wa.me/919156519393"
      target="_blank"
      rel="noreferrer"
      aria-label={tr.fab_label}
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 hover:rounded-xl active:scale-95 transition-all z-50"
      style={{ boxShadow: "rgba(37, 211, 102, 0.4) 0px 8px 30px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 32 32"
        fill="currentColor"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3.2a12.8 12.8 0 0 0-10.96 19.4L3.2 28.8l6.35-1.66A12.8 12.8 0 1 0 16.04 3.2Zm0 23.28a10.43 10.43 0 0 1-5.31-1.45l-.38-.23-3.77.99 1-3.68-.25-.39a10.48 10.48 0 1 1 8.71 4.76Zm5.75-7.85c-.31-.15-1.84-.91-2.13-1.01-.29-.11-.5-.15-.71.15-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08a8.55 8.55 0 0 1-2.52-1.55 9.42 9.42 0 0 1-1.74-2.16c-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.71-1.72-.98-2.35-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.6s1.12 3.02 1.27 3.23c.15.21 2.2 3.36 5.32 4.71.74.32 1.32.51 1.77.65.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
      </svg>
      {/* Online indicator */}
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
