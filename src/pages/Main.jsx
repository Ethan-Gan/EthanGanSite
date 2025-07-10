import React from 'react';
import Intro from '../components/Intro';
import Projects from '../components/Projects'; // capitalize this later

import Squares from '../reactbits/Squares';
// import BorderSquares from '../reactbits/BorderSquares';
  
import ClickSpark from '../reactbits/ClickSpark';


function Main() {
  return (
    <div>
      <ClickSpark> </ClickSpark>

      <Squares />

      {/* <Squares /> */}
      <title>Ethan Gan || Home</title>
      <Intro/>
      <Projects type="projects"/>
      <Projects type="experiences"/>
    </div> 
  );
}

export default Main;
