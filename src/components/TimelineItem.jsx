import React from "react";

function TimelineItem({ year, type, title, duration, details }) {
  const typeColor = type === "Work" ? "bg-orange-500" : "bg-blue-500";

  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4 transition-transform duration-300 hover:scale-101 hover:bg-stone-100 rounded-md p-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className={`inline-block px-2 py-1 font-semibold text-white ${typeColor} rounded-md`}>
            {type}
          </span>
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
          <div className="my-1 text-sm font-normal leading-non text-stone-400">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 text-justify">{details}</p>
      </li>
    </ol>
  );
}

export default TimelineItem;