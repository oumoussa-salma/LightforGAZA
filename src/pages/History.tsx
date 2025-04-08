
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, HistoryIcon } from 'lucide-react';

const gazaHistory = [
  {
    title: "Balfour Declaration",
    date: "1917",
    status: "Completed",
    description:
      'During WWI, Britain issued the Balfour Declaration, promising a "national home for the Jewish people" in Palestine, then under Ottoman control. This alarmed the Arab population, who were the majority.',
    description_ar:
      "خلال الحرب العالمية الأولى، أصدرت بريطانيا إعلان بلفور، واعدةً بـ \"وطن قومي للشعب اليهودي\" في فلسطين، التي كانت تحت السيطرة العثمانية آنذاك. وقد أثار هذا قلق السكان العرب، الذين كانوا يشكلون الأغلبية."
  },
  {
    title: "British Mandate & Growing Tensions",
    date: "1920–1947",
    status: "Completed",
    description:
      "Britain took control of Palestine after WWI. Jewish immigration rose, especially due to Nazi persecution. Clashes occurred with Palestinian Arabs, who resisted both British rule and Jewish immigration. Britain struggled with the violence and passed the issue to the United Nations.",
    description_ar:
      "تسلّمت بريطانيا السيطرة على فلسطين بعد الحرب العالمية الأولى. زادت الهجرة اليهودية، خاصة بسبب الاضطهاد النازي. وقعت اشتباكات مع العرب الفلسطينيين الذين قاوموا كل من الحكم البريطاني والهجرة اليهودية. عانت بريطانيا من العنف وأحالت القضية إلى الأمم المتحدة."
  },
  {
    title: "United Nations Partition Plan",
    date: "1947",
    status: "Completed",
    description:
      "The UN proposed dividing Palestine into two states: one Jewish, one Arab. Jews accepted the plan, but Arabs rejected it, feeling it was unfair. Violence broke out between both communities.",
    description_ar:
      "اقترحت الأمم المتحدة تقسيم فلسطين إلى دولتين: واحدة يهودية، وأخرى عربية. قبل اليهود بالخطة، لكن العرب رفضوها، شعروا بأنها غير عادلة. اندلعت أعمال العنف بين المجتمعين."
  },
  {
    title: "Creation of Israel & First Arab-Israeli War",
    date: "1948",
    status: "Completed",
    description:
      "On May 14, 1948, Israel declared independence. Neighboring Arab countries attacked Israel. Israel won and expanded its territory. Over 700,000 Palestinians were displaced or fled, an event known as the Nakba (catastrophe).",
    description_ar:
      "في 14 مايو 1948، أعلنت إسرائيل استقلالها. شنت الدول العربية المجاورة هجومًا على إسرائيل. فازت إسرائيل ووسعت أراضيها. تم تهجير أو نزوح أكثر من 700,000 فلسطيني، وهو الحدث المعروف بالنكبة (الكارثة)."
  },
  {
    title: "Occupation & Refugee Crisis",
    date: "1949–1967",
    status: "Completed",
    description:
      "No peace was reached, and Palestinians lived in refugee camps, mainly in Gaza, the West Bank, Lebanon, and Jordan. The Gaza Strip was controlled by Egypt, and the West Bank by Jordan. In 1964, the PLO (Palestine Liberation Organization) was founded to fight for Palestinian liberation.",
    description_ar:
      "لم يتم التوصل إلى السلام، وعاش الفلسطينيون في مخيمات اللاجئين، خاصة في غزة، الضفة الغربية، لبنان، والأردن. كان قطاع غزة تحت سيطرة مصر، والضفة الغربية تحت سيطرة الأردن. في عام 1964، تم تأسيس منظمة التحرير الفلسطينية (PLO) للقتال من أجل تحرير فلسطين."
  },
  {
    title: "Six-Day War",
    date: "1967",
    status: "Completed",
    description:
      "Israel fought Egypt, Syria, and Jordan. Israel captured the West Bank (including East Jerusalem), Gaza Strip, Sinai Peninsula (later returned), and Golan Heights. This marked the beginning of the Israeli occupation of Palestinian territories.",
    description_ar:
      "حاربت إسرائيل كلاً من مصر وسوريا والأردن. واستولت إسرائيل على الضفة الغربية (بما في ذلك القدس الشرقية)، وقطاع غزة، وشبه جزيرة سيناء (التي أُعيدت لاحقًا)، ومرتفعات الجولان. ويمثّل هذا بداية الاحتلال الإسرائيلي للأراضي الفلسطينية."
  },
  {
    title: "First Intifada (Uprising)",
    date: "1987",
    status: "Completed",
    description:
      "Palestinians in the West Bank and Gaza rose up against Israeli occupation, with protests, strikes, and stone-throwing. The uprising lasted until 1993, resulting in many deaths and injuries.",
    description_ar:
      "انتفض الفلسطينيون في الضفة الغربية وقطاع غزة ضد الاحتلال الإسرائيلي، من خلال احتجاجات، وإضرابات، ورشق الحجارة. واستمرت الانتفاضة حتى عام 1993، وأسفرت عن العديد من القتلى والجرحى."
  },
  {
    title: "Oslo Accords",
    date: "1993",
    status: "Completed",
    description:
      "A peace process began with mutual recognition between the PLO and Israel. The Palestinian Authority (PA) was created to govern parts of the West Bank and Gaza. Hopes for a two-state solution rose, but settlements and violence of Israel continued.",
    description_ar:
      "بدأت عملية السلام باعتراف متبادل بين منظمة التحرير الفلسطينية وإسرائيل. تم إنشاء السلطة الفلسطينية لإدارة أجزاء من الضفة الغربية وقطاع غزة. ارتفعت الآمال في حل الدولتين، لكن الاستيطان والعنف الإسرائيلي استمرا."
  },
  {
    title: "Second Intifada",
    date: "2000",
    status: "Completed",
    description:
      "A second, more violent uprising began after failed peace talks and a provocative visit to the Al-Aqsa Mosque by Israeli leader Ariel Sharon. Suicide bombings and military crackdowns followed, resulting in thousands of deaths on both sides.",
    description_ar:
      "اندلعت انتفاضة ثانية أكثر عنفاً بعد فشل محادثات السلام وزيارة استفزازية قام بها الزعيم الإسرائيلي أريئيل شارون إلى المسجد الأقصى. تلتها تفجيرات انتحارية وحملات قمع عسكرية، مما أدى إلى مقتل الآلاف من الجانبين."
  },
  {
    title: "Israeli Withdrawal from Gaza",
    date: "2005",
    status: "Completed",
    description:
      "Israel withdrew settlers and troops from Gaza but still controlled its borders, airspace, and sea access. In 2006, Hamas, an Islamist group, won elections in Gaza. In 2007, Hamas ruled Gaza, splitting governance between Hamas in Gaza and the Palestinian Authority (Fatah) in the West Bank.",
    description_ar:
      "سحبت إسرائيل المستوطنين والقوات من غزة لكنها استمرت في السيطرة على الحدود والمجال الجوي والمنافذ البحرية. في عام 2006، فازت حركة حماس، وهي جماعة إسلامية، في الانتخابات في غزة. وفي عام 2007، حكمت حماس غزة، مما أدى إلى تقسيم الحكم بين حماس في غزة والسلطة الفلسطينية (فتح) في الضفة الغربية."
  },
  {
    title: "Repeated Wars in Gaza",
    date: "2008–2021",
    status: "Completed",
    description:
      "Several wars broke out between Israel and Hamas, especially in 2008–09, 2012, 2014, and 2021. Thousands of Palestinians, including many civilians, were killed. Gaza was under blockade, causing severe humanitarian crises.",
    description_ar:
      "اندلعت عدة حروب بين إسرائيل وحماس، خاصة في 2008-2009، 2012، 2014، و2021. قُتل الآلاف من الفلسطينيين، بما فيهم العديد من المدنيين. كانت غزة تحت الحصار، مما أدى إلى أزمة إنسانية شديدة."
  },
  {
    title: "Major Escalation",
    date: "2023–2024",
    status: "Completed",
    description:
      "On October 7, 2023, Hamas launched a major surprise attack inside Israel to reclaim lands and resist occupation. Israel responded with massive airstrikes and a ground invasion of Gaza. Over 33,000 Palestinians were killed by 2024 (mostly civilians), according to humanitarian reports. There has been widespread international concern about war crimes, displacement, and destruction caused by the Israeli occupation. Calls for ceasefires have been made, but no long-term peace has been reached yet.",
    description_ar:
      "في 7 أكتوبر 2023، شنت حركة حماس هجومًا مفاجئًا كبيرًا داخل إسرائيل لاستعادة الأراضي ومقاومة الاحتلال. ردت إسرائيل بضربات جوية مكثفة وغزو بري لقطاع غزة. قُتل أكثر من 33,000 فلسطيني بحلول عام 2024 (غالبيتهم من المدنيين)، وفقًا للتقارير الإنسانية. كان هناك قلق دولي واسع النطاق بشأن جرائم الحرب، والنزوح، والدمار الذي تسبب فيه الاحتلال الإسرائيلي. تم الدعوة إلى وقف إطلاق النار، لكن لم يتم التوصل إلى سلام طويل الأمد بعد."
  },
  {
    title: "Current Situation",
    date: "2024–2025",
    status: "Pending",
    description:
      "No peace agreement is in sight, with Gaza destroyed, the West Bank under Israeli control, and settlement expansion continuing. Palestinians seek an end to the occupation, the right of return, and recognition of an independent state, while Israel and its partners in crime seek to exterminate the people of Gaza and seize Gaza and all Palestinian lands.",
    description_ar:
      "لا يوجد اتفاق سلام في الأفق، مع تدمير غزة، والضفة الغربية تحت السيطرة الإسرائيلية، وتوسع الاستيطان مستمر. يسعى الفلسطينيون إلى إنهاء الاحتلال، وحق العودة، واعتراف بدولة مستقلة، بينما تسعى إسرائيل وشركاؤها في الجرائم إلى إبادة شعب غزة واحتلال غزة وجميع الأراضي الفلسطينية."
  },
  {
    title: "Freedom of Palestine",
    date: "Coming Soon",
    status: "Pending",
    description:
      'A future we dream of: a Gaza free from blockade, occupation, and suffering — where peace, dignity, and self-determination flourish. And a free, independent state called Palestine, with its capital "Al-Quds."',
    description_ar:
      'مستقبل نحلم به: غزة حرة من الحصار والاحتلال والمعاناة — حيث يزدهر السلام والكرامة وحق تقرير المصير. ودولة حرة ومستقلة تُدعى فلسطين وعاصمتها "القدس".'
  }
];


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
          <p className="text-sm text-gray-500 mb-1">{currentEvent.date}</p>
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
        <p className="mt-6 text-sm text-gray-500 italic">
          Made with <span className="text-rose-500 font-semibold">Niyya</span> and <span className="text-green-600 font-semibold">Ajjr</span> 
          of everyone who prays — so <span className="font-semibold text-gray-600">pray</span>, use it, and share it 💚
        </p>
        <p className="mt-1 text-xs text-gray-400 font-mono tracking-wide">
          By Oumoussa & Attioui
        </p>
      </section>
    </motion.div>
  );
};

export default History;
