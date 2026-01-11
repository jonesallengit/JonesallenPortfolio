
import React from 'react';
import Navbar from '../components/Navbar';
import JonesLogo from '../components/JonesLogo';
import CustomCursor from '../components/CustomCursor';

const DesignPortfolio: React.FC = () => {
  const brandTeal = '#22B2C1';
  const brandYellow = '#FFCE44';

  const designs = [
    { 
      title: 'Digital Humanism', 
      category: 'UI/UX Strategy', 
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
      size: 'large' 
    },
    { 
      title: 'Monolith Branding', 
      category: 'Visual Identity', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      size: 'small'
    },
    { 
      title: 'Neon Pulse', 
      category: 'Motion Graphics', 
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
      size: 'medium'
    },
    { 
      title: 'Ethereal Interfaces', 
      category: 'UX Design', 
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
      size: 'medium'
    },
    { 
      title: 'Architectural Type', 
      category: 'Graphic Design', 
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
      size: 'large'
    },
    { 
      title: 'Void Space', 
      category: 'Digital Art', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      size: 'small'
    },
  ];

  return (
    <div className="min-h-screen text-white selection:bg-[#22B2C1] overflow-x-hidden relative" 
         style={{ 
           backgroundColor: '#050505',
           backgroundImage: `radial-gradient(at 0% 0%, #0a1f24 0px, transparent 50%), radial-gradient(at 100% 100%, #1f1b0a 0px, transparent 50%)`
         }}>
      {/* Overriding global cursor for the brand color */}
      <CustomCursor color={brandTeal} />
      <Navbar mode="dark" />
      
      <main className="max-w-7xl mx-auto px-6 pt-44 pb-20 relative z-10">
        {/* Cinematic Header */}
        <header className="mb-32 relative">
          {/* Subtle Ambient Teal/Yellow Glow */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#22B2C1]/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
            <div className="space-y-8">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <JonesLogo size="text-7xl md:text-9xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter leading-none uppercase">
                Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22B2C1] to-[#FFCE44]">Experience.</span>
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-slate-400 text-lg font-medium border-l-2 border-[#22B2C1] pl-6 py-2">
                Merging the analytical precision of HR with the boundless expression of visual art. Exploring the intersection of human behavior and digital aesthetics.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-[10px] font-black tracking-[0.4em] uppercase text-slate-500">
            <span className="text-[#FFCE44] cursor-none relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#FFCE44]">All Works</span>
            <span className="hover:text-white transition-colors cursor-none">Graphic Design</span>
            <span className="hover:text-white transition-colors cursor-none">UI/UX</span>
            <span className="hover:text-white transition-colors cursor-none">Video Editing</span>
          </div>
        </header>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {designs.map((item, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-[#0d0d0d] border border-white/5 bento-card cursor-none"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-100" 
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                   <span className="text-[#22B2C1] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                     {item.category}
                   </span>
                </div>
                <div className="overflow-hidden">
                   <h3 className="text-3xl font-heading font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                     {item.title}
                   </h3>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-[#22B2C1]/20 rounded-[2rem] transition-colors pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Interaction Section */}
        <section className="mt-60 mb-20">
          <div className="bg-gradient-to-b from-[#0a1112] to-transparent p-20 rounded-[4rem] text-center border border-white/5 relative overflow-hidden">
             {/* Background branding subtle glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#22B2C1]/5 blur-[150px] -z-10"></div>
             
             <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-12 tracking-tight italic">
               Let's build something <span className="text-[#FFCE44]">Iconic.</span>
             </h2>
             <div className="flex flex-wrap justify-center gap-6 mb-20">
                {['Instagram', 'Behance', 'Dribbble', 'LinkedIn'].map(social => (
                  <a 
                    key={social} 
                    href="#" 
                    className="px-10 py-5 rounded-full border border-white/10 hover:border-[#22B2C1] hover:text-[#22B2C1] transition-all font-bold text-sm tracking-widest uppercase bg-white/5"
                  >
                    {social}
                  </a>
                ))}
             </div>
             
             <div className="flex flex-col items-center gap-8">
               <div className="opacity-30 hover:opacity-100 transition-opacity duration-1000 scale-75 md:scale-100">
                 <JonesLogo size="text-4xl" />
               </div>
               <p className="text-slate-600 text-[10px] font-bold tracking-[0.5em] uppercase">
                 © {new Date().getFullYear()} Visual Experience Studio
               </p>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignPortfolio;