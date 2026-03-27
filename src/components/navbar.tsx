import MobileMenu from "./mobileMenu";

export default function Navbar() {
  return (
    <nav
      className="
        w-full fixed top-0 left-0 z-50
        bg-[#0F172A]/5 backdrop-blur-md
        border-b border-black/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-end relative">
        {/* Desktop menu (center) */}
        <ul className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          <li>
            <a
              href="#home"
              className="text-white hover:text-slate-300 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-slate-300 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-slate-300 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-slate-300 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu (tetap kanan) */}
        <MobileMenu />
      </div>
    </nav>
  );
}
