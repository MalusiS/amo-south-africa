// src/pages/Projects.jsx

import React from 'react';
import { ArrowRight, MapPin, Calendar, Globe } from 'lucide-react';

const Projects = () => {
  const pastProjects = [
    {
      title: "Men's Wellness Clinics",
      category: "Health & Wellness",
      desc: "A series of local outreach programs providing free health screenings, mental health resources, and lifestyle education based on the Adventist health message.",
      image: "bg-[#15274D]"
    },
    {
      title: "Youth Mentorship Initiative",
      category: "Social Impact",
      desc: "Connecting established men with young adults to provide career guidance, spiritual accountability, and essential life skills training.",
      image: "bg-[#1A2F5C]"
    },
    {
      title: "Digital Ministry Expansion",
      category: "Evangelism",
      desc: "Launching a comprehensive online platform offering weekly devotionals, biblical study guides, and live-streamed symposiums to a global audience.",
      image: "bg-[#1E376B]"
    }
  ];

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="pt-20 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0F1E3A] to-[#0A1428] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-4">Proof of Work</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">OUR PROJECTS</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Faith without works is dead. Explore the tangible impact AMO South Africa is making in communities locally and abroad.
          </p>
        </div>
      </section>

      {/* FEATURED MEGA-PROJECT */}
      <section className="py-24 bg-[#0A1428] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden flex flex-col lg:flex-row group">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] flex items-center justify-center bg-[#0F1E3A] overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87')] bg-center bg-cover opacity-30 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"></div>
               <span className="text-white/40 tracking-widest uppercase z-10 text-sm font-medium">[Convention Poster Placeholder]</span>
            </div>
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 w-fit border border-amber-500/20">
                <Globe size={14} /> Featured Initiative
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">International Gospel Convention 2026</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Our most ambitious project to date. AMO South Africa is spearheading a massive, four-nation convention spanning Kenya, South Africa, Rwanda, and the USA. The goal is to unite thousands under the banner of the Third Angel's Message in Verity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-white/50 text-sm font-semibold uppercase tracking-wider mb-1">
                    <Calendar size={16} /> Timeline
                  </div>
                  <div className="text-white font-medium">April - July 2026</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white/50 text-sm font-semibold uppercase tracking-wider mb-1">
                    <MapPin size={16} /> Scope
                  </div>
                  <div className="text-white font-medium">Global (4 Nations)</div>
                </div>
              </div>

              <a href="#donate" className="inline-flex items-center gap-3 bg-amber-500 text-[#0A1428] px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 w-fit shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:-translate-y-1">
                Fund This Project <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-24 bg-[#0F1E3A] px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Ongoing Initiatives</h2>
            <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <div key={index} className="bg-[#0A1428] rounded-[24px] border border-white/10 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className={`h-56 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <span className="text-white/30 text-xs tracking-widest uppercase z-10">[Project Image]</span>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-amber-500 text-[11px] font-bold tracking-widest uppercase mb-3">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm flex-grow mb-6">{project.desc}</p>
                  <a href="#donate" className="text-white font-bold text-sm uppercase tracking-wider hover:text-amber-500 transition-colors inline-flex items-center gap-2 mt-auto">
                    Support Initiative <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
