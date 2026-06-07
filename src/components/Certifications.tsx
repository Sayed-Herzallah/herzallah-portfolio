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
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 // Credentials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-base text-zinc-300 mt-2 max-w-lg">
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
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="glass-card rounded-2xl p-6 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between group"
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
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-primary transition-colors mt-auto self-start"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
