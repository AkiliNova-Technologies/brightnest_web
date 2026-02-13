"use client";

import { useRef, useEffect, useState } from "react";
import { ShieldCheck, GraduationCap, Monitor, Sun, Sparkles, HeartHandshake } from "lucide-react";

const features = [
  {
    Icon: ShieldCheck,
    title: "Safe & Nurturing",
    desc: "Carefully designed classrooms with child safety at the core of everything we do.",
    bg: "bg-orange-light",
    iconColor: "text-orange",
    border: "border-orange",
    accent: "after:bg-orange/10"
  },
  {
    Icon: GraduationCap,
    title: "Qualified Educators",
    desc: "Trained teachers who understand toddler development and early learning needs.",
    bg: "bg-teal-light",
    iconColor: "text-teal",
    border: "border-teal",
    accent: "after:bg-teal/10"
  },
  {
    Icon: Monitor,
    title: "E-Learning Media",
    desc: "Interactive digital tools that support age-appropriate learning and exploration.",
    bg: "bg-purple-100",
    iconColor: "text-purple-500",
    border: "border-purple-400",
    accent: "after:bg-purple-500/10"
  },
  {
    Icon: Sun,
    title: "Full Day Programs",
    desc: "Balanced routines for learning, rest, and play from morning until evening.",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    border: "border-amber-400",
    accent: "after:bg-amber-500/10"
  },
];

export default function Features() {
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
      {/* Subtle background pattern - barely visible */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-teal blur-3xl" />
      </div>

      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 relative z-10"
      >

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative text-center px-6 py-9 rounded-[20px] transition-all duration-700 hover:bg-cream ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ 
                transitionDelay: `${i * 150}ms`,
                transitionProperty: "opacity, transform, background-color"
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-orange/0 group-hover:border-orange/20 rounded-tl-[20px] transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-orange/0 group-hover:border-orange/20 rounded-br-[20px] transition-all duration-500" />
              
              {/* Icon container with enhanced animation */}
              <div className="relative mx-auto mb-5 w-[72px] h-[72px]">
                <div 
                  className={`w-full h-full rounded-full ${f.bg} flex items-center justify-center ${f.iconColor} transition-all duration-500 ${
                    hoveredIndex === i ? "scale-110 rotate-3" : ""
                  }`}
                >
                  <f.Icon 
                    size={32} 
                    className={`transition-all duration-500 ${
                      hoveredIndex === i ? "scale-110" : ""
                    }`}
                  />
                </div>
                
                {/* Animated ring */}
                <div 
                  className={`absolute -inset-1.5 rounded-full border-2 border-dashed ${f.border} transition-all duration-700 ${
                    hoveredIndex === i ? "rotate-180 scale-110 opacity-60" : "opacity-40"
                  }`} 
                />
                
                {/* Tiny sparkle that appears on hover */}
                {hoveredIndex === i && (
                  <Sparkles 
                    size={14} 
                    className="absolute -top-1 -right-1 text-orange animate-ping-soft" 
                  />
                )}
              </div>
              
              {/* Title with subtle underline on hover */}
              <h4 className="font-[var(--font-display)] text-lg mb-2.5 text-charcoal relative inline-block">
                {f.title}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 ${f.bg.replace('light', '')} rounded-full transition-all duration-300 group-hover:w-8`} />
              </h4>
              
              <p className="text-sm text-text-body leading-relaxed">
                {f.desc}
              </p>

              {/* Tiny floating elements that appear on hover */}
              <div className={`absolute -bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-orange/30 animate-pulse" />
                  <span className="w-1 h-1 rounded-full bg-teal/30 animate-pulse [animation-delay:0.2s]" />
                  <span className="w-1 h-1 rounded-full bg-purple-400/30 animate-pulse [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}