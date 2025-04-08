import React from 'react';
import { motion } from "framer-motion";
import { Feather, ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

interface DuaCard {
  title: string;
  arabic?: string;
  transliteration?: string;
  translation?: string;
  description?: string;
}

const duas: DuaCard[] = [
  {
    title: "Dua For Palestine",
    arabic: "اللَّهُمَّ ٱجْعَلْ لنَا فِي هَذَا ٱلْيَوْم دُعَاءً لَا تُرَدُّ... وَقِنَا عَذَابَ النَّارِ",
    translation: "Ya Allah, bestow upon us on this day a supplication that will not be rejected... and protect us from the punishment of the Fire.",
    description: "You may recite this dua anytime, especially after your fadhu or sunnah prayers."
  },
  {
    title: "Dua for Protection",
    arabic: "اللَّهُمَّ اسْتُرْ عَوْرَاتِهِم وَآمِنْ رَوْعَاتِهِم... وَمِنْ فَوْقِهِم",
    transliteration: "Allahumma ustur ‘awraatihim wa-aamin raw’aatihim... wa min fawqihim",
    translation: "O Allah, conceal their faults, calm their fears, and protect them from before them and behind them, from their right and from their left, and from above them."
  },
  {
    title: "Dua when facing an enemy",
    arabic: "اللَّهُمَّ مُنْزِلَ الْكِتَابِ... اهْزِمْهُمْ وَزَلْزِلْهُم وَانْصُرْنَا عَلَيْهِم",
    transliteration: "Allahumma munzil al-kitabi saree’ al-hisabi... ihzimhum wa-zalzilhum wansurna ‘alayhim",
    translation: "O Allah, the revealer of the Holy Book... defeat them, and shake them, and grant us victory over them."
  },
  {
    title: "Dua for Aid",
    arabic: "اَللَّهُمَّ انْصُرْ إِخْوَانَنَا اْلمُسْتَضْعَفِيْنَ فِي غَزَّةَ وَفِيْ فِلِسْطِيْنَ",
    transliteration: "Allāhumma-nsur ikhwānanal-mustadh'afīna fī ghazzah wa fī filistīn",
    translation: "O Allah, aid our oppressed brothers (and sisters) in Gaza and Palestine."
  },
  {
    title: "Dua for Reliance on Allah",
    arabic: "حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيْلُ",
    transliteration: "Hasbuna Allah wa ni'm al-wakeel",
    translation: "Allah is sufficient for us and the best of those on whom to depend."
  },
  {
    title: "Dua for Helplessness",
    arabic: "اللهُمَّ إِنَّهُمْ مَغْلُوبُونَ فَانْتَصِرْ لَهُمْ",
    transliteration: "Allahumma inna-hum maghlooboona fantasir lahum",
    translation: "O Allah, they are helpless, so help them."
  },
  {
    title: "Dua to Aid the Oppressed",
    arabic: "اللَّهُمَّ يَا قَوِيَّ الْأَرْكَانِ... فِي فلسطين وغَزّة وكُلِّ مَكَانٍ",
    transliteration: "Allahumma ya Qawiyy al-arkaan... al-mustad'afeena fee filasteen wa ghazza wa kulli makaan",
    translation: "O Allah, be with our brethren who are oppressed in Palestine, Gaza, and everywhere else."
  },
  {
    title: "Dua for Relief",
    arabic: "اللَّهُمَّ اجْعَلْ لِمَا هُمْ فِيهِ فَرَجًا وَمَخْرَجًا... وَنِعْمَ النَّصِير",
    transliteration: "Allahumma ij’al limaa hum feehi farajan wa makhrajan... anta ni’ma al-mawla wa ni’ma an-naseer",
    translation: "O Allah, make an escape and a way out for them... You are an excellent master and an excellent helper."
  },
  {
    title: "Dua for Healing",
    arabic: "اللَّهُمَّ دَاوِي جَرْحَاهُم، وَاشْفِي مَرْضَاهُم... وَتَقَبَّلْ شُهَدَاءَهُم",
    transliteration: "Allahumma dawee jarhahum, washfee mardahum... wa taqabbal shuhadaa’ahum",
    translation: "O Allah! Cure their injured, and heal their sick, and have mercy on their dead, and accept their martyrs."
  },
  {
    title: "Dua to Rectify Affairs",
    arabic: "اللَّهُمَّ أَصْلِحْ أَحْوَالَ الْمُسْلِمِينَ فِي فِلَسْطِينَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Allahumma aslih ahwaal al-muslimeen fee filasteena yaa thal jalaali wal-ikram",
    translation: "O Allah, rectify the affairs of the Muslims in Palestine."
  },
  {
    title: "Dua to Replace Fear",
    arabic: "اللهُم كُن لأهل غزة عونًا ونصيرًا، وبدّل خوفهم أمنًا",
    transliteration: "Allahumma kun li-ahl ghazza ‘awnan wa-nasseeran, wa baddil khawfahum amnan",
    translation: "O Allah, be a support and helper for the people of Gaza, and replace their fear with security."
  },
  {
    title: "Dua for the Ummah",
    arabic: "اللَّهُمَّ أَصْلِحْ أُمَّةَ مُحَمَّدٍ... اللَّهُمَّ ارْحَمْ أُمَّةَ مُحَمَّدٍ",
    transliteration: "Allahumma aslih Ummat Muhammad... Allahumma irham Ummat Muhammad",
    translation: "O Allah, improve the state of the Ummah of Muhammad, grant them ease, and have mercy on them."
  },
  {
    title: "Dua for Patience and Victory",
    arabic: "رَبَّنَآ أَفْرِغْ عَلَيْهِم صَبْراً وَثَبِّتْ أَقْدَامَهُم وَٱنصُرْهُم عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ",
    transliteration: "Rabbana afrigh ‘alayhim sabran wa thabbit aqdaamahum wansurhum ‘ala al-qawm al-kafireen",
    translation: "Our Lord! Shower them with perseverance, make their steps firm, and give them victory over the disbelieving people."
  },
  {
    title: "Dua for Their Success",
    arabic: "رَبَّنَآ ءَاتِهِم فِى ٱلدُّنْيَا حَسَنَةً وَفِى ٱلأخِرَةِ حَسَنَةً وَقِهِم عَذَابَ ٱلنَّارِ",
    transliteration: "Rabbana aatihim fid-dunya hasanatan wa fil-akhirati hasanatan waqihim ‘adhaab an-nar",
    translation: "Our Lord! Grant them the good of this world and the Hereafter, and protect them from the torment of the Fire."
  },
  {
    title: "Dua for Trust in Allah",
    arabic: "اللَّهُمَّ ارْزُقهُم صِدْقَ التَوَكُّلِ عَلَيكَ وحُسْنُ الظَنِّ بِك",
    transliteration: "Allahumma urzuqhum sidq at-tawakkuli ‘alayka wa husn ad-dhanni bik",
    translation: "O Allah, grant them true reliance upon You, and good thoughts about You."
  },
  {
    title: "Dua to Strengthen Gaza",
    arabic: "اللّهُمَّ سَخِّرْ لأَهْلِ غَزَّةَ مَلائِكَةَ السَّمَاءِ وَجُنُودَ الأَرْضِ",
    transliteration: "Allāhumma sakhkhir li-ʾahli Ghazzah malāʾikata as-samāʾ wa junūda al-ʾarḍ",
    translation: "O Allah, subject for the people of Gaza the angels of the heavens and the soldiers of the earth."
  },
  {
    title: "Dua for Coolness and Peace",
    arabic: "اللّهُمَّ بَرْدًا وَسَلامًا عَلَى أَهْلِ غَزَّة",
    transliteration: "Allāhumma bardan wa salāman ʿalā ʾahli Ghazzah",
    translation: "O Allah, send coolness and peace upon the people of Gaza."
  },
  {
    title: "Dua to Witness Allah’s Power",
    arabic: "اللّهُمَّ بِحَقِّ عَيْنِكَ الَّتِي لَا تَنَام... فِي نَصْرِهِم",
    transliteration: "Allāhumma bi-ḥaqqi ʿaynika allati lā tanām... arinā ʿajāʾiba qudratika fī naṣrihim",
    translation: "O Allah, by Your Eye that never sleeps... show us the wonders of Your power in granting them victory."
  },
  {
    title: "Dua for Strength",
    arabic: "اللّهُمَّ اشْفِ جِرَاحَهُمْ، وَتَوَلَّ أَمْرَهُمْ، وَثَبِّتْ قُلُوبَهُمْ، وَقَوِّ عَزَائِمَهُمْ",
    transliteration: "Allāhumma ishfi jirāḥahum, wa tawalla ʾamrahum, wa thabbit qulūbahum, wa qawwi ʿazāʾimahum",
    translation: "O Allah, heal their wounds, take charge of their affairs, strengthen their hearts, and reinforce their determination."
  },
  {
    title: "Dua for Steadfastness",
    arabic: "اللّهُمَّ ارْبِطْ عَلَى قُلُوبِ أَهْلِ غَزَّةَ، وَصَبِّرْهُمْ وَثَبِّتْهُمْ",
    transliteration: "Allāhumma rbiṭ ʿalā qulūbi ʾahli Ghazzah, wa ṣabbirhum wa thabbit'hum",
    translation: "O Allah, tie steadfastness upon the hearts of the people of Gaza, grant them patience and firmness."
  },
  {
    title: "Dua Against the Oppressors",
    arabic: "اللّهُمَّ اكْفِهِمْ شَرَّ الأَعْدَاءِ، وَمَكْرَ الحَسَدَةِ، وَخُذْ حَقَّهُمْ مِمَّنْ ظَلَمَهُمْ",
    transliteration: "Allāhumma ikfihim sharra al-aʿdāʾ, wa makra al-ḥasada, wa khudh ḥaqqahum mimman ẓalamahum",
    translation: "O Allah, protect them from the evil of enemies, the plotting of the envious, and take their right from those who have wronged them."
  },
  {
    title: "Dua for Peace in Homeland",
    arabic: "اللّهُمَّ اجْعَلْهُمْ آمِنِينَ فِي أَوْطَانِهِم، مُطْمَئِنِينَ فِي دِيَارِهِم",
    transliteration: "Allāhumma ijʿalhum āminīn fī ʾawṭānihim, muṭmaʾnīn fī diyārihim",
    translation: "O Allah, make them safe in their homelands, secure in their dwellings."
  }, {
    title: "Dua for Divine Support for Gaza",
    arabic: "اللّهُمَّ سَخِّرْ لأَهْلِ غَزَّةَ مَلائِكَةَ السَّمَاءِ وَجُنُودَ الأَرْضِ",
    transliteration: "Allāhumma sakhkhir li-ʾahli Ghazzah malāʾikata as-samāʾ wa junūda al-ʾarḍ",
    translation: "O Allah, subject for the people of Gaza the angels of the heavens and the soldiers of the earth."
  },
  {
    title: "Dua for Peace and Coolness upon Gaza",
    arabic: "اللّهُمَّ بَرْدًا وَسَلامًا عَلَى أَهْلِ غَزَّة",
    transliteration: "Allāhumma bardan wa salāman ʿalā ʾahli Ghazzah",
    translation: "O Allah, (send upon them) coolness and peace upon the people of Gaza."
  },
  {
    title: "Dua for Victory by Allah’s Power",
    arabic: "اللّهُمَّ بِحَقِّ عَيْنِكَ الَّتِي لَا تَنَام، وَعِزِّكَ الَّذِي لَا يُضَام، أَرِنَا عَجَائِبَ قُدْرَتِكَ فِي نَصْرِهِم",
    transliteration: "Allāhumma bi-ḥaqqi ʿaynika allatī lā tanām, wa ʿizzika allaḏī lā yuḍām, arinā ʿajāʾiba qudratika fī naṣrihim",
    translation: "O Allah, by Your Eye that never sleeps and Your Might that is never overcome, show us the wonders of Your power in granting them victory."
  },
  {
    title: "Dua for Healing, Strength and Support",
    arabic: "اللّهُمَّ اشْفِ جِرَاحَهُمْ، وَتَوَلَّ أَمْرَهُمْ، وَثَبِّتْ قُلُوبَهُمْ، وَقَوِّ عَزَائِمَهُمْ",
    transliteration: "Allāhumma ishfi jirāḥahum, wa tawalla ʾamrahum, wa thabbit qulūbahum, wa qawwi ʿazāʾimahum",
    translation: "O Allah, heal their wounds, take charge of their affairs, strengthen their hearts, and reinforce their determination."
  },
  {
    title: "Dua for Patience and Steadfastness",
    arabic: "اللّهُمَّ ارْبِطْ عَلَى قُلُوبِ أَهْلِ غَزَّةَ، وَصَبِّرْهُمْ وَثَبِّتْهُمْ",
    transliteration: "Allāhumma rbiṭ ʿalā qulūbi ʾahli Ghazzah, wa ṣabbirhum wa thabbit'hum",
    translation: "O Allah, tie steadfastness upon the hearts of the people of Gaza, grant them patience and firmness."
  },
  {
    title: "Dua for Protection from Enemies and Injustice",
    arabic: "اللّهُمَّ اكْفِهِمْ شَرَّ الأَعْدَاءِ، وَمَكْرَ الحَسَدَةِ، وَخُذْ حَقَّهُمْ مِمَّنْ ظَلَمَهُمْ",
    transliteration: "Allāhumma ikfihim sharra al-aʿdāʾ, wa makra al-ḥasada, wa khudh ḥaqqahum mimman ẓalamahum",
    translation: "O Allah, protect them from the evil of enemies, the plotting of the envious, and take their right from those who have wronged them."
  },
  {
    title: "Dua for Peace in Homeland",
    arabic: "اللّهُمَّ اجْعَلْهُمْ آمِنِينَ فِي أَوْطَانِهِم، مُطْمَئِنِينَ فِي دِيَارِهِم",
    transliteration: "Allāhumma ijʿalhum āminīn fī ʾawṭānihim, muṭmaʾnīn fī diyārihim",
    translation: "O Allah, make them safe in their homelands, secure in their dwellings."
  },
  {
    title: "Dua for Divine Victory Like That Granted to the Prophet",
    arabic: "اللّهُمَّ إِنِّي أَسْأَلُكَ النَّصْرَ لِأَهْلِ غَزَّةِ الَّذِينَ نَصَرْتَ بِهِ رَسُولَكَ وَفَرَّقْتَ بِهِ بَيْنَ الْحَقِّ وَالْبَاطِلِ حَتَّى أَقَمْتَ بِهِ دِينَكَ وَأَفْلَجْتَ بِهِ حَاجَتَكَ يَا مَنْ هُوَ وَلِيُّ ذَٰلِكَ وَالْقَادِرُ عَلَيْهِ",
    transliteration: "Allāhumma innī as'aluka an-naṣra li-ahlī Ghazzah al-ladhīna naṣarta bihī rasūlaka wa farraqta bihī bayna al-ḥaqi wal-bāṭil ḥattā aqamta bihī dīnaka wa aflajta bihī ḥājataka yā man huwa walīyu dhālika wal-qādiru ʿalayh",
    translation: "O Allah, I ask You for victory for the people of Gaza, the kind of victory by which You aided Your Messenger, and distinguished between truth and falsehood, until Your religion was established and Your will fulfilled. O You who is the Guardian and Powerful over all things."
  },
  {
    title: "Dua Against the Oppressors",
    arabic: "اللّهُمَّ عَلَيْكَ بِالصَّهَائِينَةِ",
    transliteration: "Allāhumma ʿalayka bi-l-ṣahā'īnī",
    translation: "O Allah, deal with the Zionists."
  },
  {
    title: "Dua for Palestine",
    arabic: `اللَّهُمَّ ٱجْعَلْ لنَا فِي هَذَا ٱلْيَوْم دُعَاءً لَا تُرَدُّ، وَٱفْتَحْ لنَا بََابًَا فِي ٱلْْجَنَّةِ لَا يُسَدُّ، وَٱحْشُرْنَا فِي زُمْرَةِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، اللَّهُمَّ حَبِّبْ خَيْرَ خَلْقِكَ فِينَا، وَمِنْ حَوْضِ نَبِيِّكَ ٱسْقِنَا، وَفِي جَنَّتِكَ آوِنَا، وَبِرَحْمَتِكَ ٱحْتَوِنَا، وَأُمْنِيَّتَنَا أَعْطِنَا، وَبِفَضْلِكَ أَغْنِنَا، وَلِطَاعَتِكَ ٱهْدِنَا، وَمِنْ عَذَابِ النَّارِ ٱحْمِنَا، وَمِنْ شَرِّ كُلِّ حَاسِدٍ ٱكْفِنَا
    
  اللَّهُمَّ يَا مُنْتَهَى كُلِّ نَجْوَى، وَيَا سَامِعَ كُلِّ شَكْوَى، يَا نَاصِرَ الْمَظْلُومِينَ، وَيَا رَاحِمَ الضُّعَفَاءِ وَالمَسَاكِينِ، ٱنْصُرْ إِخْوَانَنَا الْمُسْتَضْعَفِينَ فِي كُلِّ مَكَانٍ، وَخَاصَّةً غَزَّةَ وَفِلَسْطِين، يَا أَرْحَمَ الرَّاحِمِينَ
    
  اللَّهُمَّ دَاوِ جَرْحَاهُمْ، وَٱشْفِ مَرْضَاهُمْ، وَأَطْعِمْ جَوْعَاهُمْ، وَاسْقِ عَطْشَاهُمْ، وَادْفِئْ بَرْدَاهُمْ، يَا رَبَّ الْعَالَمِينَ. اللَّهُمَّ إِنَّهُمْ حُفَاةٌ فَاحْمِلْهُمْ، وَعُرَاةٌ فَاكْسُهُمْ، وَمَظْلُومُونَ فَانْصُرْهُمْ، يَا مُغِيثَ المُسْتَغِيثِينَ
    
  اللَّهُمَّ زَمِّلْهُم بِرَحْمَتِكَ، وَأَسْكِنْهُمْ بِمَوَدَّتِكَ، وَقَوِّهِمْ بِقُوَّتِكَ، وَثَبِّتْهُمْ بِعِزَّتِكَ. اللَّهُمَّ ٱحْفَظْهُمْ مِنْ كُلِّ جَبَّارٍعَنِيدٍ، وَأَبْعِدْهُمْ مِنْ كُلِّ ظَلَّامٍ لِلْعَبِيدِ. اللَّهُمَّ ٱجْعَلْ جَمِيعَ خَوْفِهِمْ أَمْنًا، وَجَمِيعَ هَمِّهِمْ فَرَجًا، وَجَمِيعَ ضِيْقِهِمْ مَخْرَجًا، وَجَمِيعَ حُزْنِهِمْ فَرَحًا، يَا رَبَّ الْعَالَمِينَ
  
  رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الْآخِرَةِ حَسَنَةً، وَقِنَا عَذَابَ النَّارِ`,
    transliteration: `Allāhumma ajʿal lanā fī hādhā al-yawm duʿāʾan lā turaddu, wa-ftaḥ lanā bāban fī al-jannati lā yusaddu, wa-ḥshurnā fī zumrati sayyidinā Muḥammad ṣallā Allāhu ʿalayhi wa sallam, Allāhumma ḥabbib khayra khalqika fīnā, wa min ḥawḍi nabiyyika asqinā, wa fī jannatika āwinā, wa biraḥmatika iḥtawinā, wa umniyyatanā aʿṭinā, wa bifaḍlika aghninā, waliṭāʿatika ihdinā, wa min ʿadhābi al-nār iḥminā, wa min sharri kulli ḥāsid in akfinā.
    
  Allāhumma yā muntahā kulli najwā, wa yā sāmiʿa kulli shakwā, yā nāṣira al-maẓlūmīn, wa yā rāḥima al-ḍuʿafāʾi wal-masākīn, unsur ikhwānanā al-mustaḍʿafīn fī kulli makān, wa khāṣṣatan Ghazzah wa Filasṭīn, yā arḥama al-rāḥimīn.
    
  Allāhumma dāwi jarḥāhum, wa ishfi marḍāhum, wa aṭʿim jawʿāhum, wa isqi ʿaṭshāhum, wa idfiʾ bardāhum, yā Rabb al-ʿālamīn. Allāhumma innahum ḥufāt faḥmilhum, wa ʿurāt fakshuhum, wa maẓlūmūn fa-nṣurhum, yā mughītha al-mustaghīthīn.
    
  Allāhumma zammilhum biraḥmatika, wa askinhum bimawaddatika, wa qawwihim biquwwatika, wa thabbit'hum biʿizzatika. Allāhumma iḥfaẓhum min kulli jabbārin ʿanīd, wa abʿid'hum min kulli ẓallāmin lil-ʿabīd. Allāhumma ajʿal jamīʿa khawfihim amnan, wa jamīʿa hammihim farajan, wa jamīʿa ḍīqihim makhrajan, wa jamīʿa ḥuznihim faraḥan, yā Rabb al-ʿālamīn.
    
  Rabbana ātinā fī al-dunyā ḥasanah, wa fī al-ākhirati ḥasanah, wa qinā ʿadhāba al-nār.`,
    translation: `Ya Allah, bestow upon us on this day a supplication that will not be rejected, and open for us a door in Paradise that will not be shut. Gather us in the company of our beloved Prophet Muhammad (peace be upon him). 
  
  Ya Allah, make the best of Your creation beloved to us, and from the 'hawdh' (pond) of Your Prophet, quench us. In Your Paradise, grant us refuge. With Your mercy, envelop us; grant us our wishes; enrich us with Your bounty; guide us to Your obedience; protect us from the punishment of the Fire and suffice us against the evil of every envier.
  
  Ya Allah, the One who hears every plea and listens to every complaint, the Supporter of the oppressed, the Merciful to the weak and the needy — aid our oppressed brothers and sisters everywhere, especially in Gaza and Palestine, O Most Merciful of the merciful.
  
  Ya Allah, heal their wounds, cure their sick, feed their hungry, quench their thirst, warm their cold. O Lord of the Worlds, they are barefoot — carry them; unclothed — clothe them; oppressed — support them. O Helper of the helpless.
  
  Ya Allah, envelop them in Your mercy, calm them with Your love, strengthen them with Your power, and make them firm with Your might. 
  
  Ya Allah, protect them from every stubborn tyrant, and distance them from every oppressor of Your servants. Turn all their fear into safety, their worries into ease, their hardship into relief, and their sorrow into joy. O Lord of the Worlds.
  
  Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.`
  }
]


const palestinianHoverColors = [
  "hover:bg-red-100/60",
  "hover:bg-green-100/60",
  "hover:bg-black/10",
  "hover:bg-white/70"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const CARDS_PER_PAGE = 6;

function Prayer() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(duas.length / CARDS_PER_PAGE);

  const paginatedDuas = duas.slice(
    page * CARDS_PER_PAGE,
    (page + 1) * CARDS_PER_PAGE
  );

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

      {/* Content container aligned with Welcome page */}
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {paginatedDuas.map((dua, index) => {
            const hoverClass = useMemo(
              () => palestinianHoverColors[Math.floor(Math.random() * palestinianHoverColors.length)],
              []
            );

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 ${hoverClass}`}
              >
                <div className="p-6 flex flex-col h-full justify-between">
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">{dua.title}</h3>

                  {dua.arabic && (
                    <p className="text-2xl font-arabic text-gray-800 mb-4 leading-loose text-right">
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
                      <p className="text-base text-gray-700">
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
        <section className="mt-16 text-center relative z-10">
  <img src="/assets/watermelon.png" alt="Watermelon for Palestine" className="w-16 h-16 mx-auto mb-4" />
  <p className="text-sm text-gray-500 italic">
    The watermelon has become a peaceful symbol of Palestinian resistance.
  </p>
</section>
      </div>

      {/* Pagination Buttons */}
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 0))}
        disabled={page === 0}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl p-4 rounded-r-xl text-gray-600 hover:bg-gray-100 disabled:opacity-30 z-50"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
        disabled={page === totalPages - 1}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl p-4 rounded-l-xl text-gray-600 hover:bg-gray-100 disabled:opacity-30 z-50"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

export default Prayer;
