import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';
import FadeUp from '@/components/FadeUp';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'DevDrop',
    tech: 'MERN Stack',
    link: 'https://dev-drop-gamma.vercel.app',
    description:
      'A complete marketplace platform connecting website buyers and sellers. Built with MongoDB, Express, React, and Node.js, featuring payment processing, auction mechanics, and automated workflows. Reduced manual admin tasks by 80% through intelligent automation.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Payments'],
    color: 'bg-cream-dark',
  },
  {
    title: 'CodeWave Solution',
    tech: 'MERN Stack',
    link: 'https://codewavesolution.in',
    description:
      'Developed a scalable MERN-stack platform for online and offline coding courses with responsive frontend interfaces using React.js and Tailwind CSS and designed REST APIs using Node.js and Express.js with MongoDB integration.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    color: 'bg-yellow',
  },
  {
    title: 'FoodGram',
    tech: 'Full-Stack MERN App',
    link: 'https://food-app-nine-liard.vercel.app/',
    description:
      'Developed a full-stack MERN social media application dedicated to helping foodies discover local food vendors through engaging visual content. Built reels, follow systems, saved posts, and comments with secure JWT-based authentication for distinct user and vendor profiles, plus Framer Motion, Tailwind CSS, and ImageKit-backed media uploads.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'JWT', 'ImageKit'],
    color: 'bg-taupe',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative bg-cream py-20 lg:py-32 overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A5D43 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <SparkleIcon size={24} fill="#E8833A" />
            <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-forest/70">Work</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic text-forest leading-[1.05] tracking-tight mb-4">
            Projects
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="font-body text-base lg:text-lg text-black/70 max-w-2xl mb-16">
            Here are some of the projects I've built, showcasing my skills in full-stack development with the MERN stack.
          </p>
        </FadeUp>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5"
            >
              {/* Card Header */}
              <div className={`${project.color} p-8 pb-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-black/60">
                      {project.tech}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold italic text-black mt-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors duration-300 group-hover:scale-110"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={18} className="text-black" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 pt-6">
                <p className="font-body text-sm lg:text-base text-black/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-4 py-1.5 bg-forest/10 text-forest rounded-full font-body text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-body text-sm font-medium text-forest hover:text-yellow transition-colors duration-300 group/link"
                >
                  <span className="relative">
                    Visit Project
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative green bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-forest-dark" />
    </section>
  );
}
