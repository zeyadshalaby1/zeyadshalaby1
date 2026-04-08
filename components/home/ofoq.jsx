"use client";

import { ArrowUpRight } from "lucide-react";
import {
  motion,
  MotionDiv,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
} from "@/components/motion";

export function OfoqSection() {
  const features = [
    {
      title: "أمان غير قابل للاختراق",
      desc: "التشفير وتقييد الأجهزة هما الأساس المحوري",
      icon: "🔐",
    },
    {
      title: "معمارية سحابية ذكية",
      desc: "Cloudflare Edge لتسليم الفيديو بسرعة لحظية",
      icon: "⚡",
    },
    {
      title: "شراكة حقيقية",
      desc: "5 جيجا مجاناً ونظام عمولات مرن",
      icon: "🤝",
    },
  ];

  return (
    <section id="ofoq" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5" />
        <motion.div
          className="absolute -left-1/3 top-1/3 h-2/3 w-2/3 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl space-y-20">
        {/* Story */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeInLeft}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200"
            >
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-blue-600"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              🚀 منصة أُفُق
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInLeft} custom={1}>
              <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                منصة للمدرسين{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  بلا قيود
                </motion.span>
              </h2>

              <motion.p
                className="text-lg leading-8 text-zinc-600 dark:text-zinc-300"
                variants={fadeInLeft}
                custom={2}
              >
                قُلت لنفسي: &quot;لازم يبقى فيه حاجة أحسن.&quot;
              </motion.p>

              <motion.div className="space-y-4 text-zinc-700 dark:text-zinc-400" variants={fadeInLeft} custom={3}>
                <p>
                  شفت مدرسين بيدفعوا آلاف على منصات مضروبة. شفت فيديوهات بتتسرق في نفس اليوم. شفت ناس بتدفع إيجار سيرفر كل شهر حتى لو مفيش طالب واحد.
                </p>
                <motion.p
                  className="font-semibold text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  فبنيت أُفُق.
                </motion.p>
              </motion.div>

              <motion.div
                className="space-y-3 border-l-4 border-blue-600 pl-6"
                variants={fadeInLeft}
                custom={4}
              >
                <p className="text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-400 uppercase">
                  رؤيتنا
                </p>
                <p className="text-zinc-700 dark:text-zinc-400">
                  إن المدرس يدرّس وإحنا نشيل عنه هم الأمان، السرعة، والمجهود التشغيلي. عايزينه يركز في طلابه ومحتواه — وهو عارف إن مجهوده في أمان.
                </p>
              </motion.div>
            </motion.div>

            <motion.a
              href="https://ofoq.site"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 duration-300"
              variants={fadeInLeft}
              custom={5}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              زيارة أُفُق
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              className="text-2xl font-bold text-zinc-950 dark:text-white"
              variants={fadeInRight}
              custom={0}
            >
              مميزات أساسية
            </motion.h3>

            <div className="grid gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-[1.5rem] border border-blue-200/50 bg-blue-50/50 p-6 dark:border-blue-500/20 dark:bg-blue-950/20 cursor-default"
                  variants={fadeInRight}
                  custom={idx + 1}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="text-3xl"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.span>
                    <div>
                      <h4 className="font-bold text-zinc-950 dark:text-white">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-3xl font-bold text-zinc-950 dark:text-white"
            variants={fadeInUp}
            custom={0}
          >
            جاهز تشوف الفرق بنفسك؟
          </motion.h3>
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            variants={fadeInUp}
            custom={1}
          >
            ابدأ بـ 5 جيجا مجاناً، وادفع بس لما تشتغل فعلاً. مفيش مخاطرة.
          </motion.p>
          <motion.a
            href="https://ofoq.site"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-sm font-semibold text-white transition hover:shadow-xl hover:shadow-blue-500/30 duration-300"
            variants={fadeInUp}
            custom={2}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            ابدأ الآن مع أُفُق
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
