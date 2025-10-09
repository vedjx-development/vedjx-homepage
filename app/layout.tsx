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
  title: "Ved.jx - Knoxville Web Solutions",
  description: "Professional web design and development services in Knoxville, TN. Affordable websites for small businesses with excellent customer service.",
  keywords: ["web design", "web development", "Knoxville", "Tennessee", "websites", "SEO", "logo design"],
  authors: [{ name: "Ved.jx" }],
  openGraph: {
    title: "Ved.jx - Knoxville Web Solutions",
    description: "Professional web design and development services in Knoxville, TN",
    type: "website",
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
