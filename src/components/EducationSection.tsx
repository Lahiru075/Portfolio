import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2024 — Present",
    title: "Graduate Diploma in Software Engineering",
    institution: "Institute of Software Engineering (IJSE)",
    desc: "Comprehensive program covering full-stack development, system design, and software architecture.",
  },
  {
    period: "2022",
    title: "G.C.E. Advanced Level",
    institution: "Sri Budhdha Jayanthi Central College",
    desc: "Completed advanced level studies with a focus on science and technology.",
  },
  {
    period: "2019",
    title: "G.C.E. Ordinary Level",
    institution: "Rassagala Maha Vidyalaya",
    desc: "Successfully completed ordinary level examinations.",
  },
];

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.7 } },
};

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="education" className="py-24 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={blurReveal}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">
          <span>Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-20 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.6)] z-10 mt-7 border-2 border-background" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-4rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}`}>
                <div className="glass-card glow-border p-6">
                  <span className="text-xs font-mono text-primary/70 mb-2 block">{item.period}</span>
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary/80 mb-3">{item.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
