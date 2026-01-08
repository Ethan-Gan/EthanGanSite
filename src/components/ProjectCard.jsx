import { Link } from "react-router-dom";
import '../styles/components/ProjectCard.css';


const ProjectCard = ({ project,type="projects" }) => (
  <div class="card">
    <Link to={`/${type}/${project.slug}`}>

    <div class="card-image">
      {console.log(project.image)}
      <img src={project.image} alt={project.title}/>
      {/* <img src={"../images/mountains.png"} alt={project.title}/> */}
    </div>

    
    <div class="card-text">
        <h2>{project.title}</h2>

        <div class="topic-container">
          {project.topics.map((topic, index) => (
            <span key={index} class="topic">
              {topic}
            </span>
          ))}
        </div>

        <p>{project.description}</p>
    </div>

    </Link>
  </div>
);

export default ProjectCard;
