import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kille Bhudargad Agro Private Limited — Premium Indian Spice Exporter",
  description:
    "Premium agro products from Kolhapur, Maharashtra — certified organic spices, grains & herbs exported to 30+ countries since 1999.",
  robots: "index, follow",
  openGraph: {
    title: "Kille Bhudargad Agro Private Limited",
    description:
      "Premium agro products from Kolhapur, Maharashtra — certified organic spices, grains & herbs exported to 30+ countries since 1999.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kille Bhudargad Agro Private Limited",
    description:
      "Premium agro products from Kolhapur, Maharashtra — certified organic spices, grains & herbs exported to 30+ countries since 1999.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
