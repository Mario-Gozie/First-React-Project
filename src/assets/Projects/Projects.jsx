import ProjectCard from "./ProjectCard";

function Projects() {
  <>
    <section>
      <div className="Project-header-container">
        <h2>Projects</h2>
      </div>
      <div>
        <ProjectCard title="Project 1" projectPosition="first" />
        <ProjectCard title="Project 2" projectPosition="second" />
      </div>
    </section>
  </>;
}

export default Projects;
