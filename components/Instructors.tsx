"use client";

import { useRef, useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const instructors = [
  {
    name: "Ms. Grace Nanyonga",
    role: "Early Childhood Educator",
    quote: "I believe every child learns best when they feel safe, loved, and heard.",
    emoji: "👩🏽‍🏫",
    gradient: "from-[#FFECD4] to-[#FFD4A8]",
    border: "border-orange",
  },
  {
    name: "Mr. Henry Mukasa",
    role: "Creative Arts Teacher",
    quote: "Art unlocks a child's imagination and gives them a voice before they find their words.",
    emoji: "👨🏽‍🏫",
    gradient: "from-[#D4F0F0] to-[#B8E6E6]",
    border: "border-teal",
  },
  {
    name: "Ms. Maria Sempala",
    role: "Language Development Lead",
    quote: "When children feel confident speaking, they feel confident in everything else.",
    emoji: "👩🏻‍🏫",
    gradient: "from-[#FFF8E1] to-[#FFE082]",
    border: "border-yellow-accent",
  },
];

const socials = [Facebook, Twitter, Linkedin];

export default function Instructors() {
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
    <section id="instructors" className="py-20 bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="inline-block text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
          ✦ Our Teachers
        </span>
        <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
          Our Expert Instructors
        </h2>
        <p className="max-w-[600px] mx-auto text-text-body text-base mb-12">
          Passionate educators who believe every child learns best when they feel safe, loved, and heard.
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-9 max-w-[960px] mx-auto">
          {instructors.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl px-7 pt-10 pb-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-[120px] h-[120px] rounded-full mx-auto mb-5 overflow-hidden border-4 ${t.border}`}>
                <div className={`w-full h-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-5xl`}>
                  {t.emoji}
                </div>
              </div>
              <h4 className="font-[var(--font-display)] text-xl mb-1">{t.name}</h4>
              <div className="text-sm text-orange font-semibold mb-3.5">{t.role}</div>
              <p className="text-sm text-text-body italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex justify-center gap-2.5">
                {socials.map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-orange hover:text-white transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
