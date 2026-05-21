// src/pages/Contact.jsx

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="pt-20 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0F1E3A] to-[#0A1428] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-amber-500 text-[13px] font-bold tracking-[0.3em] uppercase mb-4">Connectivity Hub</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">GET IN TOUCH</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are looking to partner, donate, or learn more about our ministry, our team is ready to connect with you.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS & FORM GRID */}
      <section className="py-24 bg-[#0A1428] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Details */}
          <div>
            <h2 className="text-3xl font-black text-white mb-8">Direct Contact</h2>
            <p className="text-white/70 leading-relaxed mb-12">
              Reach out to us directly using the details below, or fill out the secure contact form and a member of our leadership team will get back to you promptly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-[#0A1428] transition-colors duration-300">
                  <Mail size={24} className="text-amber-500 group-hover:text-[#0A1428]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:theworkcentrik@gmail.com" className="text-white/70 hover:text-amber-500 transition-colors">theworkcentrik@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-[#0A1428] transition-colors duration-300">
                  <Phone size={24} className="text-amber-500 group-hover:text-[#0A1428]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-white/70 mb-1">Chief Operations Officer: <span className="text-white font-medium">+27 78 680 7797</span></p>
                  <p className="text-white/70">Public Relations: <span className="text-white font-medium">+27 82 489 4337</span></p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-[#0A1428] transition-colors duration-300">
                  <MapPin size={24} className="text-amber-500 group-hover:text-[#0A1428]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Headquarters</h3>
                  <p className="text-white/70">
                    [Physical Address Line 1]<br />
                    [City, Province, Zip Code]<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="bg-[#0F1E3A] p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {/* The data-netlify="true" attribute is the magic hook for Netlify Forms */}
            <form 
              name="amo-contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Hidden input required for Netlify form routing */}
              <input type="hidden" name="form-name" value="amo-contact" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div>
                <label htmlFor="name" className="block text-white/70 text-sm font-semibold tracking-wide uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-[#0A1428] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/70 text-sm font-semibold tracking-wide uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-[#0A1428] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/70 text-sm font-semibold tracking-wide uppercase mb-2">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="w-full bg-[#0A1428] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Donation / Partnership">Donation & Partnership</option>
                  <option value="Event Information">Event Information</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-semibold tracking-wide uppercase mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full bg-[#0A1428] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-amber-500 text-[#0A1428] px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:-translate-y-1"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section className="bg-[#0F1E3A] h-[400px] md:h-[500px] w-full relative border-t border-white/5">
        {/* Replace the src in the iframe below with the actual Google Maps embed URL for the specific address once confirmed */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.4233!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzI5LjYiUyAxOMKwMjUnMjMuOSJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.7)' }} 
          allowFullScreen="" 
          loading="lazy"
          title="AMO South Africa Headquarters Location"
          className="absolute inset-0"
        ></iframe>
        
        {/* Overlay block to ensure the map blends with the dark theme */}
        <div className="absolute inset-0 pointer-events-none bg-[#0A1428] mix-blend-color opacity-50"></div>
      </section>
    </div>
  );
};

export default Contact;
