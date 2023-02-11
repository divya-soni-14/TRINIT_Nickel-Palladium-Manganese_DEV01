import React, { useState } from "react";
import Select from "react-select";
import BookData from "../data.json";
import makeAnimated from "react-select/animated";

const SearchPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [doneCategories, setDoneCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
    const newFilter = BookData.filter((value) => {
      return value.title
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase());
    });
    setFilteredData(newFilter);
    console.log(filteredData);
  };

  const handleCategoryDropDown = (event) => {
    console.log(event.target.value);
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
              placeholder="Enter a name...."
              onChange={handleFilter}
            />
            <button type="submit">Search</button>
          </div>
          <div className="searchpage__control searchpage__filter">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={options}
              isMulti
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
