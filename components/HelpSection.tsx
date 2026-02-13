"use client";

import { CircleCheckBig, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const checklist = [
  "Individual learning attention for every child",
  "Age-appropriate, play-based activities",
  "Clean, secure, and joyful facilities",
  "Daily parent communication and feedback",
  "Emotional intelligence and social skills focus",
];

export default function HelpSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-[5%] w-80 h-80 rounded-full bg-orange blur-3xl" />
        <div className="absolute bottom-20 right-[5%] w-80 h-80 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          {/* Decorative circles */}
          <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-orange/10 animate-pulse-slow" />
          <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-teal/10 animate-pulse-slow [animation-delay:1s]" />
          
          {/* Main image */}
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 via-transparent to-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="w-full h-[420px] bg-gradient-to-br from-[#FFD4A8] to-[#E6F5F5]">
              <Image
                src="https://images.pexels.com/photos/8422258/pexels-photo-8422258.jpeg"
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Happy toddlers learning and playing"
                priority={!isMobile}
                loading={isMobile ? "lazy" : "eager"}
              />
            </div>

          </div>
        </div>

        {/* Content Section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          {/* Header */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft" />
              ✦ Why Choose Us
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-soft [animation-delay:0.3s]" />
            </span>
            
            <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] leading-tight text-charcoal">
              How May We Help Your Child?
            </h2>
          </div>

          <p className="text-text-body text-base leading-relaxed mb-8 relative">
            We go beyond childcare to create an environment where your child
            develops the confidence and skills to thrive.
          </p>

          {/* Checklist with animations */}
          <ul className="flex flex-col gap-4 mb-8">
            {checklist.map((item, i) => (
              <li
                key={i}
                className="group relative flex items-center gap-3.5 font-semibold text-[15px] transition-all duration-300 hover:translate-x-1"
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Icon with animation */}
                <span className="relative">
                  <span className={`w-8 h-8 min-w-8 rounded-full bg-teal-light text-teal flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white`}>
                    <CircleCheckBig size={18} className="transition-transform duration-300 group-hover:rotate-3" />
                  </span>
                  
                  {/* Sparkle effect on hover */}
                  {hoveredItem === i && (
                    <Sparkles 
                      size={12} 
                      className="absolute -top-1 -right-1 text-orange animate-sparkle" 
                    />
                  )}
                </span>
                
                {/* Text with underline effect */}
                <span className="relative">
                  {item}
                </span>

                {/* Tiny dot indicator */}
                <span className={`absolute -left-2 w-1 h-1 rounded-full bg-teal opacity-0 group-hover:opacity-100 transition-opacity`} />
              </li>
            ))}
          </ul>

          {/* CTA Button with enhanced animation */}
          <div className="relative inline-block group/btn">
            <a
              href="#"
              className="relative inline-flex items-center gap-2 bg-orange text-white px-7 py-3 rounded-full font-bold text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,162,97,0.4)] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              <span>Learn More</span>
              <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-2 -right-2 flex gap-1 opacity-0 group-hover/btn:opacity-100 transition-opacity">
              <span className="w-1 h-1 rounded-full bg-orange" />
              <span className="w-1 h-1 rounded-full bg-orange/60" />
              <span className="w-1 h-1 rounded-full bg-orange/30" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange/5 via-teal/5 to-orange/5" />
    </section>
  );
}