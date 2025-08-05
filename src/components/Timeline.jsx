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
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
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
                
                {/* Downward Arrow (except for last item) */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-8 h-8 text-purple-400">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
            <p className="text-white/70 mb-6">
              I&apos;m always open to discussing new opportunities and exciting projects.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;