import { Github, Linkedin, Code } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';
import PillTag from '@/components/PillTag';
import FadeUp from '@/components/FadeUp';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-cream py-20 lg:py-32 overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A5D43 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Career Objective */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-8">
                <SparkleIcon size={24} fill="#E8833A" />
                <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-forest/70">About Me</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic text-forest leading-[1.05] tracking-tight">
                Career<br />Objective
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-8 font-body text-base lg:text-lg text-black/75 leading-relaxed">
                I am a highly motivated web developer aspirant with strong problem-solving skills and know basics of software development. I want to work to improve my skills and grow in a healthy and growing environment.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-4 font-body text-base lg:text-lg text-black/75 leading-relaxed">
                I am a fast learner, dedicated, and always give my best to complete tasks with enthusiasm and attention to detail. Working with me means bringing energy, curiosity, and a positive attitude to every project.
              </p>
            </FadeUp>

            {/* Social Links */}
            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <PillTag href="https://www.linkedin.com/in/ritik-puranik-baaba42b7/" variant="forest">
                  <Linkedin size={16} />
                  LinkedIn
                </PillTag>
                <PillTag href="https://github.com/RitikPuranik" variant="black">
                  <Github size={16} />
                  GitHub
                </PillTag>
                <PillTag href="https://leetcode.com/u/ritik_puranik/" variant="yellow">
                  <Code size={16} />
                  LeetCode
                </PillTag>
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Quick Info */}
          <div>
            <FadeUp delay={0.2}>
              <h3 className="font-display text-3xl lg:text-4xl font-bold italic text-black mb-8">
                Quick Info
              </h3>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-body text-sm font-semibold text-forest uppercase tracking-wide">Name</span>
                    <p className="font-body text-base text-black/80">Ritik Puranik</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-body text-sm font-semibold text-forest uppercase tracking-wide">Date of Birth</span>
                    <p className="font-body text-base text-black/80">23rd September 2004</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-body text-sm font-semibold text-forest uppercase tracking-wide">Location</span>
                    <p className="font-body text-base text-black/80">Jabalpur, Madhya Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-body text-sm font-semibold text-forest uppercase tracking-wide">Education</span>
                    <p className="font-body text-base text-black/80">B.Tech Computer Science, CGPA 7.68</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-body text-sm font-semibold text-forest uppercase tracking-wide">Current Role</span>
                    <p className="font-body text-base text-black/80">Backend Developer Intern at CodeWaveSolution</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Decorative green bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-forest-dark" />
    </section>
  );
}
