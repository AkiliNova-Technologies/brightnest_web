'use client'

import { Target, BookOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
  
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);


  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative max-w-[500px] mx-auto lg:mx-0">
          <div className="absolute -top-5 -left-5 w-20 h-20 bg-orange rounded-full opacity-15" />
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <div className="w-full h-[380px] bg-gradient-to-br from-[#B8E6E6] to-[#D4F0F0] flex items-center justify-center text-6xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1769893575888-fe3de6bf8db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHRvZGRsZXIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
                width={500}
                height={480}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Toddlers Image"
                priority={!isMobile}
                loading={isMobile ? "lazy" : "eager"}
              />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-5 w-[180px] h-[180px] rounded-[20px] overflow-hidden border-[5px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <div className="w-full h-full bg-gradient-to-br from-[#FFE0B2] to-[#FFF3E0] flex items-center justify-center text-5xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1723741259020-73df721bd230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRvZGRsZXIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
                width={180}
                height={180}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Toddlers Image"
                priority={!isMobile}
                loading={isMobile ? "lazy" : "eager"}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-orange font-bold text-sm uppercase tracking-wider mb-2.5">
            ✦ About Us
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] leading-tight mb-5 text-charcoal">
            Learn To Play, Converse{" "}
            <span className="text-teal">With Confidence</span>
          </h2>
          <p className="text-text-body text-base leading-relaxed mb-8">
            Our learning approach encourages toddlers to express themselves
            freely while developing early communication, social, and
            problem-solving skills in a caring environment.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="flex gap-3 items-start">
              <div className="w-12 h-12 min-w-12 rounded-[14px] bg-orange-light flex items-center justify-center text-orange">
                <Target size={22} />
              </div>
              <div>
                <h5 className="font-[var(--font-display)] text-[15px] mb-1">
                  Sport Program
                </h5>
                <p className="text-[13px] text-text-body leading-snug">
                  Physical development through fun activities and movement.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-12 h-12 min-w-12 rounded-[14px] bg-teal-light flex items-center justify-center text-teal">
                <BookOpen size={22} />
              </div>
              <div>
                <h5 className="font-[var(--font-display)] text-[15px] mb-1">
                  Easy to Learn
                </h5>
                <p className="text-[13px] text-text-body leading-snug">
                  Play-based curriculum designed for natural learning.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-5 border-t border-gray-100">
            <div className="w-[50px] h-[50px] rounded-full bg-teal-light flex items-center justify-center text-2xl">
              👩🏽
            </div>
            <div>
              <strong className="block text-[15px]">Ms. Grace Nanyonga</strong>
              <span className="text-[13px] text-text-body">
                Head of Early Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
