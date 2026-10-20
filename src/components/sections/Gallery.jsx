import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { content } from '../../data/content.js';

export default function Gallery() {
  const items = content.gallery || [];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments I want to keep"
          subtitle="A few frames from our days together, Mommy."
          align="center"
        />

        {items.length === 0 ? (
          <p className="mt-10 text-center text-ink/60">Photos will be added here.</p>
        ) : (
          <>
            <div className="relative mt-10">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y">
                  {items.map((item, index) => {
                    const rotation = ((index % 5) - 2) * 1.5;
                    return (
                      <div
                        key={item.id || index}
                        className="min-w-0 flex-[0_0_82%] px-3 sm:flex-[0_0_60%] md:flex-[0_0_34%]"
                      >
                        <figure
                          className="group mx-auto w-full max-w-xs rounded-sm bg-cream p-3 pb-7 shadow-card ring-1 ring-plum/5"
                          style={{ transform: `rotate(${rotation}deg)` }}
                        >
                          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-blush/30">
                            <img
                              src={item.src}
                              alt={item.alt}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                          </div>
                          {item.caption && (
                            <figcaption className="mt-3 text-center font-handwriting text-lg text-plum/80">
                              {item.caption}
                            </figcaption>
                          )}
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-plum/30 text-plum transition-colors hover:bg-blush/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  ‹
                </button>
                <div className="flex gap-2">
                  {scrollSnaps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollTo(i)}
                      aria-label={`Go to photo ${i + 1}`}
                      className="flex h-11 w-11 items-center justify-center"
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          i === selectedIndex ? 'bg-plum' : 'bg-plum/25'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-plum/30 text-plum transition-colors hover:bg-blush/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  ›
                </button>
              </div>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
