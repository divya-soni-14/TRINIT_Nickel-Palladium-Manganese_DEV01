import ProjectCard from "./project/ProjectCard";

const ProjectSection = (props) => {
  return (
    <div className="profile__project--card">
      <h2 className="sub-heading">{props.title}</h2>
      <ul className="profile__project--grid">
        {props.projects.map((project, id) => (
          <li className="project-item" key={id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserProfilePage = (props) => {
  const { imgURL, name, projects, crowdfunding } = props.user;
  return (
    <div className="profile-page">
      <div className="profile-logo">
        <img src={imgURL} alt="Profile of User" />
      </div>
      <h1 className="profile-name">{name}</h1>
      <ProjectSection projects={projects} title="Project" />
      <ProjectSection projects={crowdfunding} title="Crowdfunding" />
    </div>
  );
};

export default UserProfilePage;
