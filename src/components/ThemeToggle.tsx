"use client";

import React, { useEffect, useState } from "react";
import { Snowflake, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WeatherEffect from "./WeatherEffect";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"winter" | "summer">("summer");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Check local storage or default to winter season (Dec, Jan, Feb)
    const saved = localStorage.getItem("portfolio-theme") as "winter" | "summer" | null;
    let initialTheme: "winter" | "summer" = "summer";

    if (saved !== null && (saved === "winter" || saved === "summer")) {
      initialTheme = saved;
    } else {
      const month = new Date().getMonth();
      const isWinterSeason = month === 11 || month === 0 || month === 1; // Dec, Jan, Feb
      initialTheme = isWinterSeason ? "winter" : "summer";
    }

    setTheme(initialTheme);
    
    // Apply initial classes
    if (initialTheme === "winter") {
      document.documentElement.classList.add("winter-mode");
      document.documentElement.classList.remove("summer-mode");
    } else {
      document.documentElement.classList.add("summer-mode");
      document.documentElement.classList.remove("winter-mode");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "winter" ? "summer" : "winter";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    
    if (nextTheme === "winter") {
      document.documentElement.classList.add("winter-mode");
      document.documentElement.classList.remove("summer-mode");
    } else {
      document.documentElement.classList.add("summer-mode");
      document.documentElement.classList.remove("winter-mode");
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Dynamic Canvas Effect Overlay */}
      <WeatherEffect theme={theme} />

      {/* Floating Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border shadow-lg transition-all duration-500 scale-100 hover:scale-110 active:scale-95 cursor-pointer group ${
          theme === "winter"
            ? "bg-primary/20 border-primary/30 text-primary shadow-primary/10"
            : "bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-orange-500/10"
        }`}
        title={theme === "winter" ? "Switch to Summer theme" : "Switch to Winter theme"}
        aria-label="Toggle theme season"
      >
        <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-5 transition-opacity" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            {theme === "winter" ? (
              <Snowflake className="w-5 h-5 animate-spin-slow" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Slow spinning animation helper for Snowflake */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />
    </>
  );
}
