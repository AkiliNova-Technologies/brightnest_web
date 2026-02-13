"use client";

import { Phone, Heart, Sparkles, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-teal to-teal-dark text-center relative overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute w-[300px] h-[300px] bg-white/[0.06] rounded-full -top-[100px] -left-[50px] animate-pulse-slow" />
      <div className="absolute w-[250px] h-[250px] bg-white/[0.05] rounded-full -bottom-20 -right-[30px] animate-pulse-slow [animation-delay:1s]" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] text-white/5 text-6xl animate-float-slow">
          ✨
        </div>
        <div className="absolute bottom-10 right-[15%] text-white/5 text-6xl animate-float-slow [animation-delay:2s]">
          ⭐
        </div>
        <div className="absolute top-20 right-[20%] text-white/5 text-4xl animate-float-slow [animation-delay:4s]">
          🌸
        </div>
      </div>

      {/* Paper planes flying across */}
      <div className="absolute top-1/4 -left-20 text-white/10 rotate-12 animate-fly-across">
        <Send size={40} />
      </div>
      <div className="absolute bottom-1/4 -right-20 text-white/10 -rotate-12 animate-fly-across [animation-delay:3s]">
        <Send size={32} />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        {/* Main content with entrance animation */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Title with animated sparkles */}
          <h2 className="font-[var(--font-display)] text-3xl md:text-[44px] text-white mb-4 relative">
            <span className="relative inline-block">Give Your Child A</span>
            <br />
            Bright Beginning
            <Heart
              size={24}
              className="absolute -bottom-2 right-1/4 text-white/30 animate-heartbeat"
            />
          </h2>

          {/* Description with animated dots */}
          <p className="text-white/90 text-[17px] max-w-[520px] mx-auto leading-relaxed mb-9 relative">
            Book a tour or speak to our educators today. See why over 1,200
            families trust BrightNest with their children&apos;s future.
          </p>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="group relative bg-white text-teal-dark px-8 py-3.5 rounded-full font-bold text-[15px] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Book a Visit
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </a>

            <a
              href="#"
              className="group relative inline-flex items-center gap-2 border-2 border-white/60 text-white px-8 py-3 rounded-full font-bold text-[15px] hover:bg-white/15 hover:border-white hover:-translate-y-1 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Phone
                size={16}
                className="relative transition-transform group-hover:rotate-12 group-hover:scale-110"
              />
              <span className="relative">+256 700 123 456</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
