"use client";

import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Half Day",
    price: "$55",
    desc: "Morning or afternoon sessions",
    features: ["4 hours daily", "Snacks included", "Play-based learning", "Weekly progress notes"],
    featured: false,
  },
  {
    name: "Full Day",
    price: "$95",
    desc: "Complete daily program",
    features: ["8 hours daily", "Meals & snacks", "All programs access", "Daily parent updates"],
    featured: true,
  },
  {
    name: "Premium",
    price: "$125",
    desc: "Extended care + extras",
    features: ["10 hours daily", "All meals included", "1-on-1 sessions", "Transport available"],
    featured: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" className="py-20 bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="inline-block text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
          ✦ Our Plans
        </span>
        <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
          Select A Plan According To<br />Your Requirements
        </h2>
        <p className="max-w-[600px] mx-auto text-text-body text-base mb-12">
          Flexible enrollment options designed for your family&apos;s needs and schedule.
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl px-8 py-10 text-center transition-all duration-500 relative overflow-hidden ${
                plan.featured ? "border-[3px] border-orange md:scale-[1.04]" : ""
              } hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {plan.featured && (
                <div className="absolute top-4 -right-8 bg-orange text-white px-10 py-1 text-xs font-bold rotate-45">
                  Popular
                </div>
              )}
              <h4 className="font-[var(--font-display)] text-xl mb-2">{plan.name}</h4>
              <div className="font-[var(--font-display)] text-5xl font-extrabold text-orange mb-1">
                {plan.price}
                <span className="text-base text-text-body font-normal font-[var(--font-body)]">/month</span>
              </div>
              <div className="text-sm text-text-body mb-6">{plan.desc}</div>

              <ul className="text-left mb-7">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="py-2 text-sm text-text-body flex items-center gap-2.5 border-b border-gray-100 last:border-b-0"
                  >
                    <Check size={16} className="text-green-soft" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full font-bold text-[15px] transition-all border-2 border-orange cursor-pointer ${
                  plan.featured
                    ? "bg-orange text-white hover:bg-orange-dark hover:border-orange-dark"
                    : "bg-transparent text-orange hover:bg-orange hover:text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
