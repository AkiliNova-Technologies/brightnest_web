"use client";

import { useRef, useEffect, useState } from "react";
import { TrendingUp, Puzzle, HeartPulse, Award, Sparkles } from "lucide-react";

const services = [
  {
    Icon: TrendingUp,
    title: "Teacher Training & Progress",
    desc: "Educators with research-backed methods that track your child's development milestones.",
    accent: "bg-orange",
    iconBg: "bg-orange-light",
    iconColor: "text-orange",
    border: "border-orange/20",
    animal: "🦒",
  },
  {
    Icon: Puzzle,
    title: "Advanced Placement Courses",
    desc: "Structured curricula designed to build a strong academic and social foundation.",
    accent: "bg-teal",
    iconBg: "bg-teal-light",
    iconColor: "text-teal",
    border: "border-teal/20",
    animal: "🐘",
  },
  {
    Icon: HeartPulse,
    title: "Nursing Selection 24/7",
    desc: "Dedicated childcare nurses ensuring health and safety around the clock.",
    accent: "bg-yellow-accent",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-600/20",
    animal: "🦁",
  },
  {
    Icon: Award,
    title: "Self-Contained Gifted Program",
    desc: "Specialized attention for children showing advanced developmental readiness.",
    accent: "bg-red-soft",
    iconBg: "bg-red-50",
    iconColor: "text-red-soft",
    border: "border-red-soft/20",
    animal: "🐨",
  },
];

export default function Playschool() {
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
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background animals - full bodied and playful */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-[5%] top-10 text-7xl opacity-10 animate-float-slow">🦒</div>
        <div className="absolute right-[8%] bottom-20 text-7xl opacity-10 animate-float-slow [animation-delay:1s]">🐘</div>
        <div className="absolute left-[15%] bottom-40 text-6xl opacity-10 animate-float-slow [animation-delay:2s]">🦁</div>
        <div className="absolute right-[12%] top-40 text-6xl opacity-10 animate-float-slow [animation-delay:3s]">🐨</div>
        <div className="absolute left-[20%] top-60 text-7xl opacity-10 animate-float-slow [animation-delay:4s]">🦓</div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center relative z-10">
        {/* Header with animal friends */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-3 text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
            <span className="text-base">🦒</span>
            ✦ Our Services ✦
            <span className="text-base">🐘</span>
          </span>
          
          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
            The Best Preschool For Your Child
          </h2>
          
          <p className="max-w-[600px] mx-auto text-text-body text-base leading-relaxed mb-12">
            We provide individual learning attention, age-appropriate activities,
            clean and secure facilities, and daily parent feedback.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-[20px] px-6 py-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-[20px] ${s.accent}`} />
              
              
              {/* Decorative corner borders */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange/0 group-hover:border-orange/20 rounded-tl-[20px] transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange/0 group-hover:border-orange/20 rounded-br-[20px] transition-all duration-500" />
              
              {/* Icon with enhanced animation */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${s.iconBg} flex items-center justify-center ${s.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <s.Icon size={28} />
                </div>
                
                {/* Dashed ring */}
                <div className={`absolute inset-0 rounded-full border-2 border-dashed ${s.border} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180`} />
                
                {/* Small accent dot */}
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              {/* Title with hover underline */}
              <h4 className="font-[var(--font-display)] text-[17px] mb-2 relative inline-block">
                {s.title}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px ${s.accent} transition-all duration-300 group-hover:w-8`} />
              </h4>
              
              {/* Description */}
              <p className="text-[13px] text-text-body leading-relaxed">
                {s.desc}
              </p>

              {/* Tiny animal footprints that appear on hover */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                <span>🐾</span>
                <span>🐾</span>
                <span>🐾</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}