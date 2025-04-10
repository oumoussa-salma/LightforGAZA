import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, ArrowLeft, ArrowRight } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

import { DuaCard, duas } from '../data/duas'; 

const isLongDua = (dua: DuaCard) => (dua.arabic?.length || 0) > 500;

const generateAdaptivePages = (duas: DuaCard[]): DuaCard[][] => {
  const pages: DuaCard[][] = [];
  let current: DuaCard[] = [];

  for (const dua of duas) {
    if (isLongDua(dua)) {
      if (current.length) pages.push(current);
      pages.push([dua]);
      current = [];
    } else {
      current.push(dua);
      if (current.length === 3) {
        pages.push(current);
        current = [];
      }
    }
  }

  if (current.length) pages.push(current);
  return pages;
};

const palestinianHoverColors = [
  'hover:bg-red-100/60',
  'hover:bg-green-100/60',
  'hover:bg-black/10',
  'hover:bg-white/70',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Prayer() {
  const [page, setPage] = useState(0);
  const pages = useMemo(() => generateAdaptivePages(duas), []);
  const paginatedDuas = pages[page];

  const handleNext = () => {
    if (page >= pages.length - 1) {
      toast.success('Jazāk Allāhu Khayran 🤍 May Allah accept your prayers.');
      return;
    }
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-12 py-16 text-center overflow-hidden"
    >
      <Toaster position="top-center" />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Feather className="w-16 h-16 text-green-700" />
          </div>
          <h1 className="text-5xl font-serif text-gray-900 mb-4">Prayers for Peace</h1>
          <p className="text-xl text-gray-600 font-body">
            A collection of heartfelt duas for peace, protection, and healing
          </p>
        </motion.div>

        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedDuas.map((dua) => {
              const hoverClass =
                palestinianHoverColors[
                  Math.floor(Math.random() * palestinianHoverColors.length)
                ];

              return (
                <motion.div
                  key={dua.title}
                  variants={cardVariants}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 ${hoverClass} ${
                    isLongDua(dua) ? 'col-span-full md:col-span-3' : ''
                  }`}
                >
                  <div className="p-6 flex flex-col h-full justify-between">
                    <h3 className="text-2xl font-serif text-gray-800 mb-4">{dua.title}</h3>

                    {dua.arabic && (
                      <p className="text-2xl font-arabic text-gray-800 mb-4 leading-loose text-right whitespace-pre-wrap">
                        {dua.arabic}
                      </p>
                    )}

                    {dua.transliteration && (
                      <p className="text-md text-gray-600 italic mb-4">
                        {dua.transliteration}
                      </p>
                    )}

                    {dua.translation && (
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <p className="text-base text-gray-700 whitespace-pre-wrap">
                          {dua.translation}
                        </p>
                      </div>
                    )}

                    {dua.description && (
                      <p className="text-sm text-gray-500 mt-4 italic">
                        {dua.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-green-400 transition-all duration-500"
              style={{ width: `${((page + 1) / pages.length) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Page {page + 1} of {pages.length}
          </p>
        </div>

        {/* Watermelon Footer */}
        <section className="mt-16 text-center relative z-10">
          <img
            src="/assets/watermelon.png"
            alt="Watermelon for Palestine"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="text-base text-gray-700 font-medium italic max-w-md mx-auto">
            The watermelon has become a peaceful symbol of Palestinian resistance.
          </p>
          <p className="mt-6 text-sm text-gray-500 italic">
            Made with <span className="text-rose-500 font-semibold">Niyya</span> and{' '}
            <span className="text-green-600 font-semibold">Ajjr</span> of everyone who prays — so{' '}
            <span className="font-semibold text-gray-600">pray</span>, use it, and share it.
          </p>
          <p className="mt-2 text-xs text-gray-400 font-mono tracking-wide">
            By Oumoussa & Attioui
          </p>
        </section>
      </div>

      {/* Pagination Buttons */}
      <button
        onClick={handlePrevious}
        disabled={page === 0}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl p-4 rounded-r-xl text-gray-600 hover:bg-gray-100 disabled:opacity-30 z-50"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl p-4 rounded-l-xl text-gray-600 hover:bg-gray-100 z-50"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

export default Prayer;
