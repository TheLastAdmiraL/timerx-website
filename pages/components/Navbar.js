import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
      {/* Top Section (Logo + Hamburger) */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl font-bold text-black pl-6">TimerX</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-4xl text-black pr-6 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Links Section */}
      <div
        className={`flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 ${
          menuOpen ? "block" : "hidden md:flex"
        } gap-y-4 md:gap-x-6`} /* Added spacing between items */
      >
        {[
          { href: "/", label: "Home" },
          { href: "/journey", label: "Our Journey" },
          { href: "/download", label: "Download TimerX" },
          { href: "/contact", label: "Contact Us" },
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="w-full md:w-auto text-base md:text-lg text-black text-center px-4 py-2 border-b md:border-0 border-black/20 hover:bg-nav_bar_hover hover:scale-105 hover:rounded-lg transition-all duration-300" // Increased radius to rounded-lg
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
