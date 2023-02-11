import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar__container card">
      <div className="sidebar__header">
        <h2 className="sidebar__header__title">Activity</h2>
        <h5 className="sidebar__header__action">See all</h5>
      </div>
      <hr />

      <div className="sidebar__content">Content</div>
    </div>
  );
};

export default Sidebar;
