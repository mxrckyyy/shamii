// Centralized personal content. Edit here; do not scatter copy in components.
// Placeholders use the marker "[PLACEHOLDER: ...]" and are NOT real memories.

export const content = {
  hero: {
    title: 'Happy 8 Months, Bel',
    subtitle: 'A small universe, made for you.',
  },
  dates: {
    relationshipStart: '2026-02-22T00:00:00+08:00',
    anniversary: '2026-10-22',
  },
  envelope: {
    instruction: 'Tap to open your letter',
    hint: 'A little something, from Marc',
  },
  about: {
    eyebrow: 'About Us',
    title: 'Bel and Marc',
    intro:
      'Two people learning to show up for each other, in the small and steady ways that matter most.',
    bel: {
      name: 'Bel',
      body:
        'Bel spends her days studying and her nights working. She gives her time and energy to the things that matter, even when it is tiring, even when no one is watching.',
    },
    marc: {
      name: 'Marc',
      body:
        'Marc sees that effort. He sees the long days and the late nights, and he is proud of her for it. He wants her to know that her dedication does not go unnoticed.',
    },
    closing:
      'This is a small thank-you for the work she puts in, and a promise to keep cheering her on.',
  },
  letter: {
    eyebrow: 'The Letter',
    title: 'For you, Bel',
    paragraphs: [
      'Bel,',
      'I see how hard you work. I see the days spent studying and the nights spent working, and I want you to know that your effort and dedication do not go unnoticed.',
      'I am proud of you for the way you keep showing up, even when it is tiring. Your dedication means more to me than I can always say.',
      'I promise to keep supporting you, to keep showing up for you, and to keep choosing us, today and in the days ahead.',
      'And even though we see each other at school every day, I still miss you every day.',
      'With love,',
      'Marc',
    ],
    // NOTE: Draft letter incorporating the required sentiments. Personalize with your own words before final delivery.
  },
  reasons: Array.from({ length: 22 }, (_, i) => ({
    id: `r${i + 1}`,
    number: i + 1,
    front: `Reason ${String(i + 1).padStart(2, '0')}`,
    back: '[PLACEHOLDER: Write a specific, honest reason Marc appreciates Bel.]',
  })),
  gallery: [
    { id: 'g1', src: '/images/placeholder.svg', alt: '[PLACEHOLDER: photo description]', caption: '[PLACEHOLDER: caption]' },
    { id: 'g2', src: '/images/placeholder.svg', alt: '[PLACEHOLDER: photo description]', caption: '[PLACEHOLDER: caption]' },
    { id: 'g3', src: '/images/placeholder.svg', alt: '[PLACEHOLDER: photo description]', caption: '[PLACEHOLDER: caption]' },
    { id: 'g4', src: '/images/placeholder.svg', alt: '[PLACEHOLDER: photo description]', caption: '[PLACEHOLDER: caption]' },
    { id: 'g5', src: '/images/placeholder.svg', alt: '[PLACEHOLDER: photo description]', caption: '[PLACEHOLDER: caption]' },
  ],
  timeline: [
    {
      id: 't1',
      date: '[PLACEHOLDER: date]',
      title: '[PLACEHOLDER: First milestone title]',
      description: '[PLACEHOLDER: Describe this milestone in your own words.]',
      image: null,
    },
    {
      id: 't2',
      date: '[PLACEHOLDER: date]',
      title: '[PLACEHOLDER: Second milestone title]',
      description: '[PLACEHOLDER: Describe this milestone in your own words.]',
      image: null,
    },
    {
      id: 't3',
      date: '[PLACEHOLDER: date]',
      title: '[PLACEHOLDER: Third milestone title]',
      description: '[PLACEHOLDER: Describe this milestone in your own words.]',
      image: null,
    },
    {
      id: 't4',
      date: '[PLACEHOLDER: date]',
      title: '[PLACEHOLDER: Fourth milestone title]',
      description: '[PLACEHOLDER: Describe this milestone in your own words.]',
      image: null,
    },
  ],
};

export default content;
