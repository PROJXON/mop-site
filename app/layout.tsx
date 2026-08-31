import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarClean from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "A curated networking experience by PROJXON at The Assembly by Kiln, UnCommons, Las Vegas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.momentumofficeparty.com"),
  title: "Momentum Office Party",
  description,
  openGraph: {
    title: "Momentum Office Party",
    description,
    url: "https://www.momentumofficeparty.com",
    siteName: "Momentum Office Party",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Momentum Office Party - Elevate Your Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum Office Party",
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBarClean />
        {children}
        <Footer />
      </body>
    </html>
  );
}
