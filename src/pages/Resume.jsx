import React from 'react';
import './Resume.css';
import Squares from '../reactbits/Squares';

import ArticleBackground from '../reactbits/ArticleBackground';


function Resume() {
  return (
    <div>

      <Squares direction=""/>
      <ArticleBackground color="var(--color-background-dark)" />
    <title>Ethan Gan || Resume</title>
      {/* <h1>Resume</h1>
      <p>This is where you can find my professional experience and skills.</p> */}
      <iframe id="myPDF" src="/content/pdf/ethanganresume.pdf" frameborder="0"></iframe>
    </div>
  );
}

export default Resume;
