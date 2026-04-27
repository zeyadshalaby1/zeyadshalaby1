"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 p-2 rounded-xl bg-secondary/20 border border-border/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative h-10 w-10 flex items-center justify-center rounded-xl transition-all duration-300 active:scale-90 group outline-hidden",
        "bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
        "hover:border-primary/50 hover:shadow-primary/20",
        "overflow-hidden"
      )}
      aria-label="Toggle theme"
    >
      {/* Background glow effects */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-500 blur-xl opacity-0 group-hover:opacity-40",
        isDark ? "bg-indigo-500" : "bg-amber-400"
      )} />

      <div className="relative h-5 w-5">
        <Sun 
          className={cn(
            "h-5 w-5 absolute inset-0 transition-all duration-500",
            "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]",
            isDark 
              ? "-rotate-90 scale-0 opacity-0 blur-[2px]" 
              : "rotate-0 scale-100 opacity-100 blur-0"
          )} 
        />
        <Moon 
          className={cn(
            "h-5 w-5 absolute inset-0 transition-all duration-500",
            "text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]",
            isDark 
              ? "rotate-0 scale-100 opacity-100 blur-0" 
              : "rotate-90 scale-0 opacity-0 blur-[2px]"
          )} 
        />
      </div>

      {/* Subtle star particles for dark mode */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-75" />
          <div className="absolute top-3 left-3 w-px h-px bg-white rounded-full animate-pulse delay-150" />
        </div>
      )}
    </button>
  );
}
