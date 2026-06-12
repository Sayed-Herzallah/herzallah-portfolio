"use client";

import React, { useEffect, useRef, useState } from "react";

interface WeatherEffectProps {
  theme: "winter" | "summer";
}

interface Particle {
  x: number;
  y: number;
  size: number;        // length for rain, radius for pollen
  opacity: number;
  speedY: number;
  speedX: number;
  wobbleAmplitude: number;
  wobbleSpeed: number;
  wobbleOffset: number;
  color: string;
}

export default function WeatherEffect({ theme }: WeatherEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTheme, setActiveTheme] = useState<"winter" | "summer">(theme);
  const [opacity, setOpacity] = useState(1);

  // Handle transition when the theme prop changes
  useEffect(() => {
    if (theme !== activeTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpacity(0); // Fade out canvas
      const timer = setTimeout(() => {
        setActiveTheme(theme); // Change active theme internal state
        setOpacity(1); // Fade back in
      }, 500); // Wait for fade out to complete (aligns with transition duration)
      return () => clearTimeout(timer);
    }
  }, [theme, activeTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle density configuration
    const density = activeTheme === "winter" ? 0.00008 : 0.00012; // lower density for high performance
    const numParticles = Math.max(40, Math.floor(width * height * density));
    const particles: Particle[] = [];

    const createParticle = (isInit = false): Particle => {
      const x = Math.random() * width;
      const y = isInit ? Math.random() * height : (activeTheme === "winter" ? -20 : height + 20);
      
      if (activeTheme === "winter") {
        // Rain particles (Winter) - calm, rain, downward
        const length = Math.random() * 12 + 8; // 8px to 20px
        const speedY = Math.random() * 6 + 10; // fast fall (10px - 16px)
        const speedX = Math.random() * 0.4 - 0.2; // slight wind drift
        const opacity = Math.random() * 0.15 + 0.1; // subtle transparent look
        const color = `rgba(165, 180, 252, ${opacity})`; // light indigo-blue streak
        
        return {
          x,
          y,
          size: length,
          opacity,
          speedY,
          speedX,
          wobbleAmplitude: 0,
          wobbleSpeed: 0,
          wobbleOffset: 0,
          color,
        };
      } else {
        // Sun-dust particles (Summer) - tiny floating light motes
        const radius = Math.random() * 1.2 + 0.4; // very tiny: 0.4px to 1.6px
        const speedY = -(Math.random() * 0.3 + 0.1); // very slow float upwards (-0.1px to -0.4px)
        const speedX = Math.random() * 0.2 - 0.1; // very gentle breeze
        const opacity = Math.random() * 0.25 + 0.08; // subtle/soft
        const wobbleAmplitude = Math.random() * 1.0 + 0.2; // small lateral sway
        const wobbleSpeed = Math.random() * 0.015 + 0.003;
        const wobbleOffset = Math.random() * Math.PI * 2;
        // Warm golden/amber hues
        const goldHue = Math.random() > 0.4 ? "251, 191, 36" : "254, 215, 170"; // Amber-300 or Orange-200
        const color = `rgba(${goldHue}, ${opacity})`;

        return {
          x,
          y,
          size: radius,
          opacity,
          speedY,
          speedX,
          wobbleAmplitude,
          wobbleSpeed,
          wobbleOffset,
          color,
        };
      }
    };

    // Populate initial particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle(true));
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

      // Draw active background theme overlay colors
      // For Summer, we can add a very faint warm glow at the bottom/center
      // For Winter, a cool dark overlay
      if (activeTheme === "summer") {
        const grad = ctx.createRadialGradient(width * 0.8, 0, 100, width * 0.8, 0, width * 0.7);
        grad.addColorStop(0, "rgba(251, 191, 36, 0.02)");
        grad.addColorStop(0.5, "rgba(249, 115, 22, 0.005)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (activeTheme === "winter") {
          // Downward motion (Rain)
          p.y += p.speedY;
          p.x += p.speedX;

          // Recycle rain
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 10) p.x = -10;
          if (p.x < -10) p.x = width + 10;

          // Draw rain streak
          ctx.beginPath();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1;
          ctx.lineCap = "round";
          ctx.moveTo(p.x, p.y);
          // Angle rain slightly based on wind speedX
          ctx.lineTo(p.x + p.speedX * 1.5, p.y + p.size);
          ctx.stroke();
        } else {
          // Upward floating motion (Pollen)
          p.y += p.speedY;
          // Sine wave wobble
          const wobble = Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmplitude;
          p.x += p.speedX + wobble * 0.05;

          // Recycle pollen
          if (p.y < -20) {
            p.y = height + 20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) p.x = -20;
          if (p.x < -20) p.x = width + 20;

          // Draw pollen as clean, tiny sharp sun-dust dots
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-500 ease-in-out"
      style={{
        opacity: opacity,
        mixBlendMode: activeTheme === "summer" ? "screen" : "normal",
      }}
    />
  );
}
