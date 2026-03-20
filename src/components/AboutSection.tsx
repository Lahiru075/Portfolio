import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from './../assets/Profile.png';

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(15px)", y: 30 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={blurReveal}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading">
          About <span>Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Floating Tags */}
          <div className="flex justify-center">
            <div className="relative w-64 h-72 md:w-80 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 blur-2xl" />
              <div className="relative w-full h-full glass-card glow-border rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={profileImg}
                  alt="Lahiru Lakshan"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -inset-1 rounded-2xl border border-primary/20 pointer-events-none" />

          
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Full-Stack Developer with a deep-rooted interest in
              <span className="text-primary font-medium"> Backend Engineering</span>. While I enjoy crafting seamless
              user interfaces with React, my core strength lies in building robust, high-performance server-side logic
              and RESTful APIs using Java and Spring Boot.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on writing clean, maintainable code following OOP principles and modern design patterns.
              My goal is to architect systems that are scalable, secure, and built to last.
            </p>
            <div className="flex gap-6 pt-2">
              <div>
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-muted-foreground">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-xs text-muted-foreground">Years Learning</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
