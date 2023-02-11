import React, { useEffect } from "react";
import ProjectCard from "../project/ProjectCard";

const dummyData = [
  {
    id: 0,
    imgURL:
      "https://files.globalgiving.org/pfil/54436/pict_large.jpg?m=1634727467000",
    title: "Provide Urgent Medical Attention To Syrians",
    tag: "Physical Health",
    location: "Syrian Arab Republic",
    author: "SEMA INSANI VE TIBBI YARDIM DERNEGI",
    description:
      "This campaign aims to support URGENT medical needs of those most in need in northern Syria through supporting our hospitals, medical centers and mobile clinics located there",
    raisedAmount: 50250,
    goalAmount: 100000,
  },
  {
    id: 1,
    imgURL:
      "https://files.globalgiving.org/pfil/31562/pict_large.jpg?m=1515401904000",
    title: " Empower a Girl: For Self-Reliance in Uganda",
    tag: "Gender Equality",
    location: "Uganda",
    author: "Kole Intellectual Forum ",
    description:
      "Kole Intellectual Forum intends to influence the ideas of policy makers at all levels, educationists, community and youth in Uganda to include the course unit of Home Economics in the syllabus of basic education with the intention to promote quality, sustainable, and potential education by building an Institute of Home Economics at Kole District, Northern Uganda.",
    raisedAmount: 320377,
    goalAmount: 370000,
  },
  {
    id: 2,
    imgURL:
      "https://files.globalgiving.org/pfil/18502/pict_large.jpg?m=1413265205000",
    title: "Provide Gift & food to 700 Street Children",
    tag: "EDUCATION",
    location: "India",
    author: "Rajasthan Samgrah Kalyan Sansthan",
    description:
      "Under this project, 700 street & poor slum children will be given Nutrition food, Gift, New Dress, Lunch/Dinner, Toys & Happiness. The Program will be quite unique. For poor street & slum children all this is a dream. But will it be possible. A meal & gifts for 700 poor children life will become a golden memory.",
    raisedAmount: 270968,
    goalAmount: 300000,
  },
];

const Feed = () => {
  const getProjects = () => {
    return fetch("http://localhost:8000/getProjects")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className="feed__container card">
      {dummyData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Feed;
