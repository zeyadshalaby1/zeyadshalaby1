"use client";

import React, { useState, useEffect } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  LayoutDashboard, Home, Briefcase, FileText, 
  Menu, X, Rocket, Moon, Sun 
} from "lucide-react";

export function Navbar() {
  const { isSignedIn, user } = useUser();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / (totalScroll || 1)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "الرئيسية", href: "/", icon: <Home className="size-4" /> },
    { name: "أعمالي", href: "/portfolio", icon: <Briefcase className="size-4" /> },
    { name: "الأكاديمية", href: "/courses", icon: <FileText className="size-4" /> },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-full flex justify-center px-4 pointer-events-none">
      {/* Main Navbar Container */}
      <nav
        className={`
          pointer-events-auto
          relative flex items-center justify-between px-6 md:px-8 py-3 rounded-2xl
          border shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out
          ${isScrolled 
            ? "w-full max-w-[900px] bg-background/95 border-primary/40 translate-y-[-10px] backdrop-blur-xl" 
            : "w-full max-w-[1250px] bg-background/80 border-white/10 backdrop-blur-md"}
        `}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative size-10 flex items-center justify-center rounded-xl bg-black border border-primary/30 overflow-hidden group-hover:shadow-[0_0_15px_#00FF88] transition-all">
             <svg viewBox="0 0 80 80" fill="none" className="size-8">
              <rect x="10" y="10" width="60" height="60" rx="14" fill="#0a1a0a" stroke="#00FF88" strokeWidth="1.5"/>
              <path d="M22 24 L58 24 L22 56 L58 56" stroke="#00FF88" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="58" cy="24" r="5" fill="#00FF88"/>
              <circle cx="22" cy="56" r="5" fill="#7B2FFF"/>
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xs font-black text-foreground leading-none tracking-tight">زياد شلبي</h1>
            <p className="text-[8px] text-primary font-mono tracking-widest uppercase mt-1">DEVELOPER</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-secondary/40 p-1 rounded-xl border border-white/5">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-bold text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all"
            >
              <span className="text-primary">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}

          {/* THE SHINING BUTTON */}
          <Link 
            href="/wp-bootcamp"
            className="relative flex items-center gap-2 px-5 py-2 rounded-lg text-[12px] font-black text-black bg-primary shadow-[0_0_20px_#00FF88] hover:shadow-[0_0_30px_#00FF88] hover:scale-105 transition-all animate-pulse duration-[2000ms] overflow-hidden"
          >
            <Rocket className="size-4 fill-current" />
            <span>معسكر الووردبريس (لايف)</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
          </Link>
        </div>

        {/* User Actions & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-secondary/50 border border-white/5 text-foreground hover:bg-secondary transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="size-4 text-yellow-400" /> : <Moon className="size-4 text-blue-500" />}
          </button>

          {!isSignedIn ? (
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <button className="hidden sm:block text-xs font-bold text-foreground/80 hover:text-foreground transition-colors px-3">دخول</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-xs font-bold bg-foreground text-background px-5 py-2.5 rounded-xl hover:bg-primary hover:text-black transition-all">
                  ابدأ الآن
                </button>
              </SignUpButton>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-secondary/40 pl-1 pr-4 py-1 rounded-xl border border-white/10 transition-colors hover:border-primary/30">
              <div className="hidden md:flex flex-col items-end leading-tight">
                <span className="text-[8px] font-bold text-foreground/30 uppercase">مرحباً</span>
                <span className="text-[11px] font-black text-foreground">{user.firstName || user.username}</span>
              </div>
              <UserButton />
            </div>
          )}
          
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-6 bg-background/95 backdrop-blur-2xl rounded-3xl border border-primary/20 shadow-2xl flex flex-col gap-3 lg:hidden animate-in fade-in zoom-in-95 duration-300">
             <Link 
              href="/wp-bootcamp"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-5 rounded-2xl bg-primary text-black font-black text-lg shadow-[0_0_20px_#00FF88]"
            >
              <span>معسكر الووردبريس (لايف)</span>
              <Rocket className="size-6" />
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 p-4 rounded-2xl text-foreground hover:bg-primary/10 hover:text-primary transition-all text-lg font-black"
              >
                <div className="p-2 bg-secondary/40 rounded-xl text-primary">{link.icon}</div>
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Scroll Line */}
        <div className="absolute -bottom-1 left-10 right-10 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 shadow-[0_0_10px_#00FF88]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
