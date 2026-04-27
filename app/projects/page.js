"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

// Real implementation would use: import { projects } from "@/.velite";
const allProjects = [
  {
    title: "نظام إدارة التعلم أفق (Ofoq LMS)",
    description: "منصة تعليمية متكاملة لإدارة المحتوى التعليمي والمتدربين بأعلى معايير الجودة باستخدام Go و MongoDB.",
    slug: "ofoq-pay",
    cover: { src: "/projects/ofoq-pay.png", width: 800, height: 600 },
    tech: ["Go Lang", "MongoDB", "WebSocket", "React"],
    category: "EdTech",
    date: "2026-04-20",
    permalink: "/projects/ofoq-pay"
  },
  {
    title: "محرك الأنظمة السحابية (Cloud Engine)",
    description: "محرك بنية تحتية خلفية متطور مبني بـ Go لتشغيل أنظمة الشركات الكبيرة مع نظام مراقبة لحظي.",
    slug: "cloud-engine",
    cover: { src: "/projects/cloud-engine.png", width: 800, height: 600 },
    tech: ["Go Lang", "Redis", "Docker", "Kubernetes"],
    category: "Infrastructure",
    date: "2026-03-15",
    permalink: "/projects/cloud-engine"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-40 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="mb-20 text-center lg:text-right"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <motion.h1 
             className="text-6xl sm:text-8xl font-black text-foreground tracking-tighter"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
           >
              المشاريع <motion.span 
                className="text-primary italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >المميزة</motion.span>
           </motion.h1>
           <motion.p 
             className="text-2xl text-muted-foreground font-bold mt-6 max-w-3xl lg:ml-auto"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.4 }}
           >
              مجموعة من المشاريع المتكاملة التي تم تنفيذها بأعلى معايير الجودة والتقنية.
           </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MagicCard
                gradientColor="#00FF8811"
                className="group rounded-[40px] border border-primary/10 bg-secondary/5 overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.cover.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>

                <div className="p-8 flex flex-col flex-1 justify-between">
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                       <motion.span 
                         className="text-xs font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-md"
                         whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 136, 0.2)" }}
                         transition={{ duration: 0.3 }}
                       >{project.category}</motion.span>
                       <span className="text-xs text-muted-foreground font-bold">{project.date}</span>
                    </div>
                    <motion.h3 
                      className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >{project.title}</motion.h3>
                    <p className="text-muted-foreground font-bold line-clamp-2">{project.description}</p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                       {project.tech.map((t, i) => (
                         <motion.span 
                           key={i} 
                           className="text-[10px] font-black text-primary/70 bg-white/5 px-2 py-1 rounded-md border border-white/5 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                           whileHover={{ scale: 1.1, y: -2 }}
                           transition={{ duration: 0.2, delay: i * 0.05 }}
                         >
                            {t}
                         </motion.span>
                       ))}
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between pt-8 mt-8 border-t border-white/5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                     <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                       <Link href={project.permalink} className="flex items-center gap-2 text-foreground font-black hover:text-primary transition-colors duration-300">
                          تفاصيل المشروع
                          <motion.div className="w-4 h-4 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                          </motion.div>
                       </Link>
                     </motion.div>
                     <motion.div 
                       className="flex items-center gap-3"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 0.5, delay: 0.8 }}
                     >
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                           <Link href="#" className="p-2 bg-secondary/50 rounded-xl hover:bg-primary/20 border border-white/5 transition-all duration-300">
                             <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                           </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                           <Link href="#" className="p-2 bg-secondary/50 rounded-xl hover:bg-primary/20 border border-white/5 transition-all duration-300">
                             <ExternalLink className="w-4 h-4" />
                           </Link>
                        </motion.div>
                     </motion.div>
                  </motion.div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
