import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useWindowDimensions from "./hooks/useWindowDimensions";

const Navbar = () => {
  const { height, width } = useWindowDimensions();
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const searchHandler = (searchTerm) => {
    // if (searchTerm !== "") alert("You have searched for " + searchTerm);
    // if (0) setNavigate(true);
  };

  return (
    <div className="navbar__container">
      <div className="navbar__logo navbar__item">
        <Link to="/home">
          <h2>npm fund </h2>
        </Link>
      </div>
      <div className="navbar__item navbar__search">
        <form>
          <input
            type="text"
            name="Search"
            className="navbar__searchbox"
            placeholder="Search for NGOs, philanthrophists, projects..."
            id=""
            onChange={handleInputChange}
          />
          <Link to="/search">
            <button
              type="submit"
              onClick={() => {
                searchHandler();
              }}
              className="navbar__btn"
            >
              Search
            </button>
          </Link>
        </form>
      </div>
      <div className="navbar__item navbar__mobile navbar__searchBtn">
        <Link to="/search">
          <button className="navbar__btn"> Search</button>
        </Link>
      </div>

      <div className="navbar__item navbar__btnGroup">
        <button className="navbar__btn">A</button>
        <button className="navbar__btn">B</button>
        <button className="navbar__btn">C</button>
      </div>
    </div>
  );
};

export default Navbar;
