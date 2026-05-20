import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface OutlinedTextFillProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  triggerOnScroll?: boolean;
  delay?: number;
  color?: 'yellow' | 'white';
}

export default function OutlinedTextFill({
  lines,
  className = '',
  lineClassName = '',
  triggerOnScroll = true,
  delay = 0,
  color = 'yellow',
}: OutlinedTextFillProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fills = container.querySelectorAll('.fill-text');

    if (reducedMotion) {
      fills.forEach((f) => {
        (f as HTMLElement).style.clipPath = 'inset(0 0% 0 0)';
      });
      return;
    }

    fills.forEach((f) => {
      (f as HTMLElement).style.clipPath = 'inset(0 100% 0 0)';
    });

    const ctx = gsap.context(() => {
      fills.forEach((fill, i) => {
        const tl = gsap.timeline({
          scrollTrigger: triggerOnScroll
            ? {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none none',
              }
            : undefined,
          delay: delay + i * 0.2,
        });

        tl.to(fill, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.5,
          ease: 'power4.inOut',
        });
      });
    });

    return () => ctx.revert();
  }, [triggerOnScroll, delay, lines.length]);

  const strokeColor = color === 'yellow' ? 'text-stroke' : 'text-stroke-white';
  const fillColor = color === 'yellow' ? 'text-yellow' : 'text-white/90';

  return (
    <div ref={containerRef} className={cn('select-none pointer-events-none', className)} aria-hidden="true">
      {lines.map((line, i) => (
        <div key={i} className={cn('relative leading-[0.9] tracking-tight', lineClassName)}>
          {/* Stroke layer */}
          <span className={cn('block', strokeColor)}>
            {line}
          </span>
          {/* Fill layer */}
          <span
            className={cn('fill-text absolute inset-0 block', fillColor)}
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}
