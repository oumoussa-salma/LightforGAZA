import React from 'react';
import { motion } from 'framer-motion';

const mockLights = [
  { id: 1, name: 'Zahra 🕊️', msg: 'For the children of Gaza', country: '🇲🇦', lang: 'fr' },
  { id: 2, name: 'Anonymous', msg: 'اللهم احفظ أهل غزة', country: '🇵🇸', lang: 'ar' },
  { id: 3, name: 'Lina', msg: 'Peace and justice will prevail.', country: '🇬🇧', lang: 'en' },
  { id: 4, name: 'Yousef', msg: 'Candle lit for my cousin ❤️', country: '🇶🇦', lang: 'en' },
  { id: 5, name: 'Aisha', msg: 'من المغرب بدعائي', country: '🇲🇦', lang: 'ar' },
  { id: 6, name: 'Elias ✨', msg: 'From France, with love and sabr.', country: '🇫🇷', lang: 'fr' }
];

export default function WallOfLight() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 py-16 text-center overflow-hidden">
      {/* Keffiyeh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">🕯️ Wall of Light</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A digital space of prayers, dedications, and peaceful solidarity with Gaza.
          </p>
        </div>

        {/* Light Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockLights.map((light) => (
            <motion.div
              key={light.id}
              whileHover={{ scale: 1.03 }}
              className="relative p-6 rounded-2xl shadow-md bg-white/70 backdrop-blur-md border border-white transition group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100 opacity-10 group-hover:opacity-30 transition-all duration-500 pointer-events-none flicker" />
              <p className="text-sm text-gray-600 italic mb-2">{light.msg}</p>
              <div className="font-serif font-medium text-gray-800">{light.name}</div>
              <div className="text-xs mt-1 text-gray-500 flex items-center justify-center gap-2">
                <span>{light.country}</span>
                <span className="uppercase bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px] font-bold">{light.lang}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic text-sm mb-3">Want to light a candle?</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-full shadow-md transition">
            ✨ Add Your Light
          </button>
        </div>
      </div>

      {/* Flicker effect CSS */}
      <style>{`
        .flicker {
          animation: flicker 2.5s infinite;
        }
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.1; }
          20%, 22%, 24%, 55% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}
