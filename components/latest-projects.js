"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { projects } from "@/.velite";

export function LatestProjects() {
  // Only show featured projects on the home page
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

  return (
    <section className="relative w-full py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-right">
             <h2 className="text-5xl sm:text-7xl font-black text-foreground tracking-tighter">
                أحدث <span className="text-primary italic">المشاريع</span>
             </h2>
             <p className="text-2xl text-muted-foreground font-bold mt-4">نحول الأفكار المعقدة إلى واقع برمجى بسيط ببيانات حقيقية.</p>
          </div>
          <Link href="/projects" className="group flex items-center gap-3 text-xl font-black text-primary border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
             شاهد كل المشاريع
             <ArrowRight className="w-6 h-6 rtl:rotate-180 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <MagicCard
                gradientColor="#00FF8811"
                className="group relative rounded-[40px] border border-primary/10 bg-card overflow-hidden p-0 h-full flex flex-col shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.cover.src}
                    width={project.cover.width}
                    height={project.cover.height}
                    alt={project.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full">
                     <span className="text-xs font-black text-primary uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1 justify-between">
                  <div className="space-y-6">
                    <h3 className="text-3xl sm:text-4xl font-black text-foreground leading-tight group-hover:text-primary transition-colors">
                       {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-bold leading-relaxed">
                       {project.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3">
                       {project.tech.map((t, i) => (
                         <div key={i} className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-lg text-xs font-black text-primary">
                            <Code2 className="w-3 h-3" />
                            {t}
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-border mt-10">
                     <Link href={project.permalink} className="flex items-center gap-2 text-foreground font-black text-lg hover:text-primary transition-colors">
                        تفاصيل المشروع
                        <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                     </Link>
                     <div className="flex items-center gap-4">
                        {project.github && (
                          <Link href={project.github} target="_blank" className="p-3 bg-secondary/50 rounded-2xl hover:bg-primary/20 transition-colors border border-border">
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                          </Link>
                        )}
                        {project.link && (
                          <Link href={project.link} target="_blank" className="p-3 bg-secondary/50 rounded-2xl hover:bg-primary/20 transition-colors border border-border">
                             <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                     </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
