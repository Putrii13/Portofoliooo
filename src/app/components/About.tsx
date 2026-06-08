import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import profilePhoto from '../../imports/1000011406.jpg.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="flex justify-center mb-16">
        <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-5xl mx-auto px-4">
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[320px] aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgb(0,0,0,0.3)] bg-white dark:bg-slate-800 border-8 border-white dark:border-slate-800 flex items-center justify-center h-full">
            <img 
              src={profilePhoto} 
              alt="Anaya Rizka Putri Novianti" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-medium text-slate-700 dark:text-slate-200">
            Hello, I'm <span className="text-blue-500 font-bold">Anaya Rizka Putri Novianti</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            Saya adalah Mahasiswa Jurusan Teknologi Multimedia Broadcasting, Departemen Teknologi Multimedia Kreatif di Politeknik Elektronika Negeri Surabaya. Saya memiliki ketertarikan yang mendalam dalam produksi konten multimedia, berfokus pada desain grafis, videografi, dan fotografi. Saya bertekad untuk terus berkembang dan menciptakan karya-karya yang bermakna di industri kreatif.
          </p>
          
          <div className="pt-6 flex gap-4">
            <a href="#contact" className="px-8 py-3 bg-white dark:bg-slate-800 text-black dark:text-white rounded-full font-medium shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgb(0,0,0,0.08)] hover:text-blue-500 dark:hover:text-blue-400 active:text-blue-500 border border-slate-100 dark:border-slate-700 transition-all">
              Contact Me
            </a>
            <a href="#project" className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-medium shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:text-blue-500 dark:hover:text-blue-400 transition-all border border-slate-100 dark:border-slate-700">
              Portofolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}