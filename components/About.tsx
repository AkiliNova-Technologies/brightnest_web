"use client";

import { Target, BookOpen, Heart, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-teal/5 blur-2xl" />
        <div className="absolute bottom-20 left-[5%] w-40 h-40 rounded-full bg-orange/5 blur-2xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <div className="relative max-w-[500px] mx-auto lg:mx-0 group">
          {/* Animated background circles */}
          <div
            className={`absolute -top-5 -left-5 w-20 h-20 bg-orange rounded-full opacity-15 transition-all duration-1000 ${isVisible ? "scale-100" : "scale-0"}`}
          />
          <div
            className={`absolute -bottom-5 -right-5 w-16 h-16 bg-teal rounded-full opacity-15 transition-all duration-1000 delay-300 ${isVisible ? "scale-100" : "scale-0"}`}
          />

          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="w-full h-[380px] bg-gradient-to-br from-[#B8E6E6] to-[#D4F0F0]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1769893575888-fe3de6bf8db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHRvZGRsZXIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
                width={500}
                height={480}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Toddlers playing and learning"
                priority={!isMobile}
                loading={isMobile ? "lazy" : "eager"}
              />
            </div>

            {/* Floating badge */}
            {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 transform transition-all duration-500 hover:scale-105">
              <Sparkles size={16} className="text-orange" />
              <span className="text-xs font-semibold text-charcoal">
                Since 2015
              </span>
            </div> */}
          </div>

          {/* Secondary Image */}
          <div
            className={`absolute -bottom-8 -right-5 w-[180px] h-[180px] rounded-[20px] overflow-hidden border-[5px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-700 delay-300 hover:scale-105 hover:rotate-2 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#FFE0B2] to-[#FFF3E0] relative group/image">
              <Image
                src="https://plus.unsplash.com/premium_photo-1723741259020-73df721bd230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRvZGRsZXIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
                width={180}
                height={180}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                alt="Toddler enjoying activities"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-orange/5 rounded-full" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-teal/5 rounded-full" />
        </div>

        {/* Content Section */}
        <div
          className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-orange-light/50 px-4 py-2 rounded-full">
            <span className="text-orange text-sm">✦</span>
            <span className="text-orange-dark font-bold text-sm uppercase tracking-wider">
              About Us
            </span>
            <span className="text-orange text-sm">✦</span>
          </div>

          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] leading-tight text-charcoal">
            Learn To Play, Converse{" "}
            <span className="text-teal relative inline-block">
              With Confidence
            </span>
          </h2>

          <p className="text-text-body text-base leading-relaxed max-w-[500px]">
            Our learning approach encourages toddlers to express themselves
            freely while developing early communication, social, and
            problem-solving skills in a caring environment.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            <div className="group flex gap-3 items-start">
              <div className="w-12 h-12 min-w-12 rounded-[14px] bg-orange-light flex items-center justify-center text-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Target size={22} />
              </div>
              <div>
                <h5 className="font-[var(--font-display)] text-[15px] mb-1 flex items-center gap-1">
                  Sport Program

                </h5>
                <p className="text-[13px] text-text-body leading-snug">
                  Physical development through fun activities and movement.
                </p>
              </div>
            </div>

            <div className="group flex gap-3 items-start">
              <div className="w-12 h-12 min-w-12 rounded-[14px] bg-teal-light flex items-center justify-center text-teal group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <BookOpen size={22} />
              </div>
              <div>
                <h5 className="font-[var(--font-display)] text-[15px] mb-1 flex items-center gap-1">
                  Easy to Learn

                </h5>
                <p className="text-[13px] text-text-body leading-snug">
                  Play-based curriculum designed for natural learning.
                </p>
              </div>
            </div>
          </div>

          {/* Teacher Profile */}
          <div className="flex items-center gap-3.5 pt-6 border-t border-gray-100 group">
            <div className="relative">
              <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center text-2xl">
                👩🏽
              </div>
              <Heart
                size={12}
                className="absolute -bottom-1 -right-1 text-orange fill-orange/20 group-hover:scale-125 transition-transform"
              />
            </div>
            <div>
              <strong className="block text-[15px] flex items-center gap-1">
                Ms. Grace Nanyonga
                <span className="text-xs text-teal font-normal">(M.Ed)</span>
              </strong>
              <span className="text-[13px] text-text-body flex items-center gap-1">
                Head of Early Learning
                <span className="w-1 h-1 rounded-full bg-teal" />
                <span className="text-[11px]">15+ years experience</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
