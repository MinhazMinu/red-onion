import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="d-flex align-items-center text-center banner hero-section-img">
      <div className="container">
        <h1>Best Food Waiting For Your Belly!</h1>

        <div className="search col-md-6 my-5 mx-auto d-flex ">
          <input
            type="text"
            className="form-control mr-4 p-3"
            placeholder="Search your food!"
          />
          <button className="btn btn-round btn-search">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
