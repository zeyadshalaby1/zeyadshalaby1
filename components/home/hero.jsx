"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import {
  motion,
  MotionDiv,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  floatAnimation,
  pulseGlow,
  scaleIn,
} from "@/components/motion";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5" />
        <motion.div
          className="absolute -right-1/3 -top-1/3 h-2/3 w-2/3 rounded-full bg-red-600/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-1/3 -bottom-1/3 h-2/3 w-2/3 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content  */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-500/15 dark:text-red-200"
            >
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-red-600"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              🚀 مطور ويب وتطبيقات محترف
            </motion.div>

            {/* Title */}
            <motion.div className="space-y-6" variants={fadeInUp} custom={1}>
              <h1 className="text-5xl font-bold leading-[1.2] tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
                أنا{" "}
                <motion.span
                  className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent inline-block"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  زياد شلبي
                </motion.span>
              </h1>

              <motion.p
                className="text-xl leading-8 text-zinc-600 dark:text-zinc-300"
                variants={fadeInUp}
                custom={2}
              >
                مؤسس وفريلانسر متخصص في بناء تطبيقات ويب وتطبيقات محمولة رائعة مع أداء عالي وتجربة مستخدم لا تُنسى. متخصص في Flutter و Go و Next.js و Laravel.
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeInUp} custom={3}>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-xl hover:shadow-red-500/30 duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                عرض أعمالي
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://docs.google.com/document/d/13Fuf0exEZsjwJr2WJMkkn9_TlLuN4OOX0agi9P-rmVc/export?format=pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:shadow-xl hover:shadow-blue-500/30 duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4" />
                تحميل CV
              </motion.a>
              <motion.a
                href="https://github.com/zeyadshalaby1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/30 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-red-600 hover:bg-red-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-red-500 dark:hover:bg-red-500/10 duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز معي
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-6 border-t border-zinc-200/50 pt-8 dark:border-zinc-800/50"
              variants={fadeInUp}
              custom={4}
            >
              {[
                { number: "50+", label: "مشروع مكتمل" },
                { number: "100+", label: "عميل راضٍ" },
                { number: "5+", label: "سنوات خبرة" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.15, duration: 0.5, type: "spring" }}
                >
                  <p className="text-2xl font-bold text-zinc-950 dark:text-white">{stat.number}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                  {idx < 2 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-zinc-200 dark:bg-zinc-800 hidden" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative mx-auto w-full max-w-md"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <motion.div
              className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-red-600 to-rose-500 blur-2xl opacity-20"
              {...pulseGlow}
            />
            <motion.div
              className="relative overflow-hidden rounded-[3rem] border border-zinc-200/80 bg-white/90 p-8 shadow-2xl dark:border-zinc-700/70 dark:bg-zinc-950/85"
              {...floatAnimation}
            >
              <Image
                className="h-full w-full rounded-[2rem] object-cover"
                src="https://avatars.githubusercontent.com/u/274340476?v=4"
                alt="زياد شلبي"
                width={400}
                height={400}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
