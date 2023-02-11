const Item = (props) => {
  return (
    <li className="list-item" key={props.id}>
      <a href="#">
        <div className="donate--amount">{`₹ ${props.amount}`}</div>
        <div className="donate--summary">{props.summary}</div>
      </a>
    </li>
  );
};

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
    donateOptions,
  } = props.project;
  return (
    <div className="project__page">
      <div className="project--info">
        <span className="project--tag">{tag}</span> |
        <span className="project--location"> {location}</span> |
        <span className="project--id"> Project # {id}</span>
      </div>
      <div className="project__title">{title}</div>
      <div>
        by <span className="project__author">{author}</span>
      </div>
      <div className="project__layout--grid">
        <div className="project__layout--grid--col1">
          <div className="project__photo__slider"></div>
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

        <div className="project__layout--grid--col2">
          <div className="project--info--stats">
            <div className="raised-amount">₹ {raisedAmount}</div>
            <span>raised of ₹ {goalAmount} </span>
            <div className="project-progress__bar--bg">
              <div
                className="project-progress__bar"
                style={{ width: `${(raisedAmount / goalAmount) * 100}%` }}
              ></div>
            </div>
          </div>
          <div>
            <a href="#" className="donate--button">
              Donate Now
            </a>
          </div>
          <div className="donate--options">
            <ul className="donate--list">
              {donateOptions.map((donate, id) => (
                <Item id={id} amount={donate.amount} summary={donate.summary} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="project__photos"></div>
    </div>
  );
};

export default ProjectPage;
