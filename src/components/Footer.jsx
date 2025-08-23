import React from "react";

function Footer() {
  return (
    <footer className="py-12 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">Charles-Olivier</span>
              <span className="text-white"> Ipperciel</span>
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Software developer passionate about creating innovative solutions and bringing ideas to life through code.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.linkedin.com/in/coipp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <img 
                  src="assets/linkedinlogo.png" 
                  alt="LinkedIn" 
                  className="w-6 h-6 object-contain"
                />
              </a>
              
              <a
                href="https://github.com/CharlesOIpperciel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="mailto:charles.olivier.ipperciel@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#intro" className="text-white/70 hover:text-white transition-colors duration-200">Home</a>
              <a href="#portfolio" className="text-white/70 hover:text-white transition-colors duration-200">Projects</a>
              <a href="#skills" className="text-white/70 hover:text-white transition-colors duration-200">Skills</a>
              <a href="#timeline" className="text-white/70 hover:text-white transition-colors duration-200">Experience</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="glass-dark rounded-xl p-4">
            <p className="text-white/60 text-sm">
              © 2024 Charles-Olivier Ipperciel. Built with React and Tailwind CSS.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Made with ❤️ in Montreal, Quebec
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
