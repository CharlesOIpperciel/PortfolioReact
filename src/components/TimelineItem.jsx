import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/tailwind.css"

function TimelineItem({ year, type, title, company, duration, details, current }) {
  const [ref, isVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    triggerOnce: true, 
  });
  const typeColor = type === "Part-time 💻" ? "bg-orange-500" : 
                    type === "Education 🎓" ? "bg-blue-500" : 
                    type === "Internship 🎒" ? "bg-green-500" : 
                    type === "Full-time 👔" ? "bg-purple-500" : "" ;
  
  const currentClass = current === "past" ? "bg-stone-400 border border-white" :
                       current === "future" ? "bg-stone-200 border border-white" : 
                       current === true ? "animate-pulse bg-green-600 border border-white" : "";

  return (
    <ol ref={ref} className={`flex flex-col md:flex-row relative border-l border-stone-200 ${isVisible ? 'animate-slideIn' : ''}`}>
      <li className="mb-10 ml-4 transition-transform duration-300 hover:scale-105 hover:bg-stone-100 rounded-md p-4">
        <div className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 ${currentClass}`} />
        <div className="flex flex-wrap gap-4 items-center text-xs md:text-sm">
          <span className={`px-2 py-1 font-semibold text-white ${typeColor} rounded-md`}>
            {type}
          </span>
          <span className="px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
            {year}
          </span>
          <span className="px-2 py-1 font-semibold text-white bg-stone-400 rounded-md">
            {company}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-stone-900">{title}</h3>
        <div className="my-1 text-sm font-normal text-stone-800">
          {duration}
        </div>
        <p className="my-2 text-base font-normal text-stone-700 text-justify">{details}</p>
      </li>
    </ol>
  );
}

export default TimelineItem;