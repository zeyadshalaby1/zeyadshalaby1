"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { ArrowRight, Send } from "lucide-react";

export function CTASection() {
  const { theme } = useTheme();
  
  return (
    <section className="relative w-full py-40 px-6 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto">
        <MagicCard
          gradientColor={theme === "dark" ? "#00FF8822" : "#00FF8811"}
          gradientFrom="#00FF88"
          gradientTo="#7B2FFF"
          gradientSize={600}
          className="rounded-[60px] p-12 sm:p-24 border border-primary/20 shadow-2xl overflow-hidden"
        >
          <div className="relative z-50 flex flex-col items-center text-center space-y-12">
            
            {/* Badge */}
            <div className="px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
               <span className="text-xs sm:text-sm font-black text-primary uppercase tracking-[0.4em]">Let's Build Something Great</span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl sm:text-8xl font-black text-foreground tracking-tighter leading-none">
              جاهز تحول فكرتك لواقع <br />
              <span className="text-primary drop-shadow-[0_0_30px_rgba(0,255,136,0.3)] italic">رقمي أسطوري؟</span>
            </h2>

            {/* Description */}
            <p className="text-xl sm:text-3xl text-muted-foreground font-bold max-w-3xl leading-relaxed">
              سواء كنت تبحث عن بوابة دفع متطورة، نظام Backend جبار، أو تطبيق موبايل لا مثيل له.. أنا هنا لأحول رؤيتك إلى حقيقة برمجية صلبة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-16 py-7 bg-primary text-primary-foreground rounded-[30px] font-black text-2xl overflow-hidden transition-all shadow-[0_20px_50px_rgba(0,255,136,0.4)] hover:scale-105 active:scale-95">
                <div className="relative z-10 flex items-center justify-center gap-3">
                   ابدأ مشروعك الآن
                   <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <button className="w-full sm:w-auto px-16 py-7 bg-secondary/50 text-foreground border-2 border-border/50 rounded-[30px] font-black text-2xl hover:bg-secondary transition-all backdrop-blur-xl flex items-center justify-center gap-3">
                تواصل معي
                <ArrowRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-muted-foreground font-bold text-sm uppercase tracking-widest pt-8 opacity-50">
               Cairo, Egypt · Global Remote Service · Trusted by 50+ Clients
            </p>
          </div>

          {/* Decorative Background Elements inside Magic Card */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
        </MagicCard>
      </div>
    </section>
  );
}
