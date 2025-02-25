import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Timeline() {

  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="flex flex-col items-center my-20">
      <h2 ref={titleRef} className={`${titleVisible ? 'animate-slideIn' : ''} text-2xl font-bold mb-8`}>Timeline</h2>
      <div className="w-full md:w-7/12">
        {timeline.map((item) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            type={item.type}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
            current={item.current}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;