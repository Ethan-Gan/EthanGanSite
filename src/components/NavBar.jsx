import React, { useEffect, useState } from "react";
import "./NavBar.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link to="/"><h1 className="logo">ETHAN GAN</h1></Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
  )

};

export default Navbar;