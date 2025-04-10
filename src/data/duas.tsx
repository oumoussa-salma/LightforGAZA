// Sample Dua interface (keep your existing `duas` array)
export interface DuaCard {
  title: string;
  arabic?: string;
  transliteration?: string;
  translation?: string;
  description?: string;
}

export const duas: DuaCard[] = [
    {
      title: "Du'a for their Protection",
      arabic: "اللَّهُمَّ اسْتُرْ عَوْرَاتِهِم وَآمِنْ رَوْعَاتِهِم وَاحْفَظْهُم مِنْ بَيْنِ أَيْدِيهِم وَمِنْ خَلْفِهِم وَعَنْ أَيمَانِهِم وَعَنْ شَمَائلِهِم وَمِنْ فَوْقِهِم",
      transliteration: "Allahumma ustur ‘awraatihim wa-aamin raw’aatihim wahfadhhum min bayni aydeehim wa min khalfihim wa ‘an aymaanihim wa ‘an shamaa’ilihim wa min fawqihim",
      translation: "O Allah, conceal their faults, calm their fears, and protect them from before them and behind them, from their right and from their left, and from above them.",
      description: "Taken from the morning and evening remembrances of the Prophet ﷺ, this du'a seeks Allah’s protection from every direction. It is a befitting du'a for the people of Gaza, who are surrounded by hostility and violence."
    },
    {
      title: "Dua to Defeat the Combined Forces",
      arabic: "اَللّٰهُمَّ مُنْزِلَ الْكِتَابِ، سَرِيْعَ الْحِسَابِ، اِهْزِمِ الْأَحْزَابَ، اَللّٰهُمَّ اهْزِمْهُمْ وَزَلْزِلْهُمْ",
      transliteration: "Allahumma munzil al-kitaab, saree’ al-hisaab, ihzim al-ahzaab, Allahumma ihzimhum wa zalzilhum",
      translation: "O Allah, Revealer of the Book, Swift to account, defeat the combined forces. O Allah, defeat them and shake them.",
      description: "A powerful du'a of the Prophet ﷺ for defeating large allied forces. This is distinct from the other enemy-related du'a due to its specific mention of 'al-Ahzab' (the confederates)."
    },  
    {
      title: "Du'a when Facing an Enemy",
      arabic: "اللَّهُمَّ مُنْزِلَ الْكِتَابِ سَرِيعَ الْحِسَابِ مُجْرِيَ السَّحَابِ هَازِمَ الأَحْزَابِ اهْزِمْهُمْ وَزَلْزِلْهُم وَانْصُرْنَا عَلَيْهِمْ",
      transliteration: "Allahumma munzil al-kitabi saree’ al-hisabi mujriya as-sahaabi hazim al-ahzaabi ihzimhum wa-zalzilhum wansurna ‘alayhim",
      translation: "O Allah, the revealer of the Holy Book, and the swift in reckoning, and the mover of the clouds, and the defeater of the clans; defeat them, and shake them, and grant us victory over them.",
      description: "This du'a is inspired by a combination of du'as from hadith describing the Prophet’s ﷺ supplications upon facing an enemy – a powerful reminder of Allah’s ability to gather and bestow, to hold to account, and to take away."
    },  {
      title: "Dua for Aid",
      arabic: "اَللَّهُمَّ انْصُرْ إِخْوَانَنَا اْلمُسْتَضْعَفِيْنَ فِي غَزَّةَ وَفِيْ فِلِسْطِيْنَ",
      transliteration: "Allāhumma-nsur ikhwānanal-mustadh'afīna fī ghazzah wa fī filistīn",
      translation: "O Allah, aid our oppressed brothers (and sisters) in Gaza and Palestine.",
      description: "A concise but deeply powerful plea for divine support. This du'a calls on Allah to extend His victory and assistance to those who are weak and oppressed, highlighting the urgency and moral clarity of standing with the people of Gaza and Palestine."
    },
    {
      title: "Dua for Reliance on Allah",
      arabic: "حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيْلُ",
      transliteration: "Hasbuna Allah wa ni'm al-wakeel",
      translation: "Allah is sufficient for us and the best of those on whom to depend.",
      description: "A timeless declaration of complete trust in Allah's power and protection. This du'a reminds us that no matter how overwhelming the oppression or injustice, reliance on Allah is both a shield and a source of strength."
    },
    {
      title: "Dua for Helplessness",
      arabic: "اللهُمَّ إِنَّهُمْ مَغْلُوبُونَ فَانْتَصِرْ لَهُمْ",
      transliteration: "Allahumma inna-hum maghlooboona fantasir lahum",
      translation: "O Allah, they are helpless, so help them.",
      description: "A raw and honest cry for divine justice. This du'a reflects the dire condition of the oppressed — those without power or recourse — and calls on Allah, the ultimate source of victory, to intervene and defend them."
    },  
    {
      title: "Du'a to Aid the Oppressed",
      arabic: "اللَّهُمَّ يَا قَوِيَّ الْأَرْكَانِ، يَا عَظِيمَ السُّلْطَانِ، يَامَنْ قُلْتَ عَنْ نَفْسِكَ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ، اللَّهُمَّ كُنْ لِإِخْوَانِنَا الْمُسْتَضْعَفِينَ فِي فلسطين وغَزّة وكُلِّ مَكَانٍ",
      transliteration: "Allahumma ya Qawiyy al-arkaan, ya ‘Adheem as-sultan, ya man qulta ‘an nafsika kulla yawmin huwa fee sha’n, Allahumma kun li’ikhwaninaa al-mustad’afeena fee filasteen wa ghazza wa kulli makaan",
      translation: "O Allah, the One with Mighty Pillars, the One of Great Authority, the One who declares about Himself every day that He is engaged in a matter — O Allah, be with our brethren who are oppressed in Palestine, Gaza, and everywhere else.",
      description: "This du'a calls upon Allah by His majestic attributes to aid the weak and oppressed, recognizing His constant involvement in the affairs of creation. It is a universal call for support to those suffering in Gaza and beyond."
    },
    {
      title: "Du'a for Relief",
      arabic: "اللَّهُمَّ اجْعَلْ لِمَا هُمْ فِيهِ فَرَجًا وَمَخْرَجًا، اللَّهُمَّ إِنَّهُ لَا حَوْلَ لَهُمْ وَلَا قُوَّةَ إِلَّا بِكَ، أَنتَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِير",
      transliteration: "Allahumma ij’al limaa hum feehi farajan wa makhrajan. Allahumma innahu la hawla lahum wa la quwwata illa bika, anta ni’ma al-mawla wa ni’ma an-naseer",
      translation: "O Allah, make an escape and a way out for them. O Allah, there is no control or power except by You — You are an excellent master and an excellent helper.",
      description: "This supplication reminds us that relief comes solely from Allah. It is a cry from the heart for liberation from hardship and a reaffirmation of trust in Allah’s mastery and help."
    },  
    {
      title: "Dua for Healing",
      arabic: "اللَّهُمَّ دَاوِي جَرْحَاهُم، وَاشْفِي مَرْضَاهُم، وَعَافِ مُبْتَلَاهُم، وَارْحَم مَوْتَاهُم، وَتَقَبَّلْ شُهَدَاءَهُم",
      transliteration: "Allahumma dawee jarhahum, washfee mardahum, wa ‘aafi mubtalahum, warham mawtahum, wa taqabbal shuhadaa’ahum",
      translation: "O Allah! Cure their injured, heal their sick, relieve those who are afflicted, have mercy on their dead, and accept their martyrs.",
      description: "This comprehensive du'a seeks Allah’s mercy and care for all those harmed in the struggle — the wounded, the ill, the suffering, and those who have passed. It’s a prayer of compassion, healing, and honor for the people of Gaza and Palestine."
    },  {
      title: "Dua to Rectify Affairs",
      arabic: "اللَّهُمَّ أَصْلِحْ أَحْوَالَ الْمُسْلِمِينَ فِي فِلَسْطِينَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Allahumma aslih ahwaal al-muslimeen fee filasteena yaa thal jalaali wal-ikram",
      translation: "O Allah, rectify the affairs of the Muslims in Palestine.",
      description: "This du'a is a call for divine reform and betterment — not only of material conditions but also of hearts, leadership, and unity. It recognizes that true restoration must come from Allah, the Majestic and Generous, and it’s a reminder that spiritual and societal change go hand in hand."
    },
    {
      title: "Dua to Replace Fear",
      arabic: "اللهُم كُن لأهل غزة عونًا ونصيرًا، وبدّل خوفهم أمنًا",
      transliteration: "Allahumma kun li-ahl ghazza ‘awnan wa-nasseeran, wa baddil khawfahum amnan",
      translation: "O Allah, be a support and helper for the people of Gaza, and replace their fear with security.",
      description: "A tender and urgent plea for protection and tranquility. This du'a asks Allah to be not just a source of help, but also a source of peace — to transform fear into safety, vulnerability into divine support, and distress into calm for the people of Gaza."
    },  
    {
      title: "Dua for the Ummah",
      arabic: "اللَّهُمَّ أَصْلِحْ أُمَّةَ مُحَمَّدٍ اللَّهُمَّ فَرِّجْ عَنْ أُمَّةِ مُحَمَّدٍ اللَّهُمَّ ارْحَمْ أُمَّةَ مُحَمَّدٍ",
      transliteration: "Allahumma aslih Ummat Muhammad, Allahumma farrij ‘an Ummat Muhammad, Allahumma irham Ummat Muhammad",
      translation: "O Allah, improve the state of the Ummah of Muhammad. O Allah, grant ease to the Ummah of Muhammad. O Allah, have mercy on the Ummah of Muhammad.",
      description: "A heartfelt and comprehensive plea for the collective welfare of the global Muslim community. This du'a asks Allah for spiritual reform, relief from hardships, and His encompassing mercy — especially timely and powerful in light of the suffering in Gaza and beyond."
    },  {
      title: "Dua for Patience and Victory",
      arabic: "رَبَّنَآ أَفْرِغْ عَلَيْهِم صَبْراً وَثَبِّتْ أَقْدَامَهُم وَٱنصُرْهُم عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ",
      transliteration: "Rabbana afrigh ‘alayhim sabran wa thabbit aqdaamahum wansurhum ‘ala al-qawm al-kafireen",
      translation: "Our Lord! Shower them with perseverance, make their steps firm, and give them victory over the disbelieving people.",
      description: "Inspired by the Qur’an (2:250), this du’a captures the essence of resilience in the face of oppression. It asks Allah to pour down patience, strengthen resolve, and grant ultimate victory — a plea that speaks directly to the struggle of the people of Gaza."
    },
    {
      title: "Dua for Their Success",
      arabic: "رَبَّنَآ ءَاتِهِم فِى ٱلدُّنْيَا حَسَنَةً وَفِى ٱلأخِرَةِ حَسَنَةً وَقِهِم عَذَابَ ٱلنَّارِ",
      transliteration: "Rabbana aatihim fid-dunya hasanatan wa fil-akhirati hasanatan waqihim ‘adhaab an-nar",
      translation: "Our Lord! Grant them the good of this world and the Hereafter, and protect them from the torment of the Fire.",
      description: "This comprehensive and beloved du’a from Surah al-Baqarah (2:201) seeks well-being in both worlds. It reflects the balanced hope we hold for the people of Palestine — not only for relief and joy now, but for eternal peace in the Hereafter."
    },
    {
      title: "Dua for Trust in Allah",
      arabic: "اللَّهُمَّ ارْزُقهُم صِدْقَ التَوَكُّلِ عَلَيكَ وحُسْنُ الظَنِّ بِك",
      transliteration: "Allahumma urzuqhum sidq at-tawakkuli ‘alayka wa husn ad-dhanni bik",
      translation: "O Allah, grant them true reliance upon You, and good thoughts about You.",
      description: "A du’a for spiritual grounding amidst uncertainty. It asks Allah to grant sincerity in tawakkul (trust) and optimism in thinking well of Him — two essential anchors for the people enduring hardship in Gaza and Palestine."
    },
    {
      title: "Dua to Strengthen Gaza",
      arabic: "اللّهُمَّ سَخِّرْ لأَهْلِ غَزَّةَ مَلائِكَةَ السَّمَاءِ وَجُنُودَ الأَرْضِ",
      transliteration: "Allāhumma sakhkhir li-ʾahli Ghazzah malāʾikata as-samāʾ wa junūda al-ʾarḍ",
      translation: "O Allah, subject for the people of Gaza the angels of the heavens and the soldiers of the earth.",
      description: "This du’a calls upon unseen forces — divine and earthly — to rise in defense of Gaza. It’s a deeply symbolic prayer for support that transcends the human realm, reminding us of Allah’s limitless power to send help in miraculous ways."
    },
    {
      title: "Dua for Coolness and Peace",
      arabic: "اللّهُمَّ بَرْدًا وَسَلامًا عَلَى أَهْلِ غَزَّة",
      transliteration: "Allāhumma bardan wa salāman ʿalā ʾahli Ghazzah",
      translation: "O Allah, send coolness and peace upon the people of Gaza.",
      description: "Echoing the du’a made for Prophet Ibrahim (AS) when he was thrown into the fire, this brief prayer asks Allah to make Gaza a place of safety, serenity, and divine tranquility — a shield against the heat of war and fear."
    },  
    {
      title: "Dua to Witness Allah’s Power in Victory",
      arabic: "اللّهُمَّ بِحَقِّ عَيْنِكَ الَّتِي لَا تَنَام، وَعِزِّكَ الَّذِي لَا يُضَام، أَرِنَا عَجَائِبَ قُدْرَتِكَ فِي نَصْرِهِم",
      transliteration: "Allāhumma bi-ḥaqqi ʿaynika allati lā tanām, wa ʿizzika allaḏī lā yuḍām, arinā ʿajāʾiba qudratika fī naṣrihim",
      translation: "O Allah, by Your Eye that never sleeps and Your Might that is never overcome, show us the wonders of Your power in granting them victory.",
      description: "A plea for divine intervention and miraculous support. This du'a is especially poignant for times of intense struggle, as it calls on Allah’s ever-watchful gaze and unshakable power to manifest victory for the oppressed."
    },  {
      title: "Dua for Strength",
      arabic: "اللّهُمَّ اشْفِ جِرَاحَهُمْ، وَتَوَلَّ أَمْرَهُمْ، وَثَبِّتْ قُلُوبَهُمْ، وَقَوِّ عَزَائِمَهُمْ",
      transliteration: "Allāhumma ishfi jirāḥahum, wa tawalla ʾamrahum, wa thabbit qulūbahum, wa qawwi ʿazāʾimahum",
      translation: "O Allah, heal their wounds, take charge of their affairs, strengthen their hearts, and reinforce their determination.",
      description: "A holistic prayer for physical, emotional, and spiritual resilience. This du’a addresses every layer of suffering — visible and invisible — and calls upon Allah to be the healer, the guide, and the source of unwavering strength."
    },
    {
      title: "Dua for Steadfastness",
      arabic: "اللّهُمَّ ارْبِطْ عَلَى قُلُوبِ أَهْلِ غَزَّةَ، وَصَبِّرْهُمْ وَثَبِّتْهُمْ",
      transliteration: "Allāhumma rbiṭ ʿalā qulūbi ʾahli Ghazzah, wa ṣabbirhum wa thabbit'hum",
      translation: "O Allah, tie steadfastness upon the hearts of the people of Gaza, grant them patience and firmness.",
      description: "A du’a asking for unshakable faith and inner peace amidst unimaginable chaos. Like the binding of a wound, this prayer asks Allah to bind the hearts of Gaza’s people with sabr (patience) and thabat (firmness)."
    },
    {
      title: "Dua Against the Oppressors",
      arabic: "اللّهُمَّ اكْفِهِمْ شَرَّ الأَعْدَاءِ، وَمَكْرَ الحَسَدَةِ، وَخُذْ حَقَّهُمْ مِمَّنْ ظَلَمَهُمْ",
      transliteration: "Allāhumma ikfihim sharra al-aʿdāʾ, wa makra al-ḥasada, wa khudh ḥaqqahum mimman ẓalamahum",
      translation: "O Allah, protect them from the evil of enemies, the plotting of the envious, and take their right from those who have wronged them.",
      description: "A prayer for protection, justice, and divine retribution. It asks Allah to neutralize plots of harm, expose envy, and restore what has been unjustly taken from the oppressed."
    },
    {
      title: "Dua for Peace in Homeland",
      arabic: "اللّهُمَّ اجْعَلْهُمْ آمِنِينَ فِي أَوْطَانِهِم، مُطْمَئِنِينَ فِي دِيَارِهِم",
      transliteration: "Allāhumma ijʿalhum āminīn fī ʾawṭānihim, muṭmaʾnīn fī diyārihim",
      translation: "O Allah, make them safe in their homelands, secure in their dwellings.",
      description: "A prayer for every displaced, bombed, or besieged home. This du’a speaks to the human need for safety, stability, and the right to live peacefully in one’s own land."
    },
    {
      title: "Dua for Divine Support for Gaza",
      arabic: "اللّهُمَّ سَخِّرْ لأَهْلِ غَزَّةَ مَلائِكَةَ السَّمَاءِ وَجُنُودَ الأَرْضِ",
      transliteration: "Allāhumma sakhkhir li-ʾahli Ghazzah malāʾikata as-samāʾ wa junūda al-ʾarḍ",
      translation: "O Allah, subject for the people of Gaza the angels of the heavens and the soldiers of the earth.",
      description: "An extraordinary call for divine reinforcements — both seen and unseen. This du’a asks for help from the armies of Allah: angels above and believers on the ground."
    },
    {
      title: "Dua for Peace and Coolness upon Gaza",
      arabic: "اللّهُمَّ بَرْدًا وَسَلامًا عَلَى أَهْلِ غَزَّة",
      transliteration: "Allāhumma bardan wa salāman ʿalā ʾahli Ghazzah",
      translation: "O Allah, (send upon them) coolness and peace upon the people of Gaza.",
      description: "Inspired by the prayer made for Prophet Ibrahim (AS), this du’a asks Allah to turn a raging fire into comfort — to turn war into calm, fear into peace."
    },
    {
      title: "Dua for Victory by Allah’s Power",
      arabic: "اللّهُمَّ بِحَقِّ عَيْنِكَ الَّتِي لَا تَنَام، وَعِزِّكَ الَّذِي لَا يُضَام، أَرِنَا عَجَائِبَ قُدْرَتِكَ فِي نَصْرِهِم",
      transliteration: "Allāhumma bi-ḥaqqi ʿaynika allatī lā tanām, wa ʿizzika allaḏī lā yuḍām, arinā ʿajāʾiba qudratika fī naṣrihim",
      translation: "O Allah, by Your Eye that never sleeps and Your Might that is never overcome, show us the wonders of Your power in granting them victory.",
      description: "A breathtaking appeal for miraculous victory. This du’a draws on divine attributes — Allah’s eternal vigilance and unmatched strength — to manifest awe-inspiring support for the oppressed."
    },
    {
      title: "Dua for Healing, Strength and Support",
      arabic: "اللّهُمَّ اشْفِ جِرَاحَهُمْ، وَتَوَلَّ أَمْرَهُمْ، وَثَبِّتْ قُلُوبَهُمْ، وَقَوِّ عَزَائِمَهُمْ",
      transliteration: "Allāhumma ishfi jirāḥahum, wa tawalla ʾamrahum, wa thabbit qulūbahum, wa qawwi ʿazāʾimahum",
      translation: "O Allah, heal their wounds, take charge of their affairs, strengthen their hearts, and reinforce their determination.",
      description: "More than physical healing — this is a prayer for full restoration of dignity, direction, and inner resolve. It’s a repeatable affirmation that Gaza’s people are not forgotten in body or spirit."
    },
    {
      title: "Dua for Patience and Steadfastness",
      arabic: "اللّهُمَّ ارْبِطْ عَلَى قُلُوبِ أَهْلِ غَزَّةَ، وَصَبِّرْهُمْ وَثَبِّتْهُمْ",
      transliteration: "Allāhumma rbiṭ ʿalā qulūbi ʾahli Ghazzah, wa ṣabbirhum wa thabbit'hum",
      translation: "O Allah, tie steadfastness upon the hearts of the people of Gaza, grant them patience and firmness.",
      description: "A repeat of the earlier du’a — and rightly so — because steadfastness is not a one-time need. It is the ongoing fuel of resilience in a long, brutal struggle. This prayer reinforces it again and again."
    },
    {
      title: "Dua for Protection from Enemies and Injustice",
      arabic: "اللّهُمَّ اكْفِهِمْ شَرَّ الأَعْدَاءِ، وَمَكْرَ الحَسَدَةِ، وَخُذْ حَقَّهُمْ مِمَّنْ ظَلَمَهُمْ",
      transliteration: "Allāhumma ikfihim sharra al-aʿdāʾ, wa makra al-ḥasada, wa khudh ḥaqqahum mimman ẓalamahum",
      translation: "O Allah, protect them from the evil of enemies, the plotting of the envious, and take their right from those who have wronged them.",
      description: "This powerful plea is a call for protection, justice, and restoration. It asks Allah not only to shield Gaza’s people, but also to reclaim what has been stolen — land, life, and dignity."
    },
    {
      title: "Dua for Peace in Homeland",
      arabic: "اللّهُمَّ اجْعَلْهُمْ آمِنِينَ فِي أَوْطَانِهِم، مُطْمَئِنِينَ فِي دِيَارِهِم",
      transliteration: "Allāhumma ijʿalhum āminīn fī ʾawṭānihim, muṭmaʾnīn fī diyārihim",
      translation: "O Allah, make them safe in their homelands, secure in their dwellings.",
      description: "A second appearance, because peace at home is not just a wish — it's a right. This du’a repeats the plea for security and safety within one’s own walls, a reality far from reach for many in Gaza."
    },
    {
      title: "Dua for Divine Victory Like That Granted to the Prophet",
      arabic: "اللّهُمَّ إِنِّي أَسْأَلُكَ النَّصْرَ لِأَهْلِ غَزَّةِ الَّذِينَ نَصَرْتَ بِهِ رَسُولَكَ وَفَرَّقْتَ بِهِ بَيْنَ الْحَقِّ وَالْبَاطِلِ حَتَّى أَقَمْتَ بِهِ دِينَكَ وَأَفْلَجْتَ بِهِ حَاجَتَكَ يَا مَنْ هُوَ وَلِيُّ ذَٰلِكَ وَالْقَادِرُ عَلَيْهِ",
      transliteration: "Allāhumma innī as'aluka an-naṣra li-ahlī Ghazzah al-ladhīna naṣarta bihī rasūlaka wa farraqta bihī bayna al-ḥaqi wal-bāṭil ḥattā aqamta bihī dīnaka wa aflajta bihī ḥājataka yā man huwa walīyu dhālika wal-qādiru ʿalayh",
      translation: "O Allah, I ask You for victory for the people of Gaza, the kind of victory by which You aided Your Messenger, and distinguished between truth and falsehood, until Your religion was established and Your will fulfilled. O You who is the Guardian and Powerful over all things.",
      description: "This is not just a prayer for triumph — it’s a reminder of precedent. It calls on Allah to send the same kind of victory He once gave to the Prophet ﷺ, one that turns the tide of history in favor of justice."
    },
    {
      title: "Dua Against the Oppressors",
      arabic: "اللّهُمَّ عَلَيْكَ بِالصَّهَائِينَةِ",
      transliteration: "Allāhumma ʿalayka bi-l-ṣahā'īnī",
      translation: "O Allah, deal with the Zionists.",
      description: "A bold and direct prayer for divine justice. It asks Allah to hold accountable those causing harm, oppression, and injustice — a cry from the heart of the wounded toward the Most Just."
    },
    {
      title: "Dua for Defeating the Oppressors",
      arabic: "اللّهُمَّ زَلْزِلِ ٱلْأَرْضَ تَحْتَ أَقْدَامِ الصَّهَاينَةِ، اللّهُمَّ أَصْبِحْ فِي قُلُوبِهِمُ الرُّعْبَ، اللّهُمَّ شَتِّتْ شَمْلَهُمْ وفرقْ جَمْعَهُمْ",
      transliteration: "Allāhumma zalzilī al-arḍa taḥta aqdāmihim, Allāhumma aṣbiḥ fī qulūbihim ar-ruʿba, Allāhumma shattit shamlahum wa farriq jamʿahum.",
      translation: "O Allah, shake the earth beneath the feet of the Zionists. O Allah, instill fear in their hearts. O Allah, scatter their unity and divide their gathering.",
      description: "A powerful du’a of disarmament and divine disruption. It asks Allah to literally destabilize the aggressors — to fracture their unity, plant fear in their hearts, and shatter their power."
    },
    {
      title: "Dua for Divine Soldiers and Victory",
      arabic: "اللّهُمَّ اِنزِلْ عَلَى الصَّهَاينَةِ جُنْدًا مِّن جُنُودِكَ يُقَاتِلُونَهُمْ، اللّهُمَّ بَعَثْ عَلَيْهِمْ رِيحًا تَقْتُلُهُمْ، اللّهُمَّ انصُرْ إِخْوَانَنَا الْمُجَاهِدِينَ فِي كُلِّ مَكَانٍ",
      transliteration: "Allāhumma inzil ʿalā ṣahā'ina jundān min junūdika yuqātilūnahum, Allāhumma baʿith ʿalayhim rīḥan taqtuluhum, Allāhumma nṣur ikhwananā al-mujāhidīn fī kulli makān.",
      translation: "O Allah, send upon the Zionists soldiers from Your soldiers to fight against them. O Allah, send upon them a wind that will destroy them. O Allah, grant victory to our brothers, the mujahideen, wherever they are.",
      description: "A prayer that summons the unseen help of Allah's creation — winds, angels, forces — in defense of the oppressed. It also honors those who actively resist injustice, asking Allah to grant them strength and success in every land."
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
    
    Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.`,
    description: "A profoundly encompassing prayer that begins with a plea for Paradise and ends with healing, provision, protection, and victory for the oppressed in Gaza and beyond. This du’a weaves together hope for the Hereafter with urgent cries for relief in this world. It reflects both personal longing for nearness to the Prophet ﷺ and collective solidarity with the wounded, the displaced, the hungry, and the forgotten. A powerful invocation that wraps the heart of Palestine in mercy, dignity, and divine intervention."
    
  }
    
  ]
  