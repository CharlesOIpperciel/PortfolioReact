import React from 'react';

const Tooltip = ({ children, text }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute top-full left-0 w-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 whitespace-no-wrap shadow-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 text-justify">
                {text}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-8 border-b-gray-800 border-x-8 border-x-transparent border-t-0"></div>
            </div>
        </div>
    );
};

export default Tooltip;