import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { categories, galleryImages } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const category = categories.find(cat => cat.id === id);
  const images = galleryImages.filter(img => img.categoryId === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Project Not Found</h2>
          <Link to="/" className="text-blue-500 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors mb-8 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.08)]"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Kembali</span>
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12 text-center md:text-left flex flex-col items-center md:items-start transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            {category.desc}
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2, 1024: 3}}>
          <Masonry gutter="2rem">
            {images.map((img) => (
              <div 
                key={img.id}
                className="group bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}