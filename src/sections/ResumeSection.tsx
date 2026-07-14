import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';
import OutlinedTextFill from '@/components/OutlinedTextFill';
import FadeUp from '@/components/FadeUp';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    years: '2023 – 2027',
    title: 'B. Tech – Computer Science',
    detail: 'Gyan Ganga Institute of Technology and Sciences, Jabalpur',
    extra: 'CGPA: 7.68',
  },
  {
    years: '2022',
    title: 'Class 12th (PCM)',
    detail: "St. Gabriel's Senior Secondary School, CBSE Board",
    extra: 'Percentage: 80.17%',
  },
  {
    years: '2020',
    title: 'Class 10th',
    detail: "St. Gabriel's Senior Secondary School, CBSE Board",
    extra: 'Percentage: 78.50%',
  },
];

const experience = [
  {
    years: 'January 2026 – June 2026',
    title: 'Backend Developer Intern',
    detail: 'CodeWaveSolution, Bhopal',
    description: '6 months internship to make and manage the website of CodeWaveSolution, an education platform.',
  },
];

const programmingLanguages = ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'];
const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'];
const backendSkills = ['Node.js', 'Express.js', 'MongoDB'];
const platforms = ['VS Code', 'AntiGravity', 'Postman'];
const devops = ['Docker', 'Git', 'GitHub'];
const certifications = [
  { org: 'Amazon Web Services (AWS)', items: 'AWS Cloud Practitioner' },
  { org: 'CISCO Network Academy', items: 'Python Essentials, HTML, CSS, JavaScript' },
  { org: 'Oracle Academy', items: 'Database Foundation' },
];

export default function ResumeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Timeline connector animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Timeline items
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Skill pills
      gsap.fromTo(
        '.skill-pill',
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="resume" className="relative bg-forest py-20 lg:py-32 overflow-hidden">
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,184,24,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,184,24,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Outlined RESUME text - background decorative */}
      <div className="absolute top-8 right-4 lg:right-12 opacity-30 pointer-events-none hidden md:block">
        <OutlinedTextFill
          lines={['RESUME', 'RESUME', 'RESUME', 'RESUME']}
          lineClassName="font-display text-[60px] lg:text-[90px] xl:text-[110px] font-bold italic leading-[0.85]"
          color="white"
          delay={0.3}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-4 lg:mb-5">
            <SparkleIcon size={22} />
            <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-yellow/75">Resume</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative mb-16 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] px-5 py-5 shadow-[0_18px_40px_rgba(8,14,7,0.14)] backdrop-blur-sm sm:px-6 lg:mb-20 lg:px-8 lg:py-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-none tracking-tight text-yellow">
                  Resume
                </h2>
                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-white/70 sm:text-base">
                  Download the latest PDF version of my resume for a quick overview of my education, experience, and skills.
                </p>
              </div>

              <a
                href="/RITIK_PURANIK.pdf"
                download
                aria-label="Download resume"
                className="group inline-flex w-full items-center justify-center gap-3 self-start rounded-full bg-black px-5 py-3.5 font-body text-sm font-semibold text-white shadow-[0_12px_28px_rgba(8,14,7,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/90 sm:w-auto sm:min-w-[220px] sm:self-auto"
              >
                <span>Download Resume</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Download size={18} />
                </span>
              </a>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Education & Experience */}
          <div className="timeline-container">
            {/* Education */}
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic text-yellow leading-[1.05] tracking-tight mb-10">
                Education
              </h2>
            </FadeUp>

            <div className="relative pl-8 border-l-2 border-yellow/30">
              {education.map((edu, i) => (
                <div key={i} className="timeline-item relative pb-10 last:pb-0">
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-1.5">
                    <SparkleIcon size={16} />
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-xl lg:text-2xl font-bold italic text-yellow">
                      {edu.years}
                    </span>
                  </div>
                  <h3 className="font-body text-lg font-semibold text-white">
                    {edu.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 mt-1">
                    {edu.detail}
                  </p>
                  {edu.extra && (
                    <p className="font-body text-sm text-yellow/80 mt-1 font-medium">
                      {edu.extra}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Experience */}
            <FadeUp delay={0.3}>
              <div className="mt-16 rounded-2xl bg-yellow p-6 sm:p-8">
                <h2 className="font-display text-4xl sm:text-5xl font-bold italic text-black leading-[1.05] tracking-tight mb-8">
                  Experience
                </h2>

                <div className="relative pl-8 border-l-2 border-black/20">
                  {experience.map((exp, i) => (
                    <div key={i} className="timeline-item relative pb-8 last:pb-0">
                      <div className="absolute -left-[25px] top-1.5">
                        <SparkleIcon size={16} fill="#4A5D43" />
                      </div>

                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-xl lg:text-2xl font-bold italic text-forest">
                          {exp.years}
                        </span>
                      </div>
                      <h3 className="font-body text-lg font-semibold text-black">
                        {exp.title}
                      </h3>
                      <p className="font-body text-sm text-black/70 mt-1">
                        {exp.detail}
                      </p>
                      <p className="font-body text-sm text-black/60 mt-2">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Certifications */}
            <FadeUp delay={0.4}>
              <div className="mt-16">
                <h2 className="font-display text-4xl sm:text-5xl font-bold italic text-yellow leading-[1.05] tracking-tight mb-8">
                  Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                      <h3 className="font-body text-base font-semibold text-white">{cert.org}</h3>
                      <p className="font-body text-sm text-white/70 mt-1">{cert.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Skills */}
          <div className="skills-container">
            <FadeUp delay={0.2}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic text-yellow leading-[1.05] tracking-tight mb-10">
                Technical Skills
              </h2>
            </FadeUp>

            {/* Programming Languages */}
            <FadeUp delay={0.3}>
              <h3 className="font-body text-lg font-semibold text-white mb-4">Programming Languages</h3>
            </FadeUp>
            <div className="flex flex-wrap gap-3 mb-8">
              {programmingLanguages.map((lang) => (
                <span key={lang} className="skill-pill inline-flex items-center px-5 py-2.5 bg-white/15 text-white rounded-full font-body text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors duration-300">
                  {lang}
                </span>
              ))}
            </div>

            {/* Frontend */}
            <FadeUp delay={0.35}>
              <h3 className="font-body text-lg font-semibold text-white mb-4">Frontend</h3>
            </FadeUp>
            <div className="flex flex-wrap gap-3 mb-8">
              {frontendSkills.map((skill) => (
                <span key={skill} className="skill-pill inline-flex items-center px-5 py-2.5 bg-white/15 text-white rounded-full font-body text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>

            {/* Backend */}
            <FadeUp delay={0.4}>
              <h3 className="font-body text-lg font-semibold text-white mb-4">Backend & Database</h3>
            </FadeUp>
            <div className="flex flex-wrap gap-3 mb-8">
              {backendSkills.map((skill) => (
                <span key={skill} className="skill-pill inline-flex items-center px-5 py-2.5 bg-white/15 text-white rounded-full font-body text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>

            {/* Platforms */}
            <FadeUp delay={0.45}>
              <h3 className="font-body text-lg font-semibold text-white mb-4">Platforms</h3>
            </FadeUp>
            <div className="flex flex-wrap gap-3 mb-8">
              {platforms.map((plat) => (
                <span key={plat} className="skill-pill inline-flex items-center px-5 py-2.5 bg-white/15 text-white rounded-full font-body text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors duration-300">
                  {plat}
                </span>
              ))}
            </div>

            {/* Cloud & DevOps */}
            <FadeUp delay={0.5}>
              <h3 className="font-body text-lg font-semibold text-white mb-4">Cloud & DevOps</h3>
            </FadeUp>
            <div className="flex flex-wrap gap-3 mb-10">
              {devops.map((tool) => (
                <span key={tool} className="skill-pill inline-flex items-center px-5 py-2.5 bg-white/15 text-white rounded-full font-body text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors duration-300">
                  {tool}
                </span>
              ))}
            </div>

            {/* Professional Skills */}
            <FadeUp delay={0.55}>
              <h3 className="font-body text-lg font-semibold text-white mb-4">Professional Skills</h3>
            </FadeUp>
            <div className="flex flex-wrap gap-3">
              {['Leadership qualities', 'Team management', 'Communication skills'].map((skill) => (
                <span key={skill} className="skill-pill inline-flex items-center px-5 py-2.5 bg-yellow text-black rounded-full font-body text-sm font-medium hover:bg-yellow-light transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative green bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-forest-dark" />
    </section>
  );
}
