import Link from 'next/link';
import { cn } from 'utils';

function ArrowIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

const variantStyles = {
  primary:
    'rounded-full py-1 px-3 bg-sky-400/20 dark:bg-sky-400/10 dark:text-sky-400 text-sky-600 ring-1 ring-inset ring-sky-400/80 dark:ring-sky-400/20 hover:bg-sky-400/70 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 hover:text-white hover:ring-sky-700 dark:hover:ring-sky-300',
  secondary:
    'rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-400',
  outline:
    'rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500',
};

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}: {
  target?: string;
  href: string;
  variant?: string;
  className?: string;
  children: any;
  arrow?: string;
}) {
  let Component = props?.href ? Link : 'button';

  className = cn(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className
  );

  let arrowIcon = (
    <ArrowIcon
      className={cn(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1'
      )}
    />
  );

  return (
    <Component className={className} {...props}>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </Component>
  );
}
