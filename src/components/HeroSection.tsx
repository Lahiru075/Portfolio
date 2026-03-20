import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, Linkedin, Github, Facebook, Instagram } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lahiru-sanjeewa-8b2a59323/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Lahiru075", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/lakshan_lahiruu/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          Hello I'm <span className="glow-text">Lahiru Lakshan</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground font-medium mb-6"
        >
          A <span className="glow-text font-bold">Backend-Focused</span> Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed"
        >
          Architecting high-performance backend systems and building scalable full-stack
          applications with a focus on clean code and modern design patterns.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a
            href="../../../public/Lahiru_Lakshan_CV.pdf" 
            download="Lahiru_Lakshan_CV.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 border border-primary/50 px-7 py-3 rounded-lg font-semibold text-primary hover:bg-primary/10 transition-all"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
