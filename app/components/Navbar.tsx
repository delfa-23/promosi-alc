"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#paket", label: "Paket" },
  { href: "#tutor", label: "Tutor" },
  { href: "#murid", label: "Murid" },
  { href: "#hero", label: "Tentang" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Image src="/logo.png" alt="ALC Logo" width={80} height={80} className="h-20 w-auto object-contain" priority />
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          {links.map((link) => <a key={link.href} href={link.href} className={`nav-link ${active === link.href ? "active" : ""}`}>{link.label}</a>)}
        </div>
        <a href="#" className="bg-[#00A0DF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">Daftar via WhatsApp</a>
      </div>
    </nav>
  );
}
