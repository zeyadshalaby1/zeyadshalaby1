"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

export function SubscribeModal({ course, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedDetail: course.details[0] || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscribe = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("من فضلك ملئ جميع الحقول");
      return;
    }

    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته 🙏
أنا ${formData.name} وأرغب في الاشتراك في دورة: ${course.title}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}
الموضوع المختار: ${formData.selectedDetail}
من فضلك تواصل معي بأسرع وقت.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/201026097345?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[2rem] border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-950">
        <button
          onClick={onClose}
          className="sticky top-4 float-left mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100/80 text-zinc-600 transition hover:bg-zinc-200 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6 p-6 pt-12">
          <div>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
              {course.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              ملئ البيانات أدناه للاشتراك في الدورة
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                الاسم الكامل
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أحمد محمد"
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 transition focus:border-red-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 transition focus:border-red-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                رقم الهاتف
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01234567890"
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 transition focus:border-red-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                اختر الموضوع المهم لك
              </label>
              <select
                name="selectedDetail"
                value={formData.selectedDetail}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 transition focus:border-red-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              >
                {course.details.map((detail, idx) => (
                  <option key={idx} value={detail}>
                    {detail}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleSubscribe}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
          >
            <Send className="h-4 w-4" />
            أرسل للواتساب
          </button>

          <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-800 dark:bg-red-500/10 dark:text-red-200">
            <p className="font-semibold">معلومة مهمة</p>
            <p className="mt-1">سيتم إرسال طلب الاشتراك الخاص بك مباشرة عبر واتساب لتأكيد وتفعيل الدورة.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
