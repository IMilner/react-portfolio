import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  // const [showNavbar, setShowNavbar] = useState(false);

  // useEffect(() => {
  //   // After 3 seconds, show the navbar
  //   setTimeout(() => {
  //     setShowNavbar(true);
  //   }, 1500);

  //   // Event listener to show/hide navbar based on scrolling direction
  //   let prevScrollPos = window.pageYOffset;
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setShowNavbar(prevScrollPos > currentScrollPos);
  //     prevScrollPos = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div>
      <div className="center-container">
        <h1>I.M</h1>
        <hr />
        <h3>WEB DESIGN & DEVELOPMENT</h3>
        {/* <hr className={showNavbar ? "moved-up" : ""}></hr> */}
        {/* <h3 className={showNavbar ? "moved-up" : ""}> WEB DESIGN & DEVELOPMENT</h3> */}
      </div>
      {/* <nav className={showNavbar ? "show" : "hide"}> */}
      {/* Add your navigation items here */}
      {/* <div className="btnBox">
          <button className="left-btn btn">ABOUT</button>
        </div>
        <div className="btnBox">
          <button className="btm-btn btn">PROJECTS</button>
        </div>
        <div className="btnBox">
          <button className="right-btn btn">CONTACT</button>
        </div>
      </nav> */}
    </div>
  );
}

// function Header() {
//   return (
//     <>
//       <div className="center-container">
//         <h1 classname="centered-h1">I.M</h1>
//         <hr />
//         <h3>WEB DESIGN & DEVELOPMENT</h3>
//       </div>

//     </>
//   );
// }

export default Header;
