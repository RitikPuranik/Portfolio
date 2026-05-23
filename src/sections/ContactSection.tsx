import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';
import SparkleIcon from '@/components/SparkleIcon';
import OutlinedTextFill from '@/components/OutlinedTextFill';
import FadeUp from '@/components/FadeUp';

const socials = [
  {
    label: 'LinkedIn',
    handle: '/in/ritik-puranik',
    href: 'https://www.linkedin.com/in/ritik-puranik-baaba42b7/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    handle: '/RitikPuranik',
    href: 'https://github.com/RitikPuranik',
    icon: Github,
  },
  {
    label: 'LeetCode',
    handle: '/ritik_puranik',
    href: 'https://leetcode.com/u/ritik_puranik/',
    icon: Code,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background outlined CONTACT text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none hidden sm:block">
        <OutlinedTextFill
          lines={['CONTACT', 'CONTACT', 'CONTACT']}
          lineClassName="font-display text-[70px] lg:text-[100px] xl:text-[130px] font-bold italic leading-[0.85]"
          color="yellow"
          delay={0.3}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <SparkleIcon size={24} />
            <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-yellow/70">Contact</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic text-white leading-[1.05] tracking-tight text-center mb-4">
            Get in Touch
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="font-body text-base lg:text-lg text-white/60 text-center max-w-xl mx-auto mb-16">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <FadeUp delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:p-8">
              <h3 className="font-display text-2xl italic font-bold text-yellow mb-6">Contact Info</h3>
              <div className="space-y-5">
                <a
                  href="mailto:ritik23puranik@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-yellow transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow/30 transition-colors">
                    <Mail size={18} className="text-yellow" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-body text-xs uppercase tracking-wider text-white/50">Email</span>
                    <p className="font-body text-sm break-all">ritik23puranik@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918305389146"
                  className="flex items-center gap-4 text-white/80 hover:text-yellow transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow/30 transition-colors">
                    <Phone size={18} className="text-yellow" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-body text-xs uppercase tracking-wider text-white/50">Phone</span>
                    <p className="font-body text-sm">+91 8305389146</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-yellow" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-body text-xs uppercase tracking-wider text-white/50">Location</span>
                    <p className="font-body text-sm">Jabalpur, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Social Links */}
          <FadeUp delay={0.3}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:p-8">
              <h3 className="font-display text-2xl italic font-bold text-yellow mb-6">Social Links</h3>
              <div className="space-y-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/80 hover:text-yellow transition-all duration-300 group p-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-10 h-10 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow/30 transition-colors">
                      <social.icon size={18} className="text-yellow" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-body text-sm font-medium">{social.label}</span>
                      <p className="font-body text-xs text-white/50 break-all">{social.handle}</p>
                    </div>
                    <ExternalLink size={14} className="text-white/40 group-hover:text-yellow transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Quick Message */}
          <FadeUp delay={0.4}>
            <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-yellow p-6 sm:p-8">
              <div>
                <h3 className="font-display text-2xl italic font-bold text-black mb-4">Let's Connect</h3>
                <p className="font-body text-sm text-black/70 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together!
                </p>
              </div>
              <a
                href="mailto:ritik23puranik@gmail.com"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-body text-sm font-semibold hover:bg-forest transition-colors duration-300"
              >
                <Mail size={16} />
                Send an Email
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Footer */}
        <FadeUp delay={0.5}>
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <SparkleIcon size={18} />
              <span className="font-display text-lg italic font-bold text-white">
                Ritik Puranik
              </span>
            </div>
            <p className="font-body text-xs text-white/40">
              &copy; {new Date().getFullYear()} Ritik Puranik. All rights reserved.
            </p>
            <p className="font-body text-xs text-white/40">
              Built with passion & React
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
