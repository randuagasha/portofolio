"use client";

import { motion } from "framer-motion";
import { container, fadeUp } from "@/lib/animations";
import Image from "next/image";

const projects = [
  {
    title: "Cashbhak Cashier Web",
    description:
      "made with next.js with styling using tailwind css, with database from mysql",
    imageUrl: "/images/cashbhak.png",
    demoUrl: "https://cashbhak.vercel.app/",
    githubUrl: "https://github.com/RezaAdityaRamadhan26/CashBhak",
  },
  {
    title: "UI/UX Learning App Mobile",
    description: "UI/UX mobile application design for learning",
    imageUrl: "/images/STARMATE2.png",
    demoUrl:
      "https://www.figma.com/proto/ju3XV3O5yJfbFMJpkJEnRN/STARMATE-LEARNING?page-id=0%3A1&node-id=695-2310&starting-point-node-id=695%3A2310&t=s4hv5Vc3JupyqsDn-1",
    figmaUrl: "https://www.figma.com/design/ju3XV3O5yJfbFMJpkJEnRN/STARMATE-LEARNING?node-id=0-1&t=jXHOB7z95QGZDCtC-1",
  },
  {
    title: "Library Management System Web (School Project)",
    description:
      "Library management website using NextJS and MySQL for the database, I made this for a school project assignment [SORRY ERROR]",
    imageUrl: "/images/library.png",
    demoUrl: "https://librarywebaas.vercel.app/",
    githubUrl: "https://github.com/randuagasha/library-web-aas",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative w-full py-20 sm:py-24 md:py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={container}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-14 md:mb-16">
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
        >
          Best <span className="text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-3 text-[#94A3B8] text-sm sm:text-base max-w-xl mx-auto"
        >
          A showcase of the projects that highlight my skills and creativity.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-2xl  border border-white/10 p-5"
          >
            <div className="flex flex-col h-full">
              {/* Image */}
              {project.imageUrl && (
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 sm:mb-5 group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 from-white/10 to-transparent pointer-events-none" />
                </div>
              )}

              {/* Content */}
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                {project.title}
              </h3>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition"
                  >
                    {project.demoUrl.includes("figma")
                      ? "View Prototype"
                      : "Live Demo"}
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-blue-400/40 text-blue-400 hover:bg-blue-400/10 text-sm transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}