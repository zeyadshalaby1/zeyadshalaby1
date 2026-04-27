"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, Users, PlayCircle, ChevronRight, Search } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { courses } from "@/.velite";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background py-40 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col lg:flex-row items-end justify-between gap-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <motion.div 
             className="space-y-6 text-center lg:text-right"
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
           >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-xs uppercase tracking-widest"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 136, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                 أكاديمية زياد شلبي التقنية
              </motion.div>
              <motion.h1 
                className="text-5xl sm:text-8xl font-black text-foreground tracking-tighter leading-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                 تعلم <motion.span 
                   className="text-primary italic"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 0.7 }}
                 >الاحترافية</motion.span> <br />
                 على أيدي الخبراء.
              </motion.h1>
              <motion.p 
                className="text-2xl text-muted-foreground font-bold max-w-3xl lg:ml-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                 أكاديمية تقنية متخصصة لتطوير المهارات البرمجية وتحويل المطورين إلى محترفين قادرين على بناء أنظمة حقيقية ومتطورة.
              </motion.p>
           </motion.div>
           
           <motion.div 
             className="relative w-full lg:w-[400px]"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 1 }}
           >
              {/* Tech Stack Icons - Top */}
              <motion.div 
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.3, rotate: 10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" 
                      alt="Laravel" 
                      className="w-10 h-10 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 15px rgba(239, 68, 68, 0.6))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Laravel</motion.span>
                 </motion.div>
                 
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.3, rotate: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Flutter-logo-2023.svg" 
                      alt="Flutter" 
                      className="w-10 h-10 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 15px rgba(0, 149, 255, 0.6))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Flutter</motion.span>
                 </motion.div>
              </motion.div>

              {/* Tech Stack Icons - Sides */}
              <motion.div 
                className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.3, rotate: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://seeklogo.com/images/N/nextjs-logo-8FCFF5DDA6-seeklogo.com.png" 
                      alt="Next.js" 
                      className="w-10 h-10 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -right-12 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Next.js</motion.span>
                 </motion.div>
              </motion.div>

              <motion.div 
                className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.3, rotate: 10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://seeklogo.com/images/G/go-logo-043DAE1B59-seeklogo.com.png" 
                      alt="Golang" 
                      className="w-10 h-10 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 15px rgba(0, 255, 136, 0.6))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Golang</motion.span>
                 </motion.div>
              </motion.div>

              {/* Search Input */}
              <motion.input 
                type="text" 
                placeholder="ابحث عن دورة تدريبية..." 
                className="w-full bg-secondary/50 border-2 border-border/50 p-6 rounded-[30px] font-bold text-lg focus:border-primary transition-all outline-none pr-14 hover:border-primary/30"
                whileFocus={{ scale: 1.02, borderColor: "rgb(0, 255, 136)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground"
                whileHover={{ scale: 1.1, color: "rgb(0, 255, 136)" }}
                transition={{ duration: 0.3 }}
              >
                <Search />
              </motion.div>
           </motion.div>
        </motion.div>

        {/* Courses Grid from Velite */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
           {courses.map((course, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9, y: 50 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1.2 + idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
               whileHover={{ y: -15, scale: 1.03 }}
               whileTap={{ scale: 0.98 }}
             >
               <MagicCard
                 gradientColor="#00FF8811"
                 className="group flex flex-col h-full bg-card border border-border rounded-[40px] overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_rgba(0,255,136,0.15)] transition-all duration-500"
               >
                  {/* Cover */}
                  <motion.div 
                    className="relative aspect-video overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                     <Image 
                       src={course.cover.src} 
                       width={course.cover.width} 
                       height={course.cover.height} 
                       alt={course.title} 
                       className="object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <motion.div 
                       className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                       initial={{ opacity: 0.6 }}
                       whileHover={{ opacity: 0.8 }}
                     />
                     <motion.div 
                       className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground font-black rounded-lg text-sm"
                       whileHover={{ scale: 1.1, y: -2 }}
                       whileTap={{ scale: 0.95 }}
                       transition={{ duration: 0.3 }}
                     >
                        <PlayCircle className="w-4 h-4" />
                        مشاهدة الدورة التدريبية
                     </motion.div>
                  </motion.div>

                  {/* Body */}
                  <div className="p-8 flex flex-col flex-1 space-y-6">
                     <motion.div 
                       className="flex items-center justify-between"
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: 0.2 }}
                     >
                        <motion.span 
                          className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-md uppercase"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 136, 0.2)" }}
                          transition={{ duration: 0.3 }}
                        >{course.level}</motion.span>
                        <motion.div 
                          className="flex items-center gap-1 text-yellow-500"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                           <Star className="w-4 h-4 fill-current" />
                           <span className="text-sm font-black text-foreground">4.9</span>
                        </motion.div>
                     </motion.div>

                     <motion.h3 
                       className="text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors duration-300"
                       whileHover={{ x: 5 }}
                       transition={{ duration: 0.3 }}
                     >
                        {course.title}
                     </motion.h3>
                     
                     <motion.div 
                       className="flex items-center gap-4 text-sm text-muted-foreground font-bold"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 0.5, delay: 0.4 }}
                     >
                        <motion.div 
                          className="flex items-center gap-1.5"
                          whileHover={{ scale: 1.05, color: "rgb(0, 255, 136)" }}
                          transition={{ duration: 0.3 }}
                        >
                           <Clock className="w-4 h-4" />
                           {course.duration}
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1.5"
                          whileHover={{ scale: 1.05, color: "rgb(0, 255, 136)" }}
                          transition={{ duration: 0.3 }}
                        >
                           <Users className="w-4 h-4" />
                           8,500 متدرب
                        </motion.div>
                     </motion.div>

                     <motion.div 
                       className="flex items-center gap-3 pt-4 border-t border-border"
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: 0.6 }}
                     >
                        <motion.div 
                          className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                           <Image 
                             src={course.instructor.avatar.src} 
                             width={course.instructor.avatar.width} 
                             height={course.instructor.avatar.height} 
                             alt={course.instructor.name} 
                             className="object-cover" 
                           />
                        </motion.div>
                        <motion.span 
                          className="text-sm font-bold text-foreground/80"
                          whileHover={{ x: 3, color: "rgb(0, 255, 136)" }}
                          transition={{ duration: 0.3 }}
                        >{course.instructor.name}</motion.span>
                     </motion.div>

                     <motion.div 
                       className="flex items-center justify-between pt-6 mt-auto"
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: 0.8 }}
                     >
                        <motion.div 
                          className="flex flex-col"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                           <motion.span 
                             className="text-3xl font-black text-primary"
                             whileHover={{ scale: 1.1 }}
                             transition={{ duration: 0.3 }}
                           >{course.price.toLocaleString()} ج.م</motion.span>
                           {course.oldPrice && <motion.span 
                             className="text-sm text-muted-foreground line-through font-bold"
                             whileHover={{ scale: 1.05 }}
                             transition={{ duration: 0.3 }}
                           >{course.oldPrice.toLocaleString()} ج.م</motion.span>}
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9, rotate: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Link href={course.permalink} className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
                             <ChevronRight className="w-6 h-6 rtl:rotate-180" />
                          </Link>
                        </motion.div>
                     </motion.div>
                  </div>
               </MagicCard>
             </motion.div>
           ))}
        </motion.div>

      </div>
    </main>
  );
}
