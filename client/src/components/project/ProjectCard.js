const ProjectCard = (props) => {
  const {
    imgURL,
    tag,
    location,
    title,
    author,
    description,
    raisedAmount,
    goalAmount,
  } = props.project;

  return (
    <div className="project__card">
      <div className="project__card--image">
        <img src={imgURL} alt="project--img" />
      </div>
      <div className="project__card--body">
        <div className="project__font--secondary">{`${tag} | ${location}`}</div>
        <div className="project__font--primary">{title}</div>
        <div className="project__font">
          by <span className="project__font--bold">{author}</span>
        </div>
      </div>
      <div className="project__font">
        {`${description.substring(0, 100)}...`}
        <a href="#" className="project__description--more">
          read more
        </a>
      </div>
      <div className="project__progress">
        <span className="project__progress--text">{`₹ ${raisedAmount} raised of ₹ ${goalAmount} goal`}</span>
      </div>
      <div className="project-progress__bar--bg">
        <div
          className="project-progress__bar"
          style={{ width: `${(raisedAmount / goalAmount) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
