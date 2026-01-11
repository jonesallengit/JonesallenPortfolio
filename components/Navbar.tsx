
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import JonesLogo from './JonesLogo';

interface NavbarProps {
  mode: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ mode }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = mode === 'light';
  const isDesignPage = location.pathname === '/design';

  return (
    <div className="fixed top-8 left-0 w-full z-50 flex justify-center px-6">
      <nav className={`transition-all duration-700 rounded-full px-10 py-4 flex items-center gap-12 ${
        scrolled 
          ? (isLight 
              ? 'bg-white/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl border border-slate-100' 
              : 'bg-black/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/5') 
          : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center group">
          {isDesignPage ? (
            <JonesLogo size="text-2xl" className="group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <span className={`text-xl font-heading font-extrabold tracking-tight whitespace-nowrap group-hover:scale-105 transition-transform duration-500 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Jones <span className="text-blue-600">Allen</span>
            </span>
          )}
        </Link>
        
        <div className="flex items-center">
          {!isDesignPage && (
            <Link 
              to="/design" 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:scale-105 transition-all shadow-lg shadow-slate-200"
            >
              Creative Side
            </Link>
          )}
          {isDesignPage && (
             <Link 
             to="/" 
             className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#22B2C1] hover:text-white hover:scale-105 transition-all shadow-lg shadow-black"
           >
             HR Side
           </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;