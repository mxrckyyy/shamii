import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../effects/Reveal.jsx';
import { content } from '../../data/content.js';

export default function Letter() {
  const { letter } = content;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/40 via-cream to-blush/30 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-10 font-handwriting text-6xl text-plum/10"
      >
        “
      </div>
      <Container size="narrow">
        <Reveal>
          <SectionHeading eyebrow={letter.eyebrow} title={letter.title} align="center" />
        </Reveal>

        <Reveal delay={0.15}>
          <article className="relative mx-auto mt-12 max-w-prose rounded-[2rem] bg-cream/90 px-6 py-10 shadow-card ring-1 ring-plum/10 sm:px-12 sm:py-14">
            {/* paper lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-40"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(92,58,94,0.06) 32px)',
              }}
            />
            <div className="relative space-y-5 text-[1.0625rem] leading-[1.8] text-ink/90 sm:text-[1.125rem]">
              {letter.paragraphs.map((p, i) => {
                const isSignature = p === 'Marc';
                const isGreeting = p === 'Mommy,';
                const isClosing = p === 'With all my love,';
                return (
                  <p
                    key={i}
                    className={
                      isGreeting
                        ? 'font-serif text-2xl text-plum'
                        : isClosing
                        ? 'mt-6 font-handwriting text-xl text-plum/80'
                        : isSignature
                        ? 'font-handwriting text-2xl text-plum'
                        : ''
                    }
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
