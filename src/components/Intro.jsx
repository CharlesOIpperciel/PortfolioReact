import "../styles/tailwind.css";
import TypingEffect from "./Effects/TypingEffect";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-4">
      <img 
        src="pictures/1055.jpg" 
        alt="Charles-Olivier Ipperciel" 
        className="rounded-full mb-4 transform transition-transform duration-500 hover:scale-110 object-cover max-w-50 max-h-full"
      />
      <h1 className="text-2xl md:text-4xl mb-2 font-bold">
        Hi, I&apos;m Charles-Olivier Ipperciel 👋
      </h1>
      <p className="text-lg md:text-xl mb-2 font-medium text-gray-700">
        <TypingEffect text="Software Developer" />
      </p>
      <div className="flex justify-center space-x-4 pt-6 pb-20">
        <a 
          href='CV/FrCV.pdf' 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">
          French CV
        </a>
        <a 
          href='CV/EngCV.pdf' 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105">
          English CV
        </a>
      </div>
    </div>
  );
}

export default Intro;