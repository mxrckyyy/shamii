// Centralized personal content. Edit here; do not scatter copy in components.
// Placeholders use the marker "[PLACEHOLDER: ...]" and are NOT real memories.

const galleryItems = Array.from({ length: 42 }, (_, i) => ({
  id: `g${i + 1}`,
  src: `/images/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: '[PLACEHOLDER: describe this photo]',
  caption: null,
}));

export const content = {
  hero: {
    title: 'Happy Monthsary, Mommy!',
    subtitle: 'A little universe, made with love, just for you.',
    handwritten: 'made with love, just for you',
  },
  dates: {
    relationshipStart: '2026-02-22T00:00:00+08:00',
    anniversary: '2026-10-22',
  },
  envelope: {
    instruction: 'Tap to open your letter',
    hint: 'A little something, from ShamSham',
    title: 'Our Little Universe',
  },
  about: {
    eyebrow: 'For you',
    title: 'Mommy',
    intro:
      'This little space was made for you to remind you how loved, appreciated, and special you are.',
    closing:
      'Thank you for being you. Thank you for choosing us. I love you more than words can hold.',
  },
  gallery: galleryItems,
  letter: {
    eyebrow: 'The Letter',
    title: 'For you, Mommy',
    paragraphs: [
      'Mommy,',
      'I see how hard you work. I see the days spent studying and the nights spent working, and I want you to know that your effort and dedication do not go unnoticed.',
      'I am proud of you for the way you keep showing up, even when it is tiring. Your dedication means more to me than I can always say.',
      'I promise to keep supporting you, to keep showing up for you, and to keep choosing us, today and in the days ahead.',
      'And even though we see each other at school every day, I still miss you every day.',
      'With all my love,',
      'ShamSham',
    ],
  },
  finale: {
    eyebrow: 'Finale',
    title: 'Happy Monthsary, Mommy!',
    subtitle: 'Eight months of learning, growing, and choosing each other.',
    message:
      'I am grateful for you, for your effort, and for the way you show up every day. Here is to us, and to everything still ahead.',
  },
  footer: {
    title: 'Our Little Universe',
    line1: 'Made with love by ShamSham, for Mommy.',
    line2: 'Celebrating our monthsary, on October 22, 2026.',
    easterEgg: 'You found it. Thank you for reading all the way to the end.',
  },
};

export default content;
