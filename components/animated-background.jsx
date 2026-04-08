"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Orb 1 - Red/Crimson */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-red-600/20 mix-blend-screen blur-[120px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 - Fuchsia/Magenta */}
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-fuchsia-600/20 mix-blend-screen blur-[120px]"
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -30, 0],
          scale: [1.1, 0.9, 1.05, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 3 - Rose/Pink */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-rose-600/20 mix-blend-screen blur-[120px]"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 30, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
