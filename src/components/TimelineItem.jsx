import "../styles/tailwind.css"

function TimelineItem({ year, type, title, company, duration, details, current, index }) {
  const getTypeColor = (type) => {
    if (type.includes("Part-time")) return "bg-orange-500";
    if (type.includes("Education")) return "bg-blue-500";
    if (type.includes("Internship")) return "bg-green-500";
    if (type.includes("Full-time")) return "bg-purple-500";
    return "bg-gray-500";
  };

  const isLeft = index % 2 === 0;

  return (
    <div className={`relative group ${isLeft ? 'pr-1/2' : 'pl-1/2'}`}>
      {/* Timeline Marker */}
      <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-6 transform ${isLeft ? 'translate-x-1/2' : '-translate-x-1/2'} w-4 h-4 ${getTypeColor(type)} rounded-full shadow-lg z-10`}></div>
      
      {/* Content Card */}
      <div className={`${isLeft ? 'mr-8' : 'ml-8'}`}>
        <div className={`glass-dark rounded-2xl p-6 card-hover relative overflow-visible ${current === true ? 'ring-2 ring-green-400/30 bg-green-500/5' : ''}`}>
          {/* Date Badge - Fixed positioning */}
          <div className="absolute -top-4 left-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {year}
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-wrap gap-3 mb-4 mt-2">
            <span className={`px-3 py-1 text-xs font-semibold text-white ${getTypeColor(type)} rounded-full`}>
              {type}
            </span>
            <span className="px-3 py-1 text-xs font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {company}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          {/* Duration with enhanced visual */}
          <div className="text-sm text-white/60 mb-4 font-medium flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{duration}</span>
          </div>

          {/* Details */}
          <p className="text-white/80 leading-relaxed">
            {details}
          </p>

          {/* Current indicator - More prominent */}
          {current === true && (
            <div className="mt-4 flex items-center gap-2 bg-green-500/20 px-4 py-3 rounded-lg border-2 border-green-400/50">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-300 font-semibold">Current Position</span>
              <svg className="w-4 h-4 text-green-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}

          {/* Future indicator */}
          {current === "future" && (
            <div className="mt-4 flex items-center gap-2 bg-blue-500/10 px-3 py-2 rounded-lg border border-blue-500/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-blue-400 font-medium">Upcoming</span>
            </div>
          )}

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;