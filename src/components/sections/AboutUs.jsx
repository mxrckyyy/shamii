import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../effects/Reveal.jsx';
import { content } from '../../data/content.js';

export default function AboutUs() {
  const { about } = content;
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.intro}
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <article className="rounded-3xl bg-blush/50 p-6 sm:p-8 shadow-soft">
              <h3 className="font-serif text-2xl text-ink">{about.bel.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{about.bel.body}</p>
            </article>
          </Reveal>
          <Reveal delay={0.2}>
            <article className="rounded-3xl bg-blush/50 p-6 sm:p-8 shadow-soft">
              <h3 className="font-serif text-2xl text-ink">{about.marc.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{about.marc.body}</p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink/70">
            {about.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
