import { useState } from 'react';
import Container from '../ui/Container.jsx';
import { content } from '../../data/content.js';

export default function Footer() {
  const [eggOpen, setEggOpen] = useState(false);

  return (
    <footer className="bg-cream py-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xl text-ink">Our Little Universe</p>
          <p className="mt-2 text-sm text-ink/60">
            Made with love by Marc, for Bel.
          </p>
          <p className="mt-1 text-xs text-ink/40">
            Celebrating eight months, on October 22, 2026.
          </p>

          {/* Easter egg */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setEggOpen((v) => !v)}
              aria-label="A small hidden note"
              className="inline-flex h-11 w-11 items-center justify-center text-xl text-rose/60 transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
            >
              ♥
            </button>
            {eggOpen && (
              <p className="mt-3 font-handwriting text-lg text-plum/80">
                You found it. Thank you for reading all the way to the end.
              </p>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
