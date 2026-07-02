"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, } from "react";
import Image from "next/image";
import CornerFrameScrambleText from "@/components/ui/corner-frame-scramble-text";
import FancyButton from "@/components/ui/fancy-button";



type Point = {
  x: number;
  y: number;
};

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const highlightPills = [
  "Independent Verification",
  "On-Ground Inspections",
  "Clear Reporting",
] as const;



const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};



interface GlowyWavesHeroProps {
  showWaves?: boolean;
}

export function GlowyWavesHero({ showWaves = true }: GlowyWavesHeroProps) {
  const showWavesRef = useRef(showWaves);

  useEffect(() => {
    showWavesRef.current = showWaves;
  }, [showWaves]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId: number;
    let time = 0;

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);

      // Helper to convert any CSS color to a Canvas-compatible format
      const resolveColor = (variables: string[], alpha = 1) => {
        // Create a temporary element to get computed color
        const tempEl = document.createElement("div");
        tempEl.style.position = "absolute";
        tempEl.style.visibility = "hidden";
        tempEl.style.width = "1px";
        tempEl.style.height = "1px";
        document.body.appendChild(tempEl);

        let color = `rgba(255, 255, 255, ${alpha})`;

        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (value) {
            // Try to set the background color using the CSS variable
            tempEl.style.backgroundColor = `var(${variable})`;
            const computedColor = getComputedStyle(tempEl).backgroundColor;

            if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
              // Convert RGB to RGBA with alpha if needed
              if (alpha < 1) {
                const rgbMatch = computedColor.match(
                  /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/
                );
                if (rgbMatch) {
                  color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
                } else {
                  color = computedColor;
                }
              } else {
                color = computedColor;
              }
              break;
            }
          }
        }

        document.body.removeChild(tempEl);
        return color;
      };

      return {
        backgroundTop: resolveColor(["--background"], 1),
        backgroundBottom: resolveColor(["--muted", "--background"], 0.95),
        wavePalette: [
          {
            offset: 0,
            amplitude: 50,
            frequency: 0.002,
            color: "rgba(21, 128, 61, 0.6)", // Green wave
            opacity: 0.45,
          },
          {
            offset: Math.PI / 2,
            amplitude: 65,
            frequency: 0.0018,
            color: "rgba(16, 185, 129, 0.4)", // Emerald wave
            opacity: 0.35,
          },
          {
            offset: Math.PI,
            amplitude: 45,
            frequency: 0.0022,
            color: "rgba(5, 150, 105, 0.3)", // Jade wave
            opacity: 0.3,
          },
          {
            offset: Math.PI * 1.5,
            amplitude: 55,
            frequency: 0.0015,
            color: "rgba(34, 197, 94, 0.2)", // Green-500 wave
            opacity: 0.25,
          },
          {
            offset: Math.PI * 2,
            amplitude: 40,
            frequency: 0.0025,
            color: "rgba(16, 185, 129, 0.15)",
            opacity: 0.2,
          },
        ] satisfies WaveConfig[],
      };
    };

    let themeColors = computeThemeColors();

    const handleThemeMutation = () => {
      themeColors = computeThemeColors();
    };

    const observer = new MutationObserver(handleThemeMutation);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const recenterMouse = () => {
      const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = centerPoint;
      targetMouseRef.current = centerPoint;
    };

    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      recenterMouse();
    };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence *
          mouseInfluence *
          Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) *
          wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) *
          (wave.amplitude * 0.45) +
          mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 35;
      ctx.shadowColor = wave.color;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      time += 1;

      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw interactive dots in the background of the canvas (Always visible)
      const dotSpacing = 32;
      const influenceRadius = 140;

      ctx.save();
      for (let x = dotSpacing / 2; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < canvas.height; y += dotSpacing) {
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let radius = 1.0;
          let opacity = 0.12;

          if (distance < influenceRadius) {
            const factor = 1 - distance / influenceRadius; // 0 to 1
            radius = 1.0 + factor * 2.5; // swell up
            opacity = 0.12 + factor * 0.45; // glow brighter
            ctx.fillStyle = `rgba(255, 107, 0, ${opacity})`;
          } else {
            ctx.fillStyle = `rgba(0, 28, 85, ${opacity})`;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Draw waves only if showWaves is enabled
      if (showWavesRef.current) {
        themeColors.wavePalette.forEach(drawWave);
      }

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent pt-20"
      role="region"
      aria-label="Glowing waves hero section"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-orange-100/20 via-blue-50/30 to-[#fcfbf7] pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Extra soft orange/navy blue glow blobs for styling */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-[#001c55]/[0.03] blur-[150px]" />
      </div>

      {/* Floating Decorative Service Illustrations */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden select-none">
        {/* Floating Stock Audit Illustration */}
        <motion.div
          className="absolute left-[3%] top-[12%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-[0.07] sm:opacity-[0.09]"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/warehouse-audit/s-2.png" alt="Decorative Stock Audit" fill className="object-contain" />
        </motion.div>

        {/* Floating Warehouse Audit Illustration */}
        <motion.div
          className="absolute right-[4%] top-[18%] w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 opacity-[0.07] sm:opacity-[0.09]"
          animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/warehouse-audit/s-3.png" alt="Decorative Warehouse Audit" fill className="object-contain" />
        </motion.div>

        {/* Floating Inventory Verification Illustration */}
        <motion.div
          className="absolute left-[5%] bottom-[12%] w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 opacity-[0.07] sm:opacity-[0.09]"
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/inventory-verification/s-5.png" alt="Decorative Inventory Verification" fill className="object-contain" />
        </motion.div>

        {/* Floating Collateral Management Illustration */}
        <motion.div
          className="absolute right-[5%] bottom-[10%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-[0.07] sm:opacity-[0.09]"
          animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/collateral-management/s-7.png" alt="Decorative Collateral Management" fill className="object-contain" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full animate-in fade-in slide-in-from-bottom duration-1000"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-block"
          >
            <div className="group relative bg-neutral-200 dark:bg-neutral-800 rounded-full p-px overflow-hidden inline-block select-none pointer-events-none">
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="inset-0 absolute pointer-events-none select-none">
                  <span
                    className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl animate-[border-glow-translate_10s_ease-in-out_infinite_alternate]"
                    style={{
                      background: "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 158, 89), rgb(0, 28, 85))",
                    }}
                  ></span>
                </span>
              </span>

              <span
                className="inset-0 absolute pointer-events-none select-none"
                style={{
                  animation: "10s ease-in-out 0s infinite alternate none running border-glow-translate",
                }}
              >
                <span
                  className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                  style={{
                    animation: "10s ease-in-out 0s infinite alternate none running border-glow-scale",
                    background: "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 158, 89), rgb(0, 28, 85))",
                  }}
                ></span>
              </span>

              <span
                className="flex items-center justify-center gap-1.5 relative z-[1] bg-neutral-50/90 dark:bg-neutral-950/90 rounded-full py-2.5 px-4 w-full"
              >
                <span
                  className="relative transition-transform duration-500"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 dark:opacity-100"
                    style={{
                      animation: "14s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s infinite alternate none running star-rotate",
                    }}
                  >
                    <path
                      d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
                      fill="url(#paint0_linear_171_8212)"
                      stroke="url(#paint1_linear_171_8212)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_171_8212"
                        x1="-0.5"
                        y1="9"
                        x2="15.5"
                        y2="-1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ff6b00"></stop>
                        <stop offset="0.575" stopColor="#ff9e59"></stop>
                        <stop offset="1" stopColor="#001c55"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_171_8212"
                        x1="-0.5"
                        y1="9"
                        x2="15.5"
                        y2="-1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ff6b00"></stop>
                        <stop offset="0.575" stopColor="#ff9e59"></stop>
                        <stop offset="1" stopColor="#001c55"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span
                    className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
                    style={{
                      animation: "14s ease-in-out 0s infinite alternate none running star-shine",
                      background: "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 158, 89), rgb(0, 28, 85))",
                    }}
                  ></span>
                </span>
                <span
                  className="bg-gradient-to-b dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-sm uppercase tracking-[0.25em] font-semibold text-transparent pl-1"
                >
                  Certified Warehouse Audit Partner
                </span>
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl leading-tight"
          >
            India’s Trusted Partner for{" "}
            <CornerFrameScrambleText
              value="Warehouse Audit Services"
              as="span"
              className="text-[#ff6b00] mx-2 inline-block align-middle my-1"
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-4xl text-base text-gray-600 md:text-lg leading-relaxed"
          >
            Hidden warehouse risks can affect lending decisions, collateral monitoring, and operational oversight. As India's trusted partner for Warehouse Audit Services since 2015, Hubcheck delivers independent warehouse inspections, physical verifications, documentation reviews, and structured reporting to help financial institutions strengthen warehouse visibility and validate information.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <FancyButton href="/contact" className="px-8 py-3.5">
              Book a Consultation
            </FancyButton>
            <FancyButton
              href="#services"
              variant="secondary"
              className="px-8 py-3.5"
            >
              Explore Services
            </FancyButton>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="mb-12 flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-[#ff6b00] "
          >
            {highlightPills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-orange-200 bg-orange-50/50 px-4 py-2 backdrop-blur-sm"
              >
                {pill}
              </li>
            ))}
          </motion.ul>


        </motion.div>
      </div>
    </section>
  );
}
