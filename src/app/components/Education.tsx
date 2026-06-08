import React from 'react';
import { BookOpen, GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    period: "2012 - 2018",
    school: "SD Negeri 1 Sugihrejo",
    icon: <BookOpen className="w-8 h-8 mb-4 text-white" />
  },
  {
    period: "2018 - 2021",
    school: "SMP Negeri 1 Sukodadi",
    icon: <School className="w-8 h-8 mb-4 text-white" />
  },
  {
    period: "2021 - 2024",
    school: "SMK Negeri 1 Lamongan",
    icon: <GraduationCap className="w-8 h-8 mb-4 text-white" />
  },
  {
    period: "2024 - Sekarang",
    school: "Politeknik Elektronika Negeri Surabaya",
    icon: <GraduationCap className="w-8 h-8 mb-4 text-white" />
  }
];

export default function Education() {
  return (
    <section id="pendidikan" className="py-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block mb-6">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            Riwayat <span className="text-blue-500">Pendidikan</span>
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Berikut adalah perjalanan pendidikan saya dari tingkat dasar hingga saat ini...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="bg-blue-500 dark:bg-blue-600 rounded-3xl p-8 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-transform duration-300"
          >
            {item.icon}
            <div className="text-blue-100 dark:text-blue-200 text-sm font-medium mb-2">{item.period}</div>
            <h3 className="font-bold text-xl leading-tight">{item.school}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
