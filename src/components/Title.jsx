import React, { useState, useEffect } from 'react';

function Title() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-sm border-b border-gray-700' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('intro')}
              className="text-lg font-bold gradient-text hover:scale-105 transition-transform duration-200 uppercase tracking-wider"
            >
              COI
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-link"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="nav-link"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline text-xs px-3 py-1.5"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-accent p-2 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Title;
