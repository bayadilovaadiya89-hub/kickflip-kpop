export interface Member {
  id: string;
  name: string;
  nativeName: string;
  birthName: string;
  role: string[];
  category: 'rap' | 'vocal' | 'dance' | 'leader';
  subLine: 'hyung' | 'maknae';
  birthday: string;
  age: number;
  zodiac: string;
  nationality: string;
  flag: string;
  mbti: string;
  emoji: string;
  dorm: string;
  skateVibe: string;
  color: string;
  tagline: string;
  facts: string[];
  avatar: string;
}

export interface Track {
  id: number;
  title: string;
  koreanTitle: string;
  type: 'Title' | 'Pre-Release' | 'B-Side';
  duration: string;
  tempo: string;
  vibe: string;
  desc: string;
  synthTone: number;
}

export const MEMBERS: Member[] = [
  {
    id: 'kyehoon',
    name: 'Kyehoon',
    nativeName: '계훈',
    birthName: 'Lee Gye-hun (이계훈)',
    role: ['Leader', 'Main Rapper', 'Lead Dancer', 'Producer'],
    category: 'leader',
    subLine: 'hyung',
    birthday: 'September 16, 2004',
    age: 21,
    zodiac: 'Virgo',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ENFP',
    emoji: '🦊',
    dorm: 'Single room with manager',
    skateVibe: 'Hardflip & High-Speed Street Cruising',
    color: '#ceff00', // Neon Lime
    tagline: '5-year JYP legendary trainee who placed 1st in the 12th Open Auditions and led on SBS LOUD.',
    facts: [
      'Placed 1st in JYP 12th Open Auditions in 2016, training for over 5 years.',
      'Trained alongside members of Stray Kids, ITZY, and BOY STORY.',
      'Starred in SBS survival audition program LOUD, praised by J.Y. Park for songwriting and lyrics.',
      'Former Def Dance Academy student with razor-sharp freestyle rap technique.',
      'Dislikes spicy food; relieves stress by rolling down the car window and listening to music.'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/KYEHOON-3-533x800.jpeg'
  },
  {
    id: 'amaru',
    name: 'Amaru',
    nativeName: '아마루',
    birthName: 'Mitsuyuki Amaru (光幸アマル)',
    role: ['Main Vocalist', 'Lead Rapper'],
    category: 'vocal',
    subLine: 'hyung',
    birthday: 'October 21, 2005',
    age: 20,
    zodiac: 'Libra',
    nationality: 'Japan',
    flag: '🇯🇵',
    mbti: 'INFP',
    emoji: '🐻',
    dorm: 'Single room with manager',
    skateVibe: '360 Pop Shuvit & Aerial Bowls',
    color: '#00f0ff', // Cyan
    tagline: 'Former YG trainee and LOUD standout delivering soaring high vocals with acrobatic agility.',
    facts: [
      'Born in Misato, Saitama, Japan; his mother is a passionate fan of 2PM.',
      'Former YG Entertainment trainee who trained alongside Haruto, Asahi, and Mashiho of TREASURE.',
      'Competed on SBS LOUD and captivated fans with bilingual rap and vocal acrobatics.',
      'Helped Keiju adjust to speaking Korean when they moved to Seoul.',
      'Skilled in track & field, baseball, spinning plates, and chopping firewood; favorite food is sushi.'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/AMARU-1-640x800.jpeg'
  },
  {
    id: 'donghwa',
    name: 'Donghwa',
    nativeName: '동화',
    birthName: 'Lee Dong-hwa (이동화)',
    role: ['Main Dancer', 'Lead Vocalist'],
    category: 'dance',
    subLine: 'hyung',
    birthday: 'March 11, 2006',
    age: 19,
    zodiac: 'Pisces',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ENFJ',
    emoji: '🐸',
    dorm: 'Roommates with Minje',
    skateVibe: 'Grind Rails & Urban Freestyle Flow',
    color: '#ff1493', // Pink
    tagline: 'Passed JYP in 2018; a resilient dance prodigy whose popping precision rules the stage.',
    facts: [
      'Passed JYP Entertainment auditions in February 2018 and renewed his trainee contract twice.',
      'Specializes in choreography breakdowns, hip-hop isolations, and center dance breaks.',
      'Wanted to be an archaeologist when he was a kid.',
      'Known for his contagious positive vibe and creating personalized nicknames for members.'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/DONGHWA-3-900x600.jpeg'
  },
  {
    id: 'juwang',
    name: 'Juwang',
    nativeName: '주왕',
    birthName: 'Jang Ju-wang (장주왕)',
    role: ['Main Vocalist'],
    category: 'vocal',
    subLine: 'hyung',
    birthday: 'May 2, 2006',
    age: 19,
    zodiac: 'Taurus',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ISFP',
    emoji: '🐹',
    dorm: 'Roommates with Donghyeon',
    skateVibe: 'Sunset Cruiser & Chill Downhills',
    color: '#ffea00', // Yellow
    tagline: 'Born in Gyeongju and raised in Pohang; the soulful vocal anchor with honeyed R&B tone.',
    facts: [
      'Born in Gyeongju, Gyeongsangbuk-do, and grew up in the coastal city of Pohang.',
      'Possesses an expansive vocal range with signature warm acoustic timbre and effortless falsetto.',
      'Plays guitar and often provides unplugged acoustic accompaniments.',
      'Representative emoji is 🐹 (Hamster); cherished as the gentle vocal anchor of KickFlip.'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/JUWANG-3-900x600.jpeg'
  },
  {
    id: 'minje',
    name: 'Minje',
    nativeName: '민제',
    birthName: 'Choi Min-je (최민제)',
    role: ['Visual', 'Lead Rapper', 'Dancer'],
    category: 'rap',
    subLine: 'maknae',
    birthday: 'May 12, 2006',
    age: 19,
    zodiac: 'Taurus',
    nationality: 'Korean-New Zealander',
    flag: '🇰🇷 🇳🇿',
    mbti: 'INTP',
    emoji: '🐺',
    dorm: 'Roommates with Donghwa',
    skateVibe: 'Stairset Drops & Aggressive Ollies',
    color: '#ff4d00', // Orange-Red
    tagline: 'Born in New Zealand, raised in Suwon; bilingual English speaker, Hanlim graduate, and visual center.',
    facts: [
      'Born in New Zealand and grew up in Yeongtong-gu, Suwon, South Korea.',
      'Attended Sanui Elementary, YeonMu Middle, and graduated from prestigious Hanlim Arts School.',
      'Fluent in English and Korean; former student at WithBill Dance Studio.',
      'Joined JYP Entertainment as a trainee in August 2021.',
      'Specialties include basketball, rope double jumps, guitar, and custom calligraphy.'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/MINJE-3-900x600.jpeg'
  },
  {
    id: 'keiju',
    name: 'Keiju',
    nativeName: '케이주',
    birthName: 'Okamoto Keiju (岡本圭主)',
    role: ['Main Rapper', 'Main Dancer'],
    category: 'dance',
    subLine: 'maknae',
    birthday: 'October 4, 2006',
    age: 19,
    zodiac: 'Libra',
    nationality: 'Japan',
    flag: '🇯🇵',
    mbti: 'INFP',
    emoji: '🐱',
    dorm: 'Solo room!',
    skateVibe: 'Kickflip into Nollie Slide',
    color: '#9d00ff', // Electric Purple
    tagline: 'Born in Tokyo; viral sensation from SBS LOUD and JTBC Stage K with electric stage charisma.',
    facts: [
      'Born in Koto, Tokyo, Japan; has an older brother born in 2000.',
      'Appeared on JTBC Stage K during the iKON episode, making waves for his natural groove.',
      'Breakout star of SBS LOUD whose performance clips amassed millions of views worldwide.',
      'Has his own solo room in the KickFlip dorm!',
      'Scared of ghost stories and haunted houses; loves taking leisurely walks and gaming.'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/KEIJU-3-533x800.jpeg'
  },
  {
    id: 'donghyeon',
    name: 'Donghyeon',
    nativeName: '동현',
    birthName: 'Lee Dong-hyeon (이동현)',
    role: ['Main Vocalist', 'Maknae'],
    category: 'vocal',
    subLine: 'maknae',
    birthday: 'March 13, 2007',
    age: 18,
    zodiac: 'Pisces',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ISTJ',
    emoji: '🐰',
    dorm: 'Roommates with Juwang',
    skateVibe: 'Smooth Half-Pipe Transition',
    color: '#00ffaa', // Mint Green
    tagline: 'Daegu native, former ice hockey star (#99), 2-year class president, and golden rock-vocal maknae.',
    facts: [
      'Born in Bongsan-dong, Jung-gu, Daegu, South Korea.',
      'Former competitive ice hockey player who played for Daegu Sky Eagles sporting jersey #99.',
      'Was elected middle school class president for 2 consecutive years; attends Hanlim Arts School.',
      'Competed on SBS LOUD and impressed the judges with raw emotional rock vocals.',
      'Hilariously admitted he is more scared of his mother than ghosts!'
    ],
    avatar: 'https://kprofiles.com/wp-content/uploads/2025/01/DONGHYEON-3-900x600.jpeg'
  }
];

export const TRACKS: Track[] = [
  {
    id: 1,
    title: 'Mama Said',
    koreanTitle: '뭐가 되려고?',
    type: 'Title',
    duration: '3:12',
    tempo: '132 BPM',
    vibe: 'Skate Hip-Hop / Rebel Groove',
    desc: 'Official debut title track driven by 808 sub-bass, snappy skate percussions, and rebellious catchy chorus asking "What are you trying to become?".',
    synthTone: 220
  },
  {
    id: 2,
    title: 'Umm Great',
    koreanTitle: '응 그래',
    type: 'Pre-Release',
    duration: '2:45',
    tempo: '110 BPM',
    vibe: 'Sunny Street Chill / Whistling Beat',
    desc: 'Official pre-release single (Jan 6, 2025). Laid-back summer skate jam full of smiles, acoustic layers, and carefree attitude.',
    synthTone: 261.63
  },
  {
    id: 3,
    title: 'WARRIORS',
    koreanTitle: '워리어스',
    type: 'B-Side',
    duration: '3:05',
    tempo: '140 BPM',
    vibe: 'High-Voltage Cyber Bounce',
    desc: 'Adrenaline-packed anthem highlighting synchronized choreography breaks and rapid fire rap exchanges from Kyehoon, Keiju, and Minje.',
    synthTone: 293.66
  },
  {
    id: 4,
    title: 'Knock Knock',
    koreanTitle: '똑똑',
    type: 'B-Side',
    duration: '2:58',
    tempo: '118 BPM',
    vibe: 'Catchy Pop-Rap Bounce',
    desc: 'Playful urban rhythm with bouncy brass stabs and infectious vocal hooks from Amaru and Juwang.',
    synthTone: 329.63
  },
  {
    id: 5,
    title: 'Like A Monster',
    koreanTitle: '라이크 어 몬스터',
    type: 'B-Side',
    duration: '3:20',
    tempo: '136 BPM',
    vibe: 'Dark Trap & Fierce Vocals',
    desc: 'Aggressive brass synths and haunting vocal harmonies showcasing KickFlip’s powerful performance energy.',
    synthTone: 349.23
  },
  {
    id: 6,
    title: 'See You On Tomorrow',
    koreanTitle: '내일에서 만나',
    type: 'B-Side',
    duration: '3:35',
    tempo: '92 BPM',
    vibe: 'Sentimental Sunset Pop',
    desc: 'A warm, uplifting closing track for sunset skate sessions, expressing heartfelt gratitude to fans (WeFlip).',
    synthTone: 392.00
  }
];

export const OFFICIAL_LINKS = {
  website: 'https://www.kick-flip.com/ko',
  youtube: 'https://www.youtube.com/@kickflip_jype',
  instagram: 'https://www.instagram.com/kickflip_jype/',
  membersInstagram: 'https://www.instagram.com/kickflip_kickflip/',
  twitter: 'https://x.com/kickflip_jype',
  tiktok: 'https://www.tiktok.com/@kickflip_jype',
  weibo: 'https://weibo.com/u/7967473831'
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How do you spend your ideal weekend afternoon?',
    options: [
      { text: 'Leading a crew meetup at the city street skate park and writing rap bars', memberId: 'kyehoon' },
      { text: 'Acrobatic outdoor sports, eating sushi, and checking out new sneaker drops', memberId: 'amaru' },
      { text: 'Dancing in the studio, perfecting choreography, and giving friends nicknames', memberId: 'donghwa' },
      { text: 'Chilling with acoustic guitar, humming R&B melodies, and capturing photos', memberId: 'juwang' },
      { text: 'Shooting basketball hoops, double jump-roping, and speaking English with pals', memberId: 'minje' },
      { text: 'Taking a peaceful walk in Tokyo style, gaming, and avoiding scary stories', memberId: 'keiju' },
      { text: 'Watching intense ice hockey matches, rocking out to alternative music, and chilling', memberId: 'donghyeon' }
    ]
  },
  {
    id: 2,
    question: 'What is your signature fashion style on the street?',
    options: [
      { text: 'Oversized streetwear hoodie with silver chain accessories and beanie 🦊', memberId: 'kyehoon' },
      { text: 'Techwear cargo pants with high-top skate sneakers and windbreaker 🐻', memberId: 'amaru' },
      { text: 'Vintage leather jacket, baggy denim, and stylish bucket hat 🐸', memberId: 'donghwa' },
      { text: 'Minimalist knitwear, clean aesthetics, and neutral Earth tones 🐹', memberId: 'juwang' },
      { text: 'Bold neon streetwear, custom painted denim, and statement eyewear 🐺', memberId: 'minje' },
      { text: 'Sporty colorful varsity jacket with retro snapback cap 🐱', memberId: 'keiju' },
      { text: 'Casual sports jersey #99, relaxed skate shorts, and skate shoes 🐰', memberId: 'donghyeon' }
    ]
  },
  {
    id: 3,
    question: 'Which track from debut mini-album <Flip it, Kick it!> speaks to your soul?',
    options: [
      { text: 'Rebellious skate-hop title track "Mama Said (뭐가 되려고?)"', memberId: 'kyehoon' },
      { text: 'Carefree whistling groove "Umm Great (응 그래)"', memberId: 'amaru' },
      { text: 'High-voltage dance break anthem "WARRIORS"', memberId: 'donghwa' },
      { text: 'Smooth, soul-soothing runs on "Knock Knock"', memberId: 'juwang' },
      { text: 'Dark trap & fierce verses in "Like A Monster"', memberId: 'minje' },
      { text: 'Explosive party rap rhythm and smile-inducing beats', memberId: 'keiju' },
      { text: 'Sentimental sunset farewell ballad "See You On Tomorrow (내일에서 만나)"', memberId: 'donghyeon' }
    ]
  }
];

export const INITIAL_FAN_MESSAGES = [
  {
    id: 1,
    author: 'SkateQueen_Mia',
    location: 'Seoul, KR',
    bias: 'Kyehoon',
    text: '5 years of waiting was so worth it! Kyehoon’s leadership and lyricism in "Mama Said" is unreal. WEFLIP FOREVER! 🛹🦊',
    time: '10 mins ago',
    likes: 58
  },
  {
    id: 2,
    author: 'TokyoRider_Ren',
    location: 'Tokyo, JP',
    bias: 'Keiju & Amaru',
    text: 'Keiju and Amaru making Japan and Korea proud! The acrobatic energy in "WARRIORS" gave me chills!',
    time: '35 mins ago',
    likes: 124
  },
  {
    id: 3,
    author: 'JuwangVocalHeaven',
    location: 'Pohang, KR',
    bias: 'Juwang',
    text: 'Juwang’s voice in "See You On Tomorrow" is absolute pure honey 🐹💛 JYP vocal treasure!',
    time: '2 hours ago',
    likes: 83
  },
  {
    id: 4,
    author: 'DaeguHockeyFan',
    location: 'Daegu, KR',
    bias: 'Donghyeon',
    text: 'Daegu Sky Eagles #99 turned into JYP powerhouse vocalist! Donghyeon our golden maknae fighting! 🏒🐰',
    time: '3 hours ago',
    likes: 142
  }
];
