"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { container, fadeUp } from "@/lib/animations";
import LogoLoop from "@/components/LogoLoop";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiExpress,
  SiGo,
  SiMysql,
  SiPython,
  SiFlutter,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const techLogos = [
  {
    node: <FaGithub className="text-white" />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiJavascript className="text-white" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiHtml5 className="text-white" />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 className="text-white" />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiTailwindcss className="text-white" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiReact className="text-white" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiExpo className="text-white" />,
    title: "Expo",
    href: "https://expo.dev",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiExpress className="text-white" />,
    title: "Express",
    href: "https://expressjs.com",
  },
  {
    node: <SiGo className="text-white" />,
    title: "Golang",
    href: "https://go.dev",
  },
  {
    node: <SiMysql className="text-white" />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiPython className="text-white" />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiFlutter className="text-white" />,
    title: "Flutter",
    href: "https://flutter.dev",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative w-full py-28 scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text */}
        <div className="flex-1">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold text-white"
          >
            Hi, I&apos;m Randu
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#94A3B8] mt-2">
            Software Engineering Student
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#94A3B8] leading-relaxed pt-4"
          >
            Hi, I&apos;m Keola Randu Agasha, a Software Engineering student
            passionate about building modern web applications. I develop web
            experiences using HTML, CSS, JavaScript, and React, and I also have
            experience with Next.js to create responsive and dynamic
            applications. On the backend side, I am learning Golang and SQL,
            which allows me to build solid and efficient server-side
            applications. I also have some experience in mobile app development
            using Flutter and React Expo, and I am exploring Python for various
            projects. I enjoy learning new technologies and improving my skills
            with every project I take on My goal is to create applications that
            are not only functional but also visually appealing. In my free
            time, I enjoy exploring new tech trends, reading, and solving
            challenging problems that push me to think creatively.
          </motion.p>
        </div>

        {/* Image */}
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

      {/* Logo loop */}
      <div className="mt-20 relative px-35 h-50 overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology stack"
        />
      </div>
    </motion.section>
  );
}
