// src/App.jsx

import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Mail, Phone, ArrowUp, Facebook } from 'lucide-react';

const AMOLandingPage = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Scroll to Top State
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Visibility for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler to prevent URL hash updates and fix sticky header overlap
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 85; // Approximate height of the sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Clean up the URL to ensure no hash is left behind
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  };

  // Countdown to Kenya event: 2 April 2026
  useEffect(() => {
    const targetDate = new Date('2026-04-02T00:00:00+03:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const events = [
    { country: 'KENYA', flag: '🇰🇪', dates: '2 – 6 APRIL', location: 'Kenya' },
    { country: 'SOUTH AFRICA', flag: '🇿🇦', dates: '8 – 12 APRIL', location: 'South Africa' },
    { country: 'RWANDA', flag: '🇷🇼', dates: '13 – 18 APRIL', location: 'Rwanda' },
    { country: 'USA', flag: '🇺🇸', dates: '8 – 11 JULY', location: 'USA' },
  ];

  return (
    <div id="top" className="min-h-screen bg-[#0A1428] text-white font-sans selection:bg-amber-500 selection:text-slate-900 relative">
      
      {/* Dynamic Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-amber-500 text-[#0A1428] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="stroke-[3]" />
      </button>

      {/* Construction Banner */}
      <div className="bg-amber-500 text-[#0A1428] py-3 px-4 text-center text-[10px] md:text-sm font-bold tracking-[0.15em] uppercase w-full z-50 relative leading-tight">
        Website Under Construction • Full Launch Coming Soon
      </div>

      {/* Navbar - Sticky with Glassmorphism */}
      <nav className="sticky top-0 z-40 bg-[#0A1428]/95 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO SECTION - Clickable to scroll to top */}
          <button onClick={scrollToTop} className="flex items-center gap-3 text-left group hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 bg-white rounded-full overflow-hidden border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-shadow">
              <img src="/amo-logo.png" alt="AMO South Africa Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="leading-tight">
              <div className="font-black text-xl md:text-2xl tracking-tighter">AMO</div>
              <div className="text-[9px] md:text-[11px] text-amber-500 -mt-1 font-bold tracking-wide">SOUTH AFRICA</div>
            </div>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-8 text-[15px] font-medium items-center">
            <a href="#next-event" onClick={(e) => handleSmoothScroll(e, 'next-event')} className="hover:text-amber-500 transition-colors">NEXT EVENT</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-amber-500 transition-colors">ABOUT AMO</a>
            <a href="#stay" onClick={(e) => handleSmoothScroll(e, 'stay')} className="hover:text-amber-500 transition-colors">STAY UPDATED</a>
            <a 
              href="https://wa.me/27824894337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A1428] px-6 py-2.5 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300 ml-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONTACT US
            </a>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            className="lg:hidden text-white hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center gap-1.5 relative">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A1428] border-t border-white/10 shadow-2xl py-4 px-6 flex flex-col gap-4">
            <a href="#next-event" onClick={(e) => handleSmoothScroll(e, 'next-event')} className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">NEXT EVENT</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">ABOUT AMO</a>
            <a href="#stay" onClick={(e) => handleSmoothScroll(e, 'stay')} className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">STAY UPDATED</a>
            
            <a 
              href="https://wa.me/27824894337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-[#0A1428] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONTACT US
            </a>
          </div>
        )}
      </nav>

      {/* Wrapping the primary content in a <main> tag for accessibility */}
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[calc(100dvh-116px)] md:min-h-[75vh] flex flex-col items-center justify-center pb-32 md:pb-28 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 to-[#0A1428] w-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87')] bg-center bg-cover opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6 mt-8">
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-3 rounded-3xl text-[10px] md:text-xs font-semibold tracking-[0.2em] mb-8 border border-white/5 shadow-xl uppercase leading-relaxed max-w-[90vw]">
              Officially Endorsed by the Southern Africa Union Conference
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-black leading-[1.1] tracking-tight mb-4">
              INTERNATIONAL<br />
              GOSPEL CONVENTION<br />
              <span className="bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">2026</span>
            </h1>

            <p className="text-lg md:text-2xl text-amber-500 font-medium mb-8 px-4">
              The Third Angel’s Message in Verity<br />
              <span className="block text-[13px] md:text-[15px] text-white/70 mt-2 font-normal">Four powerful gatherings across the globe</span>
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] animate-bounce font-semibold uppercase">
            Scroll down ↓
          </div>
        </section>

        {/* NEXT EVENT SECTION (COUNTDOWN) */}
        <section id="next-event" className="py-20 bg-[#0A1428] px-6 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
                Gospel Convention
              </h2>
              <p className="text-lg md:text-xl text-amber-500 font-medium tracking-wide">
                The Third Angel’s Message in Verity
              </p>
            </div>

            <div className="inline-flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 md:p-12 mb-10 shadow-2xl w-full sm:w-auto">
              <div className="text-amber-500 text-[11px] md:text-[13px] font-bold tracking-[0.2em] mb-6 uppercase text-center leading-relaxed">Next Event: Kenya Kickoff In</div>
              <div className="flex gap-3 sm:gap-8 justify-center">
                {Object.entries(countdown).map(([label, value]) => (
                  <div key={label} className="text-center">
                    <span className="block text-3xl sm:text-6xl md:text-7xl font-mono font-bold text-white mb-2">
                      {value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a href="#events" onClick={(e) => handleSmoothScroll(e, 'events')} className="group inline-flex items-center gap-3 bg-amber-500 text-[#0A1428] text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white hover:-translate-y-1 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                VIEW ALL DATES
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* EVENT DATES SECTION */}
        <section id="events" className="py-24 bg-[#0F1E3A] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-2">1888MSC Global Theme</div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">THE THIRD ANGEL’S MESSAGE IN VERITY</h2>
              </div>
              <div className="text-right text-white/70 text-[15px] hidden md:block">
                Presented by<br />
                <span className="text-2xl text-white font-bold tracking-wide">AMO SOUTH AFRICA</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((event, index) => (
                <div key={index} className="group bg-white/5 border border-white/10 rounded-[24px] p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                  <div className="text-7xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl">{event.flag}</div>
                  <div className="text-amber-500 text-[13px] font-bold tracking-[0.15em] uppercase mb-2">{event.country}</div>
                  <div className="text-[28px] font-bold text-white mb-6 leading-none">{event.dates}</div>
                  <div className="flex items-center gap-2 text-white/70 text-[15px] font-medium">
                    <MapPin size={18} className="text-amber-500" /> {event.location}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center mt-16 text-white/70 text-[15px]">
              Four nations • One message • Thousands transformed<br />
              <a href="#stay" onClick={(e) => handleSmoothScroll(e, 'stay')} className="text-amber-500 font-semibold mt-2 inline-block hover:text-white transition-colors">Register your interest below to receive updates and live links</a>
            </p>
          </div>
        </section>

        {/* QUICK ABOUT */}
        <section id="about" className="py-24 bg-[#0A1428] px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full text-[13px] font-bold tracking-widest uppercase mb-8 border border-blue-800">
              Empowered God-Fearing Men • True To Duty
            </div>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 font-light">
              AMO South Africa is a registered Non-Profit and a supporting ministry of the 
              Seventh-day Adventist Church. We exist to empower men spiritually, mentally, socially, 
              and in health & wellness — across South Africa and beyond.
            </p>
          </div>
        </section>

        {/* STAY UPDATED SECTION */}
        <section id="stay" className="py-24 bg-gradient-to-b from-[#0F1E3A] to-[#0A1428] px-6 text-center border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Be the first to know</h2>
            <p className="text-[19px] text-white/70 mb-12 font-light">
              Get convention live links, devotionals, and updates by following our WhatsApp channel and Facebook page.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* WhatsApp Channel Button */}
              <a
                href="https://whatsapp.com/channel/0029VbBvsqG8KMqit66qRs2c"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#0A1428] font-bold px-8 py-4 rounded-2xl text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Follow on WhatsApp
              </a>

              {/* Facebook Page Button */}
              <a
                href="https://www.facebook.com/profile.php?id=100066790171882"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#0A1428] font-bold px-8 py-4 rounded-2xl text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:-translate-y-1"
              >
                <Facebook size={28} fill="currentColor" className="text-[#1877F2]" />
                Follow on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div>
            <div className="text-2xl font-black text-white mb-4 flex items-center gap-3 tracking-tighter">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-white rounded-full overflow-hidden border-2 border-amber-500">
                <img src="/amo-logo.png" alt="AMO South Africa Logo" className="w-full h-full object-contain p-1" />
              </div>
              AMO SOUTH AFRICA
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Spiritual • Mental • Social • Wellness <br />
              A supporting ministry of the Seventh-day Adventist Church
            </p>
          </div>

          <div>
            <div className="text-white/70 text-xs font-bold tracking-[0.1em] mb-6 uppercase">Quick Links</div>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a href="#events" onClick={(e) => handleSmoothScroll(e, 'events')} className="text-white hover:text-amber-500 transition-colors inline-block w-fit">Convention 2026</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-white hover:text-amber-500 transition-colors inline-block w-fit">About Ministry</a>
              <a href="#stay" onClick={(e) => handleSmoothScroll(e, 'stay')} className="text-white hover:text-amber-500 transition-colors inline-block w-fit">Get Updates</a>
            </div>
          </div>

          <div>
            <div className="text-white/70 text-xs font-bold tracking-[0.1em] mb-6 uppercase">Get In Touch</div>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="mailto:amosouthafrica@gmail.com" className="text-white hover:text-amber-500 transition-colors flex items-center gap-3 w-fit">
                <Mail size={16} className="text-amber-500" /> amosouthafrica@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <Phone size={16} className="mt-1 text-amber-500 shrink-0" />
                <div>
                  Chief Operations Officer <br />
                  <span className="text-white font-bold block mt-0.5">+27 78 680 7797</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <Phone size={16} className="mt-1 text-amber-500 shrink-0" />
                <div>
                  Public Relations <br />
                  <span className="text-white font-bold block mt-0.5">+27 82 489 4337</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center border-t border-white/10 pt-8 gap-3 text-center">
          <p className="text-[12px] text-white/70">
            © {new Date().getFullYear()} AMO South Africa NPC • Registration: 2020/749793/08 • Website under construction
          </p>
          <p className="text-[12px] text-white/70 tracking-wide">
            Powered by <a href="https://workcentrik.com/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white font-bold transition-colors">WorkCentrik</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AMOLandingPage;
