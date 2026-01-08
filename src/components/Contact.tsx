import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Linkedin, Github, Mail } from "lucide-react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_q3ytyei",
        "template_8ev5zfe",
        formRef.current,
        "XHlzvVb_GfSSiqrWU"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

  return (
    <footer id="contact" className="py-24 px-6 bg-[#001a18] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.5em] uppercase mb-2">
              Connect
            </h2>
            <h3 className="text-5xl text-[#D4AF37] font-serif mb-8 leading-tight">
              Ready for the <br /> Next Architecture?
            </h3>

            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              I'm always open to discussing Cloud migrations, DevOps strategies,
              or Fullstack projects. Let's build something scalable together.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:ehijiepleasant003@gmail.com"
              className="flex items-center group mb-8"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-[#D4AF37] transition-colors">
                <Mail className="text-[#D4AF37]" size={20} />
              </div>
              <span className="text-xl text-white font-medium group-hover:text-[#D4AF37] transition-colors">
                ehijiepleasant003@gmail.com
              </span>
            </a>

            {/* SOCIALS */}
            <div className="flex justify-center items-center space-x-8">
              <a
                href="https://www.linkedin.com/in/pleasant-ehijie-926939309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] text-white  transition-colors"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/knoxz110"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] text-white transition-colors"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#00302E] p-10 border border-white/5 rounded-sm">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full text-white bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37] "
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full text-white bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <input
                name="subject"
                placeholder="Subject"
                required
                className="w-full text-white bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37]"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="w-full text-white bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37]"
              />

              <button className="w-full py-4 bg-[#D4AF37] text-[#00302E] font-bold uppercase tracking-widest hover:opacity-90">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between text-gray-500 text-xs tracking-[0.2em] uppercase">
          <p>&copy; 2024 Built with React & Tailwind</p>
          <p className="mt-4 md:mt-0">Design & Code by Pleasant Ehijie</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
