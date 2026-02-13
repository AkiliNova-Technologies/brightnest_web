"use client";

import { useRef, useEffect, useState } from "react";
import { MessageCircle, Microscope, Palette, GraduationCap } from "lucide-react";

const programs = [
  {
    Icon: MessageCircle,
    title: "Language Development",
    age: "1.5 – 3 years",
    desc: "Speech confidence and early vocabulary building through stories, songs, and conversations.",
    bg: "bg-orange-light",
    iconColor: "text-orange",
  },
  {
    Icon: Microscope,
    title: "Discovery Class",
    age: "3 – 5 years",
    desc: "Early literacy, numeracy, and exploration through hands-on activities and guided play.",
    bg: "bg-teal-light",
    iconColor: "text-teal",
  },
  {
    Icon: Palette,
    title: "Creative Arts & Play",
    age: "2 – 5 years",
    desc: "Drawing, music, and storytelling to nurture imagination and creative expression.",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    Icon: GraduationCap,
    title: "Preschool Readiness",
    age: "4 – 6 years",
    desc: "Preparing confident, curious learners ready for their primary school journey.",
    bg: "bg-red-50",
    iconColor: "text-red-soft",
  },
];

export default function Programs() {
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
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="inline-block text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
          ✦ Our Programs
        </span>
        <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
          We Meet Kids At Their Level<br />Regardless Of Their Age
        </h2>
        <p className="max-w-[600px] mx-auto text-text-body text-base leading-relaxed mb-12">
          Each program is thoughtfully designed to match your child&apos;s
          developmental stage and natural curiosity.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`${p.bg} rounded-3xl px-6 pt-10 pb-8 text-center transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-white flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <p.Icon size={36} className={p.iconColor} />
              </div>
              <h4 className="font-[var(--font-display)] text-lg mb-1.5">{p.title}</h4>
              <div className="text-[13px] text-text-body font-semibold mb-3">{p.age}</div>
              <p className="text-[13px] text-text-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
