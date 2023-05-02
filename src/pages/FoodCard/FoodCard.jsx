import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="card w-124 glass m-2 rounded-lg shadow-lg shadow-zinc-800">
      <figure>
        <img src={food.strCategoryThumb} alt="Meal" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{food.strCategory}</h2>

        <div className="card-actions justify-end">
          <button className="btn rounded">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
