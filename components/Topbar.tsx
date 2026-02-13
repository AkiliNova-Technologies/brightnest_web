import { MapPin, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-blue-dark text-white text-[13px] py-2">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1.5 opacity-90">
            <MapPin size={14} />
            12 Kampala Road, Ntinda, Kampala
          </span>
          <span className="hidden sm:flex items-center gap-1.5 opacity-90">
            <Mail size={14} />
            hello@brightnest.academy
          </span>
        </div>
        <div className="flex gap-3">
          {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
