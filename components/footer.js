"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ripple } from "@/components/ui/ripple";

export default function Footer() {
  return (
    <motion.footer 
      className="relative w-full py-20 overflow-hidden border-t border-border bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      {/* Ripple Background */}
      <Ripple className="opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16">
        {/* Brand Section */}
        <motion.div 
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center gap-4">
              <motion.div 
                className="relative w-14 h-14 bg-secondary rounded-2xl border border-border flex items-center justify-center p-2 shadow-inner"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/gemini-svg.svg"
                  alt="Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <motion.span 
                  className="text-2xl font-black tracking-tighter text-foreground"
                  whileHover={{ color: "rgb(0, 255, 136)" }}
                  transition={{ duration: 0.3 }}
                >زياد شلبي</motion.span>
                <span className="text-xs text-primary font-bold uppercase tracking-widest">مطور برمجيات متكامل</span>
              </div>
            </Link>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-md font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            أبني الحلول الرقمية من الفكرة الأولية حتى الإطلاق النهائي، مع أنظمة خلفية قوية وواجهات أمامية احترافية.
          </motion.p>
          <motion.div 
            className="flex items-center gap-5 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SocialLink href="https://www.facebook.com/zeyad.haytham.abass" label="Facebook" icon={
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
} />
            <SocialLink href="https://www.linkedin.com/in/zeyad-shalaby-537959400/" label="LinkedIn" icon={
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
} />
            <SocialLink href="https://www.youtube.com/@ZeyadShalaby1" label="YouTube" icon={
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
} />
            <SocialLink href="https://github.com/zeyadshalaby1" label="GitHub" icon={
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
} />
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h4 
            className="text-xl font-black text-foreground mb-8"
            whileHover={{ color: "rgb(0, 255, 136)" }}
            transition={{ duration: 0.3 }}
          >روابط سريعة</motion.h4>
          <ul className="space-y-4">
            <FooterLink href="#home">الرئيسية</FooterLink>
            <FooterLink href="#projects">المشاريع</FooterLink>
            <FooterLink href="#skills">المهارات</FooterLink>
            <FooterLink href="#contact">تواصل معي</FooterLink>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h4 
            className="text-xl font-black text-foreground mb-8"
            whileHover={{ color: "rgb(0, 255, 136)" }}
            transition={{ duration: 0.3 }}
          >تواصل</motion.h4>
          <ul className="space-y-4">
            <motion.li 
              className="text-muted-foreground font-bold"
              whileHover={{ x: 5, color: "rgb(0, 255, 136)" }}
              transition={{ duration: 0.3 }}
            >me@zeyadshalaby.cloud</motion.li>
            <motion.li 
              className="text-muted-foreground font-bold"
              whileHover={{ x: 5, color: "rgb(0, 255, 136)" }}
              transition={{ duration: 0.3 }}
            >+20 102 609 7345</motion.li>
            <motion.li 
              className="text-muted-foreground font-bold"
              whileHover={{ x: 5, color: "rgb(0, 255, 136)" }}
              transition={{ duration: 0.3 }}
            >القاهرة، مصر</motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.p 
          className="text-muted-foreground font-bold text-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          © {new Date().getFullYear()} زياد شلبي. جميع الحقوق محفوظة.
        </motion.p>
        <motion.p 
          className="text-muted-foreground text-sm flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          بني بكل <motion.span 
            className="text-primary animate-pulse"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >❤️</motion.span> واحترافية تقنية
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href={href} 
        className="text-muted-foreground hover:text-primary transition-all duration-300 font-bold flex items-center gap-2 group"
      >
        <motion.span 
          className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span 
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >{children}</motion.span>
      </Link>
    </motion.li>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href={href} 
        className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-sm"
        aria-label={label}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      </Link>
    </motion.div>
  );
}
