import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface OpeningScreenProps {
  onComplete: () => void;
}

const SIGNATURE_DASH = 1800;

export default function OpeningScreen({ onComplete }: OpeningScreenProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const signature = signatureRef.current;

    if (!overlay || !signature) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      const timeoutId = window.setTimeout(onComplete, 900);

      gsap.fromTo(
        overlay,
        { opacity: 1 },
        { opacity: 0, duration: 0.55, ease: 'power2.out', delay: 0.35 }
      );

      return () => window.clearTimeout(timeoutId);
    }

    const timeline = gsap.timeline({ onComplete });

    timeline
      .fromTo(
        signature,
        {
          strokeDashoffset: SIGNATURE_DASH,
          strokeOpacity: 1,
          fillOpacity: 0,
        },
        {
          strokeDashoffset: 0,
          duration: 1.85,
          ease: 'power2.inOut',
        }
      )
      .to(
        signature,
        {
          fillOpacity: 1,
          strokeOpacity: 0.8,
          duration: 0.45,
          ease: 'power1.out',
        },
        '-=0.55'
      )
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          delay: 0.35,
        }
      );

    return () => timeline.kill();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-black"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(245, 184, 24, 0.16), transparent 35%), radial-gradient(circle at 50% 50%, rgba(248, 240, 227, 0.08), transparent 55%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(248, 240, 227, 0.95) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative w-full max-w-5xl px-6">
        <svg
          viewBox="0 0 1200 420"
          className="w-full overflow-visible"
          role="img"
          aria-label="Ritik Puranik"
        >
          <text
            ref={signatureRef}
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-script text-[118px] sm:text-[150px] md:text-[170px]"
            fill="rgba(248, 240, 227, 1)"
            stroke="#F5B818"
            strokeWidth="1.4"
            paintOrder="stroke fill"
            style={{
              fontSize: 'clamp(4.25rem, 11vw, 10rem)',
              letterSpacing: '0.02em',
              strokeDasharray: SIGNATURE_DASH,
              strokeDashoffset: SIGNATURE_DASH,
              filter: 'drop-shadow(0 0 24px rgba(245, 184, 24, 0.16))',
            }}
          >
            Ritik Puranik
          </text>
        </svg>
      </div>
    </div>
  );
}
