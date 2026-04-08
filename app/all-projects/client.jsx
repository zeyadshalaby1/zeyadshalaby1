"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/motion";

export function ProjectsPageClient({ projects, categories }) {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-500/15 dark:text-red-200"
          >
            <Filter className="h-4 w-4" />
            معرض الأعمال
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="text-4xl font-bold text-zinc-950 dark:text-white sm:text-5xl"
          >
            جميع{" "}
            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
              مشاريعي
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            تصفح أعمالي وفلتر حسب التخصص
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/90 transition duration-500 hover:border-red-600/30 hover:shadow-2xl hover:shadow-red-500/10 dark:border-zinc-700/70 dark:bg-zinc-950/85">
                    <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-red-600/90 px-3 py-1 text-xs font-bold text-white">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-3 p-5">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 text-red-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-red-400" />
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-zinc-500 dark:text-zinc-400">
              مفيش مشاريع في التصنيف ده حالياً 🤷‍♂️
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
