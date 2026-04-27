"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, Users, PlayCircle, ChevronRight, GraduationCap, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { courses } from "@/.velite";

export function LatestCourses() {
  // Show featured courses or the first few
  const featuredCourses = courses.filter(c => c.featured).slice(0, 3);

  return (
    <section className="relative w-full py-40 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-right">
             <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
                <GraduationCap className="text-primary w-10 h-10" />
                <h2 className="text-5xl sm:text-7xl font-black text-foreground tracking-tighter">
                   أحدث <span className="text-primary italic">الكورسات</span>
                </h2>
             </div>
             <p className="text-2xl text-muted-foreground font-bold">تعلم البرمجة الحقيقية من واقع الخبرة العملية.</p>
          </div>
          <Link href="/courses" className="group flex items-center gap-3 text-xl font-black text-primary border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
             تصفح كل الكورسات
             <ArrowRight className="w-6 h-6 rtl:rotate-180 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
               <MagicCard
                 gradientColor="#00FF8811"
                 className="group flex flex-col h-full bg-card border border-border rounded-[40px] overflow-hidden shadow-2xl hover:border-primary/20 transition-all"
               >
                  {/* Cover */}
                  <div className="relative aspect-video overflow-hidden">
                     <Image 
                       src={course.cover.src} 
                       width={course.cover.width} 
                       height={course.cover.height} 
                       alt={course.title} 
                       className="object-cover group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                     <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform">
                        <PlayCircle className="w-6 h-6" />
                     </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex flex-col flex-1 space-y-6">
                     <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-md uppercase tracking-widest">{course.level}</span>
                        <div className="flex items-center gap-1 text-yellow-500 font-black">
                           <Star className="w-4 h-4 fill-current" />
                           4.9
                        </div>
                     </div>

                     <h3 className="text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors">
                        {course.title}
                     </h3>
                     
                     <div className="flex items-center gap-4 text-sm text-muted-foreground font-bold">
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {course.duration}</div>
                        <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> 8.5K طالب</div>
                     </div>

                     <div className="flex items-center justify-between pt-6 mt-auto border-t border-border">
                        <div className="flex flex-col">
                           <span className="text-3xl font-black text-primary">{course.price.toLocaleString()} ج.م</span>
                        </div>
                        <Link href={course.permalink} className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all">
                           <ChevronRight className="w-6 h-6 rtl:rotate-180" />
                        </Link>
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
