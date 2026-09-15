import React from 'react';
import Intro from '../components/Intro';
import Projects from '../components/Projects'; // capitalize this later

import Squares from '../reactbits/Squares';
import ArticleBackground from '../reactbits/ArticleBackground';
import ClickSpark from '../reactbits/ClickSpark';
import { SHOW_SQUARES } from '../config';


function Main() {
  return (
    <div>
      <ClickSpark> </ClickSpark>

      {SHOW_SQUARES && <Squares direction='' />}
      {/* <ArticleBackground color="var(--color-surface-dark)"/> */}
      <title>Ethan Gan || Home</title>
      <Intro/>
      <Projects type="projects"/>
      <Projects type="experiences"/>
    </div> 
  );
}

export default Main;
