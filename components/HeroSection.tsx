"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { ArrowRight, Sparkles, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const TOTAL_FRAMES = 240;

function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), TOTAL_FRAMES)).padStart(
    3,
    "0"
  );
  return `/frames/ezgif-frame-${num}.jpg`;
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const currentFrame = useTransform(
    scrollYProgress,
    [0, 1],
    [1, TOTAL_FRAMES]
  );

  // Content fades out as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);

  // Preload all images
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  // Draw frame on canvas
  const renderFrame = useCallback(
    (frameIndex: number) => {
      if (!imagesLoaded) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const idx = Math.round(frameIndex) - 1;
      const img = imagesRef.current[idx];
      if (!img) return;

      if (
        canvas.width !== img.naturalWidth ||
        canvas.height !== img.naturalHeight
      ) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    },
    [imagesLoaded]
  );

  useMotionValueEvent(currentFrame, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  useEffect(() => {
    if (imagesLoaded) renderFrame(1);
  }, [imagesLoaded, renderFrame]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-[#050816]"
      style={{ height: `${TOTAL_FRAMES * 16}px` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Loading state */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-[#050816]">
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-sm text-blue-200/40">
              Loading… {loadProgress}%
            </p>
          </div>
        )}

        {/* Background canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#050816]/60" />

        {/* Background ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[140px]" />
          <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/6 blur-[100px]" />
        </div>

        {/* ── Hero Content (fades on scroll) ── */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Badge
              variant="outline"
              className="gap-2 border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm hover:bg-blue-500/15"
            >
              <Sparkles size={14} className="text-blue-400" />
              Welcome to the Future of Web3
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Decentralized
            </span>
            <br />
            Future Today
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-blue-200/60 sm:text-xl"
          >
            Empowering creators, developers, and communities with
            next-generation blockchain infrastructure. Seamless. Scalable.
            Secure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-12 border-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/35 hover:brightness-110"
            >
              <a href="#contact" className="gap-2">
                Launch App
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover/button:translate-x-1"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/[0.08] bg-white/[0.03] px-8 text-base font-semibold text-blue-200/70 backdrop-blur-sm hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Shield, label: "Enterprise Security" },
              { icon: Zap, label: "Lightning Fast" },
              { icon: Globe, label: "Global Network" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-black/30 px-4 py-2 text-sm text-blue-200/50 backdrop-blur-sm"
              >
                <item.icon size={14} className="text-blue-400/70" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll progress bar at bottom */}
        <div className="absolute bottom-6 left-1/2 z-10 w-48 -translate-x-1/2">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>

        {/* Edge gradients */}
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
      </div>
    </section>
  );
}
