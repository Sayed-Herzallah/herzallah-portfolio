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

    interface Snowflake {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speedY: number;
      speedX: number;
      wobbleAmplitude: number;
      wobbleSpeed: number;
      wobbleOffset: number;
      layer: number; // 0=far, 1=mid, 2=near
    }

    // Dense snowfall: scale particle count to screen size
    const density = 0.00018; // particles per pixel²
    const numParticles = Math.max(80, Math.floor(width * height * density));
    const particles: Snowflake[] = [];

    for (let i = 0; i < numParticles; i++) {
      const layerRand = Math.random();
      let layer: number;
      let radius: number;
      let speedY: number;
      let opacity: number;
      let speedX: number;

      if (layerRand < 0.15) {
        // Near layer: large soft bokeh flakes (15%)
        layer = 2;
        radius = Math.random() * 3 + 4;    // 4-7px
        speedY = Math.random() * 0.8 + 1.5; // fast fall
        opacity = Math.random() * 0.08 + 0.04; // very soft/blurry
        speedX = Math.random() * 0.3 - 0.15;
      } else if (layerRand < 0.5) {
        // Mid layer: medium crisp flakes (35%)
        layer = 1;
        radius = Math.random() * 1.5 + 1.5;  // 1.5-3px
        speedY = Math.random() * 0.5 + 0.6;  // medium fall
        opacity = Math.random() * 0.4 + 0.3;  // clearly visible
        speedX = Math.random() * 0.2 - 0.1;
      } else {
        // Far layer: tiny dust-like flakes (50%)
        layer = 0;
        radius = Math.random() * 0.8 + 0.5;  // 0.5-1.3px
        speedY = Math.random() * 0.25 + 0.2; // slow drift
        opacity = Math.random() * 0.3 + 0.15; // subtle
        speedX = Math.random() * 0.1 - 0.05;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        opacity,
        speedY,
        speedX,
        wobbleAmplitude: Math.random() * 1.5 + 0.5,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
        wobbleOffset: Math.random() * Math.PI * 2,
        layer,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Gentle global wind that shifts direction over time
      const windPhase = time * 0.001;
      const globalWind = Math.sin(windPhase) * 0.35 + Math.sin(windPhase * 2.7) * 0.15;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural wobble movement (sine wave lateral drift)
        const wobble = Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmplitude;

        // Wind effect scales with layer (near flakes drift more)
        const windMultiplier = p.layer === 2 ? 1.5 : p.layer === 1 ? 1.0 : 0.5;

        p.y += p.speedY;
        p.x += p.speedX + (globalWind * windMultiplier * 0.3) + (wobble * 0.02);

        // Wrap around edges
        if (p.y > height + 15) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x > width + 15) p.x = -10;
        if (p.x < -15) p.x = width + 10;

        // Draw the snowflake
        ctx.beginPath();

        if (p.layer === 2) {
          // Near: large soft bokeh glow
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
          grad.addColorStop(0, `rgba(255, 255, 255, ${p.opacity * 1.5})`);
          grad.addColorStop(0.3, `rgba(220, 235, 255, ${p.opacity})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = grad;
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        } else if (p.layer === 1) {
          // Mid: crisp white dots with subtle glow
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 1.4);
          grad.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
          grad.addColorStop(0.6, `rgba(240, 248, 255, ${p.opacity * 0.5})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = grad;
          ctx.arc(p.x, p.y, p.radius * 1.4, 0, Math.PI * 2);
        } else {
          // Far: tiny sharp pinpoints
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        }

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
