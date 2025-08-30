import "../styles/tailwind.css";
import TypingEffect from "./Effects/TypingEffect";

function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden section-large">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00ff88 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-highlight rounded-full blur-xl opacity-20"></div>
            <img 
              src="pictures/1055_compressed.jpg" 
              alt="Charles-Olivier Ipperciel" 
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover profile-image"
              style={{ imageRendering: 'high-quality' }}
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-accent">CHARLES-OLIVIER</span>
          <br />
          <span className="gradient-text">IPPERCIEL</span>
        </h1>

        {/* Role */}
        <div className="mb-6">
          <p className="text-sm md:text-base text-secondary mb-1 uppercase tracking-wider">
            I&apos;m a
          </p>
          <p className="text-lg md:text-xl font-semibold gradient-text">
            <TypingEffect text="Software Developer" />
          </p>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions and bringing ideas to life through code. 
          Specialized in full-stack development with a focus on modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a 
            href='CV/FrCV.pdf' 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            French CV
          </a>
          
          <a 
            href='CV/EngCV.pdf' 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            English CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;