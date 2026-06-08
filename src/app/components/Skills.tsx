import React from 'react';

import iconCanva from '../../imports/Untitled__2_.png';
import iconAnimate from '../../imports/Adobe_Animate-Logo.wine.png';
import iconCorel from '../../imports/Untitled__3_.png';
import iconUnity from '../../imports/Untitled__11_.png';
import iconCapcut from '../../imports/Untitled__4_.png';
import iconBlender from '../../imports/Untitled__9_.png';

const skills = [
  { name: 'Canva', icon: iconCanva },
  { name: 'Capcut', icon: iconCapcut },
  { name: 'CorelDraw', icon: iconCorel },
  { name: 'Unity', icon: iconUnity },
  { name: 'Adobe Animate', icon: iconAnimate },
  { name: 'Blender', icon: iconBlender }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="flex justify-center mb-16">
        <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center bg-white dark:bg-slate-800 px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-50 dark:border-slate-700"
          >
            <div className="w-12 h-12 flex items-center justify-center mr-4">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}