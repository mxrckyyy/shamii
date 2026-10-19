export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50';
  const variants = {
    primary: 'bg-plum text-cream hover:bg-plum/90',
    secondary: 'bg-blush text-ink hover:bg-blush/80',
    ghost: 'text-plum hover:bg-blush/60',
  };
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
