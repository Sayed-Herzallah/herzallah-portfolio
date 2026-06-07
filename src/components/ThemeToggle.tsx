"use client";

import React, { useEffect, useState } from "react";
import { Snowflake } from "lucide-react";
import SnowEffect from "./SnowEffect";

export default function ThemeToggle() {
  const [winterMode, setWinterMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Check local storage or default to winter season (Dec, Jan, Feb)
    const saved = localStorage.getItem("winterMode");
    if (saved !== null) {
      const isWinter = saved === "true";
      setWinterMode(isWinter);
      if (isWinter) {
        document.documentElement.classList.add("winter-mode");
      }
    } else {
      const month = new Date().getMonth();
      const isWinterSeason = month === 11 || month === 0 || month === 1; // Dec, Jan, Feb
      setWinterMode(isWinterSeason);
      if (isWinterSeason) {
        document.documentElement.classList.add("winter-mode");
      }
    }
  }, []);

  const toggleWinterMode = () => {
    const nextState = !winterMode;
    setWinterMode(nextState);
    localStorage.setItem("winterMode", String(nextState));
    if (nextState) {
      document.documentElement.classList.add("winter-mode");
    } else {
      document.documentElement.classList.remove("winter-mode");
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Falling Snow Overlay */}
      {winterMode && <SnowEffect />}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleWinterMode}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border shadow-lg transition-all duration-300 scale-100 hover:scale-110 active:scale-95 cursor-pointer group ${
          winterMode
            ? "bg-primary/20 border-primary/30 text-primary shadow-primary/10"
            : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white shadow-black/30"
        }`}
        title={winterMode ? "Switch to normal mode" : "Enable winter theme mode"}
        aria-label="Toggle winter theme"
      >
        <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-5 transition-opacity" />
        {winterMode ? (
          <Snowflake className="w-5 h-5 animate-spin-slow" />
        ) : (
          <Snowflake className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        )}
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
