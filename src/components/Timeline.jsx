import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            type={item.type}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
        <div className="flex justify-center space-x-4 mt-10">
          <a 
            href='assets/Resume_French.pdf' 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 font-semibold text-white px-6 py-2 rounded hover:bg-blue-700 transition transform transition duration-300 hover:scale-102">
            French CV
          </a>
          <a 
            href='assets/Resume_English.pdf' 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 font-semibold text-white px-6 py-2 rounded hover:bg-green-700 transition transform transition duration-300 hover:scale-102">
            English CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
