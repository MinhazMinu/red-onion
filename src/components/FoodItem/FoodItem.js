import React from "react";
import { Link } from "react-router-dom";
import "./FoodItem.css";

const FoodItem = ({ food }) => {
  const { id, name, img, des, price } = food;
  // console.log(food);

  return (
    <div className="col-md-4 mb-4">
      <Link to={"food/" + id}>
        <div className="card text-center foodImg">
          <img src={img} alt="img" />
          <div className="card-body">
            <h5>{name}</h5>
            <p>{des} </p>
            <h4>${price} </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodItem;
