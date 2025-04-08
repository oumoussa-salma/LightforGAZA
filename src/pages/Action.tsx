import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiHandHeartFill } from 'react-icons/ri';

const Action = () => {
  const [showBoycott, setShowBoycott] = useState(false);
  const [showStayInformed, setShowStayInformed] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-12 py-16 text-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <section className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <RiHandHeartFill className="w-16 h-16 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h1>
          <p className="text-lg text-gray-600">
            Peaceful, powerful ways to stand with Gaza — wherever you are.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="relative py-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-200 via-green-200 to-blue-200 opacity-40 rounded-full" />

            {/* PRAY */}
            <motion.div
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              className="relative mb-20 md:w-2/3 ml-0 md:mr-auto rounded-2xl bg-gradient-to-br from-pink-100 to-white shadow-xl px-8 py-6 transition-all duration-300 border border-pink-200"
            >
              <div className="absolute right-4 bottom-4 opacity-10 text-6xl">🕊️</div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-1">Pray</h3>
              <p className="text-sm italic text-pink-600 mb-3">A whisper to the skies becomes a shield for the oppressed.</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Whether in solitude, sujood, or soft breath — let your du’a ripple across borders. Gaza feels what you send with your soul.
              </p>
              <div className="mt-4 text-xs text-pink-700 font-mono">
                “Prayer is not passive. It is presence.”
              </div>
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-pink-500 border-4 border-white"></div>
            </motion.div>

            {/* BOYCOTT */}
            <motion.div
              whileHover={{ rotate: 1.5, scale: 1.02 }}
              onClick={() => {
                setShowBoycott(true);
                setShowStayInformed(false);
              }}
              className="cursor-pointer relative mb-20 md:w-2/3 ml-auto rounded-2xl bg-gradient-to-br from-green-100 to-white shadow-xl px-8 py-6 transition-all duration-300 border border-green-200"
            >
              <div className="absolute left-4 top-4 opacity-10 text-5xl">💸</div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-1">Boycott</h3>
              <p className="text-sm italic text-green-600 mb-3">You cast a vote with your wallet. Refuse to fund injustice.</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Refuse brands that profit off of occupation. Withdraw your consent. Redirect your dinar, your dirham, your dollar.
              </p>
              <div className="mt-4 text-xs text-green-700 font-mono">
                “The quietest resistance can echo the loudest.”
              </div>
              <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
            </motion.div>

            {/* SHARE */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              onClick={() => {
                setShowStayInformed(true);
                setShowBoycott(false);
              }}
              className="cursor-pointer relative mb-10 md:w-2/3 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-white shadow-xl px-8 py-6 transition-all duration-300 border border-blue-200"
            >
              <div className="absolute right-6 top-4 opacity-10 text-5xl">📡</div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-1">Share</h3>
              <p className="text-sm italic text-blue-600 mb-3">Truth must travel. You are its wings.</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Speak, post, whisper. Translate facts into feed posts. Turn silence into solidarity.
              </p>
              <div className="mt-4 text-xs text-blue-700 font-mono">
                “Every story told is a stone unturned.”
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
            </motion.div>
          </div>
        </section>

        {/* Boycott Section */}
        <AnimatePresence>
          {showBoycott && (
         <motion.div
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.3, duration: 0.6 }}
         className="bg-white rounded-lg shadow-sm p-6"
       >
         <h2 className="text-2xl font-semibold mb-6">🚫 What to Boycott</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             {
               title: 'Moroccan Boycott Guide 🇲🇦',
               description: 'A curated list of companies and products to avoid in support of Palestine from a Moroccan context.',
               file: '/assets/mar_boycott.pdf',
               status: 'Updated April 2024',
             },
             {
               title: 'Global Boycott Guide 🌍',
               description: 'International brands and corporations complicit in occupation and oppression — a global call to ethical action.',
               file: '/assets/global_boycott.pdf',
               status: 'Includes BDS recommendations',
             },
           ].map((item, index) => (
             <div
               key={index}
               className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
             >
               <div className="flex items-center space-x-3 mb-2">
                 <svg
                   className="h-5 w-5 text-red-500"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth={2}
                   viewBox="0 0 24 24"
                 >
                   <path d="M12 2L2 7h20L12 2z" />
                   <path d="M2 7v7c0 5 4 9 10 9s10-4 10-9V7" />
                 </svg>
                 <h3 className="font-medium text-gray-900">{item.title}</h3>
               </div>
               <p className="text-sm text-gray-600">{item.description}</p>
               <a
                 href={item.file}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block mt-3 text-sm font-medium text-red-600 underline hover:text-red-800"
               >
                 📥 Download PDF
               </a>
               <div className="mt-2 text-xs text-gray-500">{item.status}</div>
             </div>
           ))}
           <button
            onClick={() => setShowBoycott(false)}
            className="mt-12 block mx-auto text-sm text-gray-500 underline hover:text-blue-600"
          >
            Close ✖
          </button>
         </div>
       </motion.div>
       
       
          )}
        </AnimatePresence>

        {/* Stay Informed Section */}
        <AnimatePresence>
          {showStayInformed && (
          <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-xl px-8 py-12 shadow-lg max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">🕯️ Stay Informed</h3>
        
          <div className="grid md:grid-cols-3 gap-10">
            {/* Column 1: Blogs */}
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/40 hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">📚 Blogs</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <a href="https://electronicintifada.net/blog" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    The Electronic Intifada
                  </a>
                  <p className="text-xs text-gray-500">Independent news & analysis</p>
                </li>
                <li>
                  <a href="https://www.aljazeera.com/where/palestine" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    Al Jazeera Palestine
                  </a>
                  <p className="text-xs text-gray-500">Reliable coverage from the region</p>
                </li>
                <li>
                  <a href="https://www.palestinechronicle.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    The Palestine Chronicle
                  </a>
                  <p className="text-xs text-gray-500">Voices, views, & martyr counters</p>
                </li>
              </ul>
            </div>
        
            {/* Column 2: Instagram Pages */}
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/40 hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">📸 Instagram Pages</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <a href="https://www.instagram.com/eye.on.palestine" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    @eye.on.palestine
                  </a>
                  <p className="text-xs text-gray-500">Live visuals from the ground</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/everydaypalestine/" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    @everydaypalestine
                  </a>
                  <p className="text-xs text-gray-500">Gentle glimpses of daily life</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/translating_palestinee48/" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    @translating_palestine
                  </a>
                  <p className="text-xs text-gray-500">Context & clarity</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/palestine.pixel/" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    @palestine.pixel
                  </a>
                  <p className="text-xs text-gray-500">Design meets advocacy</p>
                </li>
              </ul>
            </div>
        
            {/* Column 3: Journalists */}
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/40 hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">📝 Journalists</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <a href="https://www.instagram.com/wissamgaza" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    Wissam Nassar
                  </a>
                  <p className="text-xs text-gray-500">Photojournalist from Gaza</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/abdallahalattarr" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    Abdallah Alattarr
                  </a>
                  <p className="text-xs text-gray-500">Frontline reports</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/nahed_hajjaj99" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    Nahed Hajjaj
                  </a>
                  <p className="text-xs text-gray-500">Daily IG dispatches</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/badertabash" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 underline hover:text-green-700">
                    Bader Tabash
                  </a>
                  <p className="text-xs text-gray-500">Sharing Gaza’s voice</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center">
  <p className="text-lg font-body text-gray-700 leading-relaxed">
    Your <span className="font-semibold text-blue-700">likes</span> matter.
    Your <span className="font-semibold text-blue-700">stories</span> matter.
    Your <span className="font-semibold text-blue-700">posts</span> matter.
  </p>
  <p className="mt-2 text-lg font-body text-gray-700">
    Keep <span className="font-semibold text-blue-700">sharing</span>, keep <span className="font-semibold text-blue-700">spreading</span>, and above all — keep <span className="font-semibold text-pink-600">praying</span>.
  </p>
</div>

          <button
            onClick={() => setShowStayInformed(false)}
            className="mt-12 block mx-auto text-sm text-gray-500 underline hover:text-blue-600"
          >
            Close ✖
          </button>
        </motion.section>
        
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Action;
