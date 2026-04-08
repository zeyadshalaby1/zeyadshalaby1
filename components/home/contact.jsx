"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Mail, User, MessageSquare } from "lucide-react";
import {
  motion,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/components/motion";
import { supabase } from "@/lib/supabase";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        ]);

      if (error) {
        console.error("Supabase error:", error);
        setStatus("error");
        setErrorMsg("حدث خطأ أثناء إرسال الرسالة. حاول مرة تانية.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
      setErrorMsg("حدث خطأ غير متوقع. حاول مرة تانية.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-orange-600/5" />
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
            className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-500/15 dark:text-red-200"
          >
            <Mail className="h-4 w-4" />
            تواصل معي
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl font-bold text-zinc-950 dark:text-white sm:text-5xl"
          >
            هل تريد بدء مشروعك القادم{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              معي؟
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            ابعتلي رسالة وهرد عليك في أقرب وقت. أو تواصل معي مباشرة عبر واتساب أو الإيميل.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] border border-zinc-200/80 bg-white/90 p-8 md:p-10 shadow-2xl dark:border-zinc-700/70 dark:bg-zinc-900/80 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                <User className="h-4 w-4" />
                الاسم الكامل
              </label>
              <motion.input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="أحمد محمد"
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-red-400 transition-all duration-300"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                البريد الإلكتروني
              </label>
              <motion.input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ahmed@example.com"
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-red-400 transition-all duration-300"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                رسالتك
              </label>
              <motion.textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="اكتب رسالتك هنا..."
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-red-400 transition-all duration-300 resize-none"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full rounded-xl px-6 py-4 text-sm font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                status === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gradient-to-r from-red-600 to-rose-500 hover:shadow-xl hover:shadow-red-500/30"
              } disabled:opacity-70`}
              whileHover={status === "idle" ? { scale: 1.02, y: -2 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
            >
              {status === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
              {status === "success" && <CheckCircle2 className="h-5 w-5" />}
              {status === "idle" && <Send className="h-5 w-5" />}
              {status === "error" && <Send className="h-5 w-5" />}
              {status === "loading" ? "جاري الإرسال..." : status === "success" ? "تم الإرسال بنجاح! ✅" : status === "error" ? "حاول مرة تانية" : "إرسال الرسالة"}
            </motion.button>

            {errorMsg && (
              <motion.p
                className="text-sm text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errorMsg}
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "💬",
                title: "واتساب",
                desc: "الرد خلال ساعة",
                link: "https://wa.me/201026097345",
                linkText: "01026097345",
                color: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/40",
              },
              {
                icon: "📧",
                title: "بريد إلكتروني",
                desc: "الرد خلال 24 ساعة",
                link: "mailto:me@zeyadshalaby.cloud",
                linkText: "me@zeyadshalaby.cloud",
                color: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800/40",
              },
              {
                icon: "🔗",
                title: "لينكد إن",
                desc: "تواصل مهني",
                link: "https://www.linkedin.com/in/zeyad-shalaby-537959400/",
                linkText: "Zeyad Shalaby",
                color: "bg-sky-50 border-sky-200 dark:bg-sky-950/30 dark:border-sky-800/40",
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className={`block rounded-2xl border p-6 ${contact.color} transition-all duration-300`}
                variants={fadeInRight}
                custom={idx}
                whileHover={{ x: -6, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{contact.icon}</span>
                  <div>
                    <h4 className="font-bold text-zinc-950 dark:text-white">{contact.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{contact.desc}</p>
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mt-1">{contact.linkText}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
