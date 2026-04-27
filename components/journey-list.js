"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

const steps = [
  {
    name: "تم استلام الطلب",
    description: "بدأنا في تحليل فكرتك وتحويلها لمتطلبات تقنية.",
    time: "الآن",
    icon: "📥",
    color: "#00FF88",
  },
  {
    name: "رسم المعمار البرمجي",
    description: "صممنا هيكل النظام (Architecture) لضمان أقصى أداء.",
    time: "منذ دقيقة",
    icon: "🏗️",
    color: "#7B2FFF",
  },
  {
    name: "مرحلة التطوير المكثف",
    description: "كتابة الأكواد بـ Go و Laravel وبناء الواجهات بـ Next.js.",
    time: "منذ ساعتين",
    icon: "💻",
    color: "#00FF88",
  },
  {
    name: "فحص الجودة والأمان",
    description: "تأكدنا من خلو المشروع من الثغرات والأخطاء.",
    time: "منذ 5 ساعات",
    icon: "🛡️",
    color: "#FFB800",
  },
  {
    name: "إطلاق المشروع (Deployment)",
    description: "مبروك! موقعك الآن لايف وشغال زي الصاروخ.",
    time: "منذ يوم",
    icon: "🚀",
    color: "#00FF88",
  },
  {
    name: "المتابعة والنمو",
    description: "مش بنسيبك، بنطور ونحدث عشان تفضل دايمًا في القمة.",
    time: "مستمر",
    icon: "📈",
    color: "#7B2FFF",
  },
];

const StepNotification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-3xl p-6 transition-all duration-300",
        "bg-secondary/20 border border-border backdrop-blur-2xl hover:scale-[1.02] shadow-xl",
        "dark:bg-white/5 dark:border-white/10"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex size-14 items-center justify-center rounded-2xl shadow-inner"
          style={{
            backgroundColor: `${color}20`,
            border: `2px solid ${color}`,
          }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden text-right">
          <figcaption className="flex flex-row items-center gap-2 text-xl font-black text-foreground">
            <span>{name}</span>
            <span className="text-xs text-muted-foreground font-bold">· {time}</span>
          </figcaption>
          <p className="text-md font-bold text-muted-foreground mt-1">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function JourneyList() {
  return (
    <div className="relative flex h-[600px] w-full flex-col overflow-hidden p-6 rounded-[50px] bg-secondary/10 border border-border/50">
      <AnimatedList delay={2000}>
        {steps.map((item, idx) => (
          <StepNotification {...item} key={idx} />
        ))}
      </AnimatedList>
      
      {/* Fading bottom effect */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
}
