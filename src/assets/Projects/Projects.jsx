import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section className="Projects">
        <div className="Project-header-container">
          <h2>My Projects</h2>
        </div>
        <div className="Projects-container">
          <ProjectCard title="Project 1" projectPosition="first" />
          <ProjectCard title="Project 2" projectPosition="second" />
        </div>
      </section>
    </>
  );
}

export default Projects;
