import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kille Bhudargad Agro Private Limited Premium Indian Spice Exporter",
  description:
    "Premium agro products from Kolhapur, Maharashtra certified organic spices, grains & herbs exported to 30+ countries since 1999.",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kille Bhudargad Agro Private Limited",
    description:
      "Premium agro products from Kolhapur, Maharashtra certified organic spices, grains & herbs exported to 30+ countries since 1999.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kille Bhudargad Agro Private Limited",
    description:
      "Premium agro products from Kolhapur, Maharashtra certified organic spices, grains & herbs exported to 30+ countries since 1999.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
