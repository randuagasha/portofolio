import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Keola Randu Agasha<span className="text-indigo-500">.</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              Personal portfolio website showcasing projects, experiments, and
              ideas about web development & design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="transition text-[#94A3B8] hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition text-[#94A3B8] hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition text-[#94A3B8] hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition text-[#94A3B8] hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Social
            </h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/randuagasha"
                target="_blank"
                className="text-neutral-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/randuagasha"
                target="_blank"
                className="text-neutral-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/randuagasha"
                target="_blank"
                className="text-neutral-400 hover:text-white transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex items-center justify-center w-full text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Randu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
