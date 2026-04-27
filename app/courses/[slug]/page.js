"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Clock, Users, PlayCircle, CheckCircle2, 
  ChevronDown, ChevronUp, Lock, Globe, ShieldCheck,
  Video, FileText, Download, Award, X, Play, Code2
} from "lucide-react";
import { CodeComparison } from "@/components/ui/code-comparison";
import { WhatsappModal } from "@/components/whatsapp-modal";
import { courses } from "@/.velite";

export default function CourseSinglePage() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center font-black text-4xl text-foreground bg-background">
      الكورس غير موجود
    </div>
  );

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 text-foreground">
      
      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000000] bg-black/95 flex items-center justify-center p-4 md:p-20 backdrop-blur-3xl"
          >
             <button onClick={() => setSelectedVideo(null)} className="absolute top-10 right-10 p-4 bg-white/10 rounded-full hover:bg-primary text-white transition-all">
                <X size={32} />
             </button>
             <div className="relative w-full max-w-6xl aspect-video rounded-[40px] overflow-hidden border-2 border-primary/20 shadow-[0_0_100px_rgba(0,255,136,0.2)]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEGA HERO SECTION */}
      <section className="relative pt-48 pb-40 px-6 overflow-hidden bg-secondary/5 border-b border-border">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--primary-opacity),transparent)] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-8 space-y-12 text-center lg:text-right">
             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-2xl font-black text-xs uppercase tracking-[0.2em]">Zeyad Academy</span>
                <div className="flex items-center gap-1 text-yellow-500">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                   <span className="font-black text-foreground text-xl ml-3">4.9</span>
                </div>
                <div className="w-1.5 h-1.5 bg-muted rounded-full mx-2 hidden sm:block" />
                <span className="text-muted-foreground font-black tracking-tight">8,500 طالب انضموا إلينا</span>
             </div>

             <div className="space-y-6">
                <h1 className="text-5xl sm:text-8xl font-black text-foreground tracking-tighter leading-[1]">
                   {course.title}
                </h1>
                <p className="text-2xl sm:text-3xl text-muted-foreground font-bold leading-relaxed max-w-4xl">
                   {course.description}
                </p>
             </div>

             {/* PROMO VIDEO BOX */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               className="relative w-full aspect-video rounded-[50px] overflow-hidden border-4 border-primary/20 bg-black/5 shadow-2xl group"
             >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${course.promoVideoId}?controls=0&modestbranding=1&rel=0&showinfo=0`}
                  title="Promo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[15px] border-background/10 rounded-[inherit]" />
             </motion.div>

             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-8">
                <div className="flex items-center gap-4 font-black text-foreground/80 text-lg"><ShieldCheck className="w-8 h-8 text-primary" /> منهج معتمد</div>
                <div className="flex items-center gap-4 font-black text-foreground/80 text-lg"><Globe className="w-8 h-8 text-muted-foreground" /> اللغة: العربية</div>
                <div className="flex items-center gap-4 font-black text-primary text-lg"><Award className="w-8 h-8" /> شهادة احترافية</div>
             </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 relative z-50">
             <div className="sticky top-32 bg-card border border-border rounded-[60px] p-12 space-y-12 shadow-2xl">
                <div className="space-y-6 text-center">
                   <div className="flex items-baseline gap-4 justify-center">
                      <span className="text-7xl font-black text-primary tracking-tighter">{course.price.toLocaleString()}</span>
                      <span className="text-2xl font-black text-primary/60">ج.م</span>
                   </div>
                   {course.oldPrice && (
                     <div className="flex items-center justify-center gap-4">
                        <span className="text-2xl text-muted-foreground line-through font-bold">{course.oldPrice.toLocaleString()} ج.م</span>
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg font-black text-sm">خصم ممتاز</span>
                     </div>
                   )}
                </div>

                <div className="flex flex-col gap-6">
                    <button 
                      onClick={() => setIsWhatsappModalOpen(true)}
                      className="w-full py-7 bg-primary text-primary-foreground rounded-[30px] font-black text-2xl shadow-xl hover:scale-[1.05] active:scale-95 transition-all"
                    >
                       ابدأ التعلم الآن
                    </button>
                   <button className="w-full py-7 border-2 border-border rounded-[30px] font-black text-2xl hover:bg-secondary transition-all">
                      إضافة للسلة
                   </button>
                </div>

                <div className="space-y-8 pt-6">
                   <h4 className="font-black text-foreground text-xl border-b border-border pb-6">هذا الكورس يتضمن:</h4>
                   <ul className="space-y-6">
                      <li className="flex items-center gap-5 text-lg font-bold text-muted-foreground"><Video className="w-6 h-6 text-primary" /> {course.duration} دروس مسجلة</li>
                      <li className="flex items-center gap-5 text-lg font-bold text-muted-foreground"><FileText className="w-6 h-6 text-primary" /> مراجع حصرية</li>
                      <li className="flex items-center gap-5 text-lg font-bold text-muted-foreground"><Download className="w-6 h-6 text-primary" /> ملفات جاهزة</li>
                      <li className="flex items-center gap-5 text-lg font-bold text-muted-foreground"><Award className="w-6 h-6 text-primary" /> شهادة موثقة</li>
                   </ul>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-40 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-32 text-right">
               
               {/* Outcomes */}
               <div className="p-16 bg-secondary/30 border border-border rounded-[60px]">
                  <h2 className="text-4xl font-black text-foreground mb-12 flex items-center gap-4">
                     <div className="w-2 h-10 bg-primary rounded-full" />
                     ماذا ستتعلم؟
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                     {course.outcomes.map((item, i) => (
                       <div key={i} className="flex items-start gap-5 group">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                          <span className="font-black text-muted-foreground text-xl leading-relaxed">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Curriculum */}
               <div className="space-y-12">
                  <h2 className="text-5xl font-black text-foreground tracking-tighter">منهج الدورة</h2>
                  <div className="border border-border rounded-[50px] overflow-hidden bg-card">
                     {course.curriculum.map((section, idx) => (
                       <div key={idx} className="border-b border-border last:border-0">
                          <button 
                            onClick={() => setActiveSection(activeSection === idx ? -1 : idx)}
                            className="w-full flex items-center justify-between p-12 hover:bg-secondary/50 transition-all text-right"
                          >
                             <div className="flex items-center gap-8">
                                {activeSection === idx ? <ChevronUp className="text-primary w-8 h-8" /> : <ChevronDown className="w-8 h-8 text-muted-foreground" />}
                                <span className="text-3xl font-black text-white tracking-tight">{section.title}</span>
                             </div>
                             <span className="text-base font-black text-primary bg-primary/10 px-6 py-2 rounded-full uppercase tracking-tighter">{section.lessons.length} دروس</span>
                          </button>
                          
                          <AnimatePresence>
                            {activeSection === idx && (
                               <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-background">
                                  {section.lessons.map((lesson, lIdx) => (
                                    <div key={lIdx} className="border-b border-border last:border-0">
                                       <div className="flex items-center justify-between p-10 px-16 hover:bg-secondary/20 transition-all">
                                          <div className="flex items-center gap-8">
                                             {lesson.freePreview ? <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center"><PlayCircle className="w-7 h-7 text-primary" /></div> : <Lock className="w-6 h-6 text-muted-foreground" />}
                                             <span 
                                               onClick={() => lesson.freePreview && setSelectedVideo(lesson.videoId)}
                                               className={`text-xl font-black ${lesson.freePreview ? "text-primary hover:underline cursor-pointer" : "text-muted-foreground"}`}
                                             >
                                                {lesson.title}
                                             </span>
                                             {lesson.freePreview && <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-lg uppercase font-black">مجاني</span>}
                                          </div>
                                          <span className="text-base font-black text-muted-foreground opacity-50">{lesson.duration}</span>
                                       </div>
                                       
                                       {lesson.beforeCode && (
                                         <div className="p-16 bg-secondary/10 border-y border-border">
                                            <div className="mb-10 flex items-center gap-4">
                                               <Code2 className="w-10 h-10 text-primary" />
                                               <span className="text-2xl font-black text-foreground italic">Code Comparison:</span>
                                            </div>
                                            <CodeComparison
                                              beforeCode={lesson.beforeCode}
                                              afterCode={lesson.afterCode}
                                              language="go"
                                              filename={lesson.filename}
                                            />
                                         </div>
                                       )}
                                    </div>
                                  ))}
                               </motion.div>
                            )}
                          </AnimatePresence>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Instructor */}
               <div className="pt-10">
                  <h2 className="text-4xl font-black text-foreground mb-16">المدرب المسؤول</h2>
                  <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start p-16 bg-card rounded-[80px] border border-border relative overflow-hidden">
                     <div className="relative w-64 h-64 rounded-[50px] overflow-hidden border-4 border-primary shadow-xl shrink-0">
                        <Image 
                          src={course.instructor.avatar.src} 
                          width={course.instructor.avatar.width} 
                          height={course.instructor.avatar.height} 
                          alt={course.instructor.name} 
                          className="object-cover" 
                        />
                     </div>
                     <div className="relative z-10 space-y-8 text-center lg:text-right">
                        <h3 className="text-5xl font-black text-primary">{course.instructor.name}</h3>
                        <p className="text-2xl font-black text-foreground italic">{course.instructor.title}</p>
                        <p className="text-2xl font-bold text-muted-foreground leading-relaxed">
                           {course.instructor.bio}
                        </p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      <WhatsappModal 
        isOpen={isWhatsappModalOpen} 
        onClose={() => setIsWhatsappModalOpen(false)} 
        courseTitle={course.title}
      />

    </main>
  );
}
