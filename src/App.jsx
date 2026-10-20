import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AmbientHearts from './components/effects/AmbientHearts.jsx';
import EnvelopeGate from './components/sections/EnvelopeGate.jsx';
import Hero from './components/sections/Hero.jsx';
import Counter from './components/sections/Counter.jsx';
import AboutUs from './components/sections/AboutUs.jsx';
import Gallery from './components/sections/Gallery.jsx';
import Letter from './components/sections/Letter.jsx';
import Finale from './components/sections/Finale.jsx';
import Footer from './components/sections/Footer.jsx';
import MusicToggle from './components/effects/MusicToggle.jsx';
import { content } from './data/content.js';

export default function App() {
  const [opened, setOpened] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    if (opened) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      const t = window.setTimeout(() => {
        if (mainRef.current) mainRef.current.focus();
      }, 50);
      return () => window.clearTimeout(t);
    }
  }, [opened]);

  return (
    <div className="relative min-h-[100svh] bg-cream">
      <AmbientHearts />
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div key="gate" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="relative z-10">
            <EnvelopeGate onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="main"
            ref={mainRef}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 pb-20 outline-none"
          >
            <Hero />
            <Counter />
            <AboutUs />
            <Gallery />
            <Letter />
            <Finale />
            <Footer />
            <MusicToggle />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
