import React, { useState } from "react";
import Select from "react-select";
import BookData from "../data.json";
import makeAnimated from "react-select/animated";

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
    { value: "George Eliot", label: "George Eliot" },
    { value: "Shakespeare", label: "Shakespeare" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const animatedComponents = makeAnimated();

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
      <div className="search__results">
        {filteredData.map((book) => {
          return (
            <>
              <p>
                {book.title} by {book.author}{" "}
              </p>{" "}
              <br />{" "}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
