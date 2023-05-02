import React from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";

const Foods = () => {
  let data = useLoaderData();
  data = data.categories;

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.slice(3, 12).map((food) => (
            <FoodCard key={food.idCategory} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
