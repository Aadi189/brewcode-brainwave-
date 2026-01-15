"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function LayoutTextFlipDemo() {
  return (
    <div className="bg-white py-12 px-4">
      <motion.div
        className="relative flex flex-col items-center justify-center gap-8 text-center sm:flex-row"
      >
        <LayoutTextFlip
          text="Profit from patterns, not the "
          words={[
            { word: "Hype", color: "#3B82F6" }, // blue
            { word: "Noise", color: "#8B5CF6" }, // purple
            { word: "Scam", color: "#3B82F6" },
            { word: "Trap", color: "#8B5CF6" }
          ]}
        />
      </motion.div>
      <p className="mx-4 mb-8 text-center text-xl text-black font-bold sm:mx-0">
        A multi-agent intelligence system that uncovers suspicious market behavior before you get caught in a pump-and-dump.
      </p>
    </div>
  );
}
