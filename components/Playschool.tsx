"use client";

import { useRef, useEffect, useState } from "react";
import { TrendingUp, Puzzle, HeartPulse, Award } from "lucide-react";

const services = [
  {
    Icon: TrendingUp,
    title: "Teacher Training & Progress",
    desc: "Educators with research-backed methods that track your child's development milestones.",
    accent: "bg-orange",
    iconBg: "bg-orange-light",
    iconColor: "text-orange",
  },
  {
    Icon: Puzzle,
    title: "Advanced Placement Courses",
    desc: "Structured curricula designed to build a strong academic and social foundation.",
    accent: "bg-teal",
    iconBg: "bg-teal-light",
    iconColor: "text-teal",
  },
  {
    Icon: HeartPulse,
    title: "Nursing Selection 24/7",
    desc: "Dedicated childcare nurses ensuring health and safety around the clock.",
    accent: "bg-yellow-accent",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    Icon: Award,
    title: "Self-Contained Gifted Program",
    desc: "Specialized attention for children showing advanced developmental readiness.",
    accent: "bg-red-soft",
    iconBg: "bg-red-50",
    iconColor: "text-red-soft",
  },
];

export default function Playschool() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-cream relative">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="absolute right-10 top-5 text-[120px] opacity-[0.08] -rotate-[10deg] hidden lg:block select-none">
          🦒
        </div>

        <span className="inline-block text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
          ✦ Our Services
        </span>
        <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
          The Best Preschool For Your Child
        </h2>
        <p className="max-w-[600px] mx-auto text-text-body text-base leading-relaxed mb-12">
          We provide individual learning attention, age-appropriate activities,
          clean and secure facilities, and daily parent feedback.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-white rounded-[20px] px-6 py-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-[20px] ${s.accent}`} />
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${s.iconBg} flex items-center justify-center ${s.iconColor}`}>
                <s.Icon size={28} />
              </div>
              <h4 className="font-[var(--font-display)] text-[17px] mb-2">{s.title}</h4>
              <p className="text-[13px] text-text-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
