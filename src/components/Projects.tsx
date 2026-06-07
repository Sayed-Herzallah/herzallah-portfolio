"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, FolderKanban, ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (imagesLength: number) => {
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 40;
    if (diff > swipeThreshold) {
      setActiveImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
    } else if (diff < -swipeThreshold) {
      setActiveImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
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

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 15, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                  className="glass-card w-full max-w-xl rounded-2xl border border-white/[0.08] overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white transition-all cursor-pointer z-50 shadow-lg"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto flex-grow scrollbar-none">
                    {/* Project Image Carousel */}
                    <div 
                      className="relative aspect-video w-full bg-zinc-950 border-b border-white/[0.06] overflow-hidden group/modal-img"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={() => handleTouchEnd(imagesList.length)}
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

                      {/* Left / Right Arrow Controls */}
                      {imagesList.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 border border-white/10 text-white z-30 shadow-md md:opacity-0 md:group-hover/modal-img:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center justify-center"
                            aria-label="Previous screenshot"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 border border-white/10 text-white z-30 shadow-md md:opacity-0 md:group-hover/modal-img:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center justify-center"
                            aria-label="Next screenshot"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Slide Indicator Dots */}
                      {imagesList.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                          {imagesList.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex(idx);
                              }}
                              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                idx === activeImageIndex 
                                  ? "bg-primary w-4" 
                                  : "bg-white/40 hover:bg-white/70"
                              }`}
                              aria-label={`Go to screenshot ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Body details */}
                    <div className="p-6 md:p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                          {selectedProject.title}
                        </h3>
                        {selectedProject.longDescription ? (
                          <p className="text-base text-primary font-medium mt-1">
                            {selectedProject.longDescription}
                          </p>
                        ) : null}
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                          About the Project
                        </h4>
                        <p className="text-base text-gray-300 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm font-medium text-gray-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer (CTAs) */}
                  <div className="p-6 border-t border-white/5 bg-black/20 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank; noreferrer"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-white hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                        >
                          Live Demo <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                        >
                          GitHub Code <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-xs font-semibold text-gray-500 hover:text-white transition-colors cursor-pointer"
                    >
                      Close
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
