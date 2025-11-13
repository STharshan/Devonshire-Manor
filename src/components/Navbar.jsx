"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { SITE_NAME, PHONE_NUMBER} from "../components/global"; // ✅ import global text

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Care", href: "/care/" },
    { name: "Facilities", href: "/facilities/" },
    { name: "About", href: "/about/" },
    { name: "Mission", href: "/mission/" },
    { name: "Fees & Funding", href: "/fees-and-funding/" },
    { name: "Contact", href: "/contact/" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8DCC7] bg-[#F9F6F1]/95 backdrop-blur supports-backdrop-filter:bg-[#F9F6F1]/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <span className="font-serif text-xl font-semibold text-[#3C2E2B]">
            {SITE_NAME}

          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#3C2E2B]/70 text-primary-hover transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center h-8 rounded-md gap-1.5 px-3 border border-primary text-[#3C2E2B] text-primary-hover  bg-transparent text-sm font-medium transition-all"
          >
            <Phone className="h-4 w-4 mr-2" strokeWidth={2} />
           {PHONE_NUMBER}
          </a>
          <button className="inline-flex items-center justify-center h-8 rounded-md px-3 bg-primary bg-secondary-hover text-white text-sm font-medium transition-colors">
            Book a visit
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden p-2 text-[#3C2E2B] text-primary-hover transition-colors"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E8DCC7] bg-[#F9F6F1] py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-[#3C2E2B]/80 bg-secondary-hover hover:bg-[#F2E8DD] rounded-md px-3 py-2 transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Buttons */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-3 inline-flex items-center justify-center w-full h-10 rounded-md gap-2 px-3 border border-primary  text-[#3C2E2B] text-primary-hover hover:bg-[#F2E8DD] text-sm font-medium transition-all"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              {PHONE_NUMBER}
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center w-full h-10 rounded-md bg-primary bg-secondary-hover text-white text-sm font-medium transition-colors"
            >
              Book a visit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}