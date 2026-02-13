import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal to-teal-dark text-center relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-white/[0.06] rounded-full -top-[100px] -left-[50px]" />
      <div className="absolute w-[250px] h-[250px] bg-white/[0.05] rounded-full -bottom-20 -right-[30px]" />

      <div className="mx-auto max-w-[1200px] px-6 relative z-1">
        <h2 className="font-[var(--font-display)] text-3xl md:text-[44px] text-white mb-4">
          Give Your Child A<br />Bright Beginning
        </h2>
        <p className="text-white/90 text-[17px] max-w-[520px] mx-auto leading-relaxed mb-9">
          Book a tour or speak to our educators today. See why over 1,200
          families trust BrightNest with their children&apos;s future.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="bg-white text-teal-dark px-8 py-3.5 rounded-full font-bold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all"
          >
            Book a Visit →
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-8 py-3 rounded-full font-bold text-[15px] hover:bg-white/15 hover:border-white transition-all"
          >
            <Phone size={16} />
            +256 700 123 456
          </a>
        </div>
      </div>
    </section>
  );
}
