"use client";

import React from "react";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Smartphone, 
  Database, 
  Zap, 
  Search, 
  Layout 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";

const techStack = [
  {
    Icon: Cpu,
    name: "Go Lang Architect",
    description: "بناء أنظمة خلفية فائقة السرعة تتحمل ملايين الطلبات في الثانية.",
    href: "#",
    cta: "استكشف القوة",
    className: "col-span-3 lg:col-span-1 lg:row-span-3", // MEGA TALL
    background: (
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-60">
         <div className="absolute top-20 left-6 flex flex-col gap-4 font-mono text-xs text-primary/40 group-hover:text-primary transition-all duration-700">
            {["func handleRequest() {", "  go process()", "  return response", "}", "type Server struct {", "  Port int", "}"].map((line, i) => (
              <span key={i} className="whitespace-nowrap">{line}</span>
            ))}
         </div>
      </div>
    ),
  },
  {
    Icon: Database,
    name: "Laravel Ecosystem",
    description: "تطوير تطبيقات ويب متكاملة مع أمان فائق وإدارة بيانات احترافية.",
    href: "#",
    cta: "شاهد الهيكلة",
    className: "col-span-3 lg:col-span-1 lg:row-span-2", // TALL
    background: (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <Marquee
          vertical
          pauseOnHover
          className="[--duration:20s] opacity-30 group-hover:opacity-100 transition-opacity"
        >
          {["Eloquent", "Sanctum", "Redis", "Queues", "Events", "Jobs"].map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-4 rounded-xl border border-primary/20 bg-primary/5 font-black text-primary my-2 whitespace-nowrap text-center"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    ),
  },
  {
    Icon: Globe,
    name: "Next.js & SEO",
    description: "تجربة مستخدم لا تضاهى مع أرشفة مثالية في محركات البحث.",
    href: "#",
    cta: "تجربة الأداء",
    className: "col-span-3 lg:col-span-1 lg:row-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
         <Zap className="w-32 h-32 text-primary/10 animate-pulse group-hover:text-primary/30 transition-colors" />
      </div>
    ),
  },
  {
    Icon: Smartphone,
    name: "Flutter Mobile",
    description: "تطبيقات موبايل عابرة للمنصات بواجهات مستخدم ساحرة.",
    href: "#",
    cta: "شاهد التطبيقات",
    className: "col-span-3 lg:col-span-2 lg:row-span-1", // WIDE BUT PART OF TALL GRID
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-0 [--duration:30s] opacity-20"
      >
        {["iOS", "Android", "Desktop", "Web"].map((os, idx) => (
          <div key={idx} className="text-4xl font-black text-primary mx-10 uppercase tracking-[0.5em]">{os}</div>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Layout,
    name: "UI/UX Design",
    description: "تصميم واجهات تجمع بين الجمال الفني والسهولة التقنية.",
    href: "#",
    cta: "شاهد التصاميم",
    className: "col-span-3 lg:col-span-1 lg:row-span-1",
    background: (
      <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
         <div className="w-20 h-20 border-2 border-primary/20 rounded-full animate-ping" />
      </div>
    ),
  },
];

export function TechBento() {
  return (
    <div className="w-full py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-right">
            <h2 className="text-5xl sm:text-7xl font-black text-foreground mb-4 tracking-tighter">
              ترسانة <span className="text-primary italic">التقنيات</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-bold">بنية تحتية برمجية صلبة لكل مشروع.</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
        </div>
        <BentoGrid className="lg:grid-rows-3 lg:auto-rows-[18rem]">
          {techStack.map((tech, idx) => (
            <BentoCard key={idx} {...tech} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
