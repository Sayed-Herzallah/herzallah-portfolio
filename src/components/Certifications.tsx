"use client";

import React from "react";
import { Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 border-t border-card-border relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-3 flex-wrap">
            <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full border border-white/5 shadow-[inset_0_0_1px_rgba(255,255,255,0.1)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_5px_#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_5px_#27c93f]" />
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>05 // Credentials</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-lg">
            Professional licenses and course credentials verifying expertise in frontend, database, and system architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-6">
                  {cert.issuer}
                </p>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-primary transition-colors mt-auto self-start"
                >
                  Verify Credential
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
