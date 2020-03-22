import React from "react";
import { useParams } from "react-router-dom";
import fakedata from "../../asset/fakedata";

const FoodDetails = () => {
  const { id } = useParams();

  const singleFood = fakedata.map(item => {
    return item.food;
  });
  let sFood = {};
  if (id < 7) {
    sFood = singleFood[0].find(item => item.id == id);
  } else if (id < 13) {
    sFood = singleFood[1].find(item => item.id == id);
  } else {
    sFood = singleFood[2].find(item => item.id == id);
  }
  console.log(sFood);

  return (
    <div className=" my-5 container">
      <div className="row container">
        <div className="col-md-6 pr-md-4">
          <h1>{sFood.name}</h1>
          <p className="my-5">{sFood.longDes}</p>
          <div className="d-flex  my-4">
            <h2 className="price">${sFood.price}</h2>

            <div className="cart-controller ml-3 btn">
              <button className="btn">-</button> 1{" "}
              <button className="btn">+</button>
            </div>
          </div>
          <button className="btn btn-danger btn-rounded mb-2">Add</button>

          <div className="more-images mt-5">
            {sFood.img.map(img => (
              <img className="mr-4" height="150px" src={img} alt="" />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={sFood.img[0]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
