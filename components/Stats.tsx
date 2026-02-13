"use client";

import { useRef, useEffect, useState } from "react";
import { Send, Sparkles } from "lucide-react";

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience", animal: "🦒" },
  { value: 1200, suffix: "+", label: "Happy Families", animal: "🐘" },
  { value: 25, suffix: "+", label: "Certified Educators", animal: "🦁" },
  { value: 98, suffix: "%", label: "Parent Satisfaction", animal: "🐨" },
];

function AnimatedCounter({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 40);
    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-teal py-[50px] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute w-[200px] h-[200px] bg-white/[0.06] rounded-full -top-[60px] -left-[60px] animate-pulse-slow" />
      <div className="absolute w-[160px] h-[160px] bg-white/[0.06] rounded-full -bottom-10 right-24 animate-pulse-slow [animation-delay:1s]" />

      {/* Send icon with animation */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 -rotate-[15deg] text-white/20 group">
        <Send size={48} className="animate-float-slow" />
        <Sparkles
          size={20}
          className="absolute -top-2 -right-2 text-white/40 animate-ping-soft"
        />
      </div>

      {/* Paper plane trail */}
      <div className="absolute right-32 top-1/2 -translate-y-1/2 flex gap-1">
        <span className="w-1 h-1 rounded-full bg-white/20 animate-ping-soft" />
        <span className="w-1 h-1 rounded-full bg-white/20 animate-ping-soft [animation-delay:0.2s]" />
        <span className="w-1 h-1 rounded-full bg-white/20 animate-ping-soft [animation-delay:0.4s]" />
      </div>

      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`group relative transition-all duration-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Decorative elements */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-px bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="font-[var(--font-display)] text-4xl md:text-[44px] text-white mb-1.5 relative">
              <AnimatedCounter
                target={s.value}
                suffix={s.suffix}
                start={visible}
              />
            </h3>

            <p className="text-white/85 text-sm font-semibold relative inline-block">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
