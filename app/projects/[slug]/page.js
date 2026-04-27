"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, Calendar, Tag } from "lucide-react";

// Mock data mapping for dynamic routing demo
const projectData = {
  "ofoq-pay": {
    title: "بوابة دفع أفق (Ofoq Pay)",
    description: "نظام متكامل لمعالجة المدفوعات الإلكترونية بسرعات فائقة وأمان عالي جداً باستخدام Go و MongoDB.",
    cover: "/projects/ofoq-pay.png",
    category: "Fintech",
    date: "أبريل 2026",
    tech: ["Go Lang", "MongoDB", "WebSocket", "React", "Docker"],
    link: "https://ofoq.site",
    github: "https://github.com/zeyadshalaby1",
    content: `
      بوابة دفع أفق هي الحل الأمثل للتجارة الإلكترونية في الشرق الأوسط. تم بناء النظام بالكامل بلغة **Go** لضمان التعامل مع آلاف العمليات في الثانية الواحدة بكل سلاسة.

      ### المميزات الرئيسية
      - معالجة عمليات الدفع في أقل من 50 مللي ثانية.
      - لوحة تحكم ذكية للمطورين.
      - تكامل مباشر مع البنوك المحلية والدولية.
      - نظام حماية متطور ضد الاحتيال.

      ### التحديات التقنية
      كان التحدي الأكبر هو ضمان التزامن العالي (High Concurrency) ومعالجة الطلبات في وقت حقيقي، وهو ما تم حله باستخدام الـ Goroutines في لغة Go ونظام WebSocket للتحديثات اللحظية.
    `
  },
  "cloud-engine": {
    title: "محرك الأنظمة السحابية (Cloud Engine)",
    description: "محرك Backend مبني بـ Go لتشغيل البنية التحتية للشركات الكبيرة مع نظام مراقبة لحظي.",
    cover: "/projects/cloud-engine.png",
    category: "Infrastructure",
    date: "مارس 2026",
    tech: ["Go Lang", "Redis", "Docker", "Kubernetes", "Prometheus"],
    link: "#",
    github: "#",
    content: `
      هذا المشروع يهدف إلى توفير بنية تحتية برمجية صلبة للشركات التي تحتاج إلى توسع (Scalability) كبير.

      ### التقنيات المستخدمة
      - **Go Lang:** لسرعة التنفيذ وإدارة الذاكرة.
      - **Docker:** لسهولة النشر والتحكم في البيئات.
      - **Redis:** للتخزين المؤقت فائق السرعة.
    `
  }
};

export default function ProjectSinglePage() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center font-black text-4xl">المشروع غير موجود</div>;
  }

  return (
    <main className="min-h-screen bg-background py-40 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-primary font-black text-xl hover:translate-x-[-8px] transition-transform">
           <ArrowLeft className="w-6 h-6 rtl:rotate-180" />
           العودة للمشاريع
        </Link>

        {/* Header Section */}
        <div className="space-y-8">
           <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-sm uppercase tracking-widest">
                 <Tag className="w-4 h-4" />
                 {project.category}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-bold">
                 <Calendar className="w-4 h-4" />
                 {project.date}
              </div>
           </div>
           <h1 className="text-5xl sm:text-8xl font-black text-foreground tracking-tighter leading-tight">
              {project.title}
           </h1>
           <p className="text-2xl sm:text-3xl text-muted-foreground font-bold leading-relaxed">
              {project.description}
           </p>
        </div>

        {/* Project Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-video w-full rounded-[60px] overflow-hidden border border-white/10 shadow-2xl"
        >
           <Image src={project.cover} alt={project.title} fill className="object-cover" />
        </motion.div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16">
           
           {/* Details (2/3) */}
           <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-invert prose-xl max-w-none font-bold text-foreground/80 leading-loose">
                 {/* This would be rendered from project.content using MDX */}
                 <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br/>') }} />
              </div>
           </div>

           {/* Sidebar (1/3) */}
           <div className="space-y-10">
              <div className="p-8 bg-secondary/20 border border-white/5 rounded-[40px] space-y-8 backdrop-blur-3xl">
                 <h3 className="text-2xl font-black text-foreground">التقنيات المستخدمة</h3>
                 <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-xl text-sm font-black text-primary">
                         <Code2 className="w-4 h-4" />
                         {t}
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                    <Link href={project.link} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform">
                       زيارة الموقع
                       <ExternalLink className="w-5 h-5" />
                    </Link>
                    <Link href={project.github} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-secondary/50 text-foreground border border-white/10 rounded-2xl font-black text-xl hover:bg-secondary transition-all">
                       كود المصدر
                       <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </Link>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </main>
  );
}
