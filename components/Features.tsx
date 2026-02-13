"use client";

import { useRef, useEffect, useState } from "react";
import { ShieldCheck, GraduationCap, Monitor, Sun } from "lucide-react";

const features = [
  {
    Icon: ShieldCheck,
    title: "Safe & Nurturing",
    desc: "Carefully designed classrooms with child safety at the core of everything we do.",
    bg: "bg-orange-light",
    iconColor: "text-orange",
    border: "border-orange",
  },
  {
    Icon: GraduationCap,
    title: "Qualified Educators",
    desc: "Trained teachers who understand toddler development and early learning needs.",
    bg: "bg-teal-light",
    iconColor: "text-teal",
    border: "border-teal",
  },
  {
    Icon: Monitor,
    title: "E-Learning Media",
    desc: "Interactive digital tools that support age-appropriate learning and exploration.",
    bg: "bg-purple-100",
    iconColor: "text-purple-500",
    border: "border-purple-400",
  },
  {
    Icon: Sun,
    title: "Full Day Programs",
    desc: "Balanced routines for learning, rest, and play from morning until evening.",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    border: "border-amber-400",
  },
];

export default function Features() {
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
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className={`text-center px-6 py-9 rounded-[20px] transition-all duration-500 hover:bg-cream hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative mx-auto mb-5 w-[72px] h-[72px]">
              <div className={`w-full h-full rounded-full ${f.bg} flex items-center justify-center ${f.iconColor}`}>
                <f.Icon size={32} />
              </div>
              <div className={`absolute -inset-1.5 rounded-full border-2 border-dashed ${f.border} opacity-40`} />
            </div>
            <h4 className="font-[var(--font-display)] text-lg mb-2.5 text-charcoal">{f.title}</h4>
            <p className="text-sm text-text-body leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
