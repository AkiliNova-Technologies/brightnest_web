'use client'

import { Sprout, Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Clock, Heart, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const quickLinks = ["About Us", "Our Programs", "Our Teachers", "Gallery", "Contact Us"];
const programLinks = ["Language Development", "Discovery Class", "Creative Arts", "Preschool Readiness", "Holiday Camps"];

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-blue-dark text-white pt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] w-64 h-64 rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute bottom-20 right-[5%] w-64 h-64 rounded-full bg-teal/5 blur-3xl" />
        
        {/* Floating dots */}
        <div className="absolute top-40 left-[15%] w-2 h-2 rounded-full bg-white/10 animate-float-slow" />
        <div className="absolute bottom-40 right-[20%] w-3 h-3 rounded-full bg-orange/10 animate-float-slow [animation-delay:1s]" />
        <div className="absolute top-60 right-[30%] w-1.5 h-1.5 rounded-full bg-teal/10 animate-float-slow [animation-delay:2s]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        <div className={`grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-10 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Brand */}
          <div className="group/brand">
            <div className="flex items-center gap-2.5 mb-4 relative">
              <div className="relative">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover/brand:scale-110 group-hover/brand:rotate-3">
                  <Sprout size={24} className="transition-transform duration-300 group-hover/brand:scale-110" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange/30 opacity-0 group-hover/brand:opacity-100 transition-all duration-500 group-hover/brand:rotate-180" />
              </div>
              
              <span className="font-[var(--font-display)] text-[26px] font-extrabold text-white relative">
                Bright<span className="text-orange">Nest</span>
                <Sparkles 
                  size={14} 
                  className="absolute -top-2 -right-4 text-orange opacity-0 group-hover/brand:opacity-100 transition-opacity animate-sparkle-soft" 
                />
              </span>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed mb-5 relative">
              Nurturing curiosity, building confidence. A safe start for curious little minds since 2017.
              <Heart size={12} className="absolute -right-2 bottom-0 text-orange/50 opacity-0 group-hover/brand:opacity-100 transition-opacity animate-heartbeat" />
            </p>
            
            {/* Social icons with enhanced animations */}
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group/social relative w-[38px] h-[38px] rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Icon size={14} className="transition-transform group-hover/social:scale-110" />
                  
                  {/* Tooltip on hover */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-orange text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'][i]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="group/quick">
            <h5 className="font-[var(--font-display)] text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover/quick:w-full" />
            </h5>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <li key={link} className="group/item">
                  <a 
                    href="#" 
                    className="text-white/70 text-sm hover:text-orange transition-all duration-300 inline-block hover:translate-x-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange/0 group-hover/item:bg-orange transition-all" />
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="group/programs">
            <h5 className="font-[var(--font-display)] text-lg mb-5 relative inline-block">
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover/programs:w-full" />
            </h5>
            <ul className="flex flex-col gap-3">
              {programLinks.map((link, i) => (
                <li key={link} className="group/item">
                  <a 
                    href="#" 
                    className="text-white/70 text-sm hover:text-orange transition-all duration-300 inline-block hover:translate-x-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange/0 group-hover/item:bg-orange transition-all" />
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="group/contact">
            <h5 className="font-[var(--font-display)] text-lg mb-5 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover/contact:w-full" />
            </h5>
            <ul className="flex flex-col gap-3">
              <li className="group/item flex items-start gap-2.5 text-white/70 text-sm leading-relaxed hover:text-white/90 transition-all duration-300 hover:translate-x-1">
                <MapPin size={16} className="text-orange mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
                12 Kampala Road, Ntinda, Kampala, Uganda
              </li>
              <li className="group/item flex items-start gap-2.5 text-white/70 text-sm leading-relaxed hover:text-white/90 transition-all duration-300 hover:translate-x-1">
                <Phone size={16} className="text-orange mt-0.5 shrink-0 transition-transform group-hover/item:scale-110 group-hover/item:rotate-12" />
                +256 700 123 456
              </li>
              <li className="group/item flex items-start gap-2.5 text-white/70 text-sm leading-relaxed hover:text-white/90 transition-all duration-300 hover:translate-x-1">
                <Mail size={16} className="text-orange mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
                hello@brightnest.academy
              </li>
              <li className="group/item flex items-start gap-2.5 text-white/70 text-sm leading-relaxed hover:text-white/90 transition-all duration-300 hover:translate-x-1">
                <Clock size={16} className="text-orange mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
                <span>Mon – Fri: 7:00 AM – 6:00 PM<br />Sat: 8:00 AM – 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center text-[13px] text-white/50 gap-2 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="flex items-center gap-1.5">
            <span>© 2026 BrightNest Early Learning Academy.</span>
            <span className="hidden sm:inline">All rights reserved by AkiliNova Technologies.</span>
            <Heart size={10} className="text-orange/50 animate-pulse-soft" />
          </span>
          <span className="flex items-center gap-2">
            <a href="#" className="hover:text-orange transition-colors relative group/link">
              Privacy Policy
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange transition-all duration-300 group-hover/link:w-full" />
            </a>
            <span className="text-white/30">·</span>
            <a href="#" className="hover:text-orange transition-colors relative group/link">
              Terms of Service
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange transition-all duration-300 group-hover/link:w-full" />
            </a>
          </span>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange/20 via-teal/20 to-orange/20" />
    </footer>
  );
}