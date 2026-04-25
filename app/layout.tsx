import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/* ======================
   Fonts
====================== */

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

/* ======================
   SEO / Metadata
====================== */

export const metadata: Metadata = {
  metadataBase: new URL("https://souq-jo.com"),

  title: {
    default: "Souq-JO | شريك المشاريع الصغيرة",
    template: "%s | Souq-JO",
  },

  description:
    "أطلق متجرك الإلكتروني خلال دقائق مع نطاقك الخاص، لوحة تحكم ذكية، ووسائل دفع آمنة. كل ما تحتاجه للبيع أونلاين في منصة واحدة.",

  keywords: [
    "منصة متاجر إلكترونية",
    "مشاريع صغيرة",
    "SaaS",
    "بيع أونلاين",
    "متجر إلكتروني",
    "Souq-JO",
    "E-commerce Jordan",
  ],

  alternates: {
    canonical: "https://souq-jo.com",
  },

  openGraph: {
    title: "Souq-JO | شريك المشاريع الصغيرة",
    description:
      "منصة متاجر إلكترونية متكاملة للمشاريع الصغيرة. أطلق متجرك، راقب أداءك، ووسّع تجارتك من مكان واحد.",
    url: "https://souq-jo.com",
    siteName: "Souq-JO",
    locale: "ar_JO",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Souq-JO Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Souq-JO | شريك المشاريع الصغيرة",
    description:
      "أطلق متجرك الإلكتروني خلال دقائق مع أدوات ذكية ونظام دفع آمن.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

/* ======================
   Viewport
====================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e37a23",
};

/* ======================
   Root Layout
====================== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body
        className={`${geist.variable} ${geistMono.variable} ${ibmPlexArabic.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
