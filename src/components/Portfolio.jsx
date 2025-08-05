import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <section className="py-20 px-6 relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured</span>
              <span className="text-white"> Projects</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A collection of my recent work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
               <div key={project.id || index}>
                  <PortfolioItem 
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                     isPrivate={project.isPrivate}
                  />
               </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/CharlesOIpperciel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
   )
}

export default Portfolio;