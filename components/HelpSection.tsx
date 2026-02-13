"use client";

import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const checklist = [
  "Individual learning attention for every child",
  "Age-appropriate, play-based activities",
  "Clean, secure, and joyful facilities",
  "Daily parent communication and feedback",
  "Emotional intelligence and social skills focus",
];

export default function HelpSection() {
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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <div className="w-full h-[420px] bg-gradient-to-br from-[#FFD4A8] to-[#E6F5F5] flex items-center justify-center text-7xl">
              <Image
                src="https://images.pexels.com/photos/8422258/pexels-photo-8422258.jpeg"
                width={300}
                height={200}
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
            ✦ Why Choose Us
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-[40px] leading-tight mb-5 text-charcoal">
            How May We Help Your Child?
          </h2>
          <p className="text-text-body text-base leading-relaxed mb-8">
            We go beyond childcare to create an environment where your child
            develops the confidence and skills to thrive.
          </p>

          <ul className="flex flex-col gap-4 mb-8">
            {checklist.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3.5 font-semibold text-[15px]"
              >
                <span className="w-8 h-8 min-w-8 rounded-full bg-teal-light text-teal flex items-center justify-center">
                  <CircleCheckBig size={18} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3 rounded-full font-bold text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,162,97,0.4)] transition-all"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
