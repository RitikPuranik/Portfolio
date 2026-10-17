import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';
import FadeUp from '@/components/FadeUp';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'ANNDATA',
    tech: 'AI-Powered Agricultural Intelligence',
    link: 'https://anndata-jet.vercel.app/',
    github: 'https://github.com/RitikPuranik/Anndata',
    description:
      'An agricultural intelligence and digital trading platform connecting farmers, FPOs, buyers, warehouses, and transporters. Includes mandi price intelligence, AI-powered price forecasting, sell-vs-store recommendations, buyer matching, warehouse and logistics workflows, GPS shipment tracking, quality assessment, digital trade records, and a WhatsApp Business API-powered farmer assistant.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'AI', 'WhatsApp API'],
    color: 'bg-yellow',
  },
  {
    title: 'DevDrop',
    tech: 'AI Website Creation & Deployment Platform',
    link: 'https://dev-drop-gamma.vercel.app',
    github: 'https://github.com/RitikPuranik/DevDrop',
    description:
      'An end-to-end platform for buying and selling website templates, running exclusive auctions, managing payments and seller payouts, and exporting projects to GitHub. Its multi-agent AI Studio generates and edits React/Vite websites from prompts and uploaded assets, validates builds with browser tests, and provides live previews and AI-assisted repairs. A queued deployment engine analyzes GitHub repositories and deploys projects to Vercel or Render, while Kashi helps diagnose failed builds. Built with React, Node.js/Express, MongoDB, Supabase, BullMQ/Redis, Gemini, Groq, Socket.IO, and Playwright.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI Agents', 'Gemini & Groq', 'BullMQ / Redis', 'GitHub', 'Vercel / Render'],
    color: 'bg-cream-dark',
  },
  {
    title: 'CodeWave Solution',
    tech: 'AI-Assisted Coding Education Platform',
    link: 'https://codewavesolution.in',
    description:
      'Developed a scalable MERN-stack platform for online and offline coding courses with responsive frontend interfaces using React.js and Tailwind CSS and designed REST APIs using Node.js and Express.js with MongoDB integration.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    color: 'bg-yellow',
  },
  {
    title: 'FoodGram',
    tech: 'Social Food Discovery & Community Platform',
    link: 'https://food-app-nine-liard.vercel.app/',
    github: 'https://github.com/RitikPuranik/FoodGram',
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

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
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
              className="project-card group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Card Header */}
              <div className={`${project.color} p-6 pb-5 sm:p-8 sm:pb-6`}>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-black/60">
                      {project.tech}
                    </span>
                    <h3 className="mt-2 break-words font-display text-2xl font-bold italic leading-tight text-black lg:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition-colors duration-300 hover:bg-black/20 group-hover:scale-110"
                      aria-label={`Visit ${project.title} live project`}
                      title="Visit live project"
                    >
                      <ExternalLink size={18} className="text-black" />
                    </a>
                    {'github' in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition-colors duration-300 hover:bg-black/20 group-hover:scale-110"
                        aria-label={`View ${project.title} source code on GitHub`}
                        title="View source code on GitHub"
                      >
                        <Github size={18} className="text-black" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-5 sm:p-8 sm:pt-6">
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

                {/* Project links */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-body text-sm font-medium text-forest transition-colors duration-300 hover:text-yellow"
                  >
                    <span className="relative">
                      Visit Project
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-yellow transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ExternalLink size={14} />
                  </a>
                  {'github' in project && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github inline-flex items-center gap-2 font-body text-sm font-medium text-forest transition-colors duration-300 hover:text-yellow"
                    >
                      <Github size={16} />
                      <span className="relative">
                        GitHub
                        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-yellow transition-all duration-300 group-hover/github:w-full" />
                      </span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
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
