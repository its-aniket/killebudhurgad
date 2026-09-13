import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import ProductDetailClient from "./ProductDetailClient";

// ── Types ──────────────────────────────────────────────────────────────────────

interface Spec {
  label: string;
  value: string;
}

interface PackagingOption {
  size: string;
  desc: string;
}

interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  bgColor: string;
  tags: string[];
  features: string[];
  specs: Spec[];
  packaging: PackagingOption[];
}

// ── Product Data ───────────────────────────────────────────────────────────────

const products: Record<string, Product> = {
  turmeric: {
    slug: "turmeric",
    name: "Organic Turmeric Powder",
    category: "Spices",
    tagline: "Golden-bright, certified organic turmeric",
    description:
      "Our premium Organic Turmeric Powder is sourced from the finest farms in Kolhapur, Maharashtra. With over 25% curcumin content, it delivers exceptional quality and potency. Each batch is carefully processed to preserve natural oils and active compounds, ensuring maximum freshness and health benefits.",
    image: "/turmeric.png",
    bgColor: "rgb(253, 249, 240)",
    tags: ["Organic Certified", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "Over 25% curcumin content, premium quality guaranteed",
      "Certified organic, no pesticides or synthetic additives",
      "Sun-dried and stone-ground to preserve natural oils",
      "Available in 1 kg to 1000 kg configurations",
      "Full export documentation provided",
    ],
    specs: [
      { label: "Origin", value: "Kolhapur, Maharashtra, India" },
      { label: "Form", value: "Powder / Whole / Finger" },
      { label: "Curcumin Content", value: "≥ 3.5% (min)" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Colour Value", value: "≥ 500 ASTA" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Certification", value: "FSSAI, ISO 22000, USDA Organic" },
    ],
    packaging: [
      { size: "1 kg", desc: "Retail / Sample" },
      { size: "5 kg", desc: "Small Bulk" },
      { size: "25 kg", desc: "Commercial" },
      { size: "50 kg", desc: "Wholesale" },
    ],
  },
  "black-pepper": {
    slug: "black-pepper",
    name: "Malabar Black Pepper",
    category: "Spices",
    tagline: "The King of Spices, bold and pungent",
    description:
      "Premium Malabar Black Pepper sourced directly from the spice gardens of Kerala. Sun-dried to lock in natural oils and sharp heat. Available as whole peppercorns or ground powder, with full FSSAI certification and export documentation.",
    image: "/black-pepper.png",
    bgColor: "rgb(240, 245, 240)",
    tags: ["Sun Dried", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "5–7% piperine content for superior pungency",
      "Machine-cleaned, graded peppercorns",
      "Available whole, cracked, or ground",
      "Available in 1 kg to 500 kg configurations",
      "Phytosanitary certificate provided",
    ],
    specs: [
      { label: "Origin", value: "Kerala & Karnataka, India" },
      { label: "Form", value: "Whole / Ground / Cracked" },
      { label: "Piperine Content", value: "≥ 5%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Bulk Density", value: "500–600 g/L" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Certification", value: "FSSAI, Spices Board India" },
    ],
    packaging: [
      { size: "1 kg", desc: "Retail / Sample" },
      { size: "5 kg", desc: "Small Bulk" },
      { size: "25 kg", desc: "Commercial" },
      { size: "50 kg", desc: "Wholesale" },
    ],
  },
  cardamom: {
    slug: "cardamom",
    name: "Premium Cardamom",
    category: "Spices",
    tagline: "Hand-picked green cardamom pods",
    description:
      "Our Premium Cardamom pods are hand-picked at peak maturity from South Indian spice gardens. Known for their intense floral aroma and rich flavor, these pods are sun-dried and carefully graded for export excellence.",
    image: "/cardamom.png",
    bgColor: "rgb(245, 248, 245)",
    tags: ["Hand-Picked", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "Intense floral aroma, harvested at peak maturity",
      "Bold green color, naturally sun-dried",
      "Sizes 6mm–8mm+ available",
      "Available in 1 kg to 100 kg configurations",
      "Full export documentation",
    ],
    specs: [
      { label: "Origin", value: "Kerala & Karnataka, India" },
      { label: "Form", value: "Whole Pods / Seeds" },
      { label: "Size", value: "6mm – 8mm+" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Volatile Oil", value: "≥ 4%" },
      { label: "Shelf Life", value: "18 months" },
      { label: "Certification", value: "FSSAI, Spices Board India" },
    ],
    packaging: [
      { size: "500 g", desc: "Retail / Sample" },
      { size: "1 kg", desc: "Small Pack" },
      { size: "10 kg", desc: "Commercial" },
      { size: "25 kg", desc: "Wholesale" },
    ],
  },
  "red-chilli": {
    slug: "red-chilli",
    name: "Chili Powder & Flakes",
    category: "Spices",
    tagline: "Bold, fiery red chili, whole, flakes, or powder",
    description:
      "Our premium Red Chili is sourced from sun-drenched farms across Maharashtra and Andhra Pradesh. Available as whole dried chilies, flakes, or finely ground powder, delivering vibrant color and rich heat to any recipe.",
    image: "/red-chilli.png",
    bgColor: "rgb(250, 242, 240)",
    tags: ["Sun Dried", "Export Grade", "Bulk Available", "FSSAI Approved"],
    features: [
      "High ASTA color value, deep red, vibrant appearance",
      "Available whole, flakes, or powder",
      "Low moisture content for extended shelf life",
      "Available in 1 kg to 500 kg configurations",
      "Phytosanitary certificate provided",
    ],
    specs: [
      { label: "Origin", value: "Maharashtra & Andhra Pradesh, India" },
      { label: "Form", value: "Whole / Flakes / Powder" },
      { label: "ASTA Color", value: "≥ 80" },
      { label: "Moisture", value: "≤ 11%" },
      { label: "Capsaicin", value: "0.1% – 0.3%" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Certification", value: "FSSAI, APEDA Certified" },
    ],
    packaging: [
      { size: "1 kg", desc: "Retail / Sample" },
      { size: "5 kg", desc: "Small Bulk" },
      { size: "25 kg", desc: "Commercial" },
      { size: "50 kg", desc: "Wholesale" },
    ],
  },
};

// ── Static Params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return {};
  return {
    title: `${product.name} — Kille Bhudargad Agro`,
    description: product.description,
  };
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();
  const relatedProducts = Object.values(products).filter((p) => p.slug !== slug);
  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
