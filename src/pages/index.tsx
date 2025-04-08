import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-12 py-16 text-center overflow-hidden"
    >

<div
  className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center"
></div>


      {/* Main content on top of pattern */}
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-6xl font-serif text-gray-900 mb-6 relative z-10"
      >
        Light for Gaza
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl text-gray-600 mb-8 font-body italic relative z-10"
      >
        "If we cannot help with our hands, let us help with our hearts"
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="prose prose-lg max-w-3xl mx-auto text-gray-700 relative z-10"
      >
        <p className="mb-6 font-body text-xl">
          Welcome to a sacred space dedicated to prayer, remembrance, and peaceful solidarity 
          with the people of Gaza. Here, we gather in spirit to offer our support through 
          reflection, prayer, and mindful action.
        </p>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center space-x-4 my-12"
        >
          <span className="font-arabic text-2xl">السلام</span>
          <span className="text-gray-500">•</span>
          <span className="font-serif text-lg">Peace</span>
          <span className="text-gray-500">•</span>
          <span className="font-serif text-lg">Paix</span>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto relative z-10">
        <FeatureCard
          title="Prayer & Reflection"
          description="Join in spiritual solidarity through prayer and peaceful meditation."
          delay={0.7}
        />
        <FeatureCard
          title="Learn & Understand"
          description="Gain a thoughtful perspective on recent events with dignity and respect."
          delay={0.8}
        />
        <FeatureCard
          title="Take Peaceful Action"
          description="Discover meaningful ways to support through ethical choices and awareness."
          delay={0.9}
        />
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

  <p className="mt-6 text-sm text-gray-500 italic">
    Made with <span className="text-rose-500 font-semibold">Niyya</span> and <span className="text-green-600 font-semibold">Ajjr </span> 
     of everyone who prays — so <span className="font-semibold text-gray-600">pray</span>, use it, and share it 
  </p>

  <p className="mt-1 text-xs text-gray-400 font-mono tracking-wide">
    By Oumoussa & Attioui
  </p>
</section>

      
    </motion.div>

    
    
  );
};

const FeatureCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-2xl font-serif text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-700 font-body text-lg">{description}</p>
  </motion.div>
);

export default Welcome;
