import React from 'react';
import skills from '../data/skills';
import Tooltip from './Tooltip';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import "../styles/tailwind.css"

const Skills = () => {
    const [ref, isIntersecting] = useIntersectionObserver({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-12">
            <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                    <Tooltip key={index} text={skill.description}>
                        <div
                            className={`bg-white border border-gray-200 rounded-2xl p-2 w-40 transform transition-transform duration-300 hover:scale-105 ${isIntersecting ? 'fadeIn' : ''}`}
                            style={{ animation: isIntersecting ? `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards` : 'none' }}
                        >
                            <img src={skill.icons} alt={`${skill.skill} icon`} className="w-12 h-12 mb-2 mx-auto" />
                            <h3 className="text-lg font-semibold mb-1 text-center">{skill.skill}</h3>
                        </div>
                    </Tooltip>
                ))}
            </div>
        </section>
    );
};

export default Skills;