import React from "react";
import Image from "../assets/my_image.jpg";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#00302E] px-6 pt-29 pb-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 text-[#D4AF37] lg:order-1">
          <h2 className="text-[#D4AF37] text-lg  font-bold tracking-[0.3em] uppercase mb-4">
            Cloud Engineer & Fullstack Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Bridging <br />
            <span className="text-white">software and infrastructure</span>{" "}
            <br />
            through Code.
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
            I leverage my 3+ years of software development expertise to build
            resilient, scalable, and automated cloud architectures. Currently
            specializing in AWS and DevOps automation.
          </p>
          <div className="flex space-x-6">
            <a
              href="#skills"
              className="px-8 py-4 bg-[#D4AF37] text-white font-bold rounded-sm hover:opacity-90 transition-opacity"
            >
              View My Tech Stack
            </a>
            <a
              href="#experience"
              className="px-8 py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-[#00302E] transition-all"
            >
              My Journey
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Background decorative square */}
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#D4AF37] z-0"></div>
            {/* Image container */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#D4AF37]/10 z-10 overflow-hidden">
              <img
                src={Image}
                alt="Cloud Engineer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating stats badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl z-20 text-[#00302E]">
              <div className="text-4xl font-serif font-bold">4+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Years Industry Exp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
