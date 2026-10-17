import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';

export default function PosterHeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.poster-title', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.poster-photo', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.25 });
      gsap.fromTo('.poster-copy', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', delay: 0.55 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative isolate overflow-hidden bg-[#242424] px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-t-[34px] bg-[#304A36] text-[#F8F0E3] sm:rounded-t-[48px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #F5B818 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 min-h-[720px] px-5 pb-24 pt-20 sm:min-h-[760px] sm:px-10 sm:pt-24 lg:min-h-[min(790px,90vh)] lg:px-[8.5%] lg:pt-24">
          <div className="poster-title pointer-events-none absolute left-[21%] top-[74px] z-20 whitespace-nowrap font-display text-[clamp(4.2rem,11.2vw,10rem)] font-black italic leading-[0.8] tracking-[-0.075em] text-[#F8F0E3] sm:top-[85px] lg:left-[21%]">
            PORTFOLIO
          </div>

          <div className="pointer-events-none absolute left-[43%] top-[174px] z-10 hidden select-none font-display text-[clamp(3.5rem,7.5vw,7.2rem)] font-light italic leading-[0.82] tracking-[-0.06em] text-transparent sm:block lg:left-[43%] lg:top-[190px]" style={{ WebkitTextStroke: '1px #F5B818' }}>
            <div>PORTFOLIO</div>
            <div className="mt-2">PORTFOLIO</div>
            <div className="mt-2">PORTFOLIO</div>
          </div>

          <div className="poster-photo absolute left-[8%] top-[170px] z-20 w-[52%] max-w-[480px] sm:left-[9%] sm:top-[175px] lg:left-[9%] lg:top-[175px] lg:w-[36%]">
            <div className="absolute -left-2 -top-2 h-full w-full bg-[#BC6B3C] sm:-left-4 sm:-top-4" />
            <div className="relative aspect-[0.84] overflow-hidden bg-[#BC6B3C]">
              <img src="/ritik.png" alt="Portrait of Ritik Puranik" className="h-full w-full object-cover object-top mix-blend-multiply" style={{ filter: 'contrast(1.12) saturate(0.72) brightness(0.92)' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#304A36]/5 to-[#304A36]/45" />
            </div>
            <SparkleIcon size={40} fill="#F5B818" className="absolute -left-5 top-7 text-[#F5B818] sm:-left-8 sm:top-9" />
            <SparkleIcon size={24} fill="#F5B818" className="absolute -left-4 top-[76px] text-[#F5B818] sm:-left-7 sm:top-[94px]" />
            <SparkleIcon size={30} fill="#F5B818" className="absolute -bottom-5 right-0 text-[#F5B818]" />
          </div>

          <div className="poster-copy absolute right-[7%] top-[310px] z-30 hidden font-body text-sm leading-7 tracking-wide text-[#F8F0E3]/90 sm:block lg:right-[9%] lg:top-[300px] lg:text-base">
            <p>GitHub: /RitikPuranik</p>
            <p>LinkedIn: /ritik-puranik</p>
            <p>Based in India</p>
          </div>

          <div className="poster-copy absolute bottom-[120px] left-[5%] z-30 w-[48%] max-w-[440px] bg-black/85 px-4 py-3 font-body text-[10px] leading-[1.45] text-[#F8F0E3]/90 sm:bottom-[115px] sm:left-[3%] sm:w-[34%] sm:px-5 sm:py-4 sm:text-xs lg:bottom-[105px]">
            I build thoughtful digital experiences and useful software.
            <br />
            <span className="text-[#F5B818]">From first idea to a working product.</span>
          </div>

          <div className="poster-title absolute right-[7%] top-[230px] z-30 hidden max-w-[43%] font-display text-[clamp(2.3rem,4.6vw,4.8rem)] font-bold italic leading-[0.86] tracking-[-0.06em] text-[#F5B818] sm:block lg:right-[8%] lg:top-[230px]">
            FULL STACK<br />DEVELOPER
          </div>
        </div>

        <div className="relative h-[165px] bg-black sm:h-[165px]">
          <div className="poster-copy absolute bottom-7 left-6 max-w-[340px] font-body text-[10px] leading-relaxed text-[#F8F0E3]/80 sm:left-10 sm:text-xs">
            I approach problems with curiosity and care, creating simple, practical solutions.
          </div>
          <a href="#about" className="absolute -top-[55px] left-1/2 z-40 flex h-[112px] w-[112px] -translate-x-1/2 flex-col items-center justify-center rounded-full bg-[#F5B818] font-body text-sm font-medium leading-tight text-[#202820] shadow-lg transition-transform duration-300 hover:scale-105" aria-label="Scroll down to About Me">
            <span>Scroll</span><span>down</span><ArrowDown size={16} className="mt-1" />
          </a>
        </div>
        <div className="h-7 bg-[#F8F0E3]" />
      </div>
    </section>
  );
}
