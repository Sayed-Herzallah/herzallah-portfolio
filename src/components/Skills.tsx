"use client";

import React, { useRef, useState } from "react";
import { Cpu, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

// Interactive 3D Parallax Tilt Card Component
function SkillCategoryCard({
  category,
}: {
  category: typeof portfolioData.skills[0];
  catIndex: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Maximum tilt angles: 6 degrees to keep it elegant and subtle
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.02] transition-colors duration-300 relative overflow-hidden group cursor-default"
    >
      {/* Decorative inner light reflection */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
        style={{ transform: "translateZ(20px)" }}
      />

      <h3 
        className="text-xl font-bold text-white mb-6 flex items-center gap-2"
        style={{ transform: "translateZ(30px)" }}
      >
        <span className="w-1.5 h-4 bg-primary rounded-full animate-pulse" />
        {category.title}
      </h3>

      <div 
        className="flex flex-wrap gap-2.5"
        style={{ transform: "translateZ(15px)" }}
      >
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 hover:bg-primary/[0.03] text-base text-gray-300 hover:text-white transition-all cursor-default group/item"
          >
            <CheckCircle className="w-4 h-4 text-gray-600 group-hover/item:text-primary transition-colors" />
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 border-t border-card-border relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 // Skills & Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-base text-zinc-300 mt-2">
            A comprehensive breakdown of technologies, methodologies, and core professional competencies.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((category, catIndex) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              catIndex={catIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
