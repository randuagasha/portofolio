"use client";

import { motion } from "framer-motion";
import StarBorder from "@/components/StarBorder";
import { container, fadeUp } from "@/lib/animations";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="relative w-full pt-36 md:pt-44 pb-28 overflow-hidden scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.4,
      }}
      variants={container}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-semibold text-white"
        >
          Hi, I'm Randu
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-3 text-[#94A3B8] text-lg md:text-xl"
        >
          Software Engineering Student
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-[#94A3B8] leading-relaxed"
        >
          I develop modern web experiences that balance functionality and
          aesthetics. Driven by curiosity to learn, build, and improve with
          every project I take on. I have gained solid skills in HTML, CSS,
          JavaScript, React, Next.js, and Flutter, along with a basic
          understanding of MySQL and Golang.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <StarBorder
            as="button"
            color="#60A5FA"
            speed="4s"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </StarBorder>
        </motion.div>
      </div>
    </motion.section>
  );
}
