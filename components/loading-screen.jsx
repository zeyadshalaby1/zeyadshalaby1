"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
            >
              <motion.div
                className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-red-600 to-rose-500 text-5xl font-black text-white shadow-2xl shadow-red-500/40"
                animate={{ boxShadow: ["0 0 30px rgba(220,38,38,0.3)", "0 0 60px rgba(220,38,38,0.5)", "0 0 30px rgba(220,38,38,0.3)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Z
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-white">Zeyad Shalaby</h1>
              <p className="mt-2 text-zinc-400 text-sm">Full-Stack Developer</p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-48 h-1.5 rounded-full bg-zinc-800 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
