import React, { useEffect, useState } from "react";
import "../styles/components/NavBar.css"; // Import the CSS file
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to a section on the home page. If we're not on home, go there first
  // then scroll once it has rendered.
  const goToSection = (id) => (e) => {
    e.preventDefault();
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      // wait for the home page to render before scrolling
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

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
          <li><Link to="/#projects" onClick={goToSection("projects")}>Projects</Link></li>
          <li><Link to="/#experiences" onClick={goToSection("experiences")}>Experiences</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
  )

};

export default Navbar;