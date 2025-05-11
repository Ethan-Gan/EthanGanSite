import React from 'react';
import './Resume.css';


function Resume() {
  return (
    <div>
      <title>Ethan Gan || Resume</title>
      {/* <h1>Resume</h1>
      <p>This is where you can find my professional experience and skills.</p> */}
      <iframe id="myPDF" src="public\content\pdf\R7.0 Ethan X. Gan - Resume.pdf" frameborder="0"></iframe>
    </div>
  );
}

export default Resume;
