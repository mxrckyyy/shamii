import { useEffect, useState } from 'react';

function computeElapsed(startDate) {
  const startMs = new Date(startDate).getTime();
  let diff = Date.now() - startMs;
  if (!Number.isFinite(diff) || diff < 0) diff = 0;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function useElapsed(startDate) {
  const [elapsed, setElapsed] = useState(() => computeElapsed(startDate));

  useEffect(() => {
    setElapsed(computeElapsed(startDate));
    const id = window.setInterval(() => {
      setElapsed(computeElapsed(startDate));
    }, 1000);
    return () => window.clearInterval(id);
  }, [startDate]);

  return elapsed;
}

export default useElapsed;
