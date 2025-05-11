import React from 'react';
import './Intro.css';
import Socials from './Socials'

function Intro() {
    return (
      <div class="intro-section">
        <h1>Ethan Gan - Engineering Student</h1>
        <p>Welcome! I'm a student studying Systems Design Engineering at the University of Waterloo with an interest in anything and everything tech related. When I'm not coding or studying you can find me playing badminton, tetris, or working with kids as a coding tutor.</p>
        <Socials/>
      </div>      
    );
  }
  
  export default Intro;
  