import React from "react";
import Sidebar from "../components/HomePage/Sidebar";
import Feed from "../components/HomePage/Feed";
const HomePage = () => {
  return (
    <div className="homepage__container">
      <div className="homepage__left_sidebar hide__mobile">
        <Sidebar />
        <Sidebar />
      </div>
      <div className="homepage__middle_sidebar sizeup__mobile">
        <Feed />
      </div>

      <div className="homepage__right_sidebar  hide__mobile">
        <Sidebar />
      </div>
    </div>
  );
};

export default HomePage;
