import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photographer's Landing Page",
  description: "Discover the captivating work of a skilled photographer. Portraits, landscapes, and more — professionally displayed.",
  openGraph: {
    title: "Photographer's Landing Page",
    description: "Discover the captivating work of a skilled photographer. Portraits, landscapes, and more — professionally displayed.",
    url: "https://landing-page-yervand-markosyans-projects.vercel.app/",
    siteName: "Photographer's Landing Page",
    images: [
      {
        url: "https://landing-page-yervand-markosyans-projects.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Showcase of photographer's work",
      },
    ],
    type: "website",
  },
}



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
        {children}
        <AosInit />
      </body>
    </html>
  );
}
