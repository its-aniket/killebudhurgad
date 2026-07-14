import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import CertificationsBar from "@/components/home/CertificationsBar";

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
        <Testimonials />
        <CTASection />
        <CertificationsBar />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
