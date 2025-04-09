import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiHandHeartFill } from 'react-icons/ri';

const Action = () => {
  const [showBoycott, setShowBoycott] = useState(false);
  const [showStayInformed, setShowStayInformed] = useState(false);
  const [showPrayExtra, setShowPrayExtra] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-12 py-16 text-center overflow-hidden">
      <div
  className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center"
></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        <section className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <RiHandHeartFill className="w-16 h-16 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h1>
          <p className="text-lg text-gray-600">
            Peaceful, powerful ways to stand with Gaza — wherever you are.
          </p>
        </section>

        <section className="relative py-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-200 via-green-200 to-blue-200 opacity-40 rounded-full" />

            {/* PRAY */}
            <div className="flex flex-col mb-20 md:w-2/3 ml-0 md:mr-auto">
              <motion.div
                whileHover={{ rotate: -1.5, scale: 1.02 }}
                onClick={() => {
                  setShowPrayExtra(!showPrayExtra);
                }}
                className="cursor-pointer relative rounded-2xl bg-gradient-to-br from-pink-100 to-white shadow-xl px-8 py-6 transition-all duration-300 border border-pink-200"
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

              <AnimatePresence>
                {showPrayExtra && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-6 bg-white/90 rounded-2xl shadow-md px-8 py-6 border border-pink-100 text-left"
                  >
                    <h4 className="text-xl font-semibold text-pink-700 mb-2">Suggested Prayer</h4>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      اللَّهُمَّ كُنْ لِإِخْوَانِنَا فِي غَزَّةَ عَوْنًا وَنَصِيرًا، وَارْبِطْ عَلَى قُلُوبِهِمْ، وَثَبِّتْ أَقْدَامَهُمْ، وَاكْفِهِمْ شَرَّ الْمُعْتَدِينَ. 🤲
                    </p>
                    <p className="mt-3 text-sm italic text-pink-600">
                      O Allah, support our brothers and sisters in Gaza, strengthen their hearts and their steps, and protect them from the harm of the oppressors.
                    </p>
                    <button
                      onClick={() => setShowPrayExtra(false)}
                      className="mt-4 text-xs text-pink-600 underline hover:text-pink-800"
                    >
                      Close ✖
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOYCOTT */}
            <div className="flex flex-col mb-20 md:w-2/3 ml-auto">
              <motion.div
                whileHover={{ rotate: 1.5, scale: 1.02 }}
                onClick={() => {
                  setShowBoycott(!showBoycott);
                  
                }}
                className="cursor-pointer relative rounded-2xl bg-gradient-to-br from-green-100 to-white shadow-xl px-8 py-6 transition-all duration-300 border border-green-200"
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

              <AnimatePresence>
                {showBoycott && (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 bg-white/90 rounded-2xl shadow-md px-8 py-6 border border-green-100 text-left"
              >
                <h4 className="text-xl font-semibold text-green-700 mb-4">🚫 What to Boycott</h4>
              
                <p className="text-sm text-gray-700 mb-6">
                  Stay informed and make ethical choices with these curated tools and apps that help you verify if a product or company supports injustice. Whether you're shopping locally or globally, these resources empower your purchasing power. 💪
                </p>
              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {[
                    {
                      title: 'Belzamesh (بلزماش)',
                      description: 'Scan products and discover if they’re part of the boycott list. Built for everyday Moroccan consumers.',
                      link: 'https://play.google.com/store/search?q=belzamesh+%D8%A8%D9%84%D8%B2%D9%85%D8%B4&c=apps',
                      icon: '/assets/icons/belzamesh.webp'
                    },
                    {
                      title: 'Boycat',
                      description: 'Global database of companies involved in occupation. Scan or search to instantly verify products.',
                      link: 'https://play.google.com/store/apps/details?id=com.boycat.app&pli=1',
                      icon: '/assets/icons/boycat.webp'
                    },
                    {
                      title: 'No Thanks',
                      description: 'Elegant, easy-to-use boycott app with real-time updates and brand alternatives.',
                      link: 'https://play.google.com/store/apps/details?id=com.bashsoftware.boycott',
                      icon: '/assets/icons/nothanks.webp'
                    }
                  ].map((app, i) => (
                    <a
                      key={i}
                      href={app.link}
                      target="_blank"
                      className="bg-gray-50 hover:bg-gray-100 transition rounded-lg p-4 shadow-sm flex items-start space-x-4"
                    >
                      <img src={app.icon} alt={`${app.title} logo`} className="w-12 h-12 rounded" />
                      <div>
                        <h5 className="text-md font-semibold text-gray-800">{app.title}</h5>
                        <p className="text-sm text-gray-600">{app.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              
                <h5 className="text-md font-semibold text-green-700 mb-4">📄 PDF Guides</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[{
                    title: 'Moroccan Boycott Guide 🇲🇦',
                    description: 'A curated list of companies and products to avoid in support of Palestine from a Moroccan context.',
                    file: '/assets/mar_boycott.pdf',
                    status: 'Updated April 2024',
                  }, {
                    title: 'Global Boycott Guide 🌍',
                    description: 'International brands and corporations complicit in occupation and oppression — a global call to ethical action.',
                    file: '/assets/global_boycott.pdf',
                    status: 'Includes BDS recommendations',
                  }].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition">
                      <h5 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <a href={item.file} target="_blank" className="text-red-600 underline text-sm">📥 Download PDF</a>
                      <div className="text-xs text-gray-500 mt-1">{item.status}</div>
                    </div>
                  ))}
                </div>
              
                <button
                  onClick={() => setShowBoycott(false)}
                  className="mt-6 text-xs text-green-700 underline hover:text-green-900"
                >
                  Close ✖
                </button>
              </motion.div>
              
                )}
              </AnimatePresence>
            </div>

            {/* SHARE */}
            <div className="flex flex-col mb-10 md:w-2/3 mx-auto">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03 }}
                onClick={() => {
                  setShowStayInformed(!showStayInformed);
                
                }}
                className="cursor-pointer relative rounded-2xl bg-gradient-to-br from-black-100 to-white shadow-xl px-8 py-6 transition-all duration-300 border border-blue-200"
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

              <AnimatePresence>
                {showStayInformed && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-6 bg-white/90 rounded-2xl shadow-md px-8 py-6 border border-blue-100 text-left"
                  >
                    <h4 className="text-xl font-semibold text-blue-700 mb-4">🕯️ Stay Informed</h4>
                    <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                      <div>
                        <h5 className="text-base font-bold mb-2">📚 Blogs</h5>
                        <ul className="space-y-2">
                          <li><a href="https://electronicintifada.net/blog" target="_blank" className="underline hover:text-green-700">The Electronic Intifada</a> <span className="block text-xs text-gray-500">Independent news & analysis</span></li>
                          <li><a href="https://www.aljazeera.com/where/palestine" target="_blank" className="underline hover:text-green-700">Al Jazeera Palestine</a> <span className="block text-xs text-gray-500">Coverage from the region</span></li>
                          <li><a href="https://www.palestinechronicle.com/" target="_blank" className="underline hover:text-green-700">Palestine Chronicle</a> <span className="block text-xs text-gray-500">Voices & views</span></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-base font-bold mb-2">📸 Instagram Pages</h5>
                        <ul className="space-y-2">
                          <li><a href="https://www.instagram.com/eye.on.palestine" target="_blank" className="underline hover:text-green-700">@eye.on.palestine</a></li>
                          <li><a href="https://www.instagram.com/everydaypalestine/" target="_blank" className="underline hover:text-green-700">@everydaypalestine</a></li>
                          <li><a href="https://www.instagram.com/translating_palestinee48/" target="_blank" className="underline hover:text-green-700">@translating_palestine</a></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-base font-bold mb-2">📝 Journalists</h5>
                        <ul className="space-y-2">
                          <li><a href="https://www.instagram.com/wissamgaza" target="_blank" className="underline hover:text-green-700">Wissam Nassar</a></li>
                          <li><a href="https://www.instagram.com/abdallahalattarr" target="_blank" className="underline hover:text-green-700">Abdallah Alattarr</a></li>
                          <li><a href="https://www.instagram.com/nahed_hajjaj99" target="_blank" className="underline hover:text-green-700">Nahed Hajjaj</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-700">
                      Your <span className="text-blue-700 font-bold">likes</span> matter. Your <span className="text-blue-700 font-bold">stories</span> matter. Your <span className="text-blue-700 font-bold">posts</span> matter.
                      <p className="mt-1">Keep <span className="text-blue-700 font-bold">sharing</span>, keep <span className="text-blue-700 font-bold">spreading</span>, and keep <span className="text-pink-600 font-bold">praying</span>.</p>
                    </div>
                    <button
                      onClick={() => setShowStayInformed(false)}
                      className="mt-6 text-xs text-blue-600 underline hover:text-blue-800"
                    >
                      Close ✖
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

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
  <p className="mt-2 text-xs text-gray-400 font-mono tracking-wide">
By Oumoussa & Attioui
</p>
</section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Action;
