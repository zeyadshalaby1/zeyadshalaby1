"use client";

import {
  motion,
  fadeInUp,
  staggerContainer,
} from "@/components/motion";

export function CTASection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          className="rounded-[2.5rem] border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-red-50 p-12 shadow-2xl shadow-zinc-900/5 dark:border-zinc-700/70 dark:from-zinc-950 dark:via-zinc-900 dark:to-red-950/20 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Animated glow background */}
          <motion.div
            className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-red-500/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-rose-500/10 blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.h2
            className="text-4xl font-bold text-zinc-950 dark:text-white relative z-10"
            variants={fadeInUp}
            custom={0}
          >
            هل تريد بدء مشروعك القادم معي؟
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 relative z-10"
            variants={fadeInUp}
            custom={1}
          >
            دعك من انتظار مشروعك الرائع. تواصل معي الآن وسنحول أفكارك إلى واقع.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center relative z-10"
            variants={fadeInUp}
            custom={2}
          >
            <motion.a
              href="https://wa.me/201026097345"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-xl hover:shadow-red-500/30 duration-300"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              تواصل عبر واتساب
            </motion.a>
            <motion.a
              href="mailto:me@zeyadshalaby.cloud"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-8 py-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 duration-300"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              أرسل بريد إلكتروني
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
