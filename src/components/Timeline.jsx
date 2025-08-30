import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  // Separate current positions from others
  const currentPositions = timeline.filter(item => item.current === true);
  const otherPositions = timeline.filter(item => item.current !== true);

  return (
    <section className="section-compact px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">PROFESSIONAL</span>
            <span className="text-accent"> JOURNEY</span>
          </h2>
          <p className="section-subtitle">
            My career path and educational background
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Current Positions - Side by Side */}
          {currentPositions.length > 0 && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {currentPositions.map((item, index) => (
                  <div key={item.year + item.company} className="w-full h-full">
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Positions - Vertical Stack */}
          {otherPositions.length > 0 && (
            <div className="flex flex-col items-center">
              {otherPositions.map((item, index) => (
                <div key={item.year + item.company} className="relative w-full max-w-2xl mb-6">
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Timeline;