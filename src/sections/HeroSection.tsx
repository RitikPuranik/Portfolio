import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Search, MapPin, Mail, Phone } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';
import OutlinedTextFill from '@/components/OutlinedTextFill';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate hero elements on load
      gsap.fromTo(
        '.hero-greeting',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.hero-bio',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );
      gsap.fromTo(
        '.hero-link-pill',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.8 }
      );
      gsap.fromTo(
        '.hero-pill-tag',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.15, delay: 0.5 }
      );
      gsap.fromTo(
        '.hero-contact-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-svh overflow-hidden bg-cream pt-20 lg:min-h-screen">
      {/* Background decorative dots */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A5D43 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
        <div className="grid min-h-[calc(100svh-160px)] grid-cols-1 items-center gap-12 lg:min-h-[calc(100vh-160px)] lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Text */}
          <div ref={textRef} className="relative z-10 order-2 lg:order-1">
            {/* Decorative outlined text - hidden on small screens */}
            <div className="hidden lg:block absolute -top-16 -left-8 opacity-40 pointer-events-none">
              <OutlinedTextFill
                lines={['PORT', 'FOLIO', 'FOLIO']}
                lineClassName="font-display text-[80px] xl:text-[100px] font-bold italic"
                triggerOnScroll={false}
                delay={0.2}
              />
            </div>

            {/* Greeting */}
            <h1 className="hero-greeting font-display text-6xl sm:text-7xl lg:text-8xl xl:text-[110px] font-bold italic leading-[0.92] text-black tracking-tight">
              Hello,<br />
              I'm Ritik<span className="text-forest">!</span>
            </h1>

            {/* Bio */}
            <p className="hero-bio mt-8 font-body text-base lg:text-lg text-black/75 leading-relaxed max-w-lg">
              I am a highly motivated <span className="font-semibold text-forest">web developer aspirant</span> with strong problem-solving skills and a solid foundation in software development. A fast learner, dedicated, and always bringing energy, curiosity, and a positive attitude to every project.
            </p>

            {/* LinkedIn Pill */}
            <div className="hero-link-pill mt-8">
              <a
                href="https://www.linkedin.com/in/ritik-puranik-baaba42b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full bg-orange px-5 py-3 text-center font-body text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg sm:w-auto sm:justify-start sm:px-6 sm:text-sm"
              >
                <Search size={18} className="shrink-0" />
                <span className="break-all sm:break-normal">linkedin.com/in/ritik-puranik</span>
              </a>
            </div>
          </div>

          {/* Right Column - Portrait + Elements */}
          <div ref={imageRef} className="relative order-1 flex flex-col items-center pb-4 sm:pb-20 lg:order-2 lg:pb-0">
            {/* Floating Pill Tags */}
            <div className="hero-pill-tag absolute right-2 top-4 z-20 sm:right-4 lg:right-0 lg:top-8">
              <span className="inline-flex items-center rounded-full bg-yellow px-4 py-2 text-xs font-medium text-black shadow-lg sm:px-5 sm:py-2.5 sm:text-sm">
                23rd September 2004
              </span>
            </div>
            <div className="hero-pill-tag absolute bottom-28 right-2 z-20 sm:right-0 lg:-right-4 lg:bottom-40">
              <span className="inline-flex items-center rounded-full bg-yellow px-5 py-2 text-xs font-medium text-black shadow-lg sm:px-6 sm:py-2.5 sm:text-sm">
                Indian
              </span>
            </div>

            {/* Sparkle decorations */}
            <SparkleIcon size={28} className="absolute left-3 top-12 z-20 sm:left-4 lg:left-8" />
            <SparkleIcon size={18} className="absolute bottom-44 left-1 z-20 sm:left-0 lg:-left-4" fill="#E8833A" />

            {/* Portrait Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              {/* Cross-hatch corner decoration */}
              <svg className="absolute -top-3 -left-3 w-16 h-16 z-10" viewBox="0 0 60 60" aria-hidden="true">
                <line x1="0" y1="30" x2="30" y2="0" stroke="#F5B818" strokeWidth="2" />
                <line x1="0" y1="45" x2="45" y2="0" stroke="#F5B818" strokeWidth="2" />
                <line x1="0" y1="60" x2="60" y2="0" stroke="#F5B818" strokeWidth="2" />
              </svg>

              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-2xl sm:h-[400px] sm:w-[320px] sm:aspect-auto lg:h-[450px] lg:w-[360px]">
                {/* Forest green background block */}
                <div className="absolute inset-0 bg-forest" />

                {/* Portrait Image */}
                <img
                  src="/ritik.png"
                  alt="Ritik Puranik"
                  className="relative w-full h-full object-cover object-top z-10"
                  style={{
                    filter: 'contrast(1.05) brightness(1.02)',
                  }}
                />

                {/* Halftone overlay */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
                    backgroundSize: '6px 6px',
                  }}
                />
              </div>

              {/* Contact Card */}
              <div className="hero-contact-card relative z-30 mt-6 w-full rounded-xl bg-black px-5 py-5 text-white shadow-2xl sm:absolute sm:-bottom-16 sm:right-0 sm:mt-0 sm:w-auto sm:min-w-[220px] sm:px-6 lg:-right-8">
                <h3 className="font-display text-2xl italic font-bold mb-4">Contact</h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-white/80">
                    <MapPin size={15} className="text-yellow flex-shrink-0" />
                    <span className="font-body text-sm">Jabalpur, India</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/80">
                    <Mail size={15} className="text-yellow flex-shrink-0" />
                    <span className="font-body text-sm break-all">ritik23puranik@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/80">
                    <Phone size={15} className="text-yellow flex-shrink-0" />
                    <span className="font-body text-sm">+91 8305389146</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative green bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-forest-dark" />
    </section>
  );
}
