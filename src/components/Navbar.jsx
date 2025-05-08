import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Automatically focus menu when it opens
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen])

  return (
    <nav className="flex items-center justify-between lg:py-10">
      <a href="#">
        <img src="/logo.svg" alt="Sunnyside agency" />
      </a>
      <ul className="hidden lg:flex items-center gap-6 text-sm/6 text-white font-barlow-600">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="font-fraunces text-black bg-white rounded-full px-4 py-2 uppercase tracking-widest text-xs">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <img src="/icon-hamburger.svg" alt="menu" className="lg:hidden flex relative"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && <MobileMenu ref={menuRef} onClose={() => setIsMenuOpen(false)}/>}
    </nav>
  );
}

export default Navbar;
