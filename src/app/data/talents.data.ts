export interface ITalentSocial {
  platform: string;
  icon: string;
  url: string;
}

export interface ITalent {
  slug: string;
  name: string;
  color: string;
  species: { en: string; fr: string };
  birthday: string; // DD/MM
  description: { en: string; fr: string };
  traits: { en: string; fr: string }[];
  socials: ITalentSocial[];
  images: {
    fullBody: string;
    avatar: string;
    galleryFolder?: string; // si le dossier assets ne correspond pas au slug
    // gallery : déposer les images dans public/assets/vtubers/{galleryFolder|slug}/gallery/
    // puis relancer le script : node scripts/vturias-scan-galleries.mjs
  };
}

export const TALENTS: ITalent[] = [
  {
    slug: 'aurore',
    name: 'AuroreTVv',
    color: '#f2abca',
    species: { en: 'Vampire / Cat', fr: 'Vampire / Chat' },
    birthday: '26/04',
    description: {
      en: "VTuber vampire/cat for 3 years, loves sharing her passion for video games and especially horror games.",
      fr: "VTuber vampire/chat depuis 3 ans, aime partager sa passion pour le jeu vidéo et surtout pour les jeux d'horreur.",
    },
    traits: [
      { en: 'Endearing', fr: 'Attachante' },
      { en: 'Grumpy',    fr: 'Râleuse' },
      { en: 'Leader',    fr: 'Leadeuse' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: 'https://www.twitch.tv/auroretvv' },
      { platform: 'X', icon: 'ri-twitter-x-fill', url: 'https://x.com/AuroreTV_v' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: 'https://www.youtube.com/@auroretvv' },
      { platform: 'TikTok',      icon: 'ri-tiktok-fill',    url: 'https://www.tiktok.com/@auroretvv' },
      { platform: 'Instagram',      icon: 'ri-instagram-line',    url: 'https://www.instagram.com/auroretvv/' },
      { platform: 'Discord',      icon: 'ri-discord-fill',    url: 'https://discord.com/invite/SpswqZBwVa' },
    ],
    images: {
      fullBody: 'assets/vtubers/aurore/Auroret FullBody.png',
      avatar:   'assets/vtubers/aurore/Aurore ChoqueNormal.png',
    },
  },
  {
    slug: 'noni',
    name: 'Jiangshi Noni',
    color: '#e2aafb',
    species: { en: 'Zombie', fr: 'Zombie' },
    birthday: '16/10',
    description: {
      en: "Shy VTuber who loves to play, even if she's a bit bad at it. She loves puzzle games, RPGs and retro games, especially Kingdom Hearts. Expect plenty of bad gameplay and chill art streams.",
      fr: "Vtubeuse timide qui aime jouer, même si elle est un peu nulle au jeu. Elle adore les jeux d'énigmes, les RPG et les jeux rétro, mais surtout Kingdom Hearts. Attendez-vous à beaucoup de mauvais gameplay et aussi beaucoup de streams chill autour de l'art.",
    },
    traits: [
      { en: 'Shy',       fr: 'Timide' },
      { en: 'Fearful',   fr: 'Peureuse' },
      { en: 'Energetic', fr: 'Énergique' },
      { en: 'Creative',  fr: 'Créatif' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: 'https://www.twitch.tv/Nonijiangshi' },
      { platform: 'X', icon: 'ri-twitter-x-fill', url: 'https://x.com/Jiangshi_Noni' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: 'https://www.youtube.com/@Jiangshi_Noni' },
      { platform: 'TikTok',      icon: 'ri-tiktok-fill',    url: 'https://www.tiktok.com/@jiangshi_noni' },
      { platform: 'Instagram',      icon: 'ri-instagram-line',    url: 'https://www.instagram.com/jiangshi_noni/' },
      { platform: 'Discord',      icon: 'ri-discord-fill',    url: 'https://discord.com/invite/7GKHyKEpJg' },
    ],
    images: {
      fullBody: 'assets/vtubers/noni/noni_view_global.png',
      avatar:   'assets/vtubers/noni/noni_pp_site.png',
    },
  },
  {
    slug: 'damnyts',
    name: 'Damnyts',
    color: '#ff5f47',
    species: { en: 'Dragon', fr: 'Dragon' },
    birthday: '25/05',
    description: {
      en: "Young and joyful dragon in search of perilous adventures. A lover of great stories and games of all kinds.",
      fr: "Jeune et joyeux dragon en quête d'aventures périlleuses. Amateur de belles histoires et de jeux en tous genres.",
    },
    traits: [
      { en: 'Gentle',      fr: 'Doux' },
      { en: 'Curious',     fr: 'Curieux' },
      { en: 'Optimistic',  fr: 'Optimiste' },
      { en: 'Hot-headed',  fr: 'Colérique' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: 'https://www.twitch.tv/damnyts/' },
      { platform: 'X', icon: 'ri-twitter-x-fill', url: 'https://x.com/damnyts' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: 'https://www.youtube.com/@latanierededamnyts' },
      { platform: 'TikTok',      icon: 'ri-tiktok-fill',    url: 'https://www.tiktok.com/@damnyts_dragon_noir' },
      { platform: 'Instagram',      icon: 'ri-instagram-line',    url: 'https://www.instagram.com/damnyts/' },
      { platform: 'Discord',      icon: 'ri-discord-fill',    url: 'https://discord.gg/ed53aE3pAA' },
    ],
    images: {
      fullBody: 'assets/vtubers/damnyts/damnyts_view_simple.png',
      avatar:   'assets/vtubers/damnyts/damnyts_pp_site.png',
    },
  },
  {
    slug: 'vmaxime',
    name: 'VMaxime',
    color: '#ff5e6b',
    species: { en: 'Plain Human', fr: 'Humain Banal' },
    birthday: '09/12',
    description: {
      en: "Travels between our world and that of VTubers to create shows that cover every universe.",
      fr: "Voyage entre notre monde et celui des vtubeurs pour créer des émissions qui parlent de tous les univers.",
    },
    traits: [
      { en: 'Leadership',  fr: 'Leadership' },
      { en: 'Literal',     fr: 'Premier Degré' },
      { en: 'Arrogant',    fr: 'Arrogant' },
      { en: 'Charismatic', fr: 'Charismatique' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: 'https://www.twitch.tv/themaximesan' },
      { platform: 'X', icon: 'ri-twitter-x-fill', url: 'https://x.com/VMaxime_Creator' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: 'https://www.youtube.com/@vmaximecreator' },
      { platform: 'TikTok',      icon: 'ri-tiktok-fill',    url: 'https://www.tiktok.com/@vmaximecreator' },
      { platform: 'Instagram',      icon: 'ri-instagram-line',    url: 'https://www.instagram.com/vmaxime_creator/' },
    ],
    images: {
      fullBody:      'assets/vtubers/maxime/maxime_view_global.png',
      avatar:        'assets/vtubers/maxime/maxime_pp_site.png',
      galleryFolder: 'maxime',
    },
  },
];
