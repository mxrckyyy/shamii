import { useElapsed } from '../../hooks/useElapsed.js';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { content } from '../../data/content.js';

export default function Counter() {
  const { days, hours, minutes, seconds } = useElapsed(content.dates.relationshipStart);

  const items = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our time together"
          title="Every moment counts"
          subtitle="Counting from February 22, 2026."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-blush/60 px-3 py-5 text-center shadow-soft sm:py-6"
            >
              <div className="font-serif text-3xl tabular-nums text-ink sm:text-4xl">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-plum/70">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
