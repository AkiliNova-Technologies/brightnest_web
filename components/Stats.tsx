"use client";

import { useRef, useEffect, useState } from "react";
import { Send } from "lucide-react";

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Happy Families" },
  { value: 25, suffix: "+", label: "Certified Educators" },
  { value: 98, suffix: "%", label: "Parent Satisfaction" },
];

function AnimatedCounter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
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

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-teal py-[50px] relative overflow-hidden">
      <div className="absolute w-[200px] h-[200px] bg-white/[0.06] rounded-full -top-[60px] -left-[60px]" />
      <div className="absolute w-[160px] h-[160px] bg-white/[0.06] rounded-full -bottom-10 right-24" />
      <div className="absolute right-20 top-1/2 -translate-y-1/2 -rotate-[15deg] text-white/20">
        <Send size={48} />
      </div>

      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-1"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`transition-all duration-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <h3 className="font-[var(--font-display)] text-4xl md:text-[44px] text-white mb-1.5">
              <AnimatedCounter target={s.value} suffix={s.suffix} start={visible} />
            </h3>
            <p className="text-white/85 text-sm font-semibold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
