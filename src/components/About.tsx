"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Milestone } from "lucide-react";

export default function About() {
  const [aboutImgSrc, setAboutImgSrc] = React.useState("/about-image.png");

  return (
    <section id="about" className="py-20 md:py-32 border-t border-card-border relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-wide text-white">
            My Story & Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column - Story & Stats */}
          <div className="col-span-1 md:col-span-7 space-y-10 text-gray-200 leading-relaxed text-lg">
            <div className="space-y-6">
              {portfolioData.about.story.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats Grid moved here to balance height and fill empty space */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="glass-card rounded-2xl p-4 md:p-5 flex flex-col justify-between min-h-[110px] md:min-h-[120px] hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-zinc-300 font-medium tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Large About Image */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-end w-full relative">
            {/* Subtle glow behind the image card */}
            <div className="absolute right-1/2 md:right-10 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-[250px] h-[250px] rounded-full bg-primary/10 blur-[60px] pointer-events-none select-none z-0" />

            {/* Larger About Image Card matching 2:3 Figma aspect ratio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[340px] lg:max-w-[400px] aspect-[2/3] rounded-2xl overflow-hidden glass-card border border-white/[0.08] shadow-lg z-10"
            >
              <Image
                src={aboutImgSrc}
                alt={portfolioData.name}
                width={400}
                height={600}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-500"
                onError={() => setAboutImgSrc("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400")}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
