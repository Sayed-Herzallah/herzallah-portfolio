"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "CV", href: portfolioData.cvUrl, external: true },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <nav className="glass-card px-5 sm:px-7 py-3 rounded-full border border-white/10 flex items-center justify-center gap-4 sm:gap-6 shadow-2xl shadow-black/40 bg-[#0d0d11]/80 backdrop-blur-md">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
