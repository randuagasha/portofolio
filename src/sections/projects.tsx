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
    description:
      "UI/UX mobile application design for learning",
    imageUrl: "/images/STARMATE2.png",
    demoUrl: "https://www.figma.com/proto/ju3XV3O5yJfbFMJpkJEnRN/STARMATE-LEARNING?page-id=0%3A1&node-id=695-2310&starting-point-node-id=695%3A2310&t=s4hv5Vc3JupyqsDn-1",
    githubUrl: "",
  },
  {
    title: "Library Management System Web (School Project)",
    description:
      "Library management website using NextJS and MySQL for the database, I made this for a school project assignment",
    imageUrl: "/images/library.png",
    demoUrl: "https://librarywebaas.vercel.app/",
    githubUrl: "https://github.com/randuagasha/library-web-aas",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative w-full py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={container}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Best <span className="text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-3 text-[#94A3B8] max-w-2xl mx-auto"
        >
          A showcase of the projects that highlight my skills and creativity.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-5"
          >
            {/* Image */}
            {project.imageUrl && (
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 group">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            )}

            {/* Content */}
            <h3 className="text-white font-semibold text-lg mb-2">
              {project.title}
            </h3>

            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
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
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
