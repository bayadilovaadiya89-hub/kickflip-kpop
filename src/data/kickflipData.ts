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
  skateVibe: string;
  color: string;
  tagline: string;
  facts: string[];
  avatar: string;
}

export interface Track {
  id: number;
  title: string;
  koreanTitle?: string;
  type: 'Title' | 'B-Side' | 'Special';
  duration: string;
  tempo: string;
  vibe: string;
  desc: string;
  synthTone: number; // frequency base for Web Audio synthesis
}

export const MEMBERS: Member[] = [
  {
    id: 'kyehoon',
    name: 'Kyehoon',
    nativeName: '이계훈',
    birthName: 'Lee Gye-hun',
    role: ['Leader', 'Main Rapper', 'Lead Dancer', 'Producer'],
    category: 'leader',
    subLine: 'hyung',
    birthday: 'September 16, 2004',
    age: 21,
    zodiac: 'Virgo',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ENFP',
    skateVibe: 'Hardflip & High-Speed Street Cruising',
    color: '#ceff00', // Lime
    tagline: '5-year JYP legendary trainee with unmatched flow and captain leadership.',
    facts: [
      'Placed 1st in JYP 12th Open Auditions in 2016.',
      'Trained for over 5 years before debuting as KickFlip’s fearless captain.',
      'Participated in SBS survival program LOUD, gaining worldwide recognition for lyrical writing.',
      'Known for writing his own punchy rap bars and composing beats.'
    ],
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'amaru',
    name: 'Amaru',
    nativeName: '光幸アマル',
    birthName: 'Mitsuyuki Amaru',
    role: ['Main Vocalist', 'Lead Rapper'],
    category: 'vocal',
    subLine: 'hyung',
    birthday: 'October 21, 2005',
    age: 20,
    zodiac: 'Libra',
    nationality: 'Japan',
    flag: '🇯🇵',
    mbti: 'INFP',
    skateVibe: '360 Pop Shuvit & Aerial Bowls',
    color: '#00f0ff', // Cyan
    tagline: 'Soulful high notes combined with agile acrobatic street rhythm.',
    facts: [
      'Former competitive athlete who easily integrates acrobatic skills into stage performances.',
      'Bilingual in Japanese and fluent Korean.',
      'Known for powerful, emotionally charged vocal belts and fast cadence.',
      'Passionate about skateboarding culture and streetwear sneakers.'
    ],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'donghwa',
    name: 'Donghwa',
    nativeName: '이동화',
    birthName: 'Lee Dong-hwa',
    role: ['Main Dancer', 'Lead Vocalist'],
    category: 'dance',
    subLine: 'hyung',
    birthday: 'March 11, 2006',
    age: 19,
    zodiac: 'Pisces',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ENFJ',
    skateVibe: 'Grind Rails & Urban Freestyle Flow',
    color: '#ff1493', // Pink
    tagline: 'The groove master whose razor-sharp precision commands the center stage.',
    facts: [
      'Master of popping, isolation, and hip-hop choreographies.',
      'Creates dance breaks and freestyle transitions for KickFlip live stages.',
      'Always brings radiant positive energy and encouragement to rehearsals.',
      'Loves vintage skate hoodies and collecting vinyl records.'
    ],
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'juwang',
    name: 'Juwang',
    nativeName: '장주왕',
    birthName: 'Jang Ju-wang',
    role: ['Main Vocalist'],
    category: 'vocal',
    subLine: 'hyung',
    birthday: 'May 2, 2006',
    age: 19,
    zodiac: 'Taurus',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ISFP',
    skateVibe: 'Sunset Cruiser & Chill Downhills',
    color: '#ffea00', // Yellow
    tagline: 'Golden vocal chords delivering honeyed R&B runs and heartfelt sincerity.',
    facts: [
      'Has the widest vocal range in the group, hitting effortless falsettos and belts.',
      'Plays acoustic and electric guitar for unplugged versions of KickFlip songs.',
      'Often called the vocal anchor by JYP producers.',
      'Enjoys photography and documenting the members behind the scenes.'
    ],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'minje',
    name: 'Minje',
    nativeName: '최민제',
    birthName: 'Choi Min-je',
    role: ['Visual', 'Lead Rapper', 'Dancer'],
    category: 'rap',
    subLine: 'maknae',
    birthday: 'May 12, 2006',
    age: 19,
    zodiac: 'Taurus',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'ESTP',
    skateVibe: 'Stairset Drops & Aggressive Ollies',
    color: '#ff4d00', // Orange-Red
    tagline: 'Captivating camera aura, athletic dynamism and sharp rap accents.',
    facts: [
      'Voted the visual center and photoshoot king of the group.',
      'Outstanding athletic reflexes; excelled at track and sports in school.',
      'His deep vocal tone adds edge and tension to verses.',
      'Loves custom skate deck art and graffiti sticker bombing.'
    ],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'keiju',
    name: 'Keiju',
    nativeName: '岡本圭主',
    birthName: 'Okamoto Keiju',
    role: ['Main Rapper', 'Main Dancer'],
    category: 'dance',
    subLine: 'maknae',
    birthday: 'October 4, 2006',
    age: 19,
    zodiac: 'Libra',
    nationality: 'Japan',
    flag: '🇯🇵',
    mbti: 'ESFP',
    skateVibe: 'Kickflip into Nollie Slide',
    color: '#9d00ff', // Electric Purple
    tagline: 'Explosive stage presence with charismatic duality: pure joy off-stage, monster on-stage.',
    facts: [
      'Fan-favorite contestant on SBS LOUD with viral performance stages.',
      'Has natural groove and stage expression that captivates within seconds.',
      'Fluent in Japanese and Korean with rapid-fire rap delivery.',
      'The group’s mood maker whose bright laughter is infectious.'
    ],
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'donghyeon',
    name: 'Donghyeon',
    nativeName: '이동현',
    birthName: 'Lee Dong-hyeon',
    role: ['Main Vocalist', 'Maknae'],
    category: 'vocal',
    subLine: 'maknae',
    birthday: 'March 13, 2007',
    age: 18,
    zodiac: 'Pisces',
    nationality: 'South Korea',
    flag: '🇰🇷',
    mbti: 'INFJ',
    skateVibe: 'Smooth Half-Pipe Transition',
    color: '#00ffaa', // Mint Green
    tagline: 'The unstoppable golden maknae: youthful charm backed by powerhouse rock vocals.',
    facts: [
      'Former competitive ice hockey player before pursuing music.',
      'Possesses a raw, emotive vocal texture reminiscent of indie-rock power vocalists.',
      'Youngest member (Maknae) pampered and supported by all six older brothers.',
      'Loves listening to alternative rock, playing video games, and skate gaming.'
    ],
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
  }
];

export const TRACKS: Track[] = [
  {
    id: 1,
    title: 'Mama Said',
    koreanTitle: '마마 세드',
    type: 'Title',
    duration: '3:12',
    tempo: '132 BPM',
    vibe: 'Skate Hip-Hop / Rebel Groove',
    desc: 'Explosive debut title track driven by 808 sub-bass, snappy skate percussions, and rebellious catchy chorus.',
    synthTone: 220
  },
  {
    id: 2,
    title: 'WARRIORS',
    koreanTitle: '워리어스',
    type: 'B-Side',
    duration: '3:05',
    tempo: '140 BPM',
    vibe: 'High-Voltage Cyber Bounce',
    desc: 'Adrenaline-packed anthem highlighting synchronized choreography breaks and rapid fire rap exchanges.',
    synthTone: 261.63
  },
  {
    id: 3,
    title: 'Knock Knock',
    koreanTitle: '똑똑',
    type: 'B-Side',
    duration: '2:58',
    tempo: '118 BPM',
    vibe: 'Catchy Pop-Rap Bounce',
    desc: 'Playful urban rhythm with bouncy brass stabs and infectious vocal hooks.',
    synthTone: 293.66
  },
  {
    id: 4,
    title: 'Like A Monster',
    koreanTitle: '라이크 어 몬스터',
    type: 'B-Side',
    duration: '3:20',
    tempo: '136 BPM',
    vibe: 'Dark Trap & Vocal Roar',
    desc: 'Aggressive brass synths and haunting vocal harmonies showcasing KickFlip’s fierce performance energy.',
    synthTone: 329.63
  },
  {
    id: 5,
    title: 'Umm Great',
    koreanTitle: '음 그레이트',
    type: 'B-Side',
    duration: '2:45',
    tempo: '110 BPM',
    vibe: 'Sunny Street Chill',
    desc: 'Easy-listening summer skate jam full of smiles, acoustic guitar layers, and melodic whistling.',
    synthTone: 349.23
  },
  {
    id: 6,
    title: 'See You On Tomorrow',
    koreanTitle: '내일 또 만나',
    type: 'B-Side',
    duration: '3:35',
    tempo: '92 BPM',
    vibe: 'Sentimental Sunset Pop',
    desc: 'A warm, uplifting farewell track for sunset skate sessions, expressing gratitude to fans.',
    synthTone: 392.00
  },
  {
    id: 7,
    title: 'From KickFlip, To WeFlip',
    koreanTitle: '위플립에게',
    type: 'Special',
    duration: '3:40',
    tempo: '88 BPM',
    vibe: 'Fan Dedication Ballad',
    desc: 'Heartfelt acoustic tribute dedicated entirely to their official fandom WeFlip (위플립).',
    synthTone: 440.00
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How do you spend your perfect weekend afternoon?',
    options: [
      { text: 'Leading a group hangout and hitting the city street skate park', memberId: 'kyehoon' },
      { text: 'Acrobatic sports, outdoor training, and checking out new sneaker drops', memberId: 'amaru' },
      { text: 'Dancing in the studio, perfecting choreography, and listening to vinyl', memberId: 'donghwa' },
      { text: 'Chilling at a café with an acoustic guitar and taking retro photos', memberId: 'juwang' },
      { text: 'Testing extreme skate tricks, taking photos, and hanging with friends', memberId: 'minje' },
      { text: 'Making everyone laugh, eating good food, and freestyling to new tracks', memberId: 'keiju' },
      { text: 'Gaming with friends, listening to alternative rock, and relaxing', memberId: 'donghyeon' }
    ]
  },
  {
    id: 2,
    question: 'What is your signature fashion style on the street?',
    options: [
      { text: 'Oversized streetwear hoodie with silver chain accessories and beanie', memberId: 'kyehoon' },
      { text: 'Techwear cargo pants with high-top skate sneakers and windbreaker', memberId: 'amaru' },
      { text: 'Vintage leather jacket, baggy denim, and stylish bucket hat', memberId: 'donghwa' },
      { text: 'Minimalist knitwear, clean aesthetics, and neutral Earth tones', memberId: 'juwang' },
      { text: 'Bold neon graphics, custom painted denim, and statement eyewear', memberId: 'minje' },
      { text: 'Sporty colorful varsity jacket with retro snapback cap', memberId: 'keiju' },
      { text: 'Grunge flannel over graphic tee and relaxed skate shorts', memberId: 'donghyeon' }
    ]
  },
  {
    id: 3,
    question: 'Which musical flavor in KickFlip’s discography resonates with you most?',
    options: [
      { text: 'Aggressive 808s and technical, fast-paced rap flow ("Mama Said")', memberId: 'kyehoon' },
      { text: 'High soaring vocal belts mixed with energetic rap bridge', memberId: 'amaru' },
      { text: 'Unstoppable dance-break rhythm that forces you to move ("WARRIORS")', memberId: 'donghwa' },
      { text: 'Soulful acoustic R&B vocals and emotional falsetto', memberId: 'juwang' },
      { text: 'Raw, punchy attitude with deep-toned hook delivery', memberId: 'minje' },
      { text: 'Hyper-energetic party bounce with infectious groove ("Knock Knock")', memberId: 'keiju' },
      { text: 'Heartfelt emotional rock ballad dedicated to fans ("To WeFlip")', memberId: 'donghyeon' }
    ]
  }
];

export const INITIAL_FAN_MESSAGES = [
  {
    id: 1,
    author: 'SkateQueen_Mia',
    location: 'Seoul, KR',
    bias: 'Kyehoon',
    text: '5 years of waiting was so worth it! Kyehoon’s leadership in KickFlip is unreal. WEFLIP FOREVER! 🛹🔥',
    time: '10 mins ago',
    likes: 42
  },
  {
    id: 2,
    author: 'TokyoRider_Ren',
    location: 'Tokyo, JP',
    bias: 'Keiju & Amaru',
    text: 'Keiju and Amaru making us so proud! The acrobatic moves on Mama Said stage blew my mind!',
    time: '35 mins ago',
    likes: 89
  },
  {
    id: 3,
    author: 'JuwangVocalHeaven',
    location: 'Los Angeles, USA',
    bias: 'Juwang',
    text: 'Juwang’s high note in "Like A Monster" literally cured my sadness today. Streaming 24/7! 💛',
    time: '2 hours ago',
    likes: 67
  },
  {
    id: 4,
    author: 'DonghyeonMaknaeLove',
    location: 'Almaty, KZ',
    bias: 'Donghyeon',
    text: 'Donghyeon hockey boy turned into rock vocal powerhouse! We are so proud of our golden maknae! 💚',
    time: '3 hours ago',
    likes: 104
  }
];
