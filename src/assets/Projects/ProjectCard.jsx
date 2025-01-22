function ProjectCard(props) {
  return (
    <>
      <div>
        <div></div>
        <h3>{props.title}</h3>
        <p>Description of your {props.projectPosition} goes here.</p>
      </div>
    </>
  );
}

export default ProjectCard;
