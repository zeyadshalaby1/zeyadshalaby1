"use client";

import { motion } from "framer-motion";

export function SkeletonCard({ className = "" }) {
  return (
    <motion.div 
      className={`bg-card border border-border rounded-[40px] overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-video bg-muted/20 animate-pulse" />
      <div className="p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-20 h-6 bg-muted/30 rounded-md animate-pulse" />
          <div className="w-16 h-4 bg-muted/20 rounded animate-pulse" />
        </div>
        <div className="w-3/4 h-8 bg-muted/30 rounded-md animate-pulse" />
        <div className="w-full h-16 bg-muted/20 rounded-md animate-pulse" />
        <div className="flex gap-2">
          <div className="w-16 h-5 bg-muted/20 rounded-md animate-pulse" />
          <div className="w-20 h-5 bg-muted/20 rounded-md animate-pulse" />
          <div className="w-24 h-5 bg-muted/20 rounded-md animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-muted/20 rounded animate-pulse"
          style={{ 
            height: `${Math.random() * 20 + 10}px`,
            width: `${Math.random() * 40 + 60}%`
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

export function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <div className={`w-full h-full border-2 border-primary/20 border-t-primary rounded-full`} />
    </motion.div>
  );
}

export function PageLoader() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center space-y-8">
        <LoadingSpinner size="xl" />
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-black text-foreground">جاري التحميل...</h2>
          <p className="text-muted-foreground font-bold">يتم تجهيز المحتوى المتطور</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AnimatedButton({ children, loading = false, ...props }) {
  return (
    <motion.button
      {...props}
      className={`relative overflow-hidden transition-all ${props.className || ""}`}
      whileHover={{ scale: loading ? 1 : 1.05 }}
      whileTap={{ scale: loading ? 1 : 0.95 }}
      disabled={loading}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={loading ? { translateX: "100%" } : {}}
        transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && <LoadingSpinner size="sm" />}
        {children}
      </span>
    </motion.button>
  );
}
