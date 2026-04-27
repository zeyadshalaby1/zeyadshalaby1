"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Marquee3D } from "@/components/marquee-3d";
import { Terminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { TechBento } from "@/components/tech-bento";
import { JourneyList } from "@/components/journey-list";
import { ClientMap } from "@/components/client-map";
import { CTASection } from "@/components/cta-section";
import { LatestProjects } from "@/components/latest-projects";
import { LatestCourses } from "@/components/latest-courses";

export default function Index() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main ref={containerRef} className="relative min-h-[900vh] bg-background selection:bg-primary/30 w-full overflow-x-hidden">
      
      {/* MEGA HERO SECTION */}
      <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden border-b border-primary/10">
        <AnimatedGridPattern
          numSquares={80}
          maxOpacity={0.3}
          duration={1.5}
          repeatDelay={0.3}
          className="opacity-70 text-primary [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        />
        <div className="absolute top-1/4 left-1/4 w-[70%] h-[70%] bg-primary/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[60%] h-[60%] bg-accent/10 blur-[200px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-gradient-to-r from-primary/20 to-accent/20 blur-[150px] rounded-full animate-spin-slow" />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-right space-y-10 z-20"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-4 px-8 py-3 rounded-2xl bg-secondary/30 border border-primary/30 backdrop-blur-3xl shadow-[0_0_20px_rgba(0,255,136,0.1)] hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] transition-all duration-500"
            >
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
              </span>
              <span className="text-sm font-black text-primary uppercase tracking-[0.4em]">مؤسس مشروع أفق</span>
            </motion.div>
            <motion.h1 
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '0.9' }} 
              className="font-black text-foreground tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.span className="block opacity-80" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 1, delay: 0.6 }}>زياد شلبي</motion.span>
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent drop-shadow-[0_15px_40px_rgba(0,255,136,0.3)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >مطور برمجيات متكامل</motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-3xl text-muted-foreground font-black max-w-xl leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            >أبني الحلول الرقمية من الفكرة الأولية حتى الإطلاق النهائي، مع أنظمة خلفية قوية وواجهات أمامية احترافية.</motion.p>
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button 
                className="group relative px-16 py-7 bg-primary text-primary-foreground rounded-[25px] font-black text-2xl overflow-hidden transition-all shadow-[0_25px_60px_rgba(0,255,136,0.4)] hover:shadow-[0_35px_80px_rgba(0,255,136,0.6)] hover:scale-105 active:scale-95"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-3">
                  اطلب مشروعك
                  <motion.svg className="w-5 h-5" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
          >
            <div className="absolute -z-10 opacity-40 right-[-10%] top-[-10%]"><Globe className="w-[800px] h-[800px]" /></div>
            <motion.div 
              style={{ y, scale }} 
              className="relative w-[340px] h-[450px] sm:w-[550px] sm:h-[700px] lg:w-[500px] lg:h-[650px] xl:w-[580px] xl:h-[780px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tech Stack Icons - Top */}
              <motion.div 
                className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-8 z-30"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.4, rotate: 15 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" 
                      alt="Laravel" 
                      className="w-12 h-12 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.7))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Laravel</motion.span>
                 </motion.div>
                 
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.4, rotate: -15 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://iconape.com/wp-content/files/yb/61798/svg/flutter-logo.svg" 
                      alt="Flutter" 
                      className="w-12 h-12 object-contain drop-shadow-lg"   
                      whileHover={{ filter: "drop-shadow(0 0 20px rgba(0, 149, 255, 0.7))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Flutter</motion.span>
                 </motion.div>
              </motion.div>

              {/* Tech Stack Icons - Sides */}
              <motion.div 
                className="absolute -left-20 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-30"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.4, rotate: -15 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s" 
                      alt="Next.js" 
                      className="w-12 h-12 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.7))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Next.js</motion.span>
                 </motion.div>
              </motion.div>

              <motion.div 
                className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-30"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                 <motion.div
                   className="relative group"
                   whileHover={{ scale: 1.4, rotate: 15 }}
                   transition={{ duration: 0.3 }}
                 >
                    <motion.img 
                      src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" 
                      alt="Golang" 
                      className="w-12 h-12 object-contain drop-shadow-lg"
                      whileHover={{ filter: "drop-shadow(0 0 20px rgba(0, 255, 136, 0.7))" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span 
                      className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >Golang</motion.span>
                 </motion.div>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 5, -5, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute inset-0 bg-primary/30 blur-[150px] rounded-full z-0" 
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
                className="absolute inset-4 bg-accent/20 blur-[100px] rounded-full z-0" 
              />
              <div className="relative w-full h-full rounded-[80px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-4 border-primary/20 group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <Image src="/Untitled design.png" alt="Zeyad Shalaby" fill priority className="object-cover scale-[1.05] group-hover:scale-[1.08] transition-transform duration-700" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative z-20 w-full py-40">
        <div className="flex flex-col items-center mb-20 text-center space-y-6 px-4">
           <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground uppercase">ثقة العملاء</h2>
           <div className="w-32 h-2 bg-primary rounded-full" />
        </div>
        <Marquee3D />
      </section>

      {/* FOUNDER OF OFOQ SECTION */}
      <section className="relative z-20 w-full max-w-[1600px] mx-auto py-40 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-center lg:items-start text-center lg:text-right space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground leading-none">مؤسس مشروع <span className="text-primary drop-shadow-[0_0_20px_var(--primary)]">أفق</span></h2>
            <p className="text-xl sm:text-3xl text-muted-foreground font-black leading-relaxed max-w-2xl"><Link href="https://ofoq.site" target="_blank" className="text-primary hover:underline">ofoq.site</Link> هي رؤيتنا لمستقبل التعليم الرقمي المتقدم.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Terminal className="w-full max-w-2xl min-h-[450px] shadow-[0_40px_100px_rgba(0,255,136,0.15)] border-primary/20 bg-black/80 backdrop-blur-3xl rounded-[30px]">
              <TypingAnimation className="text-primary font-black text-lg">pnpm start ofoq-lms@latest</TypingAnimation>
              <AnimatedSpan className="text-primary font-black mt-2">✔ نظام أفق التعليمي الآن يعمل بشكل مباشر.</AnimatedSpan>
            </Terminal>
          </motion.div>
        </div>
      </section>

      {/* TECH BENTO SECTION */}
      <section className="relative z-20">
         <TechBento />
      </section>

      {/* LATEST PROJECTS SECTION - Now with real data */}
      <section className="relative z-20">
         <LatestProjects />
      </section>

      {/* LATEST COURSES SECTION - NEW! */}
      <section className="relative z-20">
         <LatestCourses />
      </section>

      {/* JOURNEY LIST SECTION */}
      <section className="relative z-20 w-full max-w-[1600px] mx-auto py-40 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="order-2 lg:order-1"><JourneyList /></motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-right space-y-8">
            <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground leading-none">رحلتك <span className="text-primary">كعميل</span></h2>
            <p className="text-xl sm:text-3xl text-muted-foreground font-black leading-relaxed max-w-2xl">نهتم بأدق التفاصيل من أول لحظة تواصل وحتى نجاح مشروعك النهائي.</p>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL CLIENT MAP SECTION */}
      <section className="relative z-20 w-full max-w-[1600px] mx-auto py-40 px-8">
        <div className="flex flex-col items-center mb-20 text-center space-y-6">
           <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground uppercase">انتشارنا <span className="text-primary">العالمي</span></h2>
        </div>
        <ClientMap />
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative z-20">
         <CTASection />
      </section>

    </main>
  );
}
