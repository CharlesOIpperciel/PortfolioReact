import React from "react";

function Footer() {
  return (
    <footer className="py-6 px-6 footer">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="card p-5 mb-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-accent mb-3 uppercase tracking-wide">
              <span className="gradient-text">CHARLES-OLIVIER</span>
              <span className="text-accent"> IPPERCIEL</span>
            </h3>
            <p className="text-secondary mb-5 max-w-xl mx-auto text-sm">
              Software developer passionate about creating innovative solutions and bringing ideas to life through code.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-5">
              <a
                href="https://www.linkedin.com/in/coipp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-gray-700 social-link hover:border-highlight"
              >
                <img 
                  src="assets/linkedinlogo.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5 object-contain"
                />
              </a>
              
              <a
                href="https://github.com/CharlesOIpperciel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-gray-700 social-link hover:border-highlight"
              >
                <img 
                  src="assets/githublogo.png" 
                  alt="GitHub" 
                  className="w-5 h-5 object-contain"
                />
              </a>

              <a
                href="mailto:charles.olivier.ipperciel@gmail.com"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-gray-700 social-link hover:border-highlight"
              >
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#intro" className="nav-link">Home</a>
              <a href="#portfolio" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#timeline" className="nav-link">Experience</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="card p-3">
            <p className="text-secondary text-sm">
              © 2024 Charles-Olivier Ipperciel. Built with React and Tailwind CSS.
            </p>
            <p className="text-secondary text-xs mt-1 opacity-70">
              Made with ❤️ in Montreal, Quebec
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
