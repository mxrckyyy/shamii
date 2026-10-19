export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-plum/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
