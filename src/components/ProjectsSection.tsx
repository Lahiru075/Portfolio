import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Cpu, Search, Smartphone, Monitor } from "lucide-react";

import aiTravelImg from "../assets/ai_travel.png";
import lostLinkImg from "../assets/lost_and_found.png";
import boardingImg from "../assets/boarding_mate.png";
import tireShopImg from "../assets/tire_shop.png";


const projects = [
  {
    title: "AI Travel Planner",
    desc: "An intelligent travel planning application powered by Gemini AI that generates personalized itineraries.",
    tech: ["MERN Stack", "Gemini AI", "Tailwind CSS"],
    image: aiTravelImg,
    github: "https://github.com/Lahiru075/AI-travel-planner-fe.git",
    icon: Cpu,
  },
  {
    title: "LostLink",
    desc: "A lost & found matching platform using perceptual hashing and geospatial queries for intelligent matching.",
    tech: ["Spring Boot", "MySQL", "pHash", "Geospatial"],
    image: lostLinkImg,
    github: "https://github.com/Lahiru075/LostLink.git",
    icon: Search,
  },
  {
    title: "BoardingMate",
    desc: "A mobile app connecting students with boarding house owners, featuring real-time chat and map integration.",
    tech: ["React Native", "Firebase", "Maps API"],
    image: boardingImg,
    github: "https://github.com/Lahiru075/BoardingMate.git",
    icon: Smartphone,
  },
  {
    title: "Tire Shop System",
    desc: "A comprehensive desktop POS system for tire shops with inventory management and Jasper Reports.",
    tech: ["Java", "JavaFX", "Jasper Reports"],
    image: tireShopImg,
    github: "https://github.com/Lahiru075/Tire-manage-system-layered.git",
    icon: Monitor,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  const blurReveal = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.7 } },
  };

  // Show 3 projects centered around activeIndex
  const getVisibleIndices = () => {
    const len = projects.length;
    return [
      (activeIndex - 1 + len) % len,
      activeIndex,
      (activeIndex + 1) % len,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={blurReveal}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-heading">
          Featured <span>Projects</span>
        </h2>

        {/* Carousel - 3 cards with center highlight */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {visibleIndices.map((projIdx, posIdx) => {
            const { title, desc, tech, github, image, icon: Icon } = projects[projIdx];
            const isCenter = posIdx === 1;

            return (
              <motion.div
                key={`${title}-${projIdx}`}
                layout
                animate={{
                  scale: isCenter ? 1.05 : 0.9,
                  opacity: isCenter ? 1 : 0.5,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`glass-card glow-border overflow-hidden w-[280px] md:w-[340px] shrink-0 flex flex-col ${isCenter ? "z-10 shadow-2xl shadow-primary/10" : "z-0 hidden sm:block"
                  }`}
              >
                {/* Project Image Section */}
                <div className="h-44 w-full overflow-hidden relative group">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Icon className="text-primary/40" size={60} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                </div>

                {/* Project Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-2 h-10">
                    {desc}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Replicated Orange Pill Button */}
                  {/* Slow Animated White to Cyan Button */}
                  <div className="mt-auto flex justify-center pt-4">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-sm overflow-hidden transition-all duration-500 w-full"
                    >
                      {/* වමේ සිට දකුණට හෙමින් පිරී යන Background Layer එක (1000ms = 1s) */}
                      <span className="absolute inset-0 w-0 bg-cyan-500 transition-all duration-1000 ease-in-out group-hover/btn:w-full" />

                      {/* බට්න් එකේ අකුරු සහ Icon එක */}
                      <span className="relative z-10 flex items-center gap-3 transition-colors duration-700 group-hover/btn:text-white">
                        <span>Explore on GitHub</span>
                        <Github size={18} className="transition-transform duration-700 group-hover/btn:rotate-12" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex
                ? "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)] w-6"
                : "bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
