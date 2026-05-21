// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Brain, Users, Flame } from 'lucide-react';

const Home = () => {
  const pillars = [
    { icon: <Flame size={32} />, title: "Spiritual", desc: "Fostering deep, transformative relationships with Christ." },
    { icon: <Brain size={32} />, title: "Mental", desc: "Equipping men with biblical resilience and clarity of mind." },
    { icon: <Users size={32} />, title: "Social", desc: "Building strong families and accountable communities." },
    { icon: <Activity size={32} />, title: "Wellness", desc: "Promoting sustainable health aligned with the Adventist message." }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pb-20 pt-12 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 to-[#0A1428]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87')] bg-center bg-cover opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-block bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-[11px] md:text-xs font-semibold tracking-[0.2em] mb-8 border border-white/5 shadow-xl uppercase leading-relaxed text-amber-500">
            A Supporting Ministry of the Seventh-day Adventist Church
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.05] tracking-tight mb-6">
            EMPOWERING MEN<br />
            <span className="text-white">TO LEAD WITH</span><br />
            <span className="bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">PURPOSE</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 font-light mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
            AMO South Africa exists to equip God-fearing men spiritually, mentally, socially, and in health—true to duty and dedicated to service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#donate-link-goes-here" className="w-full sm:w-auto bg-amber-500 text-[#0A1428] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1">
              Support Our Mission
            </a>
            <Link to="/about" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-10 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* THE 4 PILLARS GRID */}
      <section className="py-24 bg-[#0F1E3A] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-2">Our Core Focus</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">THE FOUR PILLARS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-[24px] p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 group">
                <div className="text-amber-500 mb-6 bg-[#0A1428] w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-24 bg-[#0A1428] px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative z-10">
            <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-2">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              True To Duty.<br />Faithful In Service.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              AMO South Africa is a registered Non-Profit Company dedicated to the holistic restoration of the modern man. We draw our foundation from biblical principles and the Third Angel's Message, aiming to build a generation of men who are pillars in their homes, churches, and communities.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-3 text-amber-500 font-bold hover:text-white transition-colors">
              Read Our Full History 
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Link>
          </div>
          <div className="md:w-1/2 w-full relative">
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-[#0F1E3A] flex items-center justify-center text-white/20">
                [About Us Image Placeholder]
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* IMPACT TEASER */}
      <section className="py-24 bg-[#0F1E3A] px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-2">Proof of Work</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">RECENT IMPACT</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-amber-500 hover:text-white font-bold transition-colors">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Impact Card 1 */}
            <div className="bg-[#0A1428] rounded-[24px] overflow-hidden border border-white/10 group">
              <div className="h-64 bg-white/5 flex items-center justify-center text-white/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87')] bg-center bg-cover opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
              <div className="p-8">
                <div className="text-amber-500 text-[12px] font-bold tracking-widest uppercase mb-3">Global Outreach</div>
                <h3 className="text-2xl font-bold text-white mb-4">International Gospel Convention 2026</h3>
                <p className="text-white/70 mb-6">Spearheading four powerful gatherings across Kenya, South Africa, Rwanda, and the USA to spread the Third Angel's Message in Verity.</p>
                <Link to="/projects" className="text-amber-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-wide">Read More</Link>
              </div>
            </div>

            {/* Impact Card 2 */}
            <div className="bg-[#0A1428] rounded-[24px] overflow-hidden border border-white/10 group">
              <div className="h-64 bg-white/5 flex items-center justify-center text-white/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#15274D] transition-transform duration-700 group-hover:scale-105"></div>
                [Community Event Image Placeholder]
              </div>
              <div className="p-8">
                <div className="text-amber-500 text-[12px] font-bold tracking-widest uppercase mb-3">Local Empowerment</div>
                <h3 className="text-2xl font-bold text-white mb-4">Men's Wellness Clinics</h3>
                <p className="text-white/70 mb-6">Establishing sustainable health and wellness initiatives aligned with the Adventist message to promote longevity and vitality.</p>
                <Link to="/projects" className="text-amber-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-wide">Read More</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-amber-500 hover:text-white font-bold transition-colors">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
