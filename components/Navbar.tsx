"use client";

import { useState } from "react";
import { Menu, X, Sprout } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Teachers", href: "#instructors" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Track active item

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    setOpen(false);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" onClick={() => setActiveItem("Home")}>
          <div className="relative w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white">
            <Sprout size={24} />
            <div className="absolute -inset-1 border-2 border-dashed border-orange-light rounded-full" />
          </div>
          <span className="font-[var(--font-display)] text-[26px] font-extrabold text-charcoal">
            Bright<span className="text-orange">Nest</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleItemClick(item.label)}
                className={`font-semibold text-[15px] transition-colors relative cursor-pointer ${
                  activeItem === item.label
                    ? "text-orange after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-orange after:rounded-sm"
                    : "text-charcoal hover:text-orange"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden lg:inline-flex items-center gap-2 bg-orange text-white px-7 py-3 rounded-full font-bold text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,162,97,0.4)] transition-all"
        >
          Enroll Now →
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl p-6 z-50">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => handleItemClick(item.label)}
                  className={`block font-semibold text-[15px] py-2 cursor-pointer ${
                    activeItem === item.label ? "text-orange" : "text-charcoal"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3 rounded-full font-bold text-[15px] mt-2"
              >
                Enroll Now →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}