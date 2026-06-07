"use client";

import React from "react";

export default function Logo() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center select-none">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform group-hover:scale-110 transition-transform duration-300 ease-out"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer rotating guide ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          className="animate-spin-slow origin-center"
        />

        {/* Inner static border */}
        <circle
          cx="50"
          cy="50"
          r="36"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* Stylized 'H' columns */}
        {/* Left Pillar */}
        <rect
          x="34"
          y="28"
          width="7"
          height="44"
          rx="3.5"
          fill="url(#logoGrad)"
        />
        {/* Right Pillar */}
        <rect
          x="59"
          y="28"
          width="7"
          height="44"
          rx="3.5"
          fill="url(#logoGrad)"
        />
        {/* Futuristic coding slash bridge */}
        <path
          d="M 39 44 L 61 56"
          stroke="url(#logoGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Core glow node */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#ffffff"
          filter="url(#logoGlow)"
        />
      </svg>
      {/* Slow spinning animation helper for Logo */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
}
