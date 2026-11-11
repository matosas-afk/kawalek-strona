"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#oferty-specjalne", label: "Oferty" },
  { href: "#menu", label: "Menu" },
  { href: "#torty", label: "Torty" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#ECE6DC] shadow-xs">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between"
        aria-label="Nawigacja główna"
      >
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Kawiarnia Kawałek — logo"
            width={52}
            height={52}
            className="rounded-full object-contain drop-shadow-xs"
            priority
          />
          <div className="flex flex-col">
            <span className="text-[#1C1917] font-serif text-2xl font-semibold tracking-wider">
              Kawałek
            </span>
            <span className="text-[#8C6239] text-[10px] tracking-[0.22em] uppercase font-medium -mt-1">
              Kawiarnia i Cukiernia
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[#57534E] hover:text-[#1C1917] transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA phone */}
        <a
          href="tel:509708434"
          className="hidden md:inline-flex items-center gap-2 bg-[#EFE4D6] hover:bg-[#E2D2BF] text-[#5C3D24] border border-[#D9C4AC] px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-[#8C6239]"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          509 708 434
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1C1917] p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#ECE6DC] px-4 pb-6 shadow-lg">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[#1C1917] hover:text-[#8C6239] font-medium border-b border-[#ECE6DC]/60 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:509708434"
                className="mt-4 flex items-center gap-2 bg-[#8C6239] text-[#FAF7F2] px-4 py-3.5 rounded-full text-sm font-semibold justify-center shadow-xs"
              >
                Zadzwoń: 509 708 434
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
