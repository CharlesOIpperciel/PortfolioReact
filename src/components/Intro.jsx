import React from "react";

function Intro() {
  return (
    <>
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img 
        src="assets/LinkedInPhoto.jpg" 
        alt="Charles-Olivier Ipperciel" 
        className="w-48 h-48 rounded-full mb-4 transform transition-transform duration-500 hover:scale-110"
      />
      <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">
        Hi 👋, I'm Charles-Olivier Ipperciel
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Developer 🧑‍💻
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold text-justify">
        Hey! I'm a software developer nearing the completion of my Bachelor's
        degree in Computer Science at Université de Sherbrooke. I have hands-on
        experience with React.js, Python, and object-oriented programming in
        languages like Java and C#. Through multiple internships, I’ve honed my
        skills and grown into a well-rounded developer, continuously learning
        and adapting to new challenges.
      </p>
    </div>
    </>
  );
}

export default Intro;