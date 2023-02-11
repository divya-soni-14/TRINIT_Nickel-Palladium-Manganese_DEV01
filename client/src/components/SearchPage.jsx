import React, { useState, useEffect } from "react";
import Select from "react-select";
import BookData from "../data.json";
import makeAnimated from "react-select/animated";
import ProjectCard from "./project/ProjectCard";
import GetAllProjects from "../Connections/GetAllProjects";
import { useSelector, useDispatch } from "react-redux";

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

const SearchPage = () => {
  const [nameFilteredData, setNameFiltered] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
    const newFilter = BookData.filter((value) => {
      let title = value.title.toString().toLowerCase();
      let newSearchTerm = searchTerm.toString().toLowerCase();
      return title.includes(newSearchTerm);
    });
    setNameFiltered(newFilter);
    setFilteredData(newFilter);
    console.log(newFilter);
  };

  const handleCategoryDropDown = (event) => {
    let newCategories = [];
    event.map((cat) => {
      newCategories.push(cat.value);
    });
    setSelectedCategory(newCategories);
    console.log(newCategories);

    let currData = nameFilteredData.length > 0 ? nameFilteredData : BookData;
    console.log(currData, filteredData.length);
    let newCurrData = currData.filter((item) => {
      let value = item.author.toLowerCase();
      let ans = 0;
      newCategories.map((cat) => {
        let compareTerm = cat.toLowerCase();
        if (value.includes(compareTerm)) return 1;
      });
      return ans;
    });

    currData = newCurrData;
    setFilteredData(currData);
  };

  const options = [
    { label: "Community Development", value: "community development" },
    { label: "Education", value: "education" },
    { label: "Health", value: "health" },
    {
      label: "Environmental Conservation",
      value: "environmental conservation",
    },
    { label: "Human Rights", value: "human rights" },
    { label: "Disaster Relief", value: "disaster relief" },
    { label: "Women Empowerment", value: "women empowerment" },
    { label: "Children and Youth", value: "children and youth" },
    { label: "Animal Welfare", value: "animal welfare" },
    { label: "Arts and Culture", value: "arts and culture" },
  ];
  const animatedComponents = makeAnimated();

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    GetAllProjects().then((res) => {
      // console.log(projects);
      setProjects(res.projects);
      console.log(projects);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="searchpage__container">
      <div className="card">
        <div className="searchpage__controls">
          <div className="searchpage__control searchpage__search_box">
            <input
              type="text"
              name=""
              id=""
              className="searchpage__input form-field"
              placeholder="Enter a Name"
              onChange={handleFilter}
            />
            {/* <button type="submit">Search</button> */}
          </div>
          <div className="searchpage__control searchpage__filter">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={options}
              isMulti
              placeholder={"Filter by Category"}
              onChange={handleCategoryDropDown}
            />
          </div>
          <div className="searchpage__control searchpage__filter">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={options}
              isMulti
              placeholder={"Filter by Location"}
              onChange={handleCategoryDropDown}
            />
          </div>
        </div>
      </div>
      <div className="search__results card">
        {/* {filteredData.map((book) => {
          return (
            <>
              <p>
                {book.title} by {book.author}{" "}
              </p>{" "}
              <br />
            </>
          );
        })} */}

        {projects.map((project) => (
          <div className="search__result-card">
            <ProjectCard project={project} key={project.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
