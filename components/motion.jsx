"use client";

import { motion } from "framer-motion";

// ============================================
// REUSABLE ANIMATION VARIANTS
// ============================================

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseGlow = {
  initial: { boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" },
  animate: {
    boxShadow: [
      "0 0 20px rgba(220, 38, 38, 0.3)",
      "0 0 50px rgba(220, 38, 38, 0.5)",
      "0 0 20px rgba(220, 38, 38, 0.3)",
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// REUSABLE MOTION COMPONENTS
// ============================================

export function MotionDiv({ children, className, variants = fadeInUp, custom = 0, ...props }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={custom}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({ children, className, ...props }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionH1({ children, className, ...props }) {
  return (
    <motion.h1
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      {...props}
    >
      {children}
    </motion.h1>
  );
}

export function MotionH2({ children, className, ...props }) {
  return (
    <motion.h2
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      {...props}
    >
      {children}
    </motion.h2>
  );
}

export function MotionP({ children, className, custom = 2, ...props }) {
  return (
    <motion.p
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      {...props}
    >
      {children}
    </motion.p>
  );
}

// For wrapping server component children with scroll-in animation
export function AnimateOnScroll({ children, className, delay = 0, direction = "up" }) {
  const variants = direction === "up" ? fadeInUp : direction === "left" ? fadeInLeft : direction === "right" ? fadeInRight : fadeInUp;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// Project card wrapper with hover effects
export function ProjectCardMotion({ children, className, index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

// Testimonial card wrapper with hover effects
export function TestimonialCardMotion({ children, className, index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

// Counter animation component
export function CounterMotion({ children, className, index = 0 }) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.div>
  );
}

// Stats grid wrapper 
export function StatsGridMotion({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Export raw motion for custom usage
export { motion };
