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
      'Happy Monthsary Mommy!',
      'First of all, ganahan ko magpasalamat ka Papa God for all the guidance and protection na iya gihatag sa atoa sa pang adlaw-adlaw, and for the love na iya gihatag sa atoa.',
      'Mommy, thank you sa tanan-tanan, especially for staying with me, labaw na this past few days because of my financial challenges. But still, you stayed with me and helped me get through with it. I\'m very thankful gud kay ikaw ako uyab, very caring and loving nako.',
      'And also, sorry Mommy sa tanan-tanan, especially katong birthday celebration ni Kuya Bong, about atong nasobraan nako ka-needy. Sorry kaayo, Mommy. Wala ra ko sa akong sakto nga hunahuna ato, Mii, dala na pud sa kakapoy, and ganahan ra gud unta ko maglambing nimo ato. But still, sorry Mommy. Dili na to mausab.',
      'You know naman, Mommy, kung unsa tika ka-love and piangga, but sorry Mommy if usahay dili nako na-express nimo. Daghan ra gud kog gihunahuna karon, but still, dili siya reason para dili nako ma-express akong kaugalingon nimo. Promise, mobawi ko nimo, Mommy, and I will do better pa.',
      'Ikaw ra always and kanunay, Mommy. You know that way, makatupong nimo bisag kinsa pa na sila, kay ikaw ra gud akoa, Mommy.',
      'And bunal and padayon lang gud ta kanunay, Mommy. I just want you to know na naa ra gud ko always sa imong tapad, ha. Bisag unsa pa na nga mga challenges ang ato ma-atubang puhon, I know kaya ra gud nato ma-figure out together, no matter unsa pa na kalisod.',
      'I love you always, Mommy. Again, happy monthsary kanato, Mommy! I love you so much!',
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
