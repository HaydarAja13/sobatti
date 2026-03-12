"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { Code2, Palette, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const TOTAL_FRAMES = 240;

function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), TOTAL_FRAMES)).padStart(3, "0");
  return `/feature-frames/ezgif-frame-${num}.jpg`;
}

const courses = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Master full-stack development with modern frameworks, cloud infrastructure, and DevOps practices. Build production-grade applications from concept to deployment.",
    highlights: ["React & Next.js", "Node.js & APIs", "Cloud & DevOps", "System Design"],
  },
  {
    icon: Palette,
    title: "Digital Design",
    description:
      "Learn UI/UX design thinking, visual storytelling, and prototyping. Create stunning interfaces that users love with industry-standard tools.",
    highlights: ["UI/UX Design", "Figma & Prototyping", "Design Systems", "Motion Design"],
  },
  {
    icon: Cpu,
    title: "Internet of Things",
    description:
      "Explore embedded systems, sensor networks, and edge computing. Connect the physical and digital worlds with real-time IoT solutions.",
    highlights: ["Embedded Systems", "Sensor Networks", "Edge Computing", "Real-Time Data"],
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Cards appear staggered as user scrolls into the section
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [0, 0, 1]);
  const cardsY = useTransform(scrollYProgress, [0, 0.08, 0.15], [60, 60, 0]);

  // Preload images
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

      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
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
      id="features"
      ref={sectionRef}
      className="relative bg-[#050816]"
      style={{ height: `${TOTAL_FRAMES * 14}px` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Loading */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-[#050816]">
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-sm text-blue-200/40">Loading… {loadProgress}%</p>
          </div>
        )}

        {/* Background canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover" />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/8 blur-[140px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/6 blur-[100px]" />
        </div>

        {/* ── Content ── */}
        <motion.div
          style={{ opacity: cardsOpacity, y: cardsY }}
          className="relative z-10 mx-auto w-full max-w-6xl px-6"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge
              variant="outline"
              className="mb-6 gap-2 border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm hover:bg-blue-500/15"
            >
              Our Courses
            </Badge>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Teach
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-200/50">
              Three specialized tracks designed to turn you into an
              industry-ready professional.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.05]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 ring-1 ring-blue-500/10 transition-all duration-300 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 group-hover:ring-blue-500/20">
                  <course.icon
                    size={22}
                    className="text-blue-400 transition-colors group-hover:text-blue-300"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mb-3 text-xl font-bold text-white">{course.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-blue-200/40">
                  {course.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2">
                  {course.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs font-medium text-blue-200/50"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll progress */}
        <div className="absolute bottom-6 left-1/2 z-10 w-48 -translate-x-1/2">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
      </div>
    </section>
  );
}
