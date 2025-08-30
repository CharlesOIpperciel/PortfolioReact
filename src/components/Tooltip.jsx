import React from 'react';

const Tooltip = ({ children, text }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 tooltip-new opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 shadow-2xl max-w-xs text-center">
                    {text}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black/95 border-r border-b border-gray-700 rotate-45"></div>
            </div>
        </div>
    );
};

export default Tooltip;