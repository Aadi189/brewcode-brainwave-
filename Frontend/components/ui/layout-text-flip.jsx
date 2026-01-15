"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = [
    { word: "Landing Pages", color: "#FF6B6B" },
    { word: "Component Blocks", color: "#FFD93D" },
    { word: "Page Sections", color: "#6BCB77" },
    { word: "3D Shaders", color: "#4D96FF" }
  ],
  duration = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.span
        layoutId="subtext"
        className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl text-white"
        style={{ color: "#000" }}>
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-xl px-6 py-4 font-sans text-3xl md:text-5xl font-extrabold tracking-tight shadow-lg drop-shadow-xl"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
            style={{ color: words[currentIndex].color }}>
            {words[currentIndex].word}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
