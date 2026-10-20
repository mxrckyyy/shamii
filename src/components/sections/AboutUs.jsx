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

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-ink/70">
            {about.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
