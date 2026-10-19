import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import FlipCard from '../ui/FlipCard.jsx';
import { content } from '../../data/content.js';

export default function Reasons() {
  const items = content.reasons || [];

  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="22 Reasons"
          title="Why I appreciate you"
          subtitle="Tap any card to reveal a reason."
          align="center"
        />

        {items.length === 0 ? (
          <p className="mt-10 text-center text-ink/60">Reasons will be added here.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FlipCard
                key={item.id}
                number={item.number}
                front={item.front}
                back={item.back}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
