"use client";

import Image from "next/image";
import SpotlightCard from "../components/SpotlightCard";

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
    <section className="relative w-full py-32">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          My <span className="text-blue-400">Achievements</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto">
          A few milestones that reflect my journey and growth.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, i) => (
          <SpotlightCard
            key={i}
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            {/* Image */}
            <div className="relative w-full h-55 rounded-xl overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
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
        ))}
      </div>
    </section>
  );
}
