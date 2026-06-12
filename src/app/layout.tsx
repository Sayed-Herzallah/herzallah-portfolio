import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { ToastProvider } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Sayed Herzallah | سيد حرز الله - Full-Stack Developer",
  description: "معرض أعمال سيد حرز الله، مطور ويب متكامل (Full-Stack Developer) متخصص في بناء الأنظمة الخلفية Node.js، وقواعد البيانات MySQL وMongoDB. Portfolio of Sayed Herzallah.",
  keywords: [
    "Sayed Herzallah",
    "Herzallah",
    "سيد حرز الله",
    "حرز الله",
    "سيد حرزالله",
    "معرض أعمال سيد حرز الله",
    "سيد حرز الله مطور ويب",
    "سيد حرز الله مبرمج",
    "مطور برمجيات سيد حرز الله",
    "مهندس برمجيات سيد حرز الله",
    "بورتفوليو سيد حرز الله",
    "موقع سيد حرز الله الرسمي",
    "Sayed Herzallah Portfolio",
    "Sayed Herzallah Developer",
    "Sayed Herzallah Web Developer",
    "Sayed Herzallah Software Engineer",
    "Sayed Herzallah Cairo",
    "Sayed Herzallah Egypt",
    "Sayed Herzallah Backend Developer",
    "Sayed Herzallah Full Stack",
    "Sayed Herzalla",
    "Sayed Harzallah",
    "Sayyid Herzallah",
    "S. Herzallah",
    "Herzallah Sayed",
    "Backend Developer Egypt",
    "Full Stack Developer Cairo",
    "Node.js Developer Egypt",
    "MERN Stack Developer",
    "Web Developer Portfolio",
    "React Developer Cairo",
    "Software Engineer Egypt",
    "مطور ويب في مصر",
    "مطور باك إند مصر",
    "مطور نود جي اس مصر",
    "مهندس برمجيات القاهرة",
    "مطور فول ستاك القاهرة",
    "Ataa Charity Platform Sayed Herzallah",
    "R3aya Care System Sayed Herzallah",
    "Siwa Oasis Travel Sayed Herzallah",
    "Brain Tumor AI Sayed Herzallah",
    "UFUQ Real Estate Sayed Herzallah",
    "Villa Agency Sayed Herzallah",
    "Sharaha App Sayed Herzallah",
    "Social Media API Sayed Herzallah",
    "Delta Higher Institute Computer Science",
    "Google Build with AI Masr Edition",
    "Creativa MCIT React developer",
    "NTI MERN stack engineer"
  ],
  authors: [{ name: "Sayed Herzallah", url: "https://herzallah.me" }],
  creator: "Sayed Herzallah",
  alternates: {
    canonical: "https://herzallah.me",
  },
  openGraph: {
    title: "Sayed Herzallah | سيد حرز الله - Full-Stack Developer",
    description: "معرض أعمال سيد حرز الله، مطور ويب متكامل (Full-Stack Developer) متخصص في بناء الأنظمة الخلفية وقواعد البيانات والواجهات التفاعلية.",
    url: "https://herzallah.me",
    siteName: "Sayed Herzallah Portfolio",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://herzallah.me/profile.webp",
        width: 800,
        height: 800,
        alt: "Sayed Herzallah | سيد حرز الله",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Herzallah | سيد حرز الله - Full-Stack Developer",
    description: "معرض أعمال سيد حرز الله، مطور ويب متكامل (Full-Stack Developer) متخصص في بناء الأنظمة الخلفية وقواعد البيانات والواجهات التفاعلية.",
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
        "alternateName": "سيد حرز الله",
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
        "name": "Sayed Herzallah | سيد حرز الله Portfolio",
        "publisher": {
          "@id": "https://herzallah.me/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet" />
      </head>
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
