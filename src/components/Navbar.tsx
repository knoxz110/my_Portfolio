import React from "react";

const Navbar: React.FC = () => {
  return (
      <nav className="fixed top-0 w-full z-50 bg-[#00302E]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-15 h-20 flex items-center justify-between">
          <a href="#">
            <div className="text-2xl text-[#D4AF37] font-serif tracking-tighter">
            PE<span className="text-[#D4AF37]">.</span>
          </div>
          </a>
          

          <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest">
            <a href="#skills"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              About
            </a>

            <a href="#skills"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              Skills
            </a>

            <a href="#experience"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              Experience
            </a>
            <a href="#contact"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
