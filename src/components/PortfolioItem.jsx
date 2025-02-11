import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  const isLinkValid = link.startsWith("https");

  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden transform transition duration-300 hover:scale-102">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        {isLinkValid ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="Click for more info"
            className="inline-block mt-4 px-4 py-2 bg-gray-300 text-white font-semibold rounded-md hover:bg-gray-400 transition duration-300"
          >
            <img
              src="assets/github-mark.png"
              alt="Github"
              className="w-8 h-8"
            />
          </a>
        ) : (
          <span className="inline-block mt-4 px-4 py-2 bg-red-400 text-white font-semibold rounded-md">
            In Development
          </span>
        )}
      </div>
    </div>
  );
}

export default PortfolioItem;