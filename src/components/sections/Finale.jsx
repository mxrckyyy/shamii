import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import { fireHeartConfetti } from '../../lib/heartConfetti.js';
import { content } from '../../data/content.js';

export default function Finale() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const firedRef = useRef(false);
  const [celebrated, setCelebrated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            fireHeartConfetti({ reduce });
            setCelebrated(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduce]);

  const handleCelebrate = () => {
    fireHeartConfetti({ reduce });
    setCelebrated(true);
  };

  const f = content.finale;

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-cream via-blush/30 to-cream py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute left-1/4 top-1/3 h-44 w-44 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} align="center" />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.15 }}
            className="mt-8 text-base leading-relaxed text-ink/80 sm:text-lg"
          >
            {f.message}
          </motion.p>

          {!reduce && (
            <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
              {['#E7A0A8', '#5C3A5E', '#C9A227'].map((c, i) => (
                <span
                  key={i}
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button onClick={handleCelebrate}>
              {celebrated ? 'Celebrate again' : 'Celebrate'}
            </Button>
          </div>

          {reduce && (
            <p className="mt-6 text-sm text-ink/60">
              (Motion is reduced; a quiet celebration for you instead.)
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
