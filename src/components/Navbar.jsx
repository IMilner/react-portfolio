import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // After 3 seconds, show the navbar
    setTimeout(() => {
      setShowNavbar(true);
    }, 1500);

    // Event listener to show/hide navbar based on scrolling direction
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={showNavbar ? "show" : "hide"}>
        {/* Add your navigation items here */}
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
