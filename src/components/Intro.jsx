import React from 'react';
import '../styles/components/Intro.css';
import Socials from './Socials'

function Intro() {
    return (
      <div class="intro-section">
        <div class="intro-quote">
          <h1>It's my life </h1>
          <h1>It's now or never</h1>
          <h1>I ain't gonna live forever - Bon Jovi</h1>
        </div>
        <p>
        I'm a Systems Design Engineering Student at the University of Waterloo.  
         My knowledge and experiences have equipped me with a eclectic skill set with user research, literature reviews, UX design, and rapid prototyping for fast adaptation in fast ideation and deployment in both policy and technical fields.
       <br />
              <br />
       <strong><em>If you need someone to jump in both feet first, I'm your guy!</em></strong>
       <br />
       
         
         </p>
  
        {/* <p>I'm a Systems Design Engineering Student at the University of Waterloo with an interest in discovering and applying technologies to benefit society. Outside of coding and school, you can find me playing badminton, tetris, or working with kids as a coding tutor.</p> */}
        <Socials/>
      </div>      
    );
  }
  
  export default Intro;
  