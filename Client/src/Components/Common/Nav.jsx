import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { Button } from "../index";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      navUrl: "/",
    },
    {
      name: "Features",
      navUrl: "/features",
    },
    {
      name: "Benefits",
      navUrl: "/benefits",
    },
    {
      name: "Testimonials",
      navUrl: "/testimonials",
    },
    {
      name: "Pricing",
      navUrl: "/pricing",
    },
    {
      name: "Signup",
      navUrl: "/signup",
    }, {
      name: "Login",
      navUrl : "/login"
    }
  ];

  return (
    <nav className="bg-slate-950 text-white flex justify-between items-center py-4 px-6 relative z-50">
      {/* Logo */}
      <h1 className="text-2xl font-semibold">Taskpro</h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 px-4 py-2">
        {navItems.map((nav) => (
          <li key={nav.name}>
            <Button
              onClick={() => navigate(nav.navUrl)}
              className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-medium p-2 bg-transparent hover:cursor-pointer border-none"
            >
              {nav.name}
            </Button>
          </li>
        ))}
        <li>
          <FaUser />
        </li>
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
            <Button
              key={nav.name}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(nav.navUrl);
              }}
              className="text-white bg-transparent hover:bg-slate-800 p-2 rounded border-none"
            >
              {nav.name}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
