import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

/* ============================
   Fonts
============================ */

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

/* ============================
   SEO Metadata
============================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://brightnestacademy.netlify.app"),

  title: {
    default: "BrightNest Early Learning Academy",
    template: "%s | BrightNest Early Learning Academy",
  },

  description:
    "BrightNest Early Learning Academy provides a safe, nurturing, and play-based learning environment for toddlers and preschoolers.",

  keywords: [
    "toddler school",
    "preschool",
    "early learning academy",
    "kindergarten",
    "childcare center",
    "early childhood education",
  ],

  openGraph: {
    title: "BrightNest Early Learning Academy",
    description:
      "A safe start for curious little minds. Nurturing confidence and creativity through play-based learning.",
    url: "https://brightnestacademy.netlify.app",
    siteName: "BrightNest Early Learning Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrightNest Early Learning Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BrightNest Early Learning Academy",
    description:
      "Nurturing Curiosity, Building Confidence — a trusted early learning environment.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

};

/* ============================
   Root Layout
============================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable}`}
    >
      <body className="bg-white overflow-x-hidden font-body">
        {children}
      </body>
    </html>
  );
}
