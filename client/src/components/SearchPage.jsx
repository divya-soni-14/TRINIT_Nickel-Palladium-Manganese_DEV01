import React, { useState } from "react";
import Select from "react-select";
import BookData from "../data.json";
import makeAnimated from "react-select/animated";

const SearchPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
    const newFilter = BookData.filter((value) => {
      let title = value.title.toString().toLowerCase();
      let searchTerm = searchTerm.toString().toLowerCase();
      return title.includes(searchTerm);
    });
    setFilteredData(newFilter);
    console.log(filteredData);
  };

  const handleCategoryDropDown = (event) => {
    let newCategories = [];
    event.map((cat) => {
      newCategories.push(cat.value);
    });
    setSelectedCategory(newCategories);
    console.log(newCategories);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
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
        </div>
      </div>
      <div className="search__results">
        {searchTerm &&
          filteredData.map((book) => {
            return (
              <>
                <p>{book.title}</p> <br />{" "}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default SearchPage;
