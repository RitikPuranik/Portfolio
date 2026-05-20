import { memo } from 'react';
import { cn } from '@/lib/utils';

interface PillTagProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'forest' | 'orange' | 'outline-forest' | 'outline-yellow' | 'black';
  className?: string;
  href?: string;
}

const PillTag = memo(function PillTag({ children, variant = 'yellow', className = '', href }: PillTagProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 cursor-pointer';

  const variantClasses = {
    yellow: 'bg-yellow text-black hover:bg-yellow-light',
    forest: 'bg-forest text-white hover:bg-forest-light',
    orange: 'bg-orange text-white hover:opacity-90',
    'outline-forest': 'border-2 border-forest text-forest hover:bg-forest hover:text-white',
    'outline-yellow': 'border-2 border-yellow text-yellow hover:bg-yellow hover:text-black',
    black: 'bg-black text-white hover:bg-gray-800',
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return <span className={classes}>{children}</span>;
});

export default PillTag;
