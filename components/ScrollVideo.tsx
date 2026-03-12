"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { Badge } from "@/components/ui/badge";

const TOTAL_FRAMES = 240;

function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), TOTAL_FRAMES)).padStart(
    3,
    "0",
  );
  return `/frames/ezgif-frame-${num}.jpg`;
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

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

      // Set canvas to image natural size on first draw
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
    [imagesLoaded],
  );

  // Listen to scroll-driven frame changes
  useMotionValueEvent(currentFrame, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Draw first frame once loaded
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(1);
    }
  }, [imagesLoaded, renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050816]"
      style={{ height: `${TOTAL_FRAMES * 16}px` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Loading state */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#050816]">
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/[6]">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-blue-600 to-indigo-600"
                style={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm text-blue-200/40">
              Loading frames… {loadProgress}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
          style={{ objectFit: "cover" }}
        />

        {/* Overlay gradient edges */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050816] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
        </div>

        {/* Scroll indicator at top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imagesLoaded ? 1 : 0 }}
          className="pointer-events-none absolute top-24 left-1/2 z-10 -translate-x-1/2"
        >
          <Badge
            variant="outline"
            className="border-blue-500/20 bg-black/40 px-4 py-1.5 text-sm text-blue-300 backdrop-blur-md"
          >
            Scroll to explore
          </Badge>
        </motion.div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-8 left-1/2 z-10 w-48 -translate-x-1/2">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/[8]">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
