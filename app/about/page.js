"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Target, Zap, Rocket, Award, ShieldCheck, Heart } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      
      {/* Background Pattern */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="opacity-40 text-primary [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
      />

      {/* HERO SECTION */}
      <motion.section 
        ref={containerRef}
        className="relative pt-40 pb-20 px-6 overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-center lg:text-right"
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 136, 0.2)" }}
            >
               <motion.span 
                 className="w-2 h-2 bg-primary rounded-full animate-pulse"
                 whileHover={{ scale: 1.5 }}
                 transition={{ duration: 0.3 }}
               />
               <span className="text-xs font-black text-primary uppercase tracking-widest">نبذة تعريفية</span>
            </motion.div>
            <motion.h1 
              className="text-6xl sm:text-8xl font-black text-foreground tracking-tighter leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              أبني <motion.span 
                className="text-primary italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >المستقبل</motion.span> <br />
              بأكواد من حديد.
            </motion.h1>
            <motion.p 
              className="text-2xl text-muted-foreground font-bold leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              أنا مطور برمجيات متكامل أعمل على تطوير الحلول من البنية التحتية الخلفية حتى التطبيقات الموبايلية. بدأت رحلتي في عالم البرمجة عندما أدركت أن الكود ليس مجرد قواعد لغوية، بل هو فلسفة تفكير ومنهجية لحل المشكلات.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center"
          >
             <motion.div 
               className="relative w-[300px] h-[400px] sm:w-[450px] sm:h-[600px] rounded-[50px] overflow-hidden border-4 border-primary/20 shadow-2xl"
               style={{ scale }}
               whileHover={{ scale: 1.05, rotate: 2 }}
               transition={{ duration: 0.5 }}
             >
                <Image src="/Untitled design.png" alt="Zeyad Shalaby" fill className="object-cover" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                />
             </motion.div>
             {/* Decorative Badges */}
             <motion.div 
               className="absolute -bottom-10 -right-10 p-8 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[30px] hidden sm:block"
               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8, delay: 1.2 }}
               whileHover={{ scale: 1.05, rotate: 5 }}
             >
                <div className="flex items-center gap-4">
                   <motion.div 
                     className="p-3 bg-primary rounded-2xl"
                     whileHover={{ scale: 1.1, rotate: 15 }}
                     transition={{ duration: 0.3 }}
                   >
                     <Award className="text-primary-foreground" />
                   </motion.div>
                   <div>
                      <motion.div 
                        className="text-2xl font-black text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >+5 سنوات</motion.div>
                      <div className="text-xs font-bold text-muted-foreground uppercase">من الخبرة المهنية المتكاملة</div>
                   </div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </motion.section>

      {/* STORY SECTION */}
      <motion.section 
        className="py-40 px-6 bg-secondary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto space-y-20 text-center lg:text-right">
           <motion.div 
             className="space-y-6"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8 }}
           >
              <motion.h2 
                className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                رحلتي في <motion.span 
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >عالم التقنية</motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl sm:text-2xl text-muted-foreground font-bold leading-loose"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                 بدأت رحلتي مع السطر الأول من الكود عندما أدركت أن البرمجة ليست مجرد قواعد لغوية، بل هي فلسفة تفكير ومنهجية لحل المشكلات. من تطوير تطبيقات الموبايل إلى بناء منصات التعليم المتقدمة (أفق)، كانت الرحلة مليئة بالتحديات والتعلم المستمر.
              </motion.p>
           </motion.div>

           <motion.div 
             className="grid grid-cols-1 sm:grid-cols-3 gap-12"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 1, delay: 0.6 }}
           >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                 <motion.div 
                   className="w-20 h-20 bg-primary/10 rounded-[30px] flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 text-primary"
                   whileHover={{ scale: 1.1, rotate: 15 }}
                   transition={{ duration: 0.3 }}
                 >
                    <Zap size={40} />
                 </motion.div>
                 <motion.h3 
                   className="text-2xl font-black text-foreground"
                   whileHover={{ scale: 1.05, color: "rgb(0, 255, 136)" }}
                   transition={{ duration: 0.3 }}
                 >الأداء العالي</motion.h3>
                 <p className="text-muted-foreground font-bold italic">نكتب أكواداً عالية الأداء وقابلة للتوسع.</p>
              </motion.div>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                 <motion.div 
                   className="w-20 h-20 bg-primary/10 rounded-[30px] flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 text-primary"
                   whileHover={{ scale: 1.1, rotate: -15 }}
                   transition={{ duration: 0.3 }}
                 >
                    <ShieldCheck size={40} />
                 </motion.div>
                 <motion.h3 
                   className="text-2xl font-black text-foreground"
                   whileHover={{ scale: 1.05, color: "rgb(0, 255, 136)" }}
                   transition={{ duration: 0.3 }}
                 >الأمان المتقدم</motion.h3>
                 <p className="text-muted-foreground font-bold italic">حماية البيانات هي أولويتنا القصوى.</p>
              </motion.div>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                 <motion.div 
                   className="w-20 h-20 bg-primary/10 rounded-[30px] flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 text-primary"
                   whileHover={{ scale: 1.1, rotate: 10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <Target size={40} />
                 </motion.div>
                 <motion.h3 
                   className="text-2xl font-black text-foreground"
                   whileHover={{ scale: 1.05, color: "rgb(0, 255, 136)" }}
                   transition={{ duration: 0.3 }}
                 >دقة التنفيذ</motion.h3>
                 <p className="text-muted-foreground font-bold italic">نهتم بأدق التفاصيل التقنية.</p>
              </motion.div>
           </motion.div>
        </div>
      </motion.section>

      {/* PHILOSOPHY SECTION */}
      <motion.section 
        className="py-40 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
         <motion.div 
           className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 1 }}
         >
            <motion.h2 
              className="text-5xl sm:text-8xl font-black text-foreground tracking-tighter leading-none italic uppercase opacity-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2 }}
            >
               Code is Poetry
            </motion.h2>
            <motion.div 
              className="relative p-12 sm:p-24 bg-secondary/10 border border-white/5 rounded-[80px] overflow-hidden max-w-5xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
               <motion.div 
                 className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-opacity),transparent)] opacity-10"
                 animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
               <motion.div 
                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                 animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               />
               <motion.div 
                 className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl"
                 animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
                 transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               />
               <Heart className="w-20 h-20 text-primary/20 mb-8 mx-auto animate-pulse" />
               <motion.blockquote 
                 className="text-2xl sm:text-4xl font-black text-foreground leading-relaxed italic"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 1, delay: 0.5 }}
               >
                  "البرمجة ليست مجرد كتابة أوامر، بل هي فن حل المشكلات وتحويل الأفكار المعقدة إلى حلول ذكية. في كل سطر كود أكتبه، أضع جزءاً من فلسفة التفكير ورؤيتي التقنية."
               </motion.blockquote>
               <motion.cite 
                 className="block mt-8 text-xl font-bold text-primary not-italic tracking-widest uppercase"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 1, delay: 0.7 }}
               >— زياد شلبي</motion.cite>
            </motion.div>
         </motion.div>
      </motion.section>

      {/* CTA SECTION - Reuse style but simplified */}
      <motion.section 
        className="py-40 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
         <motion.div 
           className="max-w-4xl mx-auto text-center space-y-10"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 1 }}
         >
            <motion.h2 
              className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
            >هل ترغب في بناء <motion.span 
              className="text-primary italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
            >عالمك الرقمي؟</motion.span></motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4 }}
            >أنا جاهز لتحويل رؤيتك إلى واقع تقني متكامل.</motion.p>
            <motion.div 
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
               <motion.button 
                 className="px-16 py-6 bg-primary text-primary-foreground rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
                 whileHover={{ scale: 1.05, y: -3 }}
                 whileTap={{ scale: 0.95 }}
               >اطلب مشروعك</motion.button>
               <motion.button 
                 className="px-16 py-6 border-2 border-border rounded-3xl font-black text-xl hover:bg-secondary transition-all"
                 whileHover={{ scale: 1.05, y: -3 }}
                 whileTap={{ scale: 0.95 }}
               >تواصل معي</motion.button>
            </motion.div>
         </motion.div>
      </motion.section>

    </main>
  );
}
