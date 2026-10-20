import { useReducedMotion } from 'framer-motion';

const hearts = [
  { left: '8%', size: '1.2rem', delay: '0s', duration: '14s' },
  { left: '22%', size: '0.9rem', delay: '3s', duration: '17s' },
  { left: '40%', size: '1.4rem', delay: '6s', duration: '15s' },
  { left: '62%', size: '1rem', delay: '1s', duration: '18s' },
  { left: '78%', size: '1.3rem', delay: '4s', duration: '16s' },
  { left: '92%', size: '0.8rem', delay: '7s', duration: '19s' },
];

export default function AmbientHearts() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="ambient-heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDelay: h.delay,
            animationDuration: h.duration,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
