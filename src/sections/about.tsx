"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { container, fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative w-full py-28"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.4,
      }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Kiri: Teks */}
        <div className="flex-1 text-left">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold text-white"
          >
            Hi, I'm Randu
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#94A3B8] mt-2">
            Software Engineering Student
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] leading-relaxed pt-4"
          >
            Hi, I'm Keola Randu Agasha, a Software Engineering student passionate about
            building modern web applications. I develop web experiences using
            HTML, CSS, JavaScript, and React, and I also have experience with
            Next.js to create responsive and dynamic applications. On the
            backend side, I am learning Golang and SQL, which allows me to build
            solid and efficient server-side applications. I also have some
            experience in mobile app development using Flutter and React Expo,
            and I am exploring Python for various projects. I enjoy learning new
            technologies and improving my skills with every project I take on
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] leading-relaxed mt-2"
          >
            My goal is to create applications that are not only functional but
            also visually appealing. In my free time, I enjoy exploring new tech
            trends, reading, and solving challenging problems that push me to
            think creatively.
          </motion.p>

          <motion.div
            variants={container}
            className="flex justify-start gap-3 flex-wrap pt-6"
          >
            {["UI/UX", "Frontend", "Backend", "Mobile App"].map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Kanan: Image */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm h-80 md:h-96">
            <Image
              src="/images/pf.jpg"
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
