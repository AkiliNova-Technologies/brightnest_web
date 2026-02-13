'use client'

import { GraduationCap, Palette, BookOpen, CalendarDays } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
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
    <section className="bg-cream pt-16 pb-0 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="lg:text-left text-center">
          <span className="inline-flex items-center gap-1.5 bg-orange-light text-orange-dark px-5 py-1.5 rounded-full font-bold text-sm mb-4">
            <GraduationCap size={16} />
            Preschool &amp; Child Care
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-[52px] leading-[1.15] text-charcoal mb-5">
            We Prepare Your <span className="text-orange">Child</span> For Life
          </h1>
          <p className="text-text-body text-[17px] leading-relaxed mb-8 max-w-[480px] lg:mx-0 mx-auto">
            At BrightNest, we create a safe, joyful environment where toddlers
            explore, learn, and grow at their own pace — guided by experienced
            early childhood educators.
          </p>
          <div className="flex gap-4 flex-wrap lg:justify-start justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3 rounded-full font-bold text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,162,97,0.4)] transition-all"
            >
              Enroll Your Child →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-teal text-teal px-7 py-3 rounded-full font-bold text-[15px] hover:bg-teal hover:text-white hover:-translate-y-0.5 transition-all"
            >
              <CalendarDays size={16} />
              Book a Visit
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative hidden lg:flex justify-center items-end">
          <div className="absolute w-[500px] h-[500px] bg-orange opacity-[0.12] -top-5 -right-10 z-0 animate-blob-float rounded-[60%_40%_55%_45%/50%_60%_40%_50%]" />

          <div className="relative z-2 w-[440px] h-[440px] rounded-full border-[6px] border-orange overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#FFD4A8] to-[#FFECD4] flex items-center justify-center text-7xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1769889670635-93a653ae2507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHRvZGRsZXIlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
                width={440}
                height={440}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Toddlers Image"
                priority={!isMobile}
                loading={isMobile ? "lazy" : "eager"}
              />
            </div>
          </div>

          {/* Float Card 1 */}
          <div className="absolute bottom-16 -left-5 z-3 bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-2.5 animate-float-card">
            <div className="w-11 h-11 rounded-xl bg-orange-light flex items-center justify-center text-orange">
              <Palette size={20} />
            </div>
            <div>
              <strong className="block text-sm">Creative Play</strong>
              <span className="text-xs text-text-body">
                Art &amp; Expression
              </span>
            </div>
          </div>

          {/* Float Card 2 */}
          <div className="absolute top-10 -right-2.5 z-3 bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-2.5 animate-float-card [animation-delay:1.5s]">
            <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center text-teal">
              <BookOpen size={20} />
            </div>
            <div>
              <strong className="block text-sm">Early Literacy</strong>
              <span className="text-xs text-text-body">
                Reading &amp; Language
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
