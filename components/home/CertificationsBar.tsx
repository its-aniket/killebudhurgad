const CheckIcon = () => (
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
    className="text-[#2D5F2E]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const certifications = [
  "FSSAI Certified",
  "ISO 22000",
  "USDA Organic",
  "EU Organic",
  "Spices Board India",
  "Phytosanitary Certified",
];

export default function CertificationsBar() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mr-4">
            Certified &amp; Compliant
          </p>
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 text-sm font-semibold text-gray-500"
            >
              <CheckIcon />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
