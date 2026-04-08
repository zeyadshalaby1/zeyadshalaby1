"use client";

import {
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
} from "@/components/motion";
import { Code2, Smartphone, Globe, Server, Database, GitBranch, Layers, Terminal, Palette, Cloud } from "lucide-react";

const skills = [
  {
    category: "تطوير الموبايل",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50 border-blue-200",
    bgDark: "dark:bg-blue-950/30 dark:border-blue-800/40",
    items: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 90 },
    ],
  },
  {
    category: "Backend Engineering",
    icon: Server,
    color: "from-teal-500 to-emerald-500",
    bgLight: "bg-teal-50 border-teal-200",
    bgDark: "dark:bg-teal-950/30 dark:border-teal-800/40",
    items: [
      { name: "Go", level: 88 },
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    category: "Frontend Development",
    icon: Globe,
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50 border-violet-200",
    bgDark: "dark:bg-violet-950/30 dark:border-violet-800/40",
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Database & DevOps",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 border-amber-200",
    bgDark: "dark:bg-amber-950/30 dark:border-amber-800/40",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Docker", level: 82 },
      { name: "Git", level: 92 },
    ],
  },
];

const timeline = [
  {
    year: "2026 - الآن",
    title: "مؤسس منصة أُفُق",
    desc: "بناء منصة تعليمية متكاملة للمدرسين مع نظام حماية فيديوهات متقدم وبنية سحابية على Cloudflare Edge",
    type: "work",
  },
  {
    year: "2024 - 2026",
    title: "مطور Full-Stack فريلانسر",
    desc: "تنفيذ أكثر من 50 مشروع لعملاء من مختلف الصناعات باستخدام Flutter, Go, Next.js, Laravel",
    type: "work",
  },
  {
    year: "2023 - 2024",
    title: "تعلم ذاتي مكثف",
    desc: "إتقان Clean Architecture, SOLID Principles, Microservices, وأنظمة الـ Distributed Systems",
    type: "education",
  },
  {
    year: "2022 - 2023",
    title: "بداية رحلة البرمجة",
    desc: "تعلم أساسيات البرمجة والـ Web Development وبناء أول مشاريع حقيقية",
    type: "education",
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{level}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-rose-600/5" />
        <motion.div
          className="absolute -right-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-violet-600/8 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl space-y-20">
        {/* About Me Header */}
        <motion.div
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-200"
          >
            <Code2 className="h-4 w-4" />
            تعرف عليّ
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl font-bold text-zinc-950 dark:text-white sm:text-5xl"
          >
            مطور بيحب يبني حاجات{" "}
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
              تفرق فعلاً
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mx-auto max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300"
          >
            متخصص في بناء تطبيقات محمولة عالية الأداء وأنظمة خلفية قابلة للتوسع. بطبّق Clean Architecture و SOLID Principles في كل مشروع. دايماً بدور على التحديات الجديدة وبحب أتعاون مع فرق طموحة.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIdx}
                className={`rounded-[2rem] border p-8 ${category.bgLight} ${category.bgDark} transition-all duration-300`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={catIdx}
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIdx * 2 + skillIdx}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          className="space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={fadeInUp}
            custom={0}
            className="text-3xl font-bold text-zinc-950 dark:text-white text-center"
          >
            📌 رحلتي المهنية
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-violet-500 to-blue-500 md:right-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`relative flex items-start gap-6 ${idx % 2 === 0 ? "md:flex-row-reverse md:text-left" : ""}`}
                  variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                  custom={idx}
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute right-4 md:right-1/2 md:-translate-x-1/2 z-10 h-4 w-4 rounded-full border-4 border-white dark:border-zinc-950 bg-gradient-to-r from-red-500 to-rose-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, type: "spring" }}
                  />

                  {/* Content */}
                  <div className={`mr-12 md:mr-0 ${idx % 2 === 0 ? "md:ml-[52%]" : "md:mr-[52%]"} md:w-[45%]`}>
                    <motion.div
                      className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg dark:border-zinc-700/70 dark:bg-zinc-900/80 hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.type === "work" ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300" : "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"}`}>
                          {item.type === "work" ? "💼 عمل" : "📚 تعلم"}
                        </span>
                        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-zinc-950 dark:text-white">{item.title}</h4>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
