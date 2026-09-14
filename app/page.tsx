import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientTrust from "@/components/home/ClientTrust";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-white text-[#2C2C2C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <ClientTrust />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
