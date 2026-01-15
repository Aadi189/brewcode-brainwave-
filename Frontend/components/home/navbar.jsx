"use client";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    // Step 1: Slide down immediately
    const t1 = setTimeout(() => {
      setSlide(true);
    }, 50);

    // Step 2: Expand width after slide finishes
    const t2 = setTimeout(() => {
      setExpanded(true);
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-2">
      <nav
        className={`
          transition-all duration-[1000ms] ease-in-out
          max-w-5xl flex items-center justify-between 
          border border-black bg-white px-6 py-2 
          rounded-full text-black text-base shadow-md

          ${slide ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
          ${expanded ? "w-[80%]" : "w-[50%]"}
        `}
      >
        {/* Logo */}
        <a href="/">
          <svg width="28" height="28" viewBox="0 0 32 32">
            <circle cx="4.706" cy="16" r="4.706" fill="#4b5563" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#4b5563" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#4b5563" />
            <circle cx="27.294" cy="16" r="4.706" fill="#4b5563" />
          </svg>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ml-7">
          {["Products", "Stories", "Pricing", "Docs"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative overflow-hidden h-6 group text-black hover:text-blue-600 text-base font-semibold"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{item}</span>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-full font-bold transition text-base">Contact</button>
          <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold hover:bg-purple-600 hover:text-white transition text-base">Get Started</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 bg-white border-t border-blue-600 w-full flex flex-col items-center gap-4 py-4 shadow-md md:hidden text-black text-base font-semibold">
          <a className="hover:text-blue-600" href="#">Products</a>
          <a className="hover:text-blue-600" href="#">Customer Stories</a>
          <a className="hover:text-blue-600" href="#">Pricing</a>
          <a className="hover:text-blue-600" href="#">Docs</a>

          <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-full font-bold transition text-base">Contact</button>
          <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold hover:bg-purple-600 hover:text-white transition text-base">Get Started</button>
        </div>
      )}
    </div>
  );
};
