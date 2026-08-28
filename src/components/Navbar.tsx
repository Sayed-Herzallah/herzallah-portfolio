"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [hash, setHash] = useState("");
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
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setHash(window.location.hash);
      };
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "experience", "contact"];
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
      if (id === "certifications") {
        window.location.hash = "certifications";
        const el = document.getElementById("experience");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.hash = id;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <header ref={navRef} className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] lg:max-w-5xl">
      <nav className="glass-card px-3 sm:px-6 py-2.5 md:py-2 rounded-2xl md:rounded-full border border-white/10 flex flex-col md:flex-row items-center gap-2.5 md:gap-4 shadow-2xl shadow-black/40 bg-[#0d0d11]/80 backdrop-blur-md w-full">
        
        {/* Brand row (Logo + Name + mobile/tablet CV) */}
        <div className="flex items-center justify-between w-full md:w-auto shrink-0">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-1.5 sm:gap-2 group pl-0.5 sm:pl-1"
            aria-label="Go to home"
          >
            <Logo />
            <span className="text-white font-bold tracking-widest text-[10px] xs:text-[11px] sm:text-xs lg:text-sm group-hover:text-primary transition-colors uppercase select-none">
              {portfolioData.name.split(" ")[1]}
            </span>
          </a>

          {/* CV button on mobile/tablet only */}
          <a
            href={portfolioData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex md:hidden text-secondary hover:text-white bg-secondary/10 hover:bg-secondary/20 px-3 py-1 border border-secondary/20 hover:border-secondary/40 text-[9px] font-bold tracking-widest rounded-full transition-all duration-200 uppercase"
          >
            CV
          </a>
        </div>

        {/* Links row */}
        <div className="flex items-center justify-center md:justify-end gap-x-1.5 sm:gap-x-3 md:gap-x-2.5 py-0.5 w-full md:w-auto flex-1 overflow-visible">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isCV = link.label === "CV";

            if (isCV) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex text-secondary hover:text-white bg-secondary/10 hover:bg-secondary/20 px-3.5 py-1.5 border border-secondary/20 hover:border-secondary/40 text-[10px] sm:text-[11.5px] md:text-xs lg:text-sm font-bold tracking-widest rounded-full transition-all duration-200 uppercase"
                >
                  CV
                </a>
              );
            }

            let isActive = !link.external && activeSection === sectionId;
            if (activeSection === "experience") {
              if (hash === "#certifications") {
                isActive = link.label === "CERTS";
              } else {
                isActive = link.label === "EXPERIENCE";
              }
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-all duration-200 uppercase cursor-pointer whitespace-nowrap text-center font-bold tracking-wide sm:tracking-widest rounded-full py-1 md:py-1.5 px-1.5 xs:px-2.5 sm:px-3 text-[8px] xs:text-[9.5px] sm:text-[11px] md:text-xs lg:text-sm
                  ${isActive
                    ? "text-white bg-white/10 border border-white/10 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
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
