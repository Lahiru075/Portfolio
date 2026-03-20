import { useEffect, useRef, useCallback } from "react";

const STAR_COUNT = 200;

const Starfield = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shootingStarInterval = useRef<NodeJS.Timeout>();

  const createShootingStar = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const star = document.createElement("div");
    star.className = "shooting-star";

    const startX = Math.random() * (window.innerWidth * 0.5); 
    const startY = Math.random() * (window.innerHeight * 0.4);

    const angle = 25 + Math.random() * 20; 
    const distance = 600 + Math.random() * 800; 
    const rad = (angle * Math.PI) / 180;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    star.style.setProperty("--shoot-x", `${Math.cos(rad) * distance}px`);
    star.style.setProperty("--shoot-y", `${Math.sin(rad) * distance}px`);
    star.style.setProperty("--shoot-angle", `${angle}deg`);
    star.style.setProperty("--shoot-duration", `${0.7 + Math.random() * 1.0}s`);

    container.appendChild(star);

    setTimeout(() => star.remove(), 2000);
  }, []);

  useEffect(() => {
    shootingStarInterval.current = setInterval(() => {
      if (Math.random() > 0.2) {
        createShootingStar();
      }
    }, 1000); 

    return () => clearInterval(shootingStarInterval.current);
  }, [createShootingStar]);

  const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
    const size = Math.random() * 2.5 + 0.5;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: size,
          height: size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          "--duration": `${2 + Math.random() * 4}s`,
          "--min-opacity": Math.random() * 0.3,
          "--max-opacity": 0.5 + Math.random() * 0.5,
          "--drift-x": `${(Math.random() - 0.5) * 50}px`,
          "--drift-y": `${(Math.random() - 0.5) * 50}px`,
          "--drift-duration": `${25 + Math.random() * 15}s`, 
          animationDelay: `${Math.random() * 4}s`,
        } as React.CSSProperties}
      />
    );
  });

  return (
    <div ref={containerRef} className="starfield">
      {stars}
    </div>
  );
};

export default Starfield;