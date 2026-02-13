"use client";

import { useRef, useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin, Heart, Sparkles } from "lucide-react";

const instructors = [
  {
    name: "Ms. Grace Nanyonga",
    role: "Early Childhood Educator",
    quote: "I believe every child learns best when they feel safe, loved, and heard.",
    emoji: "👩🏽‍🏫",
    gradient: "from-[#FFECD4] to-[#FFD4A8]",
    border: "border-orange",
    accent: "bg-orange",
  },
  {
    name: "Mr. Henry Mukasa",
    role: "Creative Arts Teacher",
    quote: "Art unlocks a child's imagination and gives them a voice before they find their words.",
    emoji: "👨🏽‍🏫",
    gradient: "from-[#D4F0F0] to-[#B8E6E6]",
    border: "border-teal",
    accent: "bg-teal",
  },
  {
    name: "Ms. Maria Sempala",
    role: "Language Development Lead",
    quote: "When children feel confident speaking, they feel confident in everything else.",
    emoji: "👩🏻‍🏫",
    gradient: "from-[#FFF8E1] to-[#FFE082]",
    border: "border-yellow-accent",
    accent: "bg-yellow-accent",
  },
];

const socials = [Facebook, Twitter, Linkedin];

export default function Instructors() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [likedIndex, setLikedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="instructors" className="py-20 bg-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center relative z-10">
        {/* Header with subtle animations */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft" />
            ✦ Our Teachers ✦
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft [animation-delay:0.3s]" />
          </span>
          
          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
            Our Expert Instructors
          </h2>
          
          <p className="max-w-[600px] mx-auto text-text-body text-base mb-12 relative">
            <span className="inline-block w-8 h-px bg-orange/30 align-middle mr-2" />
            Passionate educators who believe every child learns best when they feel safe, loved, and heard.
            <span className="inline-block w-8 h-px bg-teal/30 align-middle ml-2" />
          </p>
        </div>

        {/* Instructors Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-9 max-w-[960px] mx-auto">
          {instructors.map((t, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl px-7 pt-10 pb-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />
              

              {/* Teacher image with animation */}
              <div className="relative mb-5 group/image">
                <div className={`w-[120px] h-[120px] rounded-full mx-auto overflow-hidden border-4 ${t.border} transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]`}>
                  <div className={`w-full h-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110`}>
                    {t.emoji}
                  </div>
                </div>
                
                
                {/* Small badge */}
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${t.accent} opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-soft`} />
              </div>
              
              {/* Name with hover effect */}
              <h4 className="font-[var(--font-display)] text-xl mb-1 relative inline-block">
                {t.name}
              </h4>
              
              {/* Role with icon on hover */}
              <div className="text-sm text-orange font-semibold mb-3.5 flex items-center justify-center gap-1">
                {t.role}
              </div>
              
              {/* Quote with animation */}
              <p className="text-sm text-text-body italic leading-relaxed mb-4 relative">
                <span className="absolute -left-2 top-0 text-2xl text-orange/20">"</span>
                {t.quote}
                <span className="absolute -right-2 bottom-0 text-2xl text-orange/20">"</span>
              </p>

              {/* Social links with enhanced hover */}
              <div className="flex justify-center gap-2.5">
                {socials.map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="relative group/social w-9 h-9 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-orange hover:text-white transition-all duration-300 hover:scale-110"
                    style={{ transitionDelay: `${j * 50}ms` }}
                  >
                    <Icon size={14} />
                    
                    {/* Tooltip on hover */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-charcoal text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {['Facebook', 'Twitter', 'LinkedIn'][j]}
                    </span>
                  </a>
                ))}
              </div>

              {/* Experience indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`w-1 h-1 rounded-full ${t.accent}`} />
                <span className={`w-1 h-1 rounded-full ${t.accent} opacity-60`} />
                <span className={`w-1 h-1 rounded-full ${t.accent} opacity-30`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}