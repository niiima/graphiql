import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { lalezar, naskh } from "@/lib/fonts";

import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://nivnet.ir"),

  title: {
    default: "NivNet | طراحی و توسعه وب اپلیکیشن، سئو و هوش مصنوعی",
    template: "%s | NivNet",
  },

  description:
    "NivNet ارائه‌دهنده خدمات طراحی و توسعه وب اپلیکیشن، سئو حرفه‌ای، فروشگاه اینترنتی، اپلیکیشن موبایل و راهکارهای هوش مصنوعی با تمرکز بر سرعت، امنیت و مقیاس‌پذیری.",

  keywords: [
    "طراحی وب اپلیکیشن",
    "توسعه وب",
    "Next.js",
    "React",
    "سئو سایت",
    "سئو تکنیکال",
    "هوش مصنوعی",
    "چت بات هوش مصنوعی",
    "طراحی فروشگاه اینترنتی",
    "اپلیکیشن موبایل",
    "React Native",
    "اتوماسیون کسب‌وکار",
    "NivNet",
  ],

  authors: [{ name: "NivNet Team", url: "https://nivnet.ir" }],
  creator: "NivNet",
  publisher: "NivNet",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://nivnet.ir",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://nivnet.ir",
    siteName: "NivNet",
    title: "NivNet | توسعه وب مدرن، سئو و هوش مصنوعی",
    description:
      "طراحی و توسعه وب اپلیکیشن‌های مدرن، خدمات سئو پیشرفته و راهکارهای هوش مصنوعی برای رشد واقعی کسب‌وکار شما.",
    images: [
      {
        url: "/og/main.png",
        width: 1200,
        height: 630,
        alt: "NivNet – Modern Web & AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NivNet | Web, SEO & AI Solutions",
    description:
      "Modern web applications, SEO optimization and AI automation for scalable businesses.",
    images: ["/og/main.png"],
    creator: "@nivnetir",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark light"></meta>
        <link rel="apple-touch-icon" href="/apple_touch-icon.png" />
        <meta name="og:image" content="/main.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
            href="https://fonts.googleapis.com/css2?family=Changa:wght@300&family=Syne+Mono&display=swap"
            rel="stylesheet"
          /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${naskh.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
