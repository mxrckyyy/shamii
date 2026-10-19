import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../effects/Reveal.jsx';
import { content } from '../../data/content.js';

export default function Letter() {
  const { letter } = content;

  return (
    <section className="bg-blush/30 py-20 sm:py-28">
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow={letter.eyebrow}
            title={letter.title}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <article className="mx-auto mt-12 max-w-prose rounded-3xl bg-cream/80 px-6 py-10 shadow-soft sm:px-10 sm:py-14">
            <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-ink/90 sm:text-[1.125rem]">
              {letter.paragraphs.map((p, i) => {
                const isSignature = p === 'Marc';
                const isGreeting = p === 'Bel,';
                return (
                  <p
                    key={i}
                    className={
                      isGreeting
                        ? 'font-serif text-2xl text-ink'
                        : isSignature
                        ? 'mt-6 font-handwriting text-2xl text-plum'
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
