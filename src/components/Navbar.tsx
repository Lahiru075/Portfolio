// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const links = [
//   { label: "Home", href: "#hero" },
//   { label: "About Me", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Projects", href: "#projects" },
//   { label: "Education", href: "#education" },
//   { label: "Contact Me", href: "#contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("#hero");

//   useEffect(() => {
//     const onScroll = () => {
//       const sections = links.map((l) => document.querySelector(l.href));
//       let current = "#hero";
//       sections.forEach((sec, i) => {
//         if (sec && (sec as HTMLElement).offsetTop - 120 <= window.scrollY) {
//           current = links[i].href;
//         }
//       });
//       setActive(current);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/30"
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         <a href="#hero" className="text-xl font-bold text-foreground">
//           Lahiru <span className="glow-text">Lakshan</span>
//         </a>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className={`relative text-sm font-medium transition-colors pb-1 ${
//                 active === l.href
//                   ? "text-primary"
//                   : "text-muted-foreground hover:text-primary"
//               }`}
//             >
//               {l.label}
//               {active === l.href && (
//                 <motion.span
//                   layoutId="nav-underline"
//                   className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary rounded-full"
//                 />
//               )}
//             </a>
//           ))}
//         </div>

//         {/* Mobile toggle */}
//         <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden overflow-hidden glass-card border-t border-border/30"
//           >
//             <div className="px-6 py-4 flex flex-col gap-4">
//               {links.map((l) => (
//                 <a
//                   key={l.href}
//                   href={l.href}
//                   onClick={() => setOpen(false)}
//                   className={`text-sm font-medium transition-colors ${
//                     active === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"
//                   }`}
//                 >
//                   {l.label}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact Me", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false); 

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80;
        const elementPosition = (targetElement as HTMLElement).offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); 
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] glass-card border-b border-white/5 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="text-xl font-bold tracking-tighter"
        >
          Lahiru <span className="glow-text text-cyan-400">Lakshan</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleLinkClick(e, l.href)}
              className={`relative text-sm font-medium transition-all duration-300 ${active === l.href
                  ? "text-cyan-400"
                  : "text-muted-foreground hover:text-cyan-400"
                }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} className="text-cyan-400" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass-card border-t border-white/5 bg-[#0a0a0c]/95"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className={`text-lg font-semibold transition-all duration-300 ${active === l.href
                      ? "text-cyan-400 translate-x-2"
                      : "text-muted-foreground hover:text-cyan-400 hover:translate-x-2"
                    }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;