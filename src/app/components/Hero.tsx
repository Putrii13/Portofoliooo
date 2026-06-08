import React from 'react';
import profileImage from '../../imports/aNGG.jpeg';

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-12 pb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
            PORTOFOLIO <span className="text-blue-500 block">CREATIVE</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            Mengabadikan momen dan menghadirkan cerita melalui desain, fotografi, dan videografi yang kreatif dan penuh karakter.
          </p>
          <div className="pt-4 flex gap-4">
            <a href="#project" className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
              Lihat Karya
            </a>
            <a href="#contact" className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              Hubungi Saya
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-2 duration-500 bg-white dark:bg-slate-800 p-4">
            <img 
              src={profileImage}
              alt="Anaya Rizka Putri - Profile" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
