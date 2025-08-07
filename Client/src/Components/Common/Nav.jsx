import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Button } from "../index";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", navUrl: "/features" },
    { name: "Benefits", navUrl: "/benefits" },
    { name: "Testimonials", navUrl: "/testimonials" },
    { name: "Pricing", navUrl: "/pricing" },
  ];

  return (
    <nav className="bg-slate-950 text-white flex justify-between items-center py-4 px-6 relative z-50">
      {/* Logo */}
      <h1 className="text-2xl font-semibold">Taskpro</h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((nav) => (
          <li key={nav.name}>
            <button
              onClick={() => navigate(nav.navUrl)}
              className="hover:text-amber-400 transition"
            >
              {nav.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white bg-transparent hover:bg-slate-800 p-2 rounded"
        >
          {isMenuOpen ? (
            <RxCross1 className="size-7" />
          ) : (
            <HiMenuAlt3 className="size-7" />
          )}
        </Button>
      </div>

      {/* Mobile Slide-Out Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-lg md:hidden z-40 transition-all duration-300">
          {navItems.map((nav) => (
            <button
              key={nav.name}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(nav.navUrl);
              }}
              className="text-white hover:text-amber-400 transition text-xl"
            >
              {nav.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
