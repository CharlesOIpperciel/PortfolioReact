import TypingEffect from "./Effects/TypingEffect";
import "../styles/tailwind.css"

function Intro() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-4">
        <img 
          src="assets/LinkedInPhoto.jpg" 
          alt="Charles-Olivier Ipperciel" 
          className="w-48 h-48 rounded-full mb-4 transform transition-transform duration-500 hover:scale-110 bounce-in-top"
        />
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">
          Hi 👋, I&apos;m Charles-Olivier Ipperciel
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          <TypingEffect text="Sooftware Developer" />
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold text-justify p-2">
          Hey! I&apos;m a software developer nearing the completion of my Bachelor&apos;s
          degree in Computer Science at Université de Sherbrooke. I have hands-on
          experience with React.js, Python, and object-oriented programming in
          languages like Java and C#. Through multiple internships, I’ve honed my
          skills and grown into a well-rounded developer, continuously learning
          and adapting to new challenges.
        </p>
      </div>
      <div className="flex justify-center space-x-4 pt-6 pb-20">
        <a 
          href='assets/Resume_French.pdf' 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-300 font-semibold text-black px-6 py-2 rounded hover:bg-blue-400 hover:text-white transition transform transition duration-300 hover:scale-102 border-2 border-stone-600 bounce-in-left">
          French CV
        </a>
        <a 
          href='assets/Resume_English.pdf' 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-300 font-semibold text-black px-6 py-2 rounded hover:bg-green-400 hover:text-white transition transform transition duration-300 hover:scale-102 border-2 border-stone-600 bounce-in-right">
          English CV
        </a>
      </div>
    </>
  );
}

export default Intro;