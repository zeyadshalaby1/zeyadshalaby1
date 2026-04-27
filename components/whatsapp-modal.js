"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, User, Target, Calendar, ChevronDown } from "lucide-react";

export function WhatsappModal({ isOpen, onClose, courseTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    reason: "",
    willBuyNow: "نعم، أريد الاشتراك الآن",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "201026097345";
    const message = `باش مهندس زياد انا ${formData.name}
بخصوص كورس: ${courseTitle}
سبب شراء الكورس: ${formData.reason}
هل هشتري دلوقتي: ${formData.willBuyNow}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000001] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-card border border-border rounded-[40px] shadow-2xl p-8 md:p-12 overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground">طلب اشتراك</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-secondary rounded-2xl transition-all text-muted-foreground"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-3 text-right">
                  <label className="flex items-center justify-end gap-2 text-lg font-black text-foreground/80">
                    <User size={18} className="text-primary" />
                    الاسم بالكامل
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثلاً: محمد أحمد"
                    className="w-full p-5 bg-secondary/50 border border-border rounded-2xl focus:border-primary outline-none text-right font-bold transition-all"
                  />
                </div>

                {/* Reason Field */}
                <div className="space-y-3 text-right">
                  <label className="flex items-center justify-end gap-2 text-lg font-black text-foreground/80">
                    <Target size={18} className="text-primary" />
                    سبب شراء الكورس؟
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="حابب أطور مستوايا في البرمجة..."
                    className="w-full p-5 bg-secondary/50 border border-border rounded-2xl focus:border-primary outline-none text-right font-bold transition-all resize-none"
                  />
                </div>

                {/* Will Buy Now Field */}
                <div className="space-y-3 text-right">
                  <label className="flex items-center justify-end gap-2 text-lg font-black text-foreground/80">
                    <Calendar size={18} className="text-primary" />
                    هل ستشتري الآن؟
                  </label>
                  <div className="relative group">
                    <select
                      value={formData.willBuyNow}
                      onChange={(e) => setFormData({ ...formData, willBuyNow: e.target.value })}
                      className="w-full p-5 bg-secondary/50 border border-border rounded-2xl focus:border-primary outline-none text-right font-bold transition-all appearance-none cursor-pointer"
                    >
                      <option value="نعم، أريد الاشتراك الآن">نعم، أريد الاشتراك الآن</option>
                      <option value="بستفسر وممكن أشتري لاحقاً">بستفسر وممكن أشتري لاحقاً</option>
                      <option value="خلال أيام إن شاء الله">خلال أيام إن شاء الله</option>
                    </select>
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-primary text-primary-foreground rounded-[25px] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                >
                  <Send size={20} />
                  إرسال الطلب عبر واتساب
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
