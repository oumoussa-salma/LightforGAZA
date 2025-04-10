
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, HistoryIcon } from 'lucide-react';
import { gazaHistory } from '../data/gazaHistory';


const History = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEvent = gazaHistory[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < gazaHistory.length - 1 ? prev + 1 : prev));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-12 py-16 overflow-hidden"
    >
     <div
  className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center"
></div>
      <div className="text-center mb-12 relative z-10">
        <div className="flex justify-center mb-4">
          <HistoryIcon className="w-16 h-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">History of Gaza's Occupation</h1>
        <p className="text-lg text-gray-600">
          A bilingual timeline recounting the key milestones in Gaza's occupation and resistance.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md text-left"
        >
          <div className="flex items-center mb-4">
            {currentEvent.status === 'Completed' ? (
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            ) : (
              <Clock className="w-6 h-6 text-yellow-500 mr-2" />
            )}
            <h3 className="text-xl font-semibold text-gray-800">{currentEvent.title}</h3>
          </div>
          <p className="text-lg text-gray-500 mb-1 font-semibold">{currentEvent.date}</p>
          <p className="text-gray-700 leading-relaxed mb-4">{currentEvent.description}</p>
          <p className="text-gray-800 italic text-right">{currentEvent.description_ar}</p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full border bg-white hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <span className="text-sm text-gray-600">{currentIndex + 1} / {gazaHistory.length}</span>
          <button
            onClick={handleNext}
            disabled={currentIndex === gazaHistory.length - 1}
            className="p-2 rounded-full border bg-white hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Progress Timeline */}
        <div className="mt-4 flex justify-center items-center space-x-1">
          {gazaHistory.map((_, idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx <= currentIndex ? 'bg-green-600 w-6' : 'bg-gray-300 w-3'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="mt-16 text-center relative z-10">
        <img
          src="/assets/watermelon.png"
          alt="Watermelon for Palestine"
          className="w-16 h-16 mx-auto mb-4"
        />
        <p className="text-base text-gray-700 font-medium italic max-w-md mx-auto">
          The watermelon has become a peaceful symbol of Palestinian resistance.
        </p>
        

        <p className="mt-6 text-sm text-gray-600 italic leading-relaxed">
          Made with <span className="text-rose-500 font-semibold">Niyya</span> and <span className="text-green-600 font-semibold">Ajjr</span> 
          of everyone who prays — so <span className="font-semibold text-gray-600">pray</span>, use it, and share it 
        </p>
        <p className="mt-2 text-xs text-gray-400 font-mono tracking-wide">
By Oumoussa & Attioui
</p>
      </section>
    </motion.div>
  );
};

export default History;
