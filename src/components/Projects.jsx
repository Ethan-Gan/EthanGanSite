import { projects } from "../data/projects";
import { experiences } from "../data/experiences";

import ProjectCard from "./ProjectCard";
import './Projects.css';

function Projects({type="projects"}) {  
  if (type =="projects"  && projects.length > 0) {
    return (
      <section class="card-gallery">
      <h1>Projects</h1>
      <hr></hr>
        
        <div className="grid-container">
          {projects.map((proj) => (
              // key prop is just to separate each project in the list
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
        
      </section>

    );
  } else if (type == "experiences" && experiences.length > 0) {
        return (
      <section class="card-gallery">
      <h1>Experiences</h1>
      <hr></hr>
        
        <div className="grid-container">
          {experiences.map((proj) => (
              // key prop is just to separate each project in the list
            <ProjectCard key={proj.slug} project={proj} type="experiences" />
          ))}
        </div>
        
      </section>

    );
  }


};

export default Projects;
