import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 overflow-hidden border-t border-white/5">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 relative z-10">
        

        <div className="text-xl font-bold tracking-tight">
          Lahiru <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Lakshan</span>
        </div>


        <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-semibold opacity-60">
          © {new Date().getFullYear()} All rights reserved.
        </div>


        <div className="flex items-center gap-2 text-[11px] text-muted-foreground/80 font-medium">
          Designed & Built with 
          <Heart className="text-cyan-500 fill-cyan-500/20 animate-pulse" size={12} /> 
          using <span className="text-foreground">React</span> & <span className="text-foreground">Tailwind</span>
        </div>
      </div>


      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center bottom, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
    </footer>
  );
};

export default Footer;