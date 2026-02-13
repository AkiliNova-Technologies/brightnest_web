"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BrightNest gave my son confidence I didn't expect so early. He loves going to school every morning and comes home telling us everything he learned.",
    name: "Sarah M.",
    role: "Parent",
    initial: "S",
    avatarBg: "bg-orange",
  },
  {
    quote: "The teachers communicate daily, and that means everything. I always know how my daughter is doing, what she's learning, and how she's growing.",
    name: "Daniel K.",
    role: "Parent",
    initial: "D",
    avatarBg: "bg-teal",
  },
  {
    quote: "We toured five schools before choosing BrightNest. The warmth and professionalism stood out immediately. Our daughter has been thriving ever since.",
    name: "Amina W.",
    role: "Parent",
    initial: "A",
    avatarBg: "bg-blue-dark",
  },
];

export default function Testimonials() {
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
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="inline-block text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
          ✦ Testimonials
        </span>
        <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
          What Parents Say
        </h2>
        <p className="max-w-[600px] mx-auto text-text-body text-base mb-12">
          Hear from families who trust BrightNest with their children&apos;s early learning journey.
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-cream rounded-3xl px-7 py-9 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote size={32} className="text-orange opacity-40 mb-3" />
              <div className="flex gap-1 mb-3.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-accent text-yellow-accent" />
                ))}
              </div>
              <blockquote className="text-[15px] text-text-body leading-relaxed italic mb-5">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center text-xl font-bold text-white`}>
                  {t.initial}
                </div>
                <div>
                  <strong className="block text-[15px]">{t.name}</strong>
                  <span className="text-[13px] text-text-body">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
