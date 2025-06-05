import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";
import indiaFlag from "../../../../assets/images/twemoji_flag-india.png";
import NavItem from "./NavItem";
import HeaderMenu from "./HeaderMenu";

const Header = ({ logo, navLinks = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center relative z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Nav Links (visible only lg and above) */}
      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((link, i) =>
          link.dropdown ? (
            <HeaderMenu key={i} label={link.label} />
          ) : (
            <NavItem
              key={i}
              label={link.label}
              path={link.path}
              active={link.active}
            />
          )
        )}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <FaSun className="text-gray-500" />

        {/* Flag */}
        <div className="flex items-center gap-1">
          <img src={indiaFlag} alt="India Flag" className="h-4" />
          <span className="text-sm text-gray-600">IND</span>
        </div>

        {/* Desktop CTAs (only visible on lg and up) */}
        <div className="hidden lg:flex gap-2">
          <Link to="/signin">
            <button className="bg-[#717989] text-white px-4 py-2 rounded-md">
              Sign in
            </button>
          </Link>
          <Link to="/book-demo">
            <button className="border border-[#0191C6] text-[#0191C6] px-4 py-2 rounded-md">
              Book a Demo
            </button>
          </Link>
        </div>

        {/* Hamburger Icon for md and below */}
        <button
          className="lg:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Drawer (visible below lg only) */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col p-6 gap-4 lg:hidden">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <HeaderMenu key={i} label={link.label} />
            ) : (
              <NavItem
                key={i}
                label={link.label}
                path={link.path}
                active={link.active}
              />
            )
          )}

          {/* Mobile CTAs */}
          <Link to="/signin">
            <button className="w-full bg-[#717989] text-white px-4 py-2 rounded-md">
              Sign in
            </button>
          </Link>
          <Link to="/book-demo">
            <button className="w-full border border-[#0191C6] text-[#0191C6] px-4 py-2 rounded-md">
              Book a Demo
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
