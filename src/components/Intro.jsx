import React from 'react';
import './Intro.css';
import Socials from './Socials'

function Intro() {
    return (
      <div class="intro-section">
        <h1>Ethan Gan - Aspiring Engineer</h1>
        <p>Welcome! I'm a Systems Design Engineering Student at the University of Waterloo with an interest in discovering and applying technologies to benefit society. Outside of coding and school, you can find me playing badminton, tetris, or working with kids as a coding tutor.</p>
        <Socials/>
      </div>      
    );
  }
  
  export default Intro;
  