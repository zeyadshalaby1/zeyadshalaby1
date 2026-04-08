"use client";

import {
  motion,
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/components/motion";
import { Smartphone, Globe, Palette, HeadphonesIcon, Rocket, Code2 } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "تطوير تطبيقات موبايل",
    desc: "تطبيقات iOS و Android بتكنولوجيا Flutter عالية الأداء مع تصميم جذاب وتجربة مستخدم سلسة.",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50/80 border-blue-200/60",
    bgDark: "dark:bg-blue-950/30 dark:border-blue-800/40",
  },
  {
    icon: Globe,
    title: "تطوير مواقع ويب",
    desc: "مواقع ويب متطورة باستخدام Next.js و React مع أداء عالي وتحسينات SEO واستجابة كاملة لكل الأجهزة.",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50/80 border-violet-200/60",
    bgDark: "dark:bg-violet-950/30 dark:border-violet-800/40",
  },
  {
    icon: Palette,
    title: "تصميم واجهات مستخدم",
    desc: "تصميم UI/UX احترافي يجمع بين الجمال والأداء. واجهات بديهية تعزز تجربة المستخدم وتزيد التفاعل.",
    color: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50/80 border-rose-200/60",
    bgDark: "dark:bg-rose-950/30 dark:border-rose-800/40",
  },
  {
    icon: Code2,
    title: "أنظمة Backend متقدمة",
    desc: "بناء APIs و Microservices بـ Go و Laravel مع قواعد بيانات PostgreSQL وأنظمة Cache بـ Redis.",
    color: "from-teal-500 to-emerald-500",
    bgLight: "bg-teal-50/80 border-teal-200/60",
    bgDark: "dark:bg-teal-950/30 dark:border-teal-800/40",
  },
  {
    icon: HeadphonesIcon,
    title: "استشارات تقنية",
    desc: "مراجعة المعمارية التقنية لمشروعك واقتراح أفضل الحلول. تحليل الأداء وتحسين الكود والبنية التحتية.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/80 border-amber-200/60",
    bgDark: "dark:bg-amber-950/30 dark:border-amber-800/40",
  },
  {
    icon: Rocket,
    title: "إطلاق منتجات كاملة (MVP)",
    desc: "من الفكرة للإطلاق! بناء منتج متكامل يشمل التطبيق والـ Backend والداشبورد وربط البوابات المالية.",
    color: "from-red-500 to-rose-500",
    bgLight: "bg-red-50/80 border-red-200/60",
    bgDark: "dark:bg-red-950/30 dark:border-red-800/40",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 via-transparent to-violet-600/5" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-rose-600/10 px-4 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-500/15 dark:text-rose-200"
          >
            <Rocket className="h-4 w-4" />
            خدماتي
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl font-bold text-zinc-950 dark:text-white sm:text-5xl"
          >
            إيه اللي أقدر أعمله{" "}
            <span className="bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
              لمشروعك؟
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            حلول تقنية متكاملة من الفكرة للإطلاق — بجودة عالية وأسعار تنافسية
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className={`group relative rounded-[2rem] border p-8 ${service.bgLight} ${service.bgDark} transition-all duration-300 cursor-default overflow-hidden`}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Hover glow */}
                <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${service.color}`} />

                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
