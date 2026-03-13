"use client";

import { createContext, useContext, useEffect, useCallback } from "react";
import { useMotionValue, useSpring, type MotionValue } from "motion/react";

interface CursorBlobContextType {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

const CursorBlobContext = createContext<CursorBlobContextType | undefined>(
  undefined
);

export function CursorBlobProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <CursorBlobContext.Provider value={{ springX, springY }}>
      {children}
    </CursorBlobContext.Provider>
  );
}

export function useCursorBlob() {
  const context = useContext(CursorBlobContext);
  if (!context) {
    throw new Error("useCursorBlob must be used within a CursorBlobProvider");
  }
  return context;
}