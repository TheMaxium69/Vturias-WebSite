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
    simple: string;
    avatar: string;
    chibi?: string;
    others: string[];
  };
}

export const TALENTS: ITalent[] = [
  {
    slug: 'aurore',
    name: 'AuroreTVv',
    color: '#c2185b',
    species: { en: 'Fox', fr: 'Renarde' },
    birthday: '14/02',
    description: {
      en: 'AuroreTVv is the co-founder of Vturias and one of the most iconic French VTubers. With her captivating personality and boundless creativity, she brings warmth and energy to every stream.',
      fr: "AuroreTVv est la co-fondatrice de Vturias et l'une des VTubeuses francophones les plus emblématiques. Avec sa personnalité captivante et sa créativité sans limites, elle apporte chaleur et énergie à chaque stream.",
    },
    traits: [
      { en: 'Creative', fr: 'Créative' },
      { en: 'Energetic', fr: 'Énergique' },
      { en: 'Warm', fr: 'Chaleureuse' },
      { en: 'Leader', fr: 'Meneuse' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: '#' },
      { platform: 'Twitter / X', icon: 'ri-twitter-x-fill', url: '#' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: '#' },
      { platform: 'TikTok',      icon: 'ri-tiktok-fill',    url: '#' },
    ],
    images: {
      fullBody: 'assets/vtuber/aurore/aurore_view_global.png',
      simple:   'assets/vtuber/aurore/aurore_view_simple.png',
      avatar:   'assets/vtuber/aurore/aurore_pp_site.png',
      chibi:    'assets/vtuber/aurore/aurore_chibi.png',
      others:   [
        'assets/vtuber/aurore/aurore_other1.png',
        'assets/vtuber/aurore/aurore_other2.png',
      ],
    },
  },
  {
    slug: 'noni',
    name: 'Jiangshi Noni',
    color: '#6a1b9a',
    species: { en: 'Jiangshi', fr: 'Jiangshi' },
    birthday: '01/11',
    description: {
      en: 'Jiangshi Noni is a mysterious and enchanting VTuber. As a Jiangshi — a Chinese hopping vampire — she blends mystique, elegance and playful energy to bring a unique flavour to the French VTubing scene.',
      fr: "Jiangshi Noni est une VTubeuse mystérieuse et envoûtante. En tant que Jiangshi — un vampire sautant chinois — elle mêle mystère, élégance et énergie espiègle pour apporter une touche unique à la scène VTubing francophone.",
    },
    traits: [
      { en: 'Mysterious', fr: 'Mystérieuse' },
      { en: 'Elegant', fr: 'Élégante' },
      { en: 'Playful', fr: 'Espiègle' },
      { en: 'Artistic', fr: 'Artistique' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: '#' },
      { platform: 'Twitter / X', icon: 'ri-twitter-x-fill', url: '#' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: '#' },
    ],
    images: {
      fullBody: 'assets/vtuber/noni/noni_view_global.png',
      simple:   'assets/vtuber/noni/noni_view_simple.png',
      avatar:   'assets/vtuber/noni/noni_pp_site.png',
      chibi:    'assets/vtuber/noni/noni_chibi.png',
      others:   [
        'assets/vtuber/noni/noni_other1.png',
        'assets/vtuber/noni/noni_other2.png',
      ],
    },
  },
  {
    slug: 'damnyts',
    name: 'Damnyts',
    color: '#b71c1c',
    species: { en: 'Demon', fr: 'Démon' },
    birthday: '06/06',
    description: {
      en: 'Damnyts is an intense and charismatic VTuber with a dark and striking presence. This demon brings raw energy and boldness to every stream, captivating audiences with an unforgettable personality.',
      fr: "Damnyts est un·e VTuber intense et charismatique à la présence sombre et frappante. Ce démon apporte une énergie brute et de l'audace à chaque stream, captivant le public avec une personnalité inoubliable.",
    },
    traits: [
      { en: 'Intense', fr: 'Intense' },
      { en: 'Charismatic', fr: 'Charismatique' },
      { en: 'Bold', fr: 'Audacieux' },
      { en: 'Dark', fr: 'Sombre' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: '#' },
      { platform: 'Twitter / X', icon: 'ri-twitter-x-fill', url: '#' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: '#' },
    ],
    images: {
      fullBody: 'assets/vtuber/damnyts/damnyts_view_simple.png',
      simple:   'assets/vtuber/damnyts/damnyts_view_simple.png',
      avatar:   'assets/vtuber/damnyts/damnyts_pp_site.png',
      others:   [
        'assets/vtuber/damnyts/damnyts_view_global.png',
        'assets/vtuber/damnyts/damnyts_other1.png',
        'assets/vtuber/damnyts/damnyts_other2.png',
      ],
    },
  },
  {
    slug: 'vmaxime',
    name: 'VMaxime',
    color: '#0277bd',
    species: { en: 'Human', fr: 'Humain' },
    birthday: '20/08',
    description: {
      en: 'VMaxime is the virtual persona of Maxime, founder of Tyrolium and the tech mind behind Vturias. He combines a deep passion for technology and digital creation with a genuine love for the VTubing community.',
      fr: "VMaxime est l'avatar virtuel de Maxime, fondateur de Tyrolium et l'esprit tech derrière Vturias. Il allie une profonde passion pour la technologie et la création numérique avec un véritable amour pour la communauté VTubing.",
    },
    traits: [
      { en: 'Technical', fr: 'Technique' },
      { en: 'Creative', fr: 'Créatif' },
      { en: 'Passionate', fr: 'Passionné' },
      { en: 'Builder', fr: 'Bâtisseur' },
    ],
    socials: [
      { platform: 'Twitch',      icon: 'ri-twitch-fill',    url: '#' },
      { platform: 'Twitter / X', icon: 'ri-twitter-x-fill', url: '#' },
      { platform: 'YouTube',     icon: 'ri-youtube-fill',   url: '#' },
    ],
    images: {
      fullBody: 'assets/vtuber/maxime/maxime_view_global.png',
      simple:   'assets/vtuber/maxime/maxime_view_simple.png',
      avatar:   'assets/vtuber/maxime/maxime_pp_site.png',
      others:   [
        'assets/vtuber/maxime/maxime_other1.png',
      ],
    },
  },
];
