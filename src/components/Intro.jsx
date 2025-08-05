import "../styles/tailwind.css";
import TypingEffect from "./Effects/TypingEffect";

function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20">
      {/* Elegant floating circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large floating circle */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float z-0"></div>
        
        {/* Medium floating circle */}
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float z-0" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        
        {/* Small floating circles */}
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full blur-2xl animate-float z-0" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-500/8 to-orange-500/8 rounded-full blur-2xl animate-float z-0" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 rounded-full blur-2xl animate-float z-0" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
        
        {/* Subtle particle effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse z-0" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse z-0" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse z-0" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image with enhanced glow */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            {/* Multiple glow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <img 
              src="pictures/1055_compressed.jpg" 
              alt="Charles-Olivier Ipperciel" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-3 hover:shadow-3xl"
            />
          </div>
        </div>

        {/* Clean, elegant greeting */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="gradient-text">Hi, I&apos;m Charles-Olivier</span>
          <br />
          <span className="text-white/90 font-light">Ipperciel</span>
          <span className="text-4xl md:text-6xl ml-3 animate-bounce">👋</span>
        </h1>

        {/* Refined role section */}
        <div className="mb-10">
          <p className="text-xl md:text-2xl font-medium text-white/80 mb-3">
            I&apos;m a
          </p>
          <p className="text-2xl md:text-3xl font-bold gradient-text-secondary">
            <TypingEffect text="Software Developer" />
          </p>
        </div>

        {/* Clean description */}
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Passionate about creating innovative solutions and bringing ideas to life through code. 
          Specialized in full-stack development with a focus on modern technologies.
        </p>

        {/* Refined CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href='CV/FrCV.pdf' 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary group relative overflow-hidden px-6 py-3 text-base font-semibold"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              French CV
            </span>
          </a>
          
          <a 
            href='CV/EngCV.pdf' 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass px-6 py-3 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-base"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              English CV
            </span>
          </a>
        </div>


      </div>
    </section>
  );
}

export default Intro;