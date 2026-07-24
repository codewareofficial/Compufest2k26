import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import MinecraftLoader from "@/components/Minecraftloader";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://compufest2k26.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Compufest 2k26 | National TechFest | YCCE Nagpur",
    template: "%s | Compufest 2k26 - YCCE Nagpur",
  },
  description:
    "Compufest 2k26 is YCCE Nagpur's premier annual national technical festival hosted by the Department of Computer Technology. Featuring CodeRush 24-hr Hackathon (₹1,00,000 Prize Pool), BGMI BattleZone, Free Fire, Hack ML, Prompt-a-Thon, Versus Coding, Tech Quiz, Long Cricket & Chess.",
  keywords: [
    "Compufest",
    "Compufest 2k26",
    "Compufest 2026",
    "YCCE Nagpur",
    "CodeRush Hackathon",
    "Computer Technology YCCE",
    "Nagpur TechFest",
    "Coding Competition",
    "BGMI BattleZone",
    "Hack ML",
    "Prompt-a-Thon",
    "YCCE Techfest",
    "College Event Nagpur",
    "National Technical Festival",
    "Versus Coding",
    "Long Cricket",
    "Tech Quiz"
  ],
  authors: [
    { name: "Compufest Technical Team" },
    { name: "Muchkundraje Thote" },
    { name: "Kritish Bokde" }
  ],
  creator: "Department of Computer Technology, YCCE Nagpur",
  publisher: "Yeshwantrao Chavan College of Engineering",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Compufest 2k26 | Premier National TechFest by YCCE Nagpur",
    description:
      "Join Compufest 2k26 — CODE. CREATE. CONQUER. Featuring CodeRush 24-hr Hackathon (₹1 Lakh Prize Pool), Esports, ML challenges & competitive coding at YCCE Nagpur.",
    siteName: "Compufest 2k26",
    images: [
      {
        url: "/about-bg.png",
        width: 1200,
        height: 630,
        alt: "Compufest 2k26 YCCE Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compufest 2k26 - YCCE Nagpur TechFest",
    description:
      "Premier National Technical Festival organized by the Department of Computer Technology, YCCE Nagpur.",
    images: ["/about-bg.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Compufest 2k26",
  "startDate": "2026-08-06T09:00:00+05:30",
  "endDate": "2026-08-08T18:00:00+05:30",
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Yeshwantrao Chavan College of Engineering (YCCE)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hingna Road, Wanadongri",
      "addressLocality": "Nagpur",
      "postalCode": "441110",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  },
  "image": [`${siteUrl}/about-bg.png`],
  "description": "Premier National Technical Festival organized by the Department of Computer Technology at YCCE Nagpur featuring CodeRush Hackathon, Hack ML, Esports, and Coding competitions.",
  "organizer": {
    "@type": "Organization",
    "name": "Department of Computer Technology, YCCE Nagpur",
    "url": "https://ycce.edu"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "50",
    "highPrice": "2000",
    "offerCount": "9",
    "url": "https://unstop.com/hackathons/coderush-20-yeshwantrao-chavan-college-of-engineering-ycce-nagpur-1723466"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MinecraftLoader>
          <Nav />
          {children}
        </MinecraftLoader>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
