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

    // Track particle definition
    interface Particle {
      x: number;
      y: number;
      radius: number;
      density: number;
      opacity: number;
      speedY: number;
      speedX: number;
    }

    const numParticles = 75; // Balanced for good looks and perfect performance
    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1, // Snow size 1px to 3px
        density: Math.random() * numParticles,
        opacity: Math.random() * 0.4 + 0.2, // Subtle opacity
        speedY: Math.random() * 0.8 + 0.4, // Falling speed
        speedX: Math.random() * 0.4 - 0.2, // Sway drift
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

      angle += 0.005;

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        // Update particle positions
        // Add dynamic sway from horizontal speed and cosine curve
        p.y += p.speedY;
        p.x += p.speedX + Math.cos(angle + p.density) * 0.2;

        // Reset particle to top if it drifts offscreen
        if (p.y > height) {
          particles[i] = {
            x: Math.random() * width,
            y: -10,
            radius: p.radius,
            density: p.density,
            opacity: p.opacity,
            speedY: p.speedY,
            speedX: p.speedX,
          };
        } else if (p.x > width) {
          p.x = 0;
        } else if (p.x < 0) {
          p.x = width;
        }

        // Draw individual soft glowing snowflake
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 1.5);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
        gradient.addColorStop(0.3, `rgba(255, 255, 255, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2, true);
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
