import { motion, useReducedMotion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import { content } from '../../data/content.js';

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blush/30 to-transparent"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.9, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.15 }}
            className="mb-5 font-handwriting text-2xl text-plum/80 sm:text-3xl"
          >
            For Bel, with all my heart
          </motion.p>
          <h1 className="font-serif text-display text-ink sm:text-display-lg">
            {content.hero.title}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.35, ease: 'easeOut' }}
            className="mx-auto mt-8 h-px w-28 origin-center bg-gold/70"
          />
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {content.hero.subtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
