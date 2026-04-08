"use client";

import { useEffect, useState } from "react";
import { Folder, Home, MessageCircle, Phone, User2, BookOpen, Menu, X, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/#about", label: "عنّي", icon: User2 },
  { href: "/#services", label: "خدماتي", icon: Briefcase },
  { href: "/#projects", label: "مشاريع", icon: Folder },
  { href: "/courses", label: "دورات", icon: BookOpen },
  { href: "/#contact", label: "تواصل", icon: MessageCircle },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, Math.round((offset / docHeight) * 100)) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change / scroll
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-200/70 bg-white/95 shadow-2xl shadow-zinc-900/5 dark:border-zinc-800/70 dark:bg-zinc-950/95 backdrop-blur-xl"
            : "bg-white/80 dark:bg-zinc-950/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition dark:text-zinc-100"
          >
            <motion.span
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 text-xl font-black uppercase text-white shadow-lg shadow-red-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Z
            </motion.span>
            <span className="hidden sm:inline">Zeyad Portfolio</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 text-sm font-medium text-zinc-600 transition-colors dark:text-zinc-300 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </motion.a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="https://wa.me/201026097345"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              واتساب
            </a>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 dark:text-zinc-300 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full overflow-hidden bg-zinc-200/50 dark:bg-zinc-800/60">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-rose-500"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white dark:bg-zinc-950 shadow-2xl border-l border-zinc-200 dark:border-zinc-800 md:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-lg font-bold text-zinc-950 dark:text-white">القائمة</span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </motion.button>
              </div>

              {/* Nav Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-4 rounded-2xl px-4 py-4 text-zinc-700 dark:text-zinc-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-300 transition-all duration-200"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-base font-semibold">{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800">
                <motion.a
                  href="https://wa.me/201026097345"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-700 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  تواصل عبر واتساب
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
