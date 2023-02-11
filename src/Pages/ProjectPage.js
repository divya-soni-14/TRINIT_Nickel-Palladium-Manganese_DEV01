const ProjectPage = (props) => {
  const {
    tag,
    location,
    id,
    title,
    author,
    summary,
    goalAmount,
    raisedAmount,
    donors,
    challenge,
    solution,
    impact,
    resources,
    organization,
  } = props.project;
  return (
    <div className="project__page">
      <div className="project--info">
        <span className="project--tag">{tag}</span> |
        <span className="project--location">{location}</span> |
        <span className="project--id">Project # {id}</span>
      </div>
      <div className="project__title">{title}</div>
      <div>
        by <span className="project__author">{author}</span>
      </div>
      <div className="project__layout--grid">
        <div className="project__layout--grid--col1">
          <div className="project__photo__slider"></div>
          <div className="project--info__category__flex">
            <a className="" href="">
              Story
            </a>
            <a className="" href="">
              Reports
            </a>
            <a className="" href="">
              Photos
            </a>
            <a className="" href="">
              Share
            </a>
          </div>
          <div className="project--info__card">
            <h4>Summary</h4>
            <p className="project--info__summary">{summary}</p>
            <div className="project--info__stats">
              <div>
                <p>₹ {goalAmount}</p>
                <span>Total Goal</span>
              </div>
              <div>
                <p>₹ {raisedAmount}</p>
                <span>Raised Amount</span>
              </div>
              <div>
                <p>{donors}</p>
                <span>Donors</span>
              </div>
            </div>
            <h4>Challenge</h4>
            <p className="project--info__challenge">{challenge}</p>
            <h4>Solution</h4>
            <p className="project--info__solution">{solution}</p>
            <h4>Impact</h4>
            <p className="project--info__impact">{impact}</p>
            <h4>Resourses</h4>
            <ul className="project--info__resources">
              {resources.map((resource, id) => (
                <li key={id}>resource</li>
              ))}
            </ul>
          </div>
          <div className="organization--info__card">
            <h4>Organization Information</h4>
            <h3>
              <a href="#">{organization}</a>
            </h3>
          </div>
        </div>

        <div className="project__layout--grid--col2"></div>
      </div>
    </div>
  );
};

export default ProjectPage;
