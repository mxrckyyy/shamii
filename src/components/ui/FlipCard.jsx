import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FlipCard({ number, front, back }) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();

  const toggle = () => setFlipped((v) => !v);

  if (reduce) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-pressed={flipped}
        className="group flex min-h-[160px] w-full flex-col rounded-2xl bg-blush/50 p-5 text-left shadow-soft transition-colors hover:bg-blush/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
      >
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-plum/70">
          Reason {String(number).padStart(2, '0')}
        </span>
        <span className="mt-3 font-serif text-lg text-ink">
          {flipped ? back : front}
        </span>
        <span className="mt-auto pt-4 text-xs text-ink/50">
          {flipped ? 'Tap to show front' : 'Tap to reveal'}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={flipped}
      aria-label={`${front}. ${flipped ? 'Showing reason' : 'Tap to reveal reason'}`}
      className="group relative h-44 w-full cursor-pointer [perspective:1000px] focus-visible:outline-none"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col rounded-2xl bg-blush/60 p-5 shadow-soft [backface-visibility:hidden]">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-plum/70">
            Reason {String(number).padStart(2, '0')}
          </span>
          <span className="mt-3 font-serif text-xl text-ink">{front}</span>
          <span className="mt-auto pt-4 text-xs text-ink/50">Tap to reveal</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex flex-col rounded-2xl bg-plum p-5 text-cream shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-cream/70">
            Reason {String(number).padStart(2, '0')}
          </span>
          <span className="mt-3 text-sm leading-relaxed">{back}</span>
          <span className="mt-auto pt-4 text-xs text-cream/60">Tap to flip back</span>
        </div>
      </motion.div>
    </button>
  );
}
