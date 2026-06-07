"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CERTS", href: "#certifications" },
    { label: "CONTACT", href: "#contact" },
    { label: "CV", href: portfolioData.cvUrl, external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are near the top of the page
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Check if we are at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const sections = ["about", "projects", "skills", "experience", "certifications", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] lg:max-w-5xl transition-all duration-300">
      <nav className="glass-card px-2.5 xs:px-4 sm:px-6 py-2 rounded-full border border-white/10 flex items-center justify-between gap-2 sm:gap-4 shadow-2xl shadow-black/40 bg-[#0d0d11]/80 backdrop-blur-md w-full">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-1.5 sm:gap-2 group shrink-0 pl-1" aria-label="Go to home">
          <Logo />
          <span className="hidden xs:inline text-white font-bold tracking-widest text-[11px] sm:text-xs lg:text-sm group-hover:text-primary transition-colors uppercase select-none">
            {portfolioData.name.split(" ")[1]} {/* Herzallah */}
          </span>
        </a>

        {/* Dynamic Nav Links as premium Tabs */}
        <div className="flex items-center justify-end gap-x-1 xs:gap-x-1.5 sm:gap-x-2.5 py-0.5 w-auto">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            const isCV = link.label === "CV";

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`transition-all duration-300 uppercase cursor-pointer whitespace-nowrap shrink-0 text-center font-bold tracking-wide sm:tracking-widest rounded-full
                  ${isCV 
                    ? "text-secondary hover:text-white bg-secondary/10 hover:bg-secondary/20 px-2 sm:px-3.5 py-1 sm:py-1.5 border border-secondary/20 hover:border-secondary/40 text-[9px] xs:text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm"
                    : isActive
                      ? "text-white bg-white/10 border border-white/10 px-1.5 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] xs:text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm shadow-inner"
                      : "text-zinc-300 hover:text-white hover:bg-white/5 px-1.5 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] xs:text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
      {/* Scrollbar-none stylesheet for Nav list */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </header>
  );
}
