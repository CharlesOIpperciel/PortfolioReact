import React from 'react';
import skills from '../data/skills';
import "../styles/tailwind.css"

const Skills = () => {
    return (
        <section className="section-compact px-6 bg-primary">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="gradient-text">TECHNICAL</span>
                        <span className="text-accent"> SKILLS</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies and tools I currently use daily
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className={`card p-3 text-center cursor-pointer group card-hover animate-slideIn ${skill.isMain ? 'main-skill' : ''}`} style={{ animationDelay: `${index * 0.05}s` }}>
                            {/* Skill Icon */}
                            <div className="relative mb-2">
                                <img 
                                    src={skill.icons} 
                                    alt={`${skill.skill} icon`} 
                                    className={`w-10 h-10 mx-auto object-contain skill-icon ${skill.isMain ? 'main-skill-icon' : ''}`}
                                />
                            </div>

                            {/* Skill Name */}
                            <h3 className={`text-xs font-semibold text-accent group-hover:text-primary transition-colors duration-200 uppercase tracking-wide ${skill.isMain ? 'main-skill-text' : ''}`}>
                                {skill.skill}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;