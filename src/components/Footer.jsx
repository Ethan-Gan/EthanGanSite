import React from 'react';
import Socials from "./Socials"
import '../styles/components/Footer.css'

function Footer() {
    return (
<footer>
 <hr></hr>
  <div className="footer-container">
    <Socials/>
    <p className="trademark">Designed and Developed by Ethan Gan</p>

  </div>
</footer>
    );
  }
  
  export default Footer;
