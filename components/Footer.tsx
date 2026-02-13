import { Sprout, Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = ["About Us", "Our Programs", "Our Teachers", "Gallery", "Contact Us"];
const programLinks = ["Language Development", "Discovery Class", "Creative Arts", "Preschool Readiness", "Holiday Camps"];

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white pt-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white">
                <Sprout size={24} />
              </div>
              <span className="font-[var(--font-display)] text-[26px] font-extrabold text-white">
                Bright<span className="text-orange">Nest</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Nurturing curiosity, building confidence. A safe start for curious little minds since 2017.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-[38px] h-[38px] rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-[var(--font-display)] text-lg mb-5">Quick Links</h5>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h5 className="font-[var(--font-display)] text-lg mb-5">Programs</h5>
            <ul className="flex flex-col gap-3">
              {programLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-[var(--font-display)] text-lg mb-5">Get In Touch</h5>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
                <MapPin size={16} className="text-orange mt-0.5 shrink-0" />
                12 Kampala Road, Ntinda, Kampala, Uganda
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
                <Phone size={16} className="text-orange mt-0.5 shrink-0" />
                +256 700 123 456
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
                <Mail size={16} className="text-orange mt-0.5 shrink-0" />
                hello@brightnest.academy
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
                <Clock size={16} className="text-orange mt-0.5 shrink-0" />
                <span>Mon – Fri: 7:00 AM – 6:00 PM<br />Sat: 8:00 AM – 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center text-[13px] text-white/50 gap-2">
          <span>© 2026 BrightNest Early Learning Academy. All rights reserved by AkiliNova Technologies.</span>
          <span>
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            {" · "}
            <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
