import React from 'react';
import { FaBullhorn, FaBan } from 'react-icons/fa';
import { PiHandPalmDuotone } from 'react-icons/pi';
import { HiOutlineDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Action = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-16 py-20 overflow-hidden">
      {/* Keffiyeh Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {/* Intro */}
        <section className="text-center">
          <h1 className="text-5xl font-serif text-gray-900 mb-4">✊ How You Can Help</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Peaceful, powerful ways to stand with Gaza — wherever you are.
          </p>
        </section>

        {/* Actions */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '🕊️ Pray',
              icon: <PiHandPalmDuotone className="text-5xl text-pink-500" />,
              bg: 'bg-pink-50',
              desc: 'Your prayers are powerful. Send a whisper to the heavens for Gaza.',
            },
            {
              title: '🚫 Boycott',
              icon: <FaBan className="text-5xl text-green-500" />,
              bg: 'bg-green-50',
              desc: 'Support with conscious choices. Use your spending power for justice.',
            },
            {
              title: '📢 Share',
              icon: <FaBullhorn className="text-5xl text-blue-500" />,
              bg: 'bg-blue-50',
              desc: 'Break the silence. Speak the truth with love on your platforms.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className={`rounded-2xl p-6 shadow-md ${item.bg} text-center transition`}
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* What to Boycott */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">🚫 What to Boycott</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Moroccan Boycott Guide 🇲🇦',
                description: 'A curated list of companies and products to avoid in support of Palestine from a Moroccan context.',
                file: '/assets/mar_boycott.pdf',
                status: 'Updated April 2024',
              },
              {
                title: 'Global Boycott Guide 🌍',
                description: 'International brands complicit in oppression — a global call to ethical action.',
                file: '/assets/global_boycott.pdf',
                status: 'Includes BDS recommendations',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition duration-200 shadow-sm"
              >
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-red-600 hover:text-red-800 underline"
                >
                  📥 Download PDF
                </a>
                <div className="mt-1 text-xs text-gray-500">{item.status}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Stay Informed */}
        <section className="bg-white/80 backdrop-blur-md rounded-xl px-8 py-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">🕯️ Stay Informed</h3>
          <div className="grid md:grid-cols-3 gap-10 relative text-left">
            {/* Trusted Blogs */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-green-700">📚 Trusted Blogs</h4>
              {[
                {
                  title: 'The Electronic Intifada (EI)',
                  url: 'https://electronicintifada.net/blog',
                  desc: 'Independent news + political analysis of Palestine.',
                },
                {
                  title: 'Al Jazeera – Palestine',
                  url: 'https://www.aljazeera.com/where/palestine',
                  desc: 'Consistent coverage & visual journalism.',
                },
                {
                  title: 'The Palestine Chronicle',
                  url: 'https://www.palestinechronicle.com/',
                  desc: 'Articles, commentary, and a martyrs counter.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    className="font-medium text-gray-800 underline hover:text-green-800"
                  >
                    {item.title}
                  </a>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Instagram Pages */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-rose-700">📸 Instagram Pages</h4>
              {[
                { handle: '@eye.on.palestine', link: 'https://www.instagram.com/eye.on.palestine', desc: 'Frontline visuals & stories' },
                { handle: '@everydaypalestine', link: 'https://www.instagram.com/everydaypalestine/', desc: 'Daily life, softly documented' },
                { handle: '@translating_palestine', link: 'https://www.instagram.com/translating_palestinee48/', desc: 'Translation + context' },
                { handle: '@palestine.pixel', link: 'https://www.instagram.com/palestine.pixel/', desc: 'Design & infographics' },
              ].map((ig, idx) => (
                <div key={idx}>
                  <a
                    href={ig.link}
                    target="_blank"
                    className="font-medium text-gray-800 underline hover:text-rose-700"
                  >
                    {ig.handle}
                  </a>
                  <p className="text-sm text-gray-600">{ig.desc}</p>
                </div>
              ))}
            </div>

            {/* Gaza Journalists */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-purple-700">📝 Gaza Journalists (IG)</h4>
              {[
                { name: 'Wissam Nassar', link: 'https://www.instagram.com/wissamgaza', desc: 'Photojournalist documenting Gaza' },
                { name: 'Abdallah Alattarr', link: 'https://www.instagram.com/abdallahalattarr', desc: 'On-the-ground reporting' },
                { name: 'Nahed Hajjaj', link: 'https://www.instagram.com/nahed_hajjaj99', desc: 'First-hand daily dispatches' },
                { name: 'Bader Tabash', link: 'https://www.instagram.com/badertabash', desc: 'Live coverage from Gaza' },
              ].map((j, idx) => (
                <div key={idx}>
                  <a
                    href={j.link}
                    target="_blank"
                    className="font-medium text-gray-800 underline hover:text-purple-700"
                  >
                    {j.name}
                  </a>
                  <p className="text-sm text-gray-600">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Watermelon Footer */}
        <section className="text-center">
          <img src="/assets/watermelon.png" alt="Watermelon for Palestine" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-sm text-gray-500 italic">
            The watermelon has become a peaceful symbol of Palestinian resistance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Action;
