import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const contacts = [
  {
    platform: 'Instagram',
    detail: '@anyr.putri_',
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    href: 'https://instagram.com/anyr.putri_'
  },
  {
    platform: 'WhatsApp',
    detail: '0831-1919-3496',
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    href: 'https://wa.me/6283119193496'
  },
  {
    platform: 'Gmail',
    detail: 'rizkaputri1302@gmail.com',
    icon: <Mail className="w-6 h-6 text-red-500" />,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rizkaputri1302@gmail.com'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Hubungi <span className="text-blue-500">Saya</span>
            </h2>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            Hubungi saya lewat media sosial atau pesan. Saya selalu terbuka untuk diskusi mengenai project kreatif atau peluang kerjasama.
          </p>
        </div>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-x-2 transition-transform duration-300 w-full md:w-4/5 ml-auto border border-slate-50 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-full flex items-center justify-center mr-4 shadow-inner">
                {contact.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-lg">{contact.platform}</h4>
                <p className="text-slate-500 dark:text-slate-400">{contact.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
