"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 border-t border-card-border relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // Experience & Education</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Professional Timeline
          </h2>
          <p className="text-base text-zinc-300 mt-2 max-w-lg">
            A history of technical execution, bootcamp trainings, and academic qualifications.
          </p>
        </div>

        {/* Timeline Axis container */}
        <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12 ml-4">
          
          {/* Experience Items */}
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative group"
            >
              {/* Glowing node on timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>

              {/* Experience Info */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.1] transition-all">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-base font-semibold text-zinc-300 mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm font-medium text-zinc-300">
                    <Calendar className="w-3 h-3" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Description points */}
                <ul className="space-y-2.5 text-base md:text-lg text-zinc-200 mb-6 pl-4 list-disc marker:text-primary/70">
                  {item.description.map((point, ptIdx) => (
                    <li key={ptIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags utilized */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase font-semibold tracking-wider text-gray-500 bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education Items */}
          {portfolioData.education && portfolioData.education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative group"
            >
              {/* Glowing node on timeline with Education Icon */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-2 border-secondary flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              </div>

              {/* Education Info */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.1] transition-all">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-base font-semibold text-zinc-300 mt-0.5">
                      {item.school}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm font-medium text-zinc-300">
                    <Calendar className="w-3 h-3" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Description points */}
                {item.description && (
                  <ul className="space-y-2.5 text-base md:text-lg text-zinc-200 pl-4 list-disc marker:text-secondary/70">
                    {item.description.map((point, ptIdx) => (
                      <li key={ptIdx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
