import Home from "@/sections/home";
import About from "@/sections/about";
import Projects from "@/sections/projects";
import LightRays from "@/components/visuals/lightRays";
import Achievement from "@/sections/achievement";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0F172A] overflow-hidden">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
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

      {/* CONTENT */}
      <div className="relative z-10">
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
