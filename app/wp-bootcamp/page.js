"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, Star, CheckCircle2, Trophy, Users, 
  Calendar, Clock, Target, RocketIcon, Sparkles,
  ArrowRight, ShieldCheck, Zap, Laptop, BookOpen,
  ChevronDown, ChevronUp, Crown, Gift, MousePointer2,
  Cpu, Globe, Layout, Code2, Timer, ExternalLink
} from "lucide-react";
import { WhatsappModal } from "@/components/whatsapp-modal";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardHover = {
  hover: { 
    y: -10, 
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 }
  }
};

export default function WpBootcampPage() {
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [activeSession, setActiveSession] = useState(0);

  const curriculum = [
    { 
      id: "01", 
      title: "تأسيس Localhost و Git و AI Tools", 
      detail: "إعداد بيئة التطوير والتوثيق الاحترافي على GitHub", 
      timeline: [
        { time: "الساعة 1", task: "تأسيس Localhost (Local by Flywheel)", detail: "إنشاء أول دومين محلي وقاعدة بيانات من الصفر." },
        { time: "الساعة 2", task: "Version Control (GitHub)", detail: "تعلم أوامر الـ Git الأساسية (Commit, Push, Pull)." },
        { time: "ساعة 3-4", task: "AI Code Editors", detail: "تسطيب Cursor / Windsurf وربط أدوات الـ AI بالمشروع." },
        { time: "الساعة 5", task: "التوثيق الاحترافي", detail: "كتابة README.md عالمي ليكون واجهتك أمام العميل." }
      ]
    },
    { 
      id: "02", 
      title: "تشريح WordPress من الداخل", 
      detail: "فهم الملفات، قاعدة البيانات، وكيف يعمل النظام فعلياً", 
      timeline: [
        { time: "الساعة 1", task: "هيكلة الملفات", detail: "جولة داخل wp-content وكيف تتفاعل القوالب مع الإضافات." },
        { time: "ساعة 2-3", task: "قاعدة البيانات", detail: "تتبع wp_options و wp_posts وفهم كيف يتم حفظ البيانات." },
        { time: "الساعة 4", task: "ملفات الأساس", detail: "التعرف على wp-config وإعدادات الأمان من الكود." },
        { time: "الساعة 5", task: "تهيئة الهيكل", detail: "تنظيف الووردبريس من الملفات الزائدة وضبط الإعدادات العامة." }
      ]
    },
    { 
      id: "03", 
      title: "ماستر كلاس المنطق البرمجي والـ Debugging", 
      detail: "كيف تطلب من الـ AI كتابة كود معقد وحل أي مشكلة تظهر لك", 
      timeline: [
        { time: "ساعة 1-2", task: "صناعة المنطق (Logic)", detail: "تعلم Prompt Engineering لكتابة كود معقد بالـ AI." },
        { time: "الساعة 3", task: "البحث عن الأخطاء (Debugging)", detail: "قراءة سجلات الأخطاء وحل مشكلة الشاشة البيضاء (WSOD)." },
        { time: "الساعة 4", task: "Elementor & Custom Code", detail: "دمج الكود المخصص مع المحررات المرئية باحترافية." },
        { time: "الساعة 5", task: "تطبيقات عملية", detail: "صنع أخطاء متعمدة وتطبيق مهارات الحل بمفردك." }
      ]
    },
    { 
      id: "04", 
      title: "Custom Snippets والحماية والأداء الأقصى", 
      detail: "الاستغناء عن الإضافات الثقيلة وكتابة حلولك الخاصة الصاروخية", 
      timeline: [
        { time: "ساعة 1-2", task: "ملف functions.php", detail: "إضافة Snippets لتسريع الموقع وتعديل الوظائف الأساسية." },
        { time: "الساعة 3", task: "تطوير الـ Forms", detail: "إنشاء نماذج تواصل ديناميكية واختبارها (SMTP)." },
        { time: "الساعة 4", task: "حماية الجدران برمجياً", detail: "تنفيذ جدران الحماية ضد هجمات الـ Brute Force." },
        { time: "الساعة 5", task: "نظام الـ Backups", detail: "بناء استراتيجية نسخ احتياطي آلية لضمان بقاء المشاريع." }
      ]
    },
    { 
      id: "05", 
      title: "المشروع الأول: الموقع التعريفي Corporate Site", 
      detail: "بناء موقع شركة فاخر ومتجاوب بالكامل وتوثيقه", 
      exampleUrl: "https://thewaltdisneycompany.com/",
      exampleName: "Disney (Corporate Site)",
      timeline: [
        { time: "الساعة 1", task: "التخطيط والـ Wireframe", detail: "تحليل فكرة الشركة واختيار تجربة مستخدم (UX) سلسة." },
        { time: "ساعة 2-3", task: "الهيدر والفوتر", detail: "تخصيص الهيدر والفوتر عبر الكود وبناء قائمة تنقل استثنائية." },
        { time: "الساعة 4", task: "المحتوى بالـ AI", detail: "توليد النصوص الدعائية وتنسيق الصور وبناء الأقسام." },
        { time: "الساعة 5", task: "التجاوب والمراجعة", detail: "ضبط الموقع ليتوافق مع كل الشاشات (Responsive Design)." }
      ]
    },
    { 
      id: "06", 
      title: "المشروع الثاني: آلة الأرباح E-Commerce", 
      detail: "متجر إلكتروني ضخم بمواصفات العالمية ودفع إلكتروني", 
      exampleUrl: "https://www.shoprootscience.com/",
      exampleName: "Root Science (E-Commerce)",
      timeline: [
        { time: "الساعة 1", task: "تجهيز WooCommerce", detail: "تسطيب المكونات وتخصيص هيكل المتجر (الرئيسية، التصنيفات)." },
        { time: "ساعة 2-3", task: "إدارة المنتجات", detail: "إدخال منتجات متغيرة وبناء تصفية متقدمة (Product Filters)." },
        { time: "الساعة 4", task: "دورة البيع (Checkout)", detail: "تصميم صفحة الدفع لتقليل معدل الهجر وتفعيل كوبونات الخصم." },
        { time: "الساعة 5", task: "بوابات الدفع", detail: "تفعيل Stripe/PayPal لتجربة دورة شراء فعلية كاملة." }
      ]
    },
    { 
      id: "07", 
      title: "المشروع الثالث: المنصة التعليمية LMS", 
      detail: "أكاديمية رقمية بشهادات آلية ونظام متابعة طلاب", 
      exampleUrl: "https://www.wp101.com/",
      exampleName: "WP101 (LMS Academy)",
      timeline: [
        { time: "ساعة 1-2", task: "تأسيس الـ LMS", detail: "العمل مع Tutor LMS وبناء لوحات تحكم للطلاب والمعلمين." },
        { time: "الساعة 3", task: "إنشاء المحتوى التعليمي", detail: "استخدام الـ AI لإنشاء محاور دورة كاملة بنظام الدروس." },
        { time: "الساعة 4", task: "نظام الشهادات الآلي", detail: "تخصيص توليد شهادات PDF ديناميكية تلقائياً." },
        { time: "الساعة 5", task: "ربط الدفع بالدورة", detail: "دمج المنصة مع WooCommerce لفتح الدورة بعد الدفع." }
      ]
    },
    { 
      id: "08", 
      title: "المشروع الرابع: نظام الحجوزات السحابي Booking", 
      detail: "بناء واجهة حجوزات عيادات أو مراكز احترافية", 
      exampleUrl: "https://acumenlaw.ca/",
      exampleName: "Acumen Law (Booking System)",
      timeline: [
        { time: "ساعة 1-2", task: "محرك الحجوزات", detail: "بناء واجهة Calendar وتخصيص أوقات الدوام برمجياً." },
        { time: "الساعة 3", task: "تسلسل الحجز البرمجي", detail: "اختيار الطبيب ← اختيار الخدمة ← إصدار فاتورة آلية." },
        { time: "الساعة 4", task: "الختام وضبط الأداء", detail: "مراجعة أداء المشاريع الـ 4 وإنهاء توثيق الـ Source Code." },
        { time: "الساعة 5", task: "🎉 احتفال التخرج", detail: "رفع البورتفوليو النهائي على GitHub وتدشين مسارك المهني." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-4 z-10">
        <div className="max-w-7xl mx-auto space-y-20">
           <div className="text-center space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-xs uppercase tracking-[0.2em]"
              >
                <div className="size-2 bg-primary rounded-full animate-ping" />
                Live 100% - Bootcamp 2025
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="space-y-6"
              >
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.95] text-balance">
                  <span className="bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent italic">WP</span>{" "}
                  <span className="relative">
                    Bootcamp
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "100%" }}
                       transition={{ delay: 0.5, duration: 1 }}
                       className="absolute -bottom-2 left-0 h-2 bg-primary/40 rounded-full blur-sm"
                    />
                  </span>
                </h1>
                <p className="text-2xl md:text-4xl text-muted-foreground font-black max-w-4xl mx-auto leading-tight italic">
                   ثورة الذكاء الاصطناعي في الووردبريس <br/>
                   <span className="text-foreground">احترف العمل الحر في 8 حصص فقط</span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsWhatsappModalOpen(true)}
                  className="px-12 py-7 bg-primary text-black font-black text-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,255,136,0.3)] hover:shadow-[0_20px_80px_rgba(0,255,136,0.5)] transition-all flex items-center gap-4 group"
                >
                  <RocketIcon className="size-8 group-hover:rotate-12 transition-transform" />
                  انضم للثورة الآن
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="#curriculum"
                  className="px-12 py-7 bg-secondary/50 backdrop-blur-xl border border-white/10 text-foreground font-black text-2xl rounded-3xl hover:bg-secondary transition-all flex items-center gap-4"
                >
                  <BookOpen className="size-8" />
                  تصفح المنهج
                </motion.a>
              </motion.div>
           </div>

           {/* HERO IMAGE */}
           <motion.div 
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, rotateX: 20, y: 100 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative aspect-video w-full rounded-[60px] overflow-hidden border-8 border-white/5 shadow-2xl group"
           >
              <Image 
                src="/wordpress.png" 
                fill 
                alt="WP Bootcamp Banner" 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-6 bg-background/40 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                    <Users size={24} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black tracking-tighter">20 شخص فقط</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">سعة الجروب الواحدة</p>
                  </div>
                </div>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-40 px-4 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { title: "قوة الـ AI", desc: "استخدم Cursor و ChatGPT لتنجز عمل أسبوع في ساعات.", icon: <Cpu className="text-primary" />, color: "border-primary/20" },
            { title: "سوق العمل", desc: "مشاريع حقيقية تحاكي طلبات العملاء في Upwork و Mostaql.", icon: <Globe className="text-blue-500" />, color: "border-blue-500/20" },
            { title: "بناء الأنظمة", desc: "تعلم بناء منصات LMS ومتاجر ونماذج حجوزات معقدة.", icon: <Layout className="text-purple-500" />, color: "border-purple-500/20" },
            { title: "احتراف الكود", desc: "افهم كيف يعمل الووردبريس برمجياً لتخصيص كل شيء.", icon: <Code2 className="text-orange-500" />, color: "border-orange-500/20" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover="hover"
              variants={{ ...fadeInUp, ...cardHover }}
              className={`p-10 bg-card/50 backdrop-blur-xl border ${item.color} rounded-[48px] space-y-6 relative overflow-hidden group`}
            >
              <div className="size-20 bg-muted rounded-3xl flex items-center justify-center text-4xl shadow-xl group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black">{item.title}</h3>
              <p className="text-lg text-muted-foreground font-bold leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TIMELINE CURRICULUM */}
      <section id="curriculum" className="py-40 px-4 relative">
        <div className="absolute inset-0 bg-primary/[0.02] -skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
           <motion.div 
             {...fadeInUp}
             className="text-center space-y-6"
           >
              <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none">
                خارطة الطريق <br/> <span className="text-primary">بالدقيقة</span>
              </h2>
              <p className="text-2xl text-muted-foreground font-bold italic">كل حصة هي رحلة 5 ساعات من العمل المتواصل</p>
           </motion.div>

           <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}
             className="space-y-6"
           >
              {curriculum.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`border border-border rounded-[48px] overflow-hidden transition-all ${activeSession === idx ? "bg-card shadow-2xl ring-2 ring-primary/30" : "bg-background/40 hover:bg-card/30"}`}
                >
                  <button 
                    onClick={() => setActiveSession(activeSession === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-10 text-right"
                  >
                    <div className="flex items-center gap-8">
                      <span className={`text-5xl font-black italic transition-colors ${activeSession === idx ? "text-primary" : "text-muted-foreground/20"}`}>{item.id}</span>
                      <div className="space-y-2 text-right">
                        <h4 className="text-2xl md:text-4xl font-black">{item.title}</h4>
                        <p className="text-lg font-bold text-muted-foreground italic">{item.detail}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: activeSession === idx ? 180 : 0 }}
                      className="size-12 rounded-full bg-muted flex items-center justify-center text-primary"
                    >
                      <ChevronDown className="size-8" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeSession === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden bg-muted/20"
                      >
                        <div className="p-10 space-y-12">
                          {/* INSPIRATION LINK */}
                          {item.exampleUrl && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-6 bg-primary/10 border border-primary/20 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
                            >
                               <div className="flex items-center gap-4 text-right">
                                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                                    <ExternalLink className="text-black size-6" />
                                  </div>
                                  <div>
                                    <h6 className="text-lg font-black italic">أمثلة لمشاريع حقيقية مشابهة</h6>
                                    <p className="text-sm font-bold text-muted-foreground italic tracking-tight">شاهد المستوى الذي سنصل إليه (موقع {item.exampleName})</p>
                                  </div>
                               </div>
                               <a 
                                 href={item.exampleUrl} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="px-8 py-3 bg-primary text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all"
                               >
                                 مشاهدة المثال الحي
                               </a>
                            </motion.div>
                          )}

                          {item.timeline.map((point, i) => (
                            <motion.div 
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              key={i} 
                              className="relative pr-12 group/item"
                            >
                               {/* Timeline Line */}
                               {i !== item.timeline.length - 1 && (
                                 <div className="absolute top-10 right-[19px] bottom-[-40px] w-[2px] bg-border group-hover/item:bg-primary/40 transition-colors" />
                               )}
                               
                               {/* Icon/Dot */}
                               <div className="absolute top-0 right-0 size-10 bg-card border-2 border-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.2)] z-10">
                                 <Timer size={18} className="text-primary" />
                               </div>

                               <div className="space-y-3">
                                 <div className="flex items-center gap-4">
                                   <span className="px-4 py-1 bg-primary text-black font-black text-xs rounded-full uppercase tracking-widest">{point.time}</span>
                                   <h5 className="text-2xl font-black italic">{point.task}</h5>
                                 </div>
                                 <p className="text-lg text-muted-foreground font-bold italic leading-relaxed">{point.detail}</p>
                               </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-40 px-4 max-w-7xl mx-auto space-y-24">
         <motion.div {...fadeInUp} className="text-center space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-balance">استثمر في نفسك</h2>
            <p className="text-2xl text-muted-foreground font-bold italic">اختر الباقة التي ستغير مسارك المهني للأبد</p>
         </motion.div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Standard Package */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="p-16 bg-card border border-border rounded-[60px] space-y-12 relative overflow-hidden group shadow-xl"
            >
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center">
                        <Star className="text-yellow-500 fill-current size-6" />
                     </div>
                     <h3 className="text-4xl font-black">الباقة الأساسية</h3>
                  </div>
                  <div className="flex items-baseline gap-3">
                     <span className="text-8xl font-black text-foreground tracking-tighter">2,200</span>
                     <span className="text-2xl font-bold text-muted-foreground">ج.م</span>
                  </div>
               </div>

               <div className="space-y-6">
                  {[
                    "8 حصص لايف مكثفة (+40 ساعة)",
                    "بناء 4 مشاريع عملاقة كاملة",
                    "تعلم أدوات الـ AI (Cursor/ChatGPT)",
                    "توثيق احترافي على GitHub لكل مشروع",
                    "دعم واتساب أثناء فترة المعسكر",
                    "شهادة إتمام معسكر WP الاحترافي"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-5 text-xl font-bold text-muted-foreground italic">
                      <div className="size-3 bg-primary/40 rounded-full" />
                      {f}
                    </div>
                  ))}
               </div>

               <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsWhatsappModalOpen(true)}
                className="w-full py-8 bg-secondary text-foreground font-black text-2xl rounded-[32px] hover:bg-primary hover:text-black transition-all shadow-lg"
               >
                 ابدأ بالباقة الأساسية
               </motion.button>
            </motion.div>

            {/* VIP Package */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="p-16 bg-black text-white border-4 border-primary rounded-[60px] space-y-12 relative overflow-hidden shadow-[0_0_80px_rgba(0,255,136,0.2)]"
            >
               <div className="absolute top-0 right-0 px-10 py-4 bg-primary text-black font-black text-lg rounded-bl-[40px] uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={20} />
                  Recommended
               </div>
               
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="size-14 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                        <Crown className="text-black size-8 fill-current" />
                     </div>
                     <h3 className="text-4xl font-black text-white">باقة VIP الملكية</h3>
                  </div>
                  <div className="flex items-baseline gap-3">
                     <span className="text-8xl font-black text-primary tracking-tighter">5,000</span>
                     <span className="text-2xl font-bold text-primary/60">ج.م</span>
                  </div>
                  <p className="text-xl font-bold text-slate-400 italic">متابعة شخصية يومية لأقصى استفادة</p>
               </div>

               <div className="space-y-6">
                  <p className="text-primary font-black text-2xl italic">كل مميزات الأساسية +</p>
                  {[
                    "مراجعة شخصية (1-on-1) للبورتفوليو",
                    "دعم فني خاص لمدة شهر بعد المعسكر",
                    "مكتبة الأكواد الجاهزة (Custom Snippets)",
                    "ملف البرومبتات السرية (AI Prompts)",
                    "أولوية في ترشيحك لمشاريع خارجية"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-5 text-xl font-bold text-slate-200 italic">
                      <div className="size-3 bg-primary rounded-full shadow-[0_0_10px_#00FF88]" />
                      {f}
                    </div>
                  ))}
               </div>

               <motion.button 
                whileHover={{ scale: 1.02, shadow: "0 0 30px #00FF88" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsWhatsappModalOpen(true)}
                className="w-full py-8 bg-primary text-black font-black text-3xl rounded-[32px] transition-all shadow-[0_20px_40px_rgba(0,255,136,0.3)]"
               >
                 احجز مقعد VIP الآن
               </motion.button>
            </motion.div>
         </div>
      </section>

      {/* INSTRUCTOR SECTION */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center bg-card/30 backdrop-blur-3xl border border-white/5 p-12 md:p-24 rounded-[80px] relative shadow-2xl"
          >
            <div className="lg:col-span-5 relative">
               <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
               <motion.div 
                 whileHover={{ rotate: -2, scale: 1.02 }}
                 className="relative aspect-square w-full rounded-[60px] overflow-hidden border-4 border-primary shadow-2xl"
               >
                 <Image 
                    src="/Untitled design.png" 
                    fill 
                    alt="Zeyad Shalaby" 
                    className="object-cover"
                 />
               </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-10 text-right">
              <div className="space-y-4">
                <motion.span 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-4 py-2 bg-primary/10 text-primary font-black rounded-lg text-sm tracking-widest uppercase"
                >
                  Instructor & Leader
                </motion.span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">زياد شلبي 👋</h2>
                <p className="text-3xl font-black text-muted-foreground italic">Full-Stack Software Engineer</p>
              </div>

              <div className="space-y-6">
                <p className="text-2xl font-bold text-slate-400 leading-relaxed italic">
                  "مهمتي ليست تلقينك الكود، بل اختصار سنوات من التخبط والأخطاء، ووضعك على المسار المباشر والصحيح للاحتراف وجني الأرباح التقنية."
                </p>
                
                <div className="flex flex-wrap justify-end gap-6 pt-10">
                   <div className="flex items-center gap-4 px-8 py-4 bg-background/50 rounded-3xl border border-white/5">
                      <Rocket className="text-primary size-8" />
                      <span className="text-xl font-black italic">Go, Next.js Expert</span>
                   </div>
                   <div className="flex items-center gap-4 px-8 py-4 bg-background/50 rounded-3xl border border-white/5">
                      <Zap className="text-primary size-8" />
                      <span className="text-xl font-black italic">AI Architecture</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-end gap-6 pt-10">
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="https://wa.me/201026097345" 
                    className="px-10 py-5 bg-[#25D366] text-white font-black text-xl rounded-2xl flex items-center gap-3 shadow-xl"
                  >
                    تواصل واتساب
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="mailto:me@zeyadshalaby.cloud" 
                    className="px-10 py-5 bg-white text-black font-black text-xl rounded-2xl flex items-center gap-3 shadow-xl"
                  >
                    البريد الإلكتروني
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-40 px-4 text-center">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto space-y-12"
         >
            <div className="size-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto shadow-2xl relative">
              <ShieldCheck className="text-primary size-16" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary rounded-full"
              />
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter">ضمان النجاح</h2>
            <p className="text-2xl md:text-4xl font-bold text-muted-foreground leading-tight italic">
              ثقتي في المحتوى بلا حدود.. <br/>
              <span className="text-foreground">استرجع استثمارك بالكامل خلال أول حصتين إذا لم تجد القيمة التي تتوقعها.</span>
            </p>
         </motion.div>
      </section>

      <WhatsappModal 
        isOpen={isWhatsappModalOpen} 
        onClose={() => setIsWhatsappModalOpen(false)} 
        courseTitle="WP AI Bootcamp (Live Revolution)"
      />

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}</style>

    </main>
  );
}
