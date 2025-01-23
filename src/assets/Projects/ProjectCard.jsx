function ProjectCard(props) {
  return (
    <>
      <div className="Project-container">
        <div className="Image-container"></div>
        <div className="Project-detail-container">
          <h3>{props.title}</h3>
          <p>Description of your {props.projectPosition} goes here.</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
