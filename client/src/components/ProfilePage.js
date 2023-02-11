import ProjectCard from "./project/ProjectCard";
const CardItem = (props) => {
  return (
    <li className="project-item" key={props.id}>
      <ProjectCard project={props.project} />
    </li>
  );
};
const ProfilePage = (props) => {
  const { imgURL, name, description, projects } = props.profile;
  return (
    <div className="profile-page">
      <div className="profile-logo">
        <img src={imgURL} alt="Profile of NGO" />
      </div>
      <h1 className="profile-name">{name}</h1>
      <div className="profile-description">{description}</div>
      <div className="profile__project--card">
        <h2 className="sub-heading">Projects</h2>
        <ul className="profile__project--grid">
          {projects.map((project, id) => (
            <CardItem project={project} id={id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
