// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Facebook, Youtube, Menu, X, ArrowUp } from 'lucide-react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Scroll Visibility for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1428] text-white font-sans selection:bg-amber-500 selection:text-slate-900">
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-amber-500 text-[#0A1428] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="stroke-[3]" />
      </button>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0A1428]/95 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 text-left group hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 bg-white rounded-full overflow-hidden border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-shadow">
              <img src="/amo-logo.png" alt="AMO South Africa Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="leading-tight">
              <div className="font-black text-xl md:text-2xl tracking-tighter">AMO</div>
              <div className="text-[9px] md:text-[11px] text-amber-500 -mt-1 font-bold tracking-wide">SOUTH AFRICA</div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-8 text-[15px] font-medium items-center">
            <Link to="/" className={`hover:text-amber-500 transition-colors ${location.pathname === '/' ? 'text-amber-500' : ''}`}>HOME</Link>
            <Link to="/about" className={`hover:text-amber-500 transition-colors ${location.pathname === '/about' ? 'text-amber-500' : ''}`}>ABOUT US</Link>
            <Link to="/projects" className={`hover:text-amber-500 transition-colors ${location.pathname === '/projects' ? 'text-amber-500' : ''}`}>PROJECTS</Link>
            <Link to="/contact" className={`hover:text-amber-500 transition-colors ${location.pathname === '/contact' ? 'text-amber-500' : ''}`}>CONTACT</Link>
            
            {/* High Contrast Donate Button */}
            <a 
              href="#donate-link-goes-here" 
              className="inline-flex items-center justify-center bg-amber-500 text-[#0A1428] px-8 py-2.5 rounded-full font-bold hover:bg-white transition-colors duration-300 ml-4 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              DONATE
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
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
            <Link to="/" className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">HOME</Link>
            <Link to="/about" className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">ABOUT US</Link>
            <Link to="/projects" className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">PROJECTS</Link>
            <Link to="/contact" className="text-white hover:text-amber-500 font-medium py-2 border-b border-white/5">CONTACT</Link>
            <a 
              href="#donate-link-goes-here" 
              className="mt-2 inline-flex items-center justify-center bg-amber-500 text-[#0A1428] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300"
            >
              DONATE
            </a>
          </div>
        )}
      </nav>

      {/* Main Content Rendered Here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div>
            <div className="text-2xl font-black text-white mb-4 flex items-center gap-3 tracking-tighter">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-white rounded-full overflow-hidden border-2 border-amber-500">
                <img src="/amo-logo.png" alt="AMO South Africa Logo" className="w-full h-full object-contain p-1" />
              </div>
              AMO SOUTH AFRICA
            </div>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              A supporting ministry of the Seventh-day Adventist Church empowering men to lead with purpose.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100066790171882" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#1877F2] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@AMOSouthAfrica" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#FF0000] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-white/70 text-xs font-bold tracking-[0.1em] mb-6 uppercase">Quick Links</div>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <Link to="/about" className="text-white hover:text-amber-500 transition-colors inline-block w-fit">About Ministry</Link>
              <Link to="/projects" className="text-white hover:text-amber-500 transition-colors inline-block w-fit">Our Projects</Link>
              <Link to="/contact" className="text-white hover:text-amber-500 transition-colors inline-block w-fit">Contact Us</Link>
              <a href="#donate" className="text-amber-500 hover:text-white transition-colors inline-block w-fit font-bold">Support Our Mission</a>
            </div>
          </div>

          <div>
            <div className="text-white/70 text-xs font-bold tracking-[0.1em] mb-6 uppercase">Get In Touch</div>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="mailto:theworkcentrik@gmail.com" className="text-white hover:text-amber-500 transition-colors flex items-center gap-3 w-fit">
                <Mail size={16} className="text-amber-500" /> theworkcentrik@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <Phone size={16} className="mt-1 text-amber-500 shrink-0" />
                <div>
                  Chief Operations Officer <br />
                  <span className="text-white font-bold block mt-0.5">+27 78 680 7797</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center border-t border-white/10 pt-8 gap-3 text-center">
          <p className="text-[12px] text-white/70">
            © {new Date().getFullYear()} AMO South Africa NPC • Registration: 2020/749793/08
          </p>
          <p className="text-[12px] text-white/70 tracking-wide">
            Powered by <a href="https://workcentrik.com/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white font-bold transition-colors">WorkCentrik</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;