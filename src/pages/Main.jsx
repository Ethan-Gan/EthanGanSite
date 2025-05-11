import React from 'react';
import Intro from '../components/Intro';
import Projects from '../components/projects'; // capitalize this later
import Socials from '../components/Socials'

function Main() {
  return (
    <div>
        <title>Ethan Gan || Home</title>
        <Intro/>
        <Projects type="projects"/>
        <Projects type="experiences"/>
    </div> 
  );
}

export default Main;
