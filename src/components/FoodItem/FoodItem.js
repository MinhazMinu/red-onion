import React from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ food }) => {
  console.log(food);
  const { id, name, img, longDes, des, section, price } = food;
  console.log(food.des);

  return (
    <div className="col-md-4 mb-4">
      <Link to={`food${id}`}>
        <div className="card text-center">
          {/* <img src={} alt="img" /> */}
          <div className="card-body">
            <h5>{name}</h5>
            <p>{des} </p>
            <h4>{price} </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodItem;
