import React from 'react';
import { Link } from 'react-router';
import { categories, galleryImages } from '../data/projects';

export default function Projects() {
  return (
    <section id="project" className="py-24">
      {/* Title Bubble */}
      <div className="flex justify-center mb-16">
        <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            My <span className="text-blue-500">Project</span>
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const categoryImages = galleryImages.filter(img => img.categoryId === cat.id);
            
            return (
              <Link
                to={`/project/${cat.id}`}
                key={idx} 
                className="bg-white dark:bg-slate-800 rounded-[2rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col cursor-pointer block"
              >
                {/* Mosaic Cover */}
                <div className="aspect-square w-full rounded-[1.5rem] overflow-hidden mb-6 shadow-sm relative bg-slate-100 dark:bg-slate-700">
                  <div className={`w-full h-full grid gap-[2px] ${categoryImages.length >= 6 ? 'grid-cols-3 grid-rows-2' : 'grid-cols-2 grid-rows-2'}`}>
                    {categoryImages.map(img => (
                      <div key={img.id} className="w-full h-full overflow-hidden relative">
                        <img 
                          src={img.src} 
                          alt={img.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                {/* Text Content */}
                <div className="px-2 pb-2 text-center">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{cat.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{cat.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
