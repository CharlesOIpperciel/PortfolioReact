import "../styles/tailwind.css"

function TimelineItem({ year, type, title, company, duration, details, current, index }) {
  const getTypeColor = (type) => {
    if (type.includes("Part-time")) return "bg-warning";
    if (type.includes("Education")) return "bg-info";
    if (type.includes("Internship")) return "bg-success";
    if (type.includes("Full-time")) return "bg-primary";
    return "bg-secondary";
  };

  return (
    <div className="relative group w-full h-full">
      {/* Content Card */}
      <div className="w-full h-full">
        <div className={`card p-3 relative overflow-visible timeline-item h-full flex flex-col ${current === true ? 'ring-2 ring-highlight bg-card' : ''}`}>
          {/* Header */}
          <div className="flex flex-wrap gap-1.5 mb-2 mt-1">
            <span className={`px-2 py-0.5 text-xs font-semibold text-white ${getTypeColor(type)} rounded uppercase tracking-wide`}>
              {type}
            </span>
            <span className="px-2 py-0.5 text-xs font-semibold text-secondary bg-card rounded border border-gray-700 uppercase tracking-wide">
              {company}
            </span>
            <span className="bg-highlight text-black px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm uppercase tracking-wide">
              {year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-accent mb-1.5 group-hover:text-primary transition-colors duration-200 uppercase tracking-wide text-justify">
            {title}
          </h3>

          {/* Duration */}
          <div className="text-xs text-secondary mb-2 font-medium flex items-center gap-1 bg-card px-2 py-0.5 rounded">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="uppercase tracking-wide">{duration}</span>
          </div>

          {/* Details */}
          <p className="text-xs text-secondary leading-relaxed text-justify flex-grow">
            {details}
          </p>

          {/* Current indicator */}
          {current === true && (
            <div className="mt-2 flex items-center gap-1.5 bg-highlight px-2 py-1 rounded border border-highlight">
              <span className="text-xs text-black font-semibold uppercase tracking-wide">Current Position</span>
            </div>
          )}

          {/* Future indicator */}
          {current === "future" && (
            <div className="mt-2 flex items-center gap-1.5 bg-info px-2 py-1 rounded border border-info">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-xs text-white font-semibold uppercase tracking-wide">Upcoming</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;