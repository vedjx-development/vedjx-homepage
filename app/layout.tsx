import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vedjx.netlify.app'),
  title: {
    default: "Ved.jx - Knoxville Web Solutions",
    template: "%s | Ved.jx",
  },
  description: "Professional web design and development services in Knoxville, TN. Affordable websites for small businesses with excellent customer service.",
  keywords: ["web design", "web development", "Knoxville", "Tennessee", "websites", "SEO", "logo design", "web hosting", "web maintenance", "small business websites"],
  authors: [{ name: "Ved.jx" }],
  creator: "Ved.jx",
  publisher: "Ved.jx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ved.jx - Knoxville Web Solutions",
    description: "Professional web design and development services in Knoxville, TN. Affordable websites for small businesses with excellent customer service.",
    url: 'https://vedjx.netlify.app',
    siteName: 'Ved.jx',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/VedJx.svg',
        width: 400,
        height: 140,
        alt: 'Ved.jx Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ved.jx - Knoxville Web Solutions',
    description: 'Professional web design and development services in Knoxville, TN',
    images: ['/VedJx.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
