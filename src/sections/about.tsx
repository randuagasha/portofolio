"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { container, fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative w-full py-20 sm:py-24 md:py-28 scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
        {/* Text */}
        <div className="flex-1">
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
          >
            Hi, I&apos;m Keola Randu Agasha
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] mt-2 text-sm sm:text-base"
          >
            Software Engineering Student
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] leading-relaxed pt-4 text-sm sm:text-base"
          >
            I am a student at Taruna Bhakti Vocational High School in Depok,
            majoring in software engineering. I enjoy creating modern and
            minimalist websites with user experience in mind. I build websites
            using Next.JS, TypeScript, Node.JS, Express.JS, Tailwind CSS, MySQL,
            and Supabase. I am also currently studying Expo in mobile app
            development and have learned to use Flutter. I am also learning
            Golang and Python. I am very excited to expand my skills. My goal is
            to create applications that are not only functional but also
            visually appealing.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm h-64 sm:h-72 md:h-96">
            <Image
              src="/images/me.jpeg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
