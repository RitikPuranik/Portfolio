import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.poster-kicker', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.15 });
      gsap.fromTo('.poster-title', { opacity: 0, y: 38 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power4.out', delay: 0.25 });
      gsap.fromTo('.poster-photo', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.35 });
      gsap.fromTo('.poster-detail', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.6 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#304A36] pb-10 pt-24 text-cream lg:min-h-screen lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #F5B818 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14">
        <div className="mb-7 flex items-center justify-between gap-4 border-b border-cream/20 pb-4">
          <div className="poster-kicker flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.24em] text-cream/80 sm:text-xs">
            <SparkleIcon size={17} fill="#F5B818" /> <span>Independent developer · India</span>
          </div>
          <div className="poster-kicker hidden items-center gap-5 font-body text-[10px] uppercase tracking-[0.18em] text-cream/70 sm:flex">
            <a className="transition-colors hover:text-[#F5B818]" href="#about">About</a>
            <a className="transition-colors hover:text-[#F5B818]" href="#projects">Projects</a>
            <a className="transition-colors hover:text-[#F5B818]" href="#contact">Contact</a>
          </div>
        </div>

        <div className="relative grid grid-cols-1 items-center gap-9 lg:min-h-[68vh] lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <div className="relative order-2 pb-2 lg:order-1 lg:pb-8">
            <div className="poster-kicker mb-4 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#F5B818] sm:text-sm">
              <span className="h-px w-8 bg-[#F5B818]" /> Hello, I'm Ritik
            </div>
            <h1 className="poster-title relative z-10 font-display text-[clamp(3.2rem,10vw,8.8rem)] font-bold italic leading-[0.78] tracking-[-0.075em] text-[#F8F0E3]">
              PORTFOLIO<span className="text-[#F5B818]">.</span>
            </h1>

            <div className="poster-photo relative ml-2 mt-8 w-[82%] max-w-[450px] sm:ml-7 sm:mt-10">
              <div className="absolute -left-3 -top-3 h-full w-full bg-[#C66F3D] sm:-left-5 sm:-top-5" />
              <div className="relative aspect-[4/4.2] overflow-hidden bg-[#C66F3D]">
                <img src="/ritik.png" alt="Portrait of Ritik Puranik" className="h-full w-full object-cover object-top mix-blend-multiply" style={{ filter: 'contrast(1.08) saturate(0.82)' }} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#263D2D]/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-[#F8F0E3] sm:bottom-6 sm:left-6 sm:text-xs">Curiosity into creation</span>
              </div>
              <SparkleIcon size={30} fill="#F5B818" className="absolute -left-8 top-5 text-[#F5B818] sm:-left-10 sm:top-8" />
              <SparkleIcon size={20} fill="#F5B818" className="absolute -bottom-6 right-5 text-[#F5B818]" />
            </div>
            <div className="poster-detail relative z-10 mt-7 max-w-[450px] border-l-2 border-[#F5B818] bg-black/75 px-4 py-3 font-body text-xs leading-relaxed text-cream/90 sm:absolute sm:bottom-0 sm:left-[48%] sm:mt-0 sm:w-[52%] sm:px-5 sm:py-4 sm:text-sm lg:bottom-5 lg:left-[45%]">
              Full-stack developer building useful digital products, thoughtful interfaces, and AI-powered tools.
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-5">
            <div className="poster-kicker mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/65 sm:text-xs">Code · Design · Build</div>
            <div className="poster-title font-display text-[clamp(3.3rem,8.8vw,7.8rem)] font-bold italic leading-[0.82] tracking-[-0.06em] text-transparent" style={{ WebkitTextStroke: '1px rgba(248,240,227,0.78)' }}>
              FULL STACK
            </div>
            <div className="poster-title mt-2 font-display text-[clamp(3.1rem,8.2vw,7.2rem)] font-bold italic leading-[0.82] tracking-[-0.06em] text-[#F5B818]">
              DEVELOPER
            </div>
            <p className="poster-detail mt-7 max-w-lg font-body text-sm leading-relaxed text-cream/75 sm:mt-9 sm:text-base lg:text-lg">
              I turn ideas into responsive web experiences, scalable backends, and products that solve real problems.
            </p>
            <div className="poster-detail mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#F5B818] px-5 py-3 font-body text-sm font-bold text-[#18261C] transition-transform hover:-translate-y-1">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-3 font-body text-sm font-semibold text-cream transition-colors hover:border-[#F5B818] hover:text-[#F5B818]">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="poster-detail mt-8 flex items-center gap-4 text-cream/70">
              <a href="https://github.com/RitikPuranik" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-[#F5B818]"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/ritik-puranik-baaba42b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-[#F5B818]"><Linkedin size={19} /></a>
              <span className="h-px w-10 bg-cream/30" />
              <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F5B818]" />
    </section>
  );
}
