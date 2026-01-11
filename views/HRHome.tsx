
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const HRHome: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 relative">
      <CustomCursor color="#3b82f6" />
      <Navbar mode="light" />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-52 pb-32 px-6 flex items-center justify-center relative overflow-hidden">
        {/* Floating 3D Elements Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div 
            className="absolute top-[15%] right-[15%] w-64 h-64 bg-blue-400/20 rounded-full blur-[80px] animate-float"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div 
            className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-orange-400/10 rounded-full blur-[100px]"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          ></div>
          
          {/* Decorative Floating Shapes */}
          <div className="absolute top-1/4 left-10 opacity-20 animate-float" style={{ transform: `translateY(${scrollY * 0.3}px) rotate(12deg)` }}>
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
               <rect x="20" y="20" width="60" height="60" rx="12" stroke="#3b82f6" strokeWidth="2" />
             </svg>
          </div>
          <div className="absolute bottom-1/4 right-20 opacity-20 animate-float" style={{ transform: `translateY(${scrollY * -0.2}px) rotate(-15deg)`, animationDelay: '1s' }}>
             <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
               <circle cx="40" cy="40" r="30" stroke="#f97316" strokeWidth="2" />
             </svg>
          </div>
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Hero Content Area */}
          <div className="md:col-span-7 flex flex-col justify-center text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-10 self-center md:self-start border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Based in UAE
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 leading-[0.95] mb-12" 
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
              Designing the <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600 italic">Future</span>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-blue-100 -z-10 -rotate-1"></div>
              </span> of Work.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-xl mb-16 leading-relaxed"
               style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
              Jones Allen is a UAE-based UX-Centric Workplace Strategist bridging human capital with digital precision.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-start"
                 style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <a href="mailto:jonesallen2002@gmail.com" className="group bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-bold hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 flex items-center gap-3">
                Connect <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#work-showcase" className="bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 px-10 py-5 rounded-[2rem] font-bold hover:bg-slate-50 transition-all flex items-center gap-3">
                View Work <i className="fas fa-chevron-down text-xs"></i>
              </a>
            </div>
          </div>

          {/* Featured Visual Cards Side */}
          <div className="md:col-span-5 flex flex-col gap-8" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
            <div className="bg-blue-600 p-12 rounded-[3.5rem] text-white bento-card shadow-2xl shadow-blue-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <i className="fas fa-rocket text-9xl -rotate-12"></i>
              </div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 font-heading font-bold italic leading-none">Tech<br/>Forward</div>
                <p className="text-blue-100 font-medium text-lg leading-relaxed">Specializing in Automating People Operations & Data-Driven Strategy.</p>
              </div>
            </div>
            
            <Link to="/design" className="bg-white p-12 rounded-[3.5rem] bento-card hover:bg-[#581c87] transition-all border border-slate-200 group relative overflow-hidden shadow-2xl shadow-slate-100 hover:shadow-purple-200/50">
              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className="w-16 h-16 bg-slate-100 group-hover:bg-white/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all">
                  <i className="fas fa-wand-magic-sparkles text-slate-900 group-hover:text-white text-3xl"></i>
                </div>
                <div className="bg-slate-100 group-hover:bg-white/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">Portfolio</div>
              </div>
              <div className="relative z-10">
                <p className="text-slate-400 group-hover:text-white/60 text-sm font-bold uppercase tracking-widest mb-2 transition-colors">Creative Direction</p>
                <p className="text-slate-900 group-hover:text-white text-3xl font-heading font-bold leading-tight transition-colors">Explore Jones's Marketing Creatives</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* HR Work Showcase Section */}
      <section id="work-showcase" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">HR Strategy & Portfolio</h2>
            <p className="text-slate-500 text-lg font-medium italic">Transforming raw organizational data into human-centric systems.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass p-10 rounded-[3rem] bento-card flex flex-col gap-6 border-l-[10px] border-l-blue-500 hover:shadow-xl transition-all">
             <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                <i className="fas fa-microchip text-2xl"></i>
             </div>
             <h4 className="font-heading font-bold text-slate-900 text-2xl">HR Automations</h4>
             <p className="text-slate-600 leading-relaxed">Implementing GenAI workflows to streamline recruitment cycles and digital onboarding.</p>
          </div>

          <div className="glass p-10 rounded-[3rem] bento-card flex flex-col gap-6 border-l-[10px] border-l-green-500 hover:shadow-xl transition-all">
             <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
                <i className="fas fa-chart-line text-2xl"></i>
             </div>
             <h4 className="font-heading font-bold text-slate-900 text-2xl">Data & Analytics</h4>
             <p className="text-slate-600 leading-relaxed">Advanced dashboarding for employee metrics, compensation analysis, and headcount planning.</p>
          </div>

          <div className="glass p-10 rounded-[3rem] bento-card flex flex-col gap-6 border-l-[10px] border-l-orange-500 hover:shadow-xl transition-all">
             <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
                <i className="fas fa-chess-knight text-2xl"></i>
             </div>
             <h4 className="font-heading font-bold text-slate-900 text-2xl">Planning Strategy</h4>
             <p className="text-slate-600 leading-relaxed">Frameworks that prioritize well-being while optimizing workforce output and satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Technical Core Section */}
      <section id="technical-core" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group bento-card">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-0"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10">The Technical Core</h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12">
                Leveraging enterprise-grade tools to build resilient workplace ecosystems that scale with modern organizational needs.
              </p>
              <div className="flex gap-8">
                 <div className="flex flex-col">
                    <span className="text-blue-500 text-4xl font-bold">100%</span>
                    <span className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">Data Driven</span>
                 </div>
                 <div className="w-[1px] h-full bg-slate-800"></div>
                 <div className="flex flex-col">
                    <span className="text-white text-4xl font-bold">AI</span>
                    <span className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">Augmented</span>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Power Automate', icon: 'fa-bolt' },
                { name: 'Power BI', icon: 'fa-chart-pie' },
                { name: 'GenAI Workflow', icon: 'fa-brain' },
                { name: 'Prompt Eng.', icon: 'fa-keyboard' },
                { name: 'ATS Mastery', icon: 'fa-users-gear' },
                { name: 'Advanced Excel', icon: 'fa-table' },
                { name: 'Planning', icon: 'fa-calendar-check' },
                { name: 'Strategic UX', icon: 'fa-pen-nib' }
              ].map((skill, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-7 rounded-3xl flex items-center gap-4 hover:bg-white/10 transition-all group/skill">
                  <i className={`fas ${skill.icon} text-blue-400 text-xl group-hover/skill:scale-110 transition-transform`}></i>
                  <span className="text-white font-bold text-sm tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
           <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] rotate-3 -z-10 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="aspect-square bg-slate-200 rounded-[3.5rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" alt="Workplace Strategy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
           </div>
           
           <div className="py-8">
              <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-8 flex items-center gap-5">
                The Philosophy
              </h2>
              <h3 className="text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-10 leading-tight">
                Empowering People Through <span className="text-blue-600 italic">Smart Systems</span>.
              </h3>
              <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-10 italic">
                 "I believe the best HR strategies are invisible yet felt—facilitated by powerful automations that allow us to focus on human connection."
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                With an MA in HR Management and a background in Literature, my approach combines technical precision with a deep understanding of human narrative and communication.
              </p>
           </div>
        </div>
      </section>

      {/* Contact Simple */}
      <section id="contact" className="py-40 bg-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center px-6">
           <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-12 italic leading-tight">Ready to optimize your people operations?</h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <a href="mailto:jonesallen2002@gmail.com" className="group bg-slate-900 text-white px-14 py-7 rounded-[2.5rem] font-bold flex items-center gap-4 hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
                 <i className="fas fa-envelope text-xl"></i> Let's Connect
              </a>
              <a href="https://www.linkedin.com/in/jones-allen-794308273" target="_blank" rel="noopener noreferrer" className="group bg-white border-2 border-slate-100 text-slate-900 px-14 py-7 rounded-[2.5rem] font-bold flex items-center gap-4 hover:border-blue-200 transition-all">
                 <i className="fab fa-linkedin text-xl text-blue-600"></i> LinkedIn Profile
              </a>
           </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRHome;
