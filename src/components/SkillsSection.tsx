import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Layout, Database, Container, GitBranch,
  Shield, Smartphone, FileCode, Palette, Terminal, GitPullRequest
} from "lucide-react";

const skills = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "Spring Security", icon: Shield },
  { name: "Node.js", icon: Terminal },
  { name: "React.js", icon: Layout },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Docker", icon: Container },
  { name: "Git", icon: GitBranch },
  { name: "CI/CD", icon: GitPullRequest },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
];

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.7 } },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="skills" className="py-24 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={blurReveal}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading">
          Technical <span>Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass-card glow-border p-5 flex flex-col items-center gap-3 text-center hover:scale-105 transition-transform group cursor-default"
            >
              <Icon className="text-primary group-hover:drop-shadow-[0_0_8px_currentColor] transition-all" size={32} />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
