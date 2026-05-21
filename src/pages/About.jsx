// src/pages/About.jsx

import React from 'react';
import { Target, Eye, Shield, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Shield size={28} />, title: "True To Duty", desc: "Standing firm in biblical principles and moral integrity." },
    { icon: <Users size={28} />, title: "Brotherhood", desc: "Fostering accountability and unwavering support among men." },
    { icon: <Award size={28} />, title: "Excellence", desc: "Striving for the highest standards in family, work, and ministry." }
  ];

  const leadership = [
    { name: "[Name Surname]", role: "Executive Director", image: "bg-[#15274D]" },
    { name: "[Name Surname]", role: "Chief Operations Officer", image: "bg-[#1A2F5C]" },
    { name: "[Name Surname]", role: "Public Relations", image: "bg-[#1E376B]" },
  ];

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="pt-20 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0F1E3A] to-[#0A1428] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-4">Our Identity</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">ABOUT AMO SOUTH AFRICA</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            A registered Non-Profit Company dedicated to the holistic restoration of the modern man, anchored in the Third Angel's Message.
          </p>
        </div>
      </section>

      {/* COMPANY BACKGROUND */}
      <section className="py-24 bg-[#0A1428] px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Our Foundational Story</h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                AMO South Africa was born out of a critical need to address the spiritual, mental, and social decline facing men in modern society. Recognizing that strong communities begin with strong, accountable men, our ministry was established as a supporting arm of the Seventh-day Adventist Church.
              </p>
              <p>
                From our early days of small fellowship groups to organizing international gospel conventions, our mandate has remained unchanged: to empower men to reclaim their God-given roles as leaders, protectors, and providers. 
              </p>
              <p>
                Today, we operate across multiple pillars of wellness, ensuring that the men we reach are not only spiritually grounded but mentally resilient and physically capable of fulfilling their earthly and heavenly duties.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video lg:aspect-square rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87')] bg-center bg-cover opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"></div>
              <span className="text-white/30 font-medium tracking-widest uppercase text-sm z-10">[Historical Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="py-24 bg-[#0F1E3A] px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Mission */}
            <div className="bg-[#0A1428] p-10 rounded-[24px] border border-white/10">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20">
                <Target className="text-amber-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To systematically equip men with biblical truth, mental fortitude, and practical life skills, enabling them to reflect the character of Christ in their homes, workplaces, and local congregations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0A1428] p-10 rounded-[24px] border border-white/10">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <Eye className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To see a global generation of God-fearing men standing as unwavering pillars of truth, deeply rooted in the Third Angel's Message and fully prepared for the imminent return of Christ.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white/5 p-10 rounded-[24px] border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex w-16 h-16 bg-[#0A1428] rounded-full items-center justify-center mb-4 text-amber-500 border border-white/5 shadow-lg">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="py-24 bg-[#0A1428] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-2">Our Team</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">LEADERSHIP</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group">
                <div className={`w-full aspect-[4/5] ${leader.image} rounded-[24px] mb-6 border border-white/10 flex items-center justify-center overflow-hidden relative`}>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-transparent opacity-80 z-10"></div>
                   <span className="text-white/20 text-sm tracking-widest uppercase z-0">[Portrait]</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-amber-500 text-sm font-semibold tracking-wide uppercase">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
