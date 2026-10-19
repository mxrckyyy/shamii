import confetti from 'canvas-confetti';

let heartShape = null;
try {
  heartShape = confetti.shapeFromText({ text: '❤', scalar: 2 });
} catch (e) {
  heartShape = null;
}

export function fireHeartConfetti({ reduce = false } = {}) {
  if (reduce) return;
  if (typeof window === 'undefined') return;

  const colors = ['#E7A0A8', '#5C3A5E', '#C9A227', '#F9E3E4'];
  const shapes = heartShape ? [heartShape] : ['circle'];
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 36 : 72;

  confetti({
    particleCount: count,
    spread: 70,
    origin: { y: 0.65 },
    colors,
    shapes,
    scalar: 1.05,
    gravity: 0.9,
    ticks: 200,
    disableForReducedMotion: true,
  });

  window.setTimeout(() => {
    confetti({
      particleCount: Math.round(count / 2),
      spread: 110,
      origin: { y: 0.55 },
      colors,
      shapes,
      scalar: 0.95,
      gravity: 0.9,
      ticks: 180,
      disableForReducedMotion: true,
    });
  }, 260);
}

export default fireHeartConfetti;
