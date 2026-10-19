import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../../data/content.js';

export default function EnvelopeGate({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const reduce = useReducedMotion();

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    const delay = reduce ? 0 : 700;
    window.setTimeout(() => onOpen(), delay);
  };

  return (
    <section
      aria-label="Open your letter"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-cream px-4"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/40 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <p className="mb-2 font-handwriting text-xl text-plum/80">
          {content.envelope.hint}
        </p>
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">
          Our Little Universe
        </h1>
        <p className="mt-3 max-w-xs text-sm text-ink/60 sm:text-base">
          A small letter, made with love.
        </p>

        <button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          aria-label="Open the envelope"
          className="group mt-10 flex flex-col items-center gap-4 focus-visible:outline-none"
        >
          <motion.div
            animate={opening ? { rotateX: -180, y: -20, opacity: 0 } : { rotateX: 0, y: 0, opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative h-40 w-56 sm:h-44 sm:w-64"
          >
            {/* envelope body */}
            <div className="absolute inset-0 rounded-2xl bg-blush shadow-card" />
            {/* flap */}
            <div className="absolute left-0 right-0 top-0 h-1/2 origin-top rounded-t-2xl bg-rose/70" />
            {/* heart seal */}
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-plum text-cream shadow-soft">
              <span aria-hidden="true" className="text-xl">♥</span>
            </div>
          </motion.div>

          <span className="text-sm font-medium text-plum transition-opacity group-hover:opacity-80">
            {opening ? 'Opening…' : content.envelope.instruction}
          </span>
        </button>
      </motion.div>
    </section>
  );
}
