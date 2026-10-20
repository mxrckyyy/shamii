import { motion, useReducedMotion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import { content } from '../../data/content.js';

export default function Hero() {
  const reduce = useReducedMotion();
  const title = content.hero.title;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-blush/20 to-cream py-24 sm:py-32 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-rose/10 to-transparent"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.1 }}
            className="mb-5 font-handwriting text-2xl text-plum/80 sm:text-3xl"
          >
            {content.hero.handwritten}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl leading-[1.05] text-ink text-balance sm:text-6xl md:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.5, ease: 'easeOut' }}
            className="mx-auto mt-8 h-px w-32 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.6 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
