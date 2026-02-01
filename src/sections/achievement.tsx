"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "../components/SpotlightCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const achievements = [
  {
    title: "Lomba Web Design Universitas Harekat Negeri",
    desc: "Participation in the web design competition at the state university of Harekat",
    year: "2025",
    image: "/images/webdesignhmpti.jpg",
  },
  {
    title: "Lomba UI/UX Design UIN",
    desc: "Participation in the UI/UX design competition at Sunan Kalijaga State Islamic University, Yogyakarta",
    year: "2025",
    image: "/images/uiuxdesignuin.jpg",
  },
  {
    title: "Sertifikat Peserta Kelas Investasi Saham",
    desc: "Participation in stock investment classes at Islamic universities in Indonesia",
    year: "2025",
    image: "/images/investsahamuii.jpg",
  },
  {
    title: "Sertifikat Peserta Kelas Investasi Crypto",
    desc: "Participation in cryptocurrency investment classes at Islamic universities in Indonesia",
    year: "2025",
    image: "/images/investcryptouii.jpg",
  },
  {
    title: "Sertifikat Peserta Workshop Technopreneur",
    desc: "Participation in the technopreneur workshop at Padjajaran University (UNPAD)",
    year: "2025",
    image: "/images/technopreneur.png",
  },
];

export default function Achievement() {
  return (
    <section
      id="achievement"
      className="relative w-full py-28 md:py-32 scroll-mt-[80px]"
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 text-center mb-14 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          My <span className="text-blue-400">Achievements</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto">
          A few milestones that reflect my journey and growth.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <SpotlightCard
              className="h-full"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i === 0}
                />
              </div>

              <span className="text-blue-400 text-sm font-medium">
                {item.year}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
