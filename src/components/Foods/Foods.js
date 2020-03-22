import React, { useState, useEffect } from "react";
import "./Foods.css";
import fakeData from "../../asset/fakedata";
import FoodItem from "../FoodItem/FoodItem";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [foodTime, setFoodTime] = useState("Breakfast");
  useEffect(() => {
    setFoods(fakeData);
  }, []);

  const foodSelected = foods.filter(food => food.title === "Breakfast");
  // console.log(foodSelected);

  return (
    <div className="food-section">
      <div className="container">
        <nav>
          <ul className="nav justify-content-center">
            <li onClick={() => setFoodTime("Breakfast")} className="nav-item">
              <span
                to="breakfast"
                className={
                  foodTime === "Breakfast" ? "active nav-link" : "nav-link"
                }
              >
                BreakFast
              </span>
            </li>
            <li onClick={() => setFoodTime("Lunch")} className="nav-item">
              <span
                to="lunch"
                className={
                  foodTime === "Lunch" ? "active nav-link" : "nav-link"
                }
              >
                Lunch
              </span>
            </li>
            <li onClick={() => setFoodTime("Dinner")} className="nav-item">
              <span
                to="dinner"
                className={
                  foodTime === "Dinner" ? "active nav-link" : "nav-link"
                }
              >
                Dinner
              </span>
            </li>
          </ul>
        </nav>
        {/* end of food nav */}

        <div className="row my-4">
          {foodSelected.map(item => (
            <FoodItem key={item.id} food={item.food}></FoodItem>
          ))}
        </div>
        <div className="text-center">
          <button className="disabled btn btn-secondary ">
            Check Out Your Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
