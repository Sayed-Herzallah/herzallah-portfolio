"use client";

import React, { useEffect, useRef } from "react";

export default function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track particle definition with parallax depth features
    interface Particle {
      x: number;
      y: number;
      radius: number;
      density: number;
      opacity: number;
      speedY: number;
      speedX: number;
      blurRadius: number;
    }

    const numParticles = 120; // Increased density for a cozy winter feel
    const particles: Particle[] = [];

    // Initialize particles into 3 distinct depth layers (Foreground, Midground, Background)
    for (let i = 0; i < numParticles; i++) {
      const depthSelector = Math.random();
      let radius: number;
      let speedY: number;
      let opacity: number;
      let speedX: number;
      let blurRadius: number;

      if (depthSelector < 0.12) {
        // Foreground: Large, fast, out-of-focus fluffy flakes close to the screen
        radius = Math.random() * 2.5 + 3.5; // 3.5px to 6px
        speedY = Math.random() * 1.2 + 1.4; // 1.4px to 2.6px per frame
        opacity = Math.random() * 0.12 + 0.08; // Translucent / soft blur
        speedX = Math.random() * 0.4 - 0.2;
        blurRadius = radius * 1.8; // Soft out-of-focus look
      } else if (depthSelector < 0.45) {
        // Midground: Medium flakes, standard falling speed
        radius = Math.random() * 1.2 + 1.8; // 1.8px to 3.0px
        speedY = Math.random() * 0.5 + 0.8; // 0.8px to 1.3px per frame
        opacity = Math.random() * 0.35 + 0.25; // Clearer details
        speedX = Math.random() * 0.3 - 0.15;
        blurRadius = radius * 1.3;
      } else {
        // Background: Tiny, slow, floating flakes far in the distance
        radius = Math.random() * 0.8 + 0.8; // 0.8px to 1.6px
        speedY = Math.random() * 0.3 + 0.35; // 0.35px to 0.65px per frame
        opacity = Math.random() * 0.25 + 0.15;
        speedX = Math.random() * 0.16 - 0.08;
        blurRadius = radius * 1.1;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        density: Math.random() * numParticles,
        opacity,
        speedY,
        speedX,
        blurRadius,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Slow wind oscillation angle over time
      angle += 0.0025;
      const globalWind = Math.sin(angle) * 0.2; // Smooth wind direction swings

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        // Physics: update position based on falling speed + global wind + cosmetic cosine wave sway
        p.y += p.speedY;
        p.x += p.speedX + globalWind + Math.cos(angle + p.density) * 0.2;

        // Reset particle to top if it exits bottom
        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        } 
        // Wrap around horizontally if wind blows it offscreen
        else if (p.x > width + 10) {
          p.x = -5;
        } else if (p.x < -10) {
          p.x = width + 5;
        }

        // Draw soft glowing snowflake with a subtle winter ice-blue core gradient tint
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.blurRadius);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
        gradient.addColorStop(0.18, `rgba(224, 242, 254, ${p.opacity * 0.8})`); // Cozy winter blue tint core (sky-50)
        gradient.addColorStop(0.45, `rgba(255, 255, 255, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.blurRadius, 0, Math.PI * 2, true);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-30"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
