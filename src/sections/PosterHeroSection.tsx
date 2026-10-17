import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';

export default function PosterHeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.poster-kicker', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.15 });
      gsap.fromTo('.poster-title', { opacity: 0, y: 38 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power4.out', delay: 0.25 });
      gsap.fromTo('.poster-detail', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.45 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#304A36] pb-10 pt-24 text-cream lg:min-h-screen lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #F5B818 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:min-h-[68vh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="relative z-10 order-1 flex flex-col justify-center lg:order-1">
            <div className="poster-kicker mb-5 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#F5B818] sm:text-sm">
              <SparkleIcon size={20} fill="#F5B818" /> Creative developer · India
            </div>
            <h1 className="poster-title font-display text-[clamp(4rem,12vw,10rem)] font-bold italic leading-[0.78] tracking-[-0.08em] text-[#F8F0E3]">
              PORTFOLIO<span className="text-[#F5B818]">.</span>
            </h1>
            <div className="mt-5 space-y-1" aria-label="Full stack developer">
              <div className="poster-title font-display text-[clamp(2.8rem,7vw,6.5rem)] font-light italic leading-[0.84] tracking-[-0.06em] text-transparent" style={{ WebkitTextStroke: '1px rgba(248,240,227,0.8)' }}>FULL STACK</div>
              <div className="poster-title font-display text-[clamp(2.8rem,7vw,6.5rem)] font-bold italic leading-[0.84] tracking-[-0.06em] text-[#F5B818]">DEVELOPER</div>
            </div>
            <p className="poster-detail mt-8 max-w-xl font-body text-base leading-relaxed text-cream/80 sm:text-lg lg:text-xl">
              I turn ideas into thoughtful digital experiences, scalable backends, and AI-powered products that solve real problems.
            </p>
            <div className="poster-detail mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#F5B818] px-6 py-3.5 font-body text-sm font-bold text-[#18261C] transition-transform hover:-translate-y-1">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 font-body text-sm font-semibold text-cream transition-colors hover:border-[#F5B818] hover:text-[#F5B818]">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="poster-detail mt-8 flex items-center gap-4 text-cream/75">
              <a href="https://github.com/RitikPuranik" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-[#F5B818]"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/ritik-puranik-baaba42b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-[#F5B818]"><Linkedin size={20} /></a>
              <span className="h-px w-12 bg-cream/30" />
              <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
            </div>
          </div>

          <div className="relative order-2 flex min-h-[320px] items-center justify-center lg:order-2 lg:min-h-[560px]">
            <div aria-hidden="true" className="absolute right-0 top-[8%] font-display text-[clamp(4rem,10vw,9rem)] font-light italic leading-[0.82] tracking-[-0.07em] text-transparent sm:right-[2%]" style={{ WebkitTextStroke: '1px #F5B818' }}>
              <div>PORT</div><div>FOLIO</div><div>PORT</div><div>FOLIO</div>
            </div>
            <div aria-hidden="true" className="absolute right-[10%] top-[16%] h-[65%] w-[68%] rounded-t-full border border-[#F5B818]/35" />
            <div aria-hidden="true" className="absolute bottom-[12%] left-[8%] h-24 w-24 rounded-full bg-[#F5B818]/10 blur-2xl sm:h-40 sm:w-40" />
            <SparkleIcon size={36} fill="#F5B818" className="absolute left-[6%] top-[23%] z-10 text-[#F5B818]" />
            <SparkleIcon size={22} fill="#F5B818" className="absolute bottom-[17%] right-[9%] z-10 text-[#F5B818]" />
            <div className="poster-detail absolute bottom-[9%] left-[4%] z-20 max-w-[250px] border-l-2 border-[#F5B818] bg-black/70 px-4 py-3 font-body text-xs leading-relaxed text-cream/90 sm:max-w-[300px] sm:px-5 sm:py-4 sm:text-sm">
              Design with intention. Build with curiosity. Make ideas useful.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F5B818]" />
    </section>
  );
}
