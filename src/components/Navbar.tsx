"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);

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
    const sectionIds = ["home", "about", "projects", "skills", "experience", "certifications", "contact"];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header ref={navRef} className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] lg:max-w-5xl">
      <nav className="glass-card px-2.5 xs:px-4 sm:px-6 py-2 rounded-full border border-white/10 flex items-center justify-between gap-2 sm:gap-4 shadow-2xl shadow-black/40 bg-[#0d0d11]/80 backdrop-blur-md w-full">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-1.5 sm:gap-2 group shrink-0 pl-1"
          aria-label="Go to home"
        >
          <Logo />
          <span className="inline text-white font-bold tracking-widest text-[11px] sm:text-xs lg:text-sm group-hover:text-primary transition-colors uppercase select-none">
            {portfolioData.name.split(" ")[1]}
          </span>
        </a>

        <div className="flex items-center justify-end gap-x-1 xs:gap-x-1.5 sm:gap-x-2.5 py-0.5 w-auto overflow-x-auto scrollbar-none">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = !link.external && activeSection === sectionId;
            const isCV = link.label === "CV";

            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!link.external) {
                e.preventDefault();
                const el = document.getElementById(sectionId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            };

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={handleClick}
                className={`transition-all duration-200 uppercase cursor-pointer whitespace-nowrap shrink-0 text-center font-bold tracking-wide sm:tracking-widest rounded-full
                  ${isCV
                    ? "text-secondary hover:text-white bg-secondary/10 hover:bg-secondary/20 px-2 sm:px-3.5 py-1 sm:py-1.5 border border-secondary/20 hover:border-secondary/40 text-[9px] xs:text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm"
                    : isActive
                      ? "text-white bg-white/10 border border-white/10 px-1.5 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] xs:text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm shadow-inner"
                      : "text-zinc-400 hover:text-white hover:bg-white/5 px-1.5 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] xs:text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
