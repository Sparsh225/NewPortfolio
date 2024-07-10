"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-10 w-[80%] text-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent  "
      >
        Crafting Excellence in Every Line of Code. My approach blends innovation
        with technical precision to deliver exceptional results.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 95 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" text-white text-center text-lg "
      >
        My professional journey has been defined by a passion for crafting
        innovative solutions and delivering results that make a difference.
      </motion.p>
      <motion.p
        initial={{ opacity: 0.5, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-white text-center text-lg "
      >
        ensuring that every project is both functional and aesthetically
        pleasing.
      </motion.p>

      <motion.p
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-white text-center text-lg md:text-xl lg:text-2xl"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Let’s Connect
        </h2>
        <p className="mt-4">
          Interested in learning more about my experience or exploring
          opportunities for collaboration? <br />
          <a href="#contact" className="text-blue-400 hover:underline">
            Get in Touch
          </a>
        </p>
      </motion.p>
    </LampContainer>
  );
}
