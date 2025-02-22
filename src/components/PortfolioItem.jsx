import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  const isLinkValid = link.startsWith("https");

  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden transform transition duration-300 hover:scale-105 bg-gray-100">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-32 md:h-40 object-cover cursor-pointer"
      />
      <div className="w-full p-3 flex flex-col items-center">
        <h3 className="text-md md:text-lg mb-2 font-semibold text-center">
          {title}
        </h3>
        <p className="flex flex-wrap gap-1 flex-row items-center justify-center text-xs md:text-sm text-center">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border border-stone-900 rounded-md bg-white hover:scale-105"
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
              className="inline-block mt-3 px-3 py-1 bg-white text-white font-semibold rounded-md hover:bg-green-200 transition duration-300 border border-stone-900"
            >
              <img
                src="assets/github-mark.png"
                alt="Github"
                className="w-6 h-6"
              />
            </a>
          ) : (
            <span className="inline-block mt-3 px-3 py-1 bg-red-400 text-white font-semibold rounded-md border border-stone-900 border-dashed">
              In Development
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;