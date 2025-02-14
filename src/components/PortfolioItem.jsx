import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  const isLinkValid = link.startsWith("https");

  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden transform transition duration-300 hover:scale-102 bg-gray-200">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4 flex flex-col items-center">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-center">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm text-center">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md bg-white hover:scale-105"
            >
              {item}
            </span>
          ))}
        </p>
        <div className="flex flex-col items-center">
          {isLinkValid ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to see the code"
              className="inline-block mt-4 px-4 py-2 bg-white text-white font-semibold rounded-md hover:bg-green-200 transition duration-300 border-2 border-stone-900"
            >
              <img
                src="assets/github-mark.png"
                alt="Github"
                className="w-8 h-8"
              />
            </a>
          ) : (
            <span className="inline-block mt-4 px-4 py-2 bg-red-400 text-white font-semibold rounded-md border-2 border-stone-900 border-dashed">
              In Development
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;