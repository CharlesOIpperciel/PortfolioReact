import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, isPrivate }) {
  const isLinkValid = link.startsWith("https");

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="glass-dark rounded-2xl overflow-hidden card-hover h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.slice(0, 3).map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30"
                  >
                    {item}
                  </span>
                ))}
                {stack.length > 3 && (
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                    +{stack.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-200">
            {title}
          </h3>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-sm text-white/60 mb-3 font-medium">Technologies Used:</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white/90 text-xs font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-between items-center">
            {isLinkValid ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 flex items-center gap-2 group"
              >
                {isPrivate ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    View Live
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </>
                )}
              </a>
            ) : (
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-lg border border-orange-400/30 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                In Development
              </span>
            )}
            
            {/* External link icon */}
            {isLinkValid && (
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;