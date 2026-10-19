import { motion, useReducedMotion } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  const reduce = useReducedMotion();
  const isLeft = index % 2 === 0;

  const card = (
    <div className="rounded-2xl bg-blush/40 p-5 shadow-soft">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-plum/70">
        {item.date}
      </p>
      <h3 className="mt-1 font-serif text-xl text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="mt-3 w-full rounded-2xl object-cover shadow-soft"
        />
      )}
    </div>
  );

  if (reduce) {
    return (
      <li className="relative">
        {/* Mobile */}
        <div className="flex gap-4 md:hidden">
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3.5 w-3.5 rounded-full border-2 border-plum bg-cream" />
            <span className="mt-2 w-px flex-1 bg-plum/20" />
          </div>
          <div className="pb-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-plum/70">
              {item.date}
            </p>
            <h3 className="mt-1 font-serif text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="mt-3 w-full rounded-2xl object-cover shadow-soft"
              />
            )}
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6">
          <div className={isLeft ? 'text-right' : ''}>{isLeft && card}</div>
          <div className="flex flex-col items-center">
            <span className="mt-2 h-4 w-4 rounded-full border-2 border-plum bg-cream" />
            <span className="mt-2 w-px flex-1 bg-plum/20" />
          </div>
          <div>{!isLeft && card}</div>
        </div>
      </li>
    );
  }

  return (
    <motion.li
      className="relative"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
    >
      {/* Mobile */}
      <div className="flex gap-4 md:hidden">
        <div className="flex flex-col items-center">
          <span className="mt-1 h-3.5 w-3.5 rounded-full border-2 border-plum bg-cream" />
          <span className="mt-2 w-px flex-1 bg-plum/20" />
        </div>
        <div className="pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-plum/70">
            {item.date}
          </p>
          <h3 className="mt-1 font-serif text-xl text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="mt-3 w-full rounded-2xl object-cover shadow-soft"
            />
          )}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6">
        <div className={isLeft ? 'text-right' : ''}>{isLeft && card}</div>
        <div className="flex flex-col items-center">
          <span className="mt-2 h-4 w-4 rounded-full border-2 border-plum bg-cream" />
          <span className="mt-2 w-px flex-1 bg-plum/20" />
        </div>
        <div>{!isLeft && card}</div>
      </div>
    </motion.li>
  );
}
