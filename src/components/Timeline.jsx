import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <section className="py-20 px-6 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional</span>
            <span className="text-white"> Journey</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My career path and educational background
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <div>
            {timeline.map((item, index) => (
              <div key={item.year} className="relative">
                <TimelineItem
                  year={item.year}
                  type={item.type}
                  title={item.title}
                  company={item.company}
                  duration={item.duration}
                  details={item.details}
                  current={item.current}
                  index={index}
                />
                
                {/* Upward Arrow (except for last item) */}
                {index < timeline.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="relative w-0.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-purple-500"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;