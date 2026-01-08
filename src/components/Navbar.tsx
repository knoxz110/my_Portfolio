import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="fixed top-0 w-full z-50 bg-[#00302E]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-15 h-20 flex items-center justify-between">
          <Link to="/">
            <div className="text-2xl text-[#D4AF37] font-serif tracking-tighter">
            PE<span className="text-[#D4AF37]">.</span>
          </div>
          </Link>
          

          <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest">
            <HashLink
              smooth
              to="#about"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              About
            </HashLink>

            <HashLink
              smooth
              to="#skills"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              Skills
            </HashLink>

            <HashLink
              smooth
              to="#experience"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              Experience
            </HashLink>

            <HashLink
              smooth
              to="#contact"
              className="hover:text-white transition-colors text-[#D4AF37]"
            >
              Contact
            </HashLink>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
