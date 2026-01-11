
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-serif-display text-white text-xl">Jones Allen</p>
          <p className="text-sm">HR Specialist & Professional Designer</p>
        </div>
        <div className="flex gap-6">
           <a href="https://www.linkedin.com/in/jones-allen-794308273" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
           <a href="mailto:jonesallen2002@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} Jones Allen. Built with AI & Passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
