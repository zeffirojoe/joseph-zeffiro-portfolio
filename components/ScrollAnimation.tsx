"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  viewportAmount?: number;
  type?: "fade" | "slide" | "scale" | "stagger";
  className?: string;
}

export function ScrollAnimation({
  children,
  delay = 0,
  duration = 0.6,
  triggerOnce = true,
  viewportAmount = 0.2,
  type = "fade",
  className,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: viewportAmount,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: type === "slide" ? 30 : 0,
      scale: type === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren: type === "stagger" ? 0.1 : 0,
      },
    },
  };

  if (type === "stagger") {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// For use with staggered children
export function ScrollItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
