"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-card-border bg-[#050507] py-12 text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-400 font-semibold tracking-wide">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0077b5] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.4)]"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`https://wa.me/${portfolioData.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-[#25d366] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-[#8b5cf6] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center hover:bg-card hover:text-white transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
