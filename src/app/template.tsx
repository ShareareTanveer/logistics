"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { 
    x: "100%", 
    opacity: 0, 
    scale: 1, 
    rotate: 10, 
    transition: { ease: "easeInOut" }
  },
  enter: { 
    x: 0, 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { 
      duration: 0.2, 
      ease: "easeInOut"
    }
  },
  exit: { 
    x: "-100%", 
    opacity: 0, 
    scale: 1, 
    rotate: -10, 
    transition: { 
      duration: 0.2, 
      ease: "easeIn"
    }
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
