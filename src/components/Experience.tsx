import React from "react";
import { EXPERIENCE } from "../constants";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.5em] uppercase mb-2">
            The Journey
          </h2>
          <h3 className="text-4xl font-serif">Professional Evolution.</h3>
        </div>

        <div className="relative border-l border-[#D4AF37]/30 ml-4 md:ml-0 md:left-1/2">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:-translate-x-full md:text-right"
                  : "md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 -left-1 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 [#D4AF37]-bg rounded-full border-4 border-[#00302E]"></div>

              <div className="bg-[#002624] p-8 rounded-sm border border-white/5 shadow-2xl hover:border-[#D4AF37]/50 transition-all group">
                <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                  {item.period}
                </span>
                <h4 className="text-2xl font-serif mt-2 mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h4>
                <div className="text-gray-400 font-medium mb-6">
                  {item.company}
                </div>

                <ul
                  className={`space-y-3 text-gray-300 text-sm ${
                    index % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""
                  }`}
                >
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={`text-[#D4AF37] mr-2 ${
                          index % 2 === 0 ? "md:order-2 md:ml-2 md:mr-0" : ""
                        }`}
                      >
                        •
                      </span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
