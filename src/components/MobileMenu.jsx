import React, { forwardRef } from "react";

const MobileMenu = forwardRef(({ onClose }, ref) => {
  const handleLinkClick = () => {
    onClose();
  };
  return (
    <div
      id="mobile-menu"
      ref={ref}
      role="menu"
      aria-label="Mobile navigation"
      tabIndex="-1"
      className="absolute top-16 left-5 right-1/2 z-10 bg-white shadow w-[280px] h-min flex justify-center items-center py-5 text-center"
    >
      <ul className="flex flex-col gap-10">
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick}>
            Services
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={handleLinkClick}
            className="font-fraunces rounded-full uppercase text-xs/6 px-6 py-3 bg-custom-yellow-500"
          >
            Contact
          </a>
        </li>
      </ul>
      <span className="protrude"></span>
    </div>
  );
});

export default MobileMenu;
