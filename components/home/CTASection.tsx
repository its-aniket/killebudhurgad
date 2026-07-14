import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#F9FAF9] border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#D4A574] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
          Ready to Source?
        </p>
        <h2
          className="font-black text-[#2C2C2C] mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
          }}
        >
          Let&apos;s talk about your requirements.
        </h2>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto">
          Whether you&apos;re a buyer, distributor, or retailer — we&apos;ll find
          the right product and packaging for your market.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Inquiry CTA */}
          <Link
            href="/contact"
            className="bg-[#2D5F2E] text-white px-9 py-4 rounded-xl font-bold text-sm hover:bg-[#1e4520] transition-all inline-flex items-center justify-center gap-2 group shadow-lg"
          >
            Send an Inquiry
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
              className="group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919156519393"
            target="_blank"
            rel="noreferrer"
            className="border border-[#25D366] text-[#25D366] px-9 py-4 rounded-xl font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all inline-flex items-center justify-center gap-2"
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
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
