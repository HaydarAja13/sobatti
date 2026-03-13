"use client";

import { motion } from "motion/react";
import { useCursorBlob } from "@/context/CursorBlobContext";

export default function CursorBlob() {
  const { springX, springY } = useCursorBlob();

  return (
    <>
      {/* Primary cursor-following blob */}
      <motion.div
        className="pointer-events-none fixed z-9999 h-125 w-125 rounded-full opacity-60 blur-[120px]"
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(59,130,246,0.12) 40%, transparent 90%)",
        }}
      />
      {/* Secondary smaller blob */}
      <motion.div
        className="pointer-events-none fixed z-9999 h-75 w-75 rounded-full opacity-40 blur-[80px]"
        style={{
          left: springX,
          top: springY,
          translateX: "-30%",
          translateY: "-70%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(99,102,241,0.1) 50%, transparent 90%)",
        }}
      />
    </>
  );
}
