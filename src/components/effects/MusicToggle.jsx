import { useEffect, useRef, useState } from 'react';
import { content } from '../../data/content.js';

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  if (!content.audioSrc) return null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    return () => {
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (e) {
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio ref={audioRef} src={content.audioSrc} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-plum shadow-card backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
      >
        {playing ? '❚❚' : '♪'}
      </button>
    </div>
  );
}
