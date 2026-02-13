"use client";

import { useRef, useEffect, useState } from "react";
import { Check, Star, Sparkles, Heart } from "lucide-react";

const plans = [
  {
    name: "Half Day",
    price: "$55",
    desc: "Morning or afternoon sessions",
    features: [
      "4 hours daily",
      "Snacks included",
      "Play-based learning",
      "Weekly progress notes",
    ],
    featured: false,

    color: "text-teal",
    bg: "bg-teal-light",
  },
  {
    name: "Full Day",
    price: "$95",
    desc: "Complete daily program",
    features: [
      "8 hours daily",
      "Meals & snacks",
      "All programs access",
      "Daily parent updates",
    ],
    featured: true,

    color: "text-orange",
    bg: "bg-orange-light",
  },
  {
    name: "Premium",
    price: "$125",
    desc: "Extended care + extras",
    features: [
      "10 hours daily",
      "All meals included",
      "1-on-1 sessions",
      "Transport available",
    ],
    featured: false,

    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center relative z-10">
        {/* Header with animations */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft" />
            ✦ Our Plans ✦
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft [animation-delay:0.3s]" />
          </span>

          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] mb-4 text-charcoal">
            Select A Plan According To
            <br />
            Your Requirements
          </h2>

          <p className="max-w-[600px] mx-auto text-text-body text-base mb-12 relative">
            <span className="inline-block w-8 h-px bg-orange/30 align-middle mr-2" />
            Flexible enrollment options designed for your family&apos;s needs
            and schedule.
            <span className="inline-block w-8 h-px bg-teal/30 align-middle ml-2" />
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-[960px] mx-auto"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl px-8 py-10 text-center transition-all duration-500 overflow-hidden ${
                plan.featured
                  ? "border-[3px] border-orange md:scale-[1.04] shadow-[0_16px_40px_rgba(244,162,97,0.12)]"
                  : "border border-transparent"
              } hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />

              {/* Popular badge with animation */}
              {plan.featured && (
                <div className="absolute top-4 -right-8 bg-orange text-white px-10 py-1 text-xs font-bold rotate-45 animate-pulse-soft">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="fill-white" />
                    Popular
                  </span>
                </div>
              )}

              {/* Plan name with hover effect */}
              <h4 className="font-[var(--font-display)] text-xl mb-2 relative inline-block">
                {plan.name}
              </h4>

              {/* Price with animation */}
              <div className="relative mb-1">
                <div
                  className={`font-[var(--font-display)] text-5xl font-extrabold ${plan.color} transition-all duration-300 `}
                >
                  {plan.price}
                  <span className="text-base text-text-body font-normal font-[var(--font-body)]">
                    /month
                  </span>
                </div>
              </div>

              <div className="text-sm text-text-body mb-6 relative">
                {plan.desc}
              </div>

              {/* Features list */}
              <ul className="text-left mb-7 space-y-2">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="group/item py-2 text-sm text-text-body flex items-center gap-2.5 border-b border-gray-100 last:border-b-0 transition-all duration-300"
                    style={{ transitionDelay: `${j * 50}ms` }}
                  >
                    <span className="relative">
                      <Check
                        size={16}
                        className={`text-green-600 transition-all duration-300 group-hover/item:text-orange`}
                      />
                    </span>
                    <span className="relative">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button with enhanced animation */}
              <button
                className={`group/btn relative w-full py-3.5 rounded-full font-bold text-[15px] transition-all overflow-hidden cursor-pointer ${
                  plan.featured
                    ? "bg-orange text-white hover:bg-orange-dark"
                    : "bg-transparent text-orange border-2 border-orange hover:bg-orange hover:text-white"
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  Choose Plan
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>

              {/* Floating dots at bottom */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span
                  className={`w-1 h-1 rounded-full ${plan.color.replace("text", "bg")}`}
                />
                <span
                  className={`w-1 h-1 rounded-full ${plan.color.replace("text", "bg")} opacity-60`}
                />
                <span
                  className={`w-1 h-1 rounded-full ${plan.color.replace("text", "bg")} opacity-30`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
