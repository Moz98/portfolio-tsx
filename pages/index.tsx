import About from "../Components/About";
import Experience from "../Components/Experience";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>
      {/* Projects */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Experience */}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Contact Me */}
    </div>
  );
}
