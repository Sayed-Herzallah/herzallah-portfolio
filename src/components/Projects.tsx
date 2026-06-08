"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  ExternalLink, Github, FolderKanban, ArrowLeft, ArrowRight, X, 
  Globe, CheckCircle2, Cpu, Database, Layers, Sparkles, Activity 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

// Helper function to extract and format project metadata details based on tags
const getProjectDetails = (project: typeof portfolioData.projects[0]) => {
  const tagsLower = project.tags.map(t => t.toLowerCase());
  
  // Database detection
  let database = "MongoDB (NoSQL)";
  if (tagsLower.includes("mysql") || tagsLower.includes("sequelize") || tagsLower.includes("mysql/sequelize")) {
    database = "MySQL (Relational)";
  } else if (tagsLower.includes("mongodb") || tagsLower.includes("mongoose")) {
    database = "MongoDB (NoSQL)";
  }

  // Architecture/Focus detection
  let architecture = "MVC Pattern";
  if (tagsLower.includes("clean architecture") || tagsLower.includes("clean-architecture")) {
    architecture = "Clean Layered Architecture";
  } else if (tagsLower.includes("modular architecture") || tagsLower.includes("modular")) {
    architecture = "Modular Feature Architecture";
  } else if (tagsLower.includes("layered service pattern") || tagsLower.includes("mvc architecture")) {
    architecture = "Service-Layer Pattern";
  }

  // Scope detection
  let scope = "Full-Stack Development";
  if (tagsLower.includes("backend") || tagsLower.includes("express.js") || tagsLower.includes("rest api") || tagsLower.includes("api") || tagsLower.includes("socket.io")) {
    if (!tagsLower.includes("react") && !tagsLower.includes("next.js") && !tagsLower.includes("react.js")) {
      scope = "Backend System API";
    } else {
      scope = "Full-Stack Web App";
    }
  } else if (tagsLower.includes("react") || tagsLower.includes("next.js") || tagsLower.includes("react.js")) {
    scope = "Frontend SPA";
  }

  // Live status or deployment
  let status = "Production Ready";
  if (project.liveUrl && project.liveUrl.trim().length > 0) {
    status = "Deployed & Active";
  }

  return { database, architecture, scope, status };
};

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Body Scroll Lock Hook
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const openProjectModal = (project: typeof portfolioData.projects[0]) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstElementChild as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const gap = 24; // Tailwind gap-6 is 24px
        const scrollAmount = cardWidth + gap;
        
        const target = direction === "left" 
          ? scrollRef.current.scrollLeft - scrollAmount 
          : scrollRef.current.scrollLeft + scrollAmount;
        
        scrollRef.current.scrollTo({
          left: target,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-card-border relative">
      {/* Self-contained CSS to hide scrollbars for the carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>02 // Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Selected Applications
            </h2>
            <p className="text-base text-zinc-300 mt-2 max-w-lg">
              A curated selection of applications representing clean architecture, pixel-perfect layout, and solid engineering.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Project Slider Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.02 }}
              onClick={() => openProjectModal(project)}
              className="min-w-[290px] sm:min-w-[360px] md:min-w-[380px] w-full max-w-[380px] snap-start glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-card-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-300 mb-6 leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-md">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Code <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors cursor-pointer"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay for Project Details */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (() => {
            const imagesList = selectedProject.images && selectedProject.images.length > 0
              ? selectedProject.images
              : [selectedProject.image];
            const imagesCount = imagesList.length;

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 15, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                  className="glass-card w-full max-w-4xl rounded-2xl md:rounded-3xl border border-white/[0.08] overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Decorative glows inside the modal */}
                  <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[80px] pointer-events-none select-none z-0" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none select-none z-0" />

                  {/* Modal Header Bar (Keeps title/badges & close button separate from CTAs below) */}
                  <div className="px-6 py-4 md:px-8 md:py-5 border-b border-white/[0.06] flex items-center justify-between gap-4 shrink-0 bg-black/20 backdrop-blur-md relative z-20">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                          {getProjectDetails(selectedProject).scope}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {getProjectDetails(selectedProject).status}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-md flex items-center justify-center group/close shrink-0"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4 group-hover/close:rotate-90 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto flex-grow scrollbar-none z-10">
                    <div className="p-5 md:p-6 space-y-5">
                      
                      {/* Long Description */}
                      {selectedProject.longDescription && (
                        <p className="text-sm md:text-base text-zinc-300 leading-relaxed border-l-2 border-primary/60 pl-3">
                          {selectedProject.longDescription}
                        </p>
                      )}

                      {/* Project Image Carousel - Compact */}
                      <div 
                        className="relative aspect-video w-full bg-zinc-950 border border-white/[0.06] rounded-xl overflow-hidden group/modal-img shadow-lg"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => {
                          const diff = touchStartX.current - touchEndX.current;
                          const swipeThreshold = 40;
                          if (diff > swipeThreshold) {
                            setActiveImageIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
                          } else if (diff < -swipeThreshold) {
                            setActiveImageIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
                          }
                          touchStartX.current = 0;
                          touchEndX.current = 0;
                        }}
                      >
                        {imagesList.map((imgUrl, idx) => (
                          <motion.div
                            key={imgUrl}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: idx === activeImageIndex ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 w-full h-full ${idx === activeImageIndex ? "z-10" : "z-0"}`}
                          >
                            <Image
                              src={imgUrl}
                              alt={`${selectedProject.title} screenshot ${idx + 1}`}
                              width={800}
                              height={450}
                              className="object-cover w-full h-full opacity-90"
                            />
                          </motion.div>
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-20 pointer-events-none" />

                        {imagesList.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
                              }}
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 text-white z-30 shadow-md hover:bg-black/80 transition-all cursor-pointer flex items-center justify-center"
                              aria-label="Previous screenshot"
                            >
                              <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 text-white z-30 shadow-md hover:bg-black/80 transition-all cursor-pointer flex items-center justify-center"
                              aria-label="Next screenshot"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        {imagesList.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                            {imagesList.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex(idx);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                  idx === activeImageIndex 
                                    ? "bg-primary w-3.5" 
                                    : "bg-white/40 hover:bg-white/70"
                                }`}
                                aria-label={`Go to screenshot ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action buttons - inline compact */}
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-primary via-purple-600 to-secondary hover:opacity-95 px-4 py-3 rounded-xl transition-all shadow-lg shadow-primary/20 cursor-pointer text-center uppercase tracking-widest"
                          >
                            Live Demo <Globe className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 text-xs font-bold text-zinc-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-4 py-3 rounded-xl transition-all hover:text-white cursor-pointer text-center uppercase tracking-widest"
                          >
                            GitHub Code <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* System Specs - horizontal compact grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 text-center">
                          <Layers className="w-4 h-4 text-primary mx-auto mb-1.5" />
                          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Focus</p>
                          <p className="text-xs text-zinc-200 font-bold mt-0.5">{getProjectDetails(selectedProject).scope}</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 text-center">
                          <Cpu className="w-4 h-4 text-primary mx-auto mb-1.5" />
                          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Architecture</p>
                          <p className="text-xs text-zinc-200 font-bold mt-0.5">{getProjectDetails(selectedProject).architecture}</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 text-center">
                          <Database className="w-4 h-4 text-primary mx-auto mb-1.5" />
                          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Database</p>
                          <p className="text-xs text-zinc-200 font-bold mt-0.5">{getProjectDetails(selectedProject).database}</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 text-center">
                          <Activity className="w-4 h-4 text-primary mx-auto mb-1.5" />
                          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Environment</p>
                          <p className="text-xs text-zinc-200 font-bold mt-0.5 flex items-center justify-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Production
                          </p>
                        </div>
                      </div>

                      {/* Features - Compact list */}
                      {selectedProject.features && selectedProject.features.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Key Capabilities
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedProject.features.map((feature, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-start gap-2.5 bg-white/[0.015] border border-white/[0.04] rounded-lg px-3 py-2.5 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
                              >
                                <Sparkles className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-300 leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-semibold text-zinc-300 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/40 hover:text-white px-2.5 py-1 rounded-lg transition-all cursor-default select-none"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Mobile-only bottom Close CTA */}
                  <div className="p-4 border-t border-white/5 bg-black/20 flex md:hidden items-center justify-end shrink-0 z-10">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full text-center text-xs font-bold text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 transition-colors cursor-pointer"
                    >
                      Close Details
                    </button>
                  </div>

                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
