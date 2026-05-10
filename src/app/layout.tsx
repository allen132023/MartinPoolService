import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Martin Pool Service | Professional Pool Cleaning & Maintenance",
    template: "%s | Martin Pool Service",
  },
  description:
    "Martin Pool Service provides expert pool cleaning, maintenance, and repair. Weekly service, chemical balancing, green pool recovery, and more. Get a free quote today!",
  keywords: [
    "pool cleaning",
    "pool service",
    "weekly pool cleaning",
    "pool maintenance",
    "pool cleaning near me",
    "swimming pool cleaning",
    "pool technician",
    "pool care",
    "pool chemical balancing",
    "green pool recovery",
  ],
  authors: [{ name: "Martin Pool Service" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://martinpoolservice.com",
    siteName: "Martin Pool Service",
    title: "Martin Pool Service | Professional Pool Cleaning & Maintenance",
    description:
      "Expert pool cleaning, maintenance, and repair. Serving your area with professional weekly pool service. Get a free quote today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martin Pool Service - Professional Pool Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Pool Service | Professional Pool Cleaning",
    description: "Expert pool cleaning & maintenance. Get a free quote today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Martin Pool Service",
  description:
    "Professional pool cleaning, maintenance, and repair services.",
  url: "https://martinpoolservice.com",
  telephone: "+1-555-POOL-SVC",
  priceRange: "$$",
  serviceType: "Pool Cleaning and Maintenance",
  areaServed: {
    "@type": "State",
    name: "Local Service Area",
  },
  sameAs: ["https://www.instagram.com/martinpoolservice_/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
