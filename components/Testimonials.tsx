"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Quote, Heart, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "BrightNest gave my son confidence I didn't expect so early. He loves going to school every morning and comes home telling us everything he learned.",
    name: "Sarah M.",
    role: "Parent",
    initial: "S",
    avatarBg: "bg-orange",
    color: "text-orange",
  },
  {
    quote: "The teachers communicate daily, and that means everything. I always know how my daughter is doing, what she's learning, and how she's growing.",
    name: "Daniel K.",
    role: "Parent",
    initial: "D",
    avatarBg: "bg-teal",
    color: "text-teal",
  },
  {
    quote: "We toured five schools before choosing BrightNest. The warmth and professionalism stood out immediately. Our daughter has been thriving ever since.",
    name: "Amina W.",
    role: "Parent",
    initial: "A",
    avatarBg: "bg-blue-dark",
    color: "text-blue-dark",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center relative z-10">
        {/* Header with animations */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft" />
            ✦ Testimonials ✦
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft [animation-delay:0.3s]" />
          </span>
          
          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
            What Parents Say
          </h2>
          
          <p className="max-w-[600px] mx-auto text-text-body text-base mb-12 relative">
            <span className="inline-block w-8 h-px bg-orange/30 align-middle mr-2" />
            Hear from families who trust BrightNest with their children&apos;s early learning journey.
            <span className="inline-block w-8 h-px bg-teal/30 align-middle ml-2" />
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative bg-cream rounded-3xl px-7 py-9 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />


              {/* Quote icon with animation */}
              <div className="relative mb-3">
                <Quote 
                  size={32} 
                  className={`text-orange opacity-40 transition-all duration-300 group-hover:scale-110 group-hover:opacity-60`} 
                />
                
              </div>

              {/* Star rating with animation */}
              <div className="flex gap-1 mb-3.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star 
                    key={j} 
                    size={14} 
                    className={`fill-yellow-accent text-yellow-accent transition-all duration-300 ${
                      hoveredIndex === i ? 'scale-110' : ''
                    }`}
                    style={{ transitionDelay: `${j * 50}ms` }}
                  />
                ))}
              </div>

              {/* Quote with animation */}
              <blockquote className="text-[15px] text-text-body leading-relaxed italic mb-5 relative">
                <span className="absolute -left-2 -top-2 text-4xl text-orange/5">"</span>
                {t.quote}
                <span className="absolute -right-2 -bottom-2 text-4xl text-orange/5">"</span>
                
                {/* Highlight effect on hover */}
                <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12`} />
              </blockquote>

              {/* Author info with enhanced animation */}
              <div className="flex items-center gap-3 group/author">
                {/* Avatar with animation */}
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center text-xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {t.initial}
                  </div>
                  
                  {/* Decorative ring */}
                  <div className={`absolute inset-0 rounded-full border-2 border-dashed border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180`} />
                </div>

                {/* Name and role with hover effects */}
                <div className="relative">
                  <strong className="block text-[15px] transition-all duration-300 group-hover/author:translate-x-1">
                    {t.name}
                  </strong>
                  <span className="text-[13px] text-text-body flex items-center gap-1">
                    {t.role}
                    <span className={`w-1 h-1 rounded-full ${t.avatarBg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </span>
                </div>
              </div>

              {/* Floating dots at bottom */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`w-1 h-1 rounded-full ${t.avatarBg}`} />
                <span className={`w-1 h-1 rounded-full ${t.avatarBg} opacity-60`} />
                <span className={`w-1 h-1 rounded-full ${t.avatarBg} opacity-30`} />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}