import Home from "@/sections/home";
import About from "@/sections/about";
import Projects from "@/sections/projects";
import LightRays from "@/components/visuals/lightRays";
import Achievement from "@/sections/achievement";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";

export default function Page() {
  return (
    <main className="relative min-h-[100dvh] bg-[#020617] overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none">
        {/* base */}
        <div className="absolute inset-0 bg-[#020617] z-0" />

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#020617]/50 to-[#020617] z-10" />

        {/* LIGHT RAYS — DIPAKSA DI ATAS */}
        <div className="absolute inset-0 z-20">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.8}
            lightSpread={0.6}
            rayLength={2.5}
            followMouse={false}
            fadeDistance={1}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-30">
        <Home />
        <About />
        <Projects />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
