import "./Projects.css"

function Projects({ projects }) {
    return projects.map((project) => (
      <div className="projects">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <a href={project.git}>
          <button className="button">Github</button>
        </a>
        <a href={project.live}>
          <button className="button">live site</button>
        </a>
      </div>
    ));
  }
  
  export default Projects;