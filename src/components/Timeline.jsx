import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="flex flex-col items-center my-20">
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
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;