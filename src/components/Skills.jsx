import React from 'react';
import skills from '../data/skills';
import Tooltip from './Tooltip';
import "../styles/tailwind.css"

const Skills = () => {
    return (
        <section className="py-20 px-6 relative">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Technical</span>
                        <span className="text-white"> Skills</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <Tooltip key={index} text={skill.description}>
                            <div className="glass-dark rounded-2xl p-6 text-center card-hover cursor-pointer transform transition-all duration-500 group">
                                {/* Skill Icon */}
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
                                    <img 
                                        src={skill.icons} 
                                        alt={`${skill.skill} icon`} 
                                        className="relative w-16 h-16 mx-auto object-contain filter drop-shadow-lg"
                                    />
                                </div>

                                {/* Skill Name */}
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                    {skill.skill}
                                </h3>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;