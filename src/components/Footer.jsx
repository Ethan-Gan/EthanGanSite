import React from 'react';
import { useLocation } from 'react-router-dom';
import Socials from "./Socials"
import '../styles/components/Footer.css'

function Footer() {
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    return (
<footer className={isHome ? 'no-line' : ''}>
 <hr></hr>
  <div className="footer-container">
    <Socials/>
    <p className="trademark">Designed and Developed by Ethan Gan</p>

  </div>
</footer>
    );
  }
  
  export default Footer;
