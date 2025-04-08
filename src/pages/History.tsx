import React from 'react';
import { CheckCircle, Clock, HistoryIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const gazaHistory = [
  {
    title: 'Occupation of Gaza Begins',
    date: 'June 1967',
    status: 'Completed',
    description:
      'Following the Six-Day War, Israel occupied the Gaza Strip along with the West Bank, marking the beginning of a long military presence.',
    description_ar:
      'بعد حرب الأيام الستة في عام 1967، احتلت إسرائيل قطاع غزة والضفة الغربية.'
  },
  {
    title: 'Oslo Accords and Palestinian Authority',
    date: '1993',
    status: 'Completed',
    description:
      'The Oslo Accords led to limited Palestinian self-governance in parts of Gaza and the West Bank under the newly formed Palestinian Authority.',
    description_ar:
      'أسفرت اتفاقية أوسلو عام 1993 عن تشكيل السلطة الفلسطينية ومنح حكم ذاتي محدود في قطاع غزة وأجزاء من الضفة الغربية.'
  },
 
  {
    title: 'Freedom of Gaza',
    date: 'Coming Soon',
    status: 'Pending',
    description:
      'A future we dream of: a Gaza free from blockade, occupation, and suffering — where peace, dignity, and self-determination flourish.',
    description_ar:
      'مستقبل نحلم به: غزة حرة بلا حصار أو احتلال أو معاناة، حيث تزدهر الكرامة والسلام وحق تقرير المصير.'
  }
];

function History() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-rose-50 to-green-50 px-6 md:px-12 py-16 overflow-hidden"
    >

      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/assets/kufiapattern.svg')] bg-cover bg-center"></div>

      <div className="text-center mb-12 relative z-10">
        <div className="flex justify-center mb-4">
          <HistoryIcon className="w-16 h-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">History of Gaza's Occupation</h1>
        <p className="text-lg text-gray-600">
          A bilingual timeline recounting the key milestones in Gaza's occupation and resistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {gazaHistory.map((event, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.2 }}
            key={index}
            className="relative bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start space-x-4 border-l-2 border-green-200 pl-4 pb-4">
              <div className="flex-shrink-0">
                {event.status === 'Completed' ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Clock className="h-6 w-6 text-yellow-500" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-1 text-gray-600">{event.description}</p>
                <p className="mt-2 text-right text-gray-700 font-medium">{event.description_ar}</p>
              </div>
            </div>
            {index < gazaHistory.length - 1 && (
              <svg
                className="absolute hidden md:block w-20 h-20 text-green-300 -right-10 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,50 C30,20 70,80 100,50"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
      <section className="text-center">
          <img src="/assets/watermelon.png" alt="Watermelon for Palestine" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-sm text-gray-500 italic">The watermelon has become a peaceful symbol of Palestinian resistance.</p>
        </section>
    </motion.div>
  );
}

export default History;
