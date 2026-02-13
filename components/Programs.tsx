"use client";

import { useRef, useEffect, useState } from "react";
import { MessageCircle, Microscope, Palette, GraduationCap, Sparkles } from "lucide-react";

const programs = [
  {
    Icon: MessageCircle,
    title: "Language Development",
    age: "1.5 – 3 years",
    desc: "Speech confidence and early vocabulary building through stories, songs, and conversations.",
    bg: "bg-orange-light",
    iconColor: "text-orange",
    border: "border-orange/20",
  },
  {
    Icon: Microscope,
    title: "Discovery Class",
    age: "3 – 5 years",
    desc: "Early literacy, numeracy, and exploration through hands-on activities and guided play.",
    bg: "bg-teal-light",
    iconColor: "text-teal",
    border: "border-teal/20",
  },
  {
    Icon: Palette,
    title: "Creative Arts & Play",
    age: "2 – 5 years",
    desc: "Drawing, music, and storytelling to nurture imagination and creative expression.",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-600/20",
  },
  {
    Icon: GraduationCap,
    title: "Preschool Readiness",
    age: "4 – 6 years",
    desc: "Preparing confident, curious learners ready for their primary school journey.",
    bg: "bg-red-50",
    iconColor: "text-red-soft",
    border: "border-red-soft/20",
  },
];

export default function Programs() {
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
    <section id="programs" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-40 left-[10%] w-64 h-64 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-40 right-[10%] w-64 h-64 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center relative z-10">
        {/* Header with subtle animations */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft" />
            Our Programs
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft [animation-delay:0.3s]" />
          </span>
          
          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
            We Meet Kids At Their Level<br />Regardless Of Their Age
          </h2>
          
          <p className="max-w-[600px] mx-auto text-text-body text-base leading-relaxed mb-12 relative">
            <span className="inline-block w-8 h-px bg-orange/30 align-middle mr-2" />
            Each program is thoughtfully designed to match your child&apos;s
            developmental stage and natural curiosity.
            <span className="inline-block w-8 h-px bg-teal/30 align-middle ml-2" />
          </p>
        </div>

        {/* Programs Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`group relative ${p.bg} rounded-3xl px-6 pt-10 pb-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />
              
              {/* Age badge that appears on hover */}
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-semibold ${p.iconColor} shadow-sm transition-all duration-300 ${
                hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                {p.age}
              </div>

              {/* Icon container with enhanced animation */}
              <div className="relative mb-5">
                <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                  <p.Icon 
                    size={36} 
                    className={`${p.iconColor} transition-all duration-300 ${
                      hoveredIndex === i ? "scale-110 rotate-3" : ""
                    }`} 
                  />
                </div>
                
                {/* Decorative ring */}
                <div className={`absolute inset-0 rounded-full border-2 border-dashed ${p.border} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180`} />
                
                {/* Small accent dot */}
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${p.iconColor.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              {/* Title with hover effect */}
              <h4 className="font-[var(--font-display)] text-lg mb-1.5 relative inline-block">
                {p.title}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 ${p.iconColor.replace('text', 'bg')} rounded-full transition-all duration-300 group-hover:w-8`} />
              </h4>
              
              {/* Age indicator (visible always) */}
              <div className="text-[13px] text-text-body font-semibold mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                {p.age}
              </div>
              
              {/* Description */}
              <p className="text-[13px] text-text-body leading-relaxed">
                {p.desc}
              </p>

              {/* Decorative dots that appear on hover */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`w-1 h-1 rounded-full ${p.iconColor.replace('text', 'bg')}`} />
                <span className={`w-1 h-1 rounded-full ${p.iconColor.replace('text', 'bg')} opacity-60`} />
                <span className={`w-1 h-1 rounded-full ${p.iconColor.replace('text', 'bg')} opacity-30`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}