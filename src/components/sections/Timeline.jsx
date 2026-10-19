import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import TimelineItem from '../ui/TimelineItem.jsx';
import { content } from '../../data/content.js';

export default function Timeline() {
  const items = content.timeline || [];

  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our story"
          title="Milestones along the way"
          subtitle="A few moments that brought us here."
          align="center"
        />

        {items.length === 0 ? (
          <p className="mt-10 text-center text-ink/60">
            Milestones will be added here.
          </p>
        ) : (
          <ol className="relative mx-auto mt-12 max-w-4xl">
            {items.map((item, index) => (
              <TimelineItem key={item.id || index} item={item} index={index} />
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
