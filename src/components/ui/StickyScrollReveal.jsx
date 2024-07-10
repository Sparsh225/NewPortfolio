// src/components/ui/StickyScrollReveal.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div ref={ref} className="sticky-scroll-container">
      <div className="sticky-scroll-content">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              "sticky-scroll-card",
              { "active-card": activeCard === index },
              contentClassName
            )}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>{item.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
