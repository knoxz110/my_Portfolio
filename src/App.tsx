import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-[#D4AF37] selection:text-[#00302E]">
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          className="py-24 px-6 border-y border-white/5 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.5em] uppercase mb-2">
                Biography
              </h2>
              <h3 className="text-4xl font-serif leading-tight">
                Software Engineer <br />
                turned <span className="text-[#D4AF37]">Cloud Architect</span>.
              </h3>
            </div>
            <div className="lg:col-span-2 space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                I’m Pleasant Ehijie, a Software Engineer turned Cloud Enigneer.
                My journey began in front-end development, where
                for over three years I focused on building pixel-perfect
                interfaces and designing scalable MongoDB schemas. This
                experience gives me a strong edge as a cloud engineer — I
                understand how applications behave in real-world environments
                and what they truly need from their infrastructure.
              </p>
              <p>
                About a year ago, I transitioned into Cloud Engineering to
                bridge the gap between development and operations. Today, I
                specialize in automating deployments, securing AWS environments,
                and containerizing applications to ensure high availability,
                scalability, and improved developer productivity.
              </p>
              <div className="pt-4 flex space-x-12">
                <div>
                  <div className="text-3xl font-serif text-[#D4AF37]">1+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Cloud Years
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-[#D4AF37]">3+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Dev Years
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-[#D4AF37]">15+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Tech Skills
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Contact />
      </main>
      {/* Floating AI Career Assistant chat interface
      <AIChat /> */}
    </div>
  );
};

export default App;
