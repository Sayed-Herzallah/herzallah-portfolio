"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Calendar, GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications">("experience");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        if (window.location.hash === "#certifications") {
          setActiveTab("certifications");
          const el = document.getElementById("experience");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else if (window.location.hash === "#experience") {
          setActiveTab("experience");
        }
      };

      // Check on mount
      handleHashChange();

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 border-t border-card-border relative">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none select-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // Timeline & Credentials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-base text-zinc-300 mt-2">
            A comprehensive history of professional software engineering execution, academic degrees, and credentials.
          </p>
        </div>

        {/* Tab Buttons (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
              activeTab === "experience"
                ? "bg-white text-black border-white shadow-white/5"
                : "bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
              activeTab === "education"
                ? "bg-white text-black border-white shadow-white/5"
                : "bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Education & Academy
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
              activeTab === "certifications"
                ? "bg-white text-black border-white shadow-white/5"
                : "bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Award className="w-4 h-4" />
            Certifications
          </button>
        </div>

        {/* Content Container (Timeline or Grid) */}
        <div className={`relative space-y-8 transition-all duration-300 ${
          activeTab === "certifications"
            ? "w-full max-w-5xl mx-auto"
            : "border-l border-white/10 pl-6 md:pl-8 ml-4 md:mx-auto max-w-3xl"
        }`}>
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience-timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 w-full"
              >
                {portfolioData.experience.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Glowing node on timeline */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-200 z-10 shadow-lg shadow-primary/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>

                    {/* Experience Info Card */}
                    <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 shadow-xl">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                            {item.role}
                          </h3>
                          <p className="text-base font-semibold text-zinc-300 mt-0.5">
                            {item.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-semibold text-zinc-400">
                          <Calendar className="w-3.5 h-3.5 text-primary/70" />
                          {item.duration}
                        </span>
                      </div>

                      <ul className="space-y-2 text-sm md:text-base text-zinc-200 pl-4 list-disc marker:text-primary/70 mb-6 leading-relaxed">
                        {item.description.map((point, ptIdx) => (
                          <li key={ptIdx}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education-timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 w-full"
              >
                {portfolioData.education.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Glowing node on timeline */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-2 border-secondary flex items-center justify-center group-hover:scale-125 transition-transform duration-200 z-10 shadow-lg shadow-secondary/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    </div>

                    {/* Education Info Card */}
                    <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 shadow-xl">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors leading-snug">
                            {item.degree}
                          </h3>
                          <p className="text-base font-semibold text-zinc-300 mt-0.5">
                            {item.school}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-semibold text-zinc-400">
                          <Calendar className="w-3.5 h-3.5 text-secondary/70" />
                          {item.duration}
                        </span>
                      </div>

                      {item.description && (
                        <ul className="space-y-2 text-sm md:text-base text-zinc-200 pl-4 list-disc marker:text-secondary/70 leading-relaxed">
                          {item.description.map((point, ptIdx) => (
                            <li key={ptIdx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                key="certifications-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
              >
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="glass-card rounded-2xl p-6 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between group min-h-[180px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-zinc-400 font-medium">
                          {cert.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-zinc-300 font-medium mb-6">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-primary transition-colors mt-auto self-start cursor-pointer"
                      >
                        Verify Credential
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 mt-auto self-start">
                        Add verification link
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
