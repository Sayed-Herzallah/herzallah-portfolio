import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { ToastProvider } from "@/components/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayed Herzallah | Full-Stack Developer (Backend Focused)",
  description: "Portfolio of Sayed Herzallah, a Full-Stack Developer specializing in high-performance Backend architecture, Node.js, Express, databases (MySQL, MongoDB), and React frontend.",
  keywords: [
    "Sayed Herzallah",
    "Herzallah",
    "Sayed Herzallah Developer",
    "Backend Developer Egypt",
    "Full Stack Developer Cairo",
    "Node.js Developer Egypt",
    "MERN Stack Developer",
    "Web Developer Portfolio",
    "React Developer Cairo",
    "Software Engineer Egypt"
  ],
  authors: [{ name: "Sayed Herzallah", url: "https://herzallah.me" }],
  creator: "Sayed Herzallah",
  alternates: {
    canonical: "https://herzallah.me",
  },
  openGraph: {
    title: "Sayed Herzallah | Full-Stack Developer (Backend Focused)",
    description: "Full-Stack Developer specializing in high-performance Node.js RESTful APIs, clean layered software architecture, and responsive React web experiences.",
    url: "https://herzallah.me",
    siteName: "Sayed Herzallah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://herzallah.me/profile.webp",
        width: 800,
        height: 800,
        alt: "Sayed Herzallah - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Herzallah | Full-Stack Developer (Backend Focused)",
    description: "Full-Stack Developer specializing in backend systems (Node.js, Express, MySQL, MongoDB) and responsive frontend React applications.",
    images: ["https://herzallah.me/profile.webp"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://herzallah.me/#person",
        "name": "Sayed Herzallah",
        "url": "https://herzallah.me",
        "image": "https://herzallah.me/profile.webp",
        "jobTitle": "Full Stack Developer",
        "knowsAbout": [
          "Software Engineering",
          "Backend Development",
          "Node.js",
          "Express.js",
          "React.js",
          "JavaScript",
          "TypeScript",
          "MySQL",
          "MongoDB",
          "RESTful APIs",
          "Database Design",
          "Clean Architecture"
        ],
        "sameAs": [
          "https://github.com/Sayed-Herzallah",
          "https://www.linkedin.com/in/sayed-herzallah"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://herzallah.me/#website",
        "url": "https://herzallah.me",
        "name": "Sayed Herzallah Portfolio",
        "publisher": {
          "@id": "https://herzallah.me/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          {children}
        </ToastProvider>
        <ThemeToggle />
      </body>
    </html>
  );
}
