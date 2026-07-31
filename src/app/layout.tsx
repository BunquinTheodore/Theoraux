import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://theoraux.com";
const siteTitle = "Theoraux | Intelligent Automation & Custom Software Solutions";
const siteDescription =
  "Theoraux builds custom web, mobile, and software solutions and intelligent automation systems that streamline operations, cut manual work, and drive growth for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Theoraux",
  },
  description: siteDescription,
  keywords: [
    "custom software development",
    "web development",
    "mobile app development",
    "intelligent automation",
    "process automation",
    "software development Philippines",
    "Theoraux",
  ],
  authors: [{ name: "Theoraux" }],
  creator: "Theoraux",
  publisher: "Theoraux",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Theoraux",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Theoraux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Theoraux",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description: siteDescription,
  email: "bunquintheodore@gmail.com",
  telephone: "+639629935762",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
  },
  sameAs: [
    "https://www.linkedin.com/company/112286976",
    "https://www.facebook.com/profile.php?id=61582763437544",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
