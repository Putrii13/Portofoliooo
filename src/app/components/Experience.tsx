import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="flex justify-center mb-16">
        <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            My <span className="text-blue-500">Experience</span>
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Monfre Studio Experience */}
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Fotografer & Operator Videobooth 360</h3>
              <p className="text-blue-500 font-medium text-lg mt-1">Monfre Studio</p>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Praktik Kerja Lapangan (PKL)</p>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium whitespace-nowrap self-start">
              Juli 2023 – Desember 2023
            </div>
          </div>
          
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc list-outside ml-5">
            <li className="pl-2">Melakukan pemotretan studio, mengatur pencahayaan (lighting), dan mengarahkan gaya pelanggan agar tampil natural.</li>
            <li className="pl-2">Memberikan pelayanan dan konsultasi konsep foto secara komunikatif untuk memastikan kepuasan pelanggan.</li>
            <li className="pl-2">Melakukan editing dan retouching wajah, serta koreksi warna pada pas foto maupun foto studio.</li>
            <li className="pl-2">Menyusun layout dan memotong (cropping) ukuran foto agar rapi dan siap cetak.</li>
            <li className="pl-2">Mengoperasikan perangkat keras dan software Videobooth 360 untuk berbagai acara (event).</li>
            <li className="pl-2">Mengarahkan gaya tamu di atas platform dan memastikan kelancaran proses rendering hingga distribusi video ke pelanggan.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}