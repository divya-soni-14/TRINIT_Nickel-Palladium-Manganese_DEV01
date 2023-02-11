import React from "react";

const CreatePost = () => {
  return (
    <div className="card createpost__container">
      <h1 className="form-title">Create a Campaign</h1>

      <form className="createpost__form">
        <div className="createpost__form_col">
          {/* Name of Project */}
          <div className="inputField">
            <label className="label" htmlFor="name">
              Title of Campaign
            </label>
            <input type="text" className="form-field" name="name" id="" />
          </div>
          {/* Description */}
          <div className="inputField">
            <label className="label" htmlFor="name">
              Description
            </label>
            <textarea type="text" className="form-field" name="name" id="" />
          </div>
          {/* Target */}
          <div className="inputField">
            <label className="label" htmlFor="name">
              Fund Target (in Rupees)
            </label>
            <input type="number" className="form-field" name="name" id="" />
          </div>
        </div>
        <div className="createpost__form_col">
          {/* City */}
          <div className="inputField">
            <label className="label" htmlFor="name">
              City
            </label>
            <input type="text" className="form-field" name="name" id="" />
          </div>

          {/* Country */}
          <div className="inputField">
            <label className="label" htmlFor="name">
              Country
            </label>
            <input type="text" className="form-field" name="name" id="" />
          </div>

          {/* Category */}
          <div className="inputField">
            <label className="label" htmlFor="name">
              Category
            </label>
            <input type="text" className="form-field" name="name" id="" />
          </div>
        </div>
      </form>
      <div className="createpost__submit">
        <button type="submit" className="submit_btn">
          Let's Make a Difference!
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
