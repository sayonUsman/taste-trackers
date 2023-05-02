import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";

const Foods = () => {
  let data = useLoaderData();
  data = data.categories;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.slice(3, 12).map((food) => (
          <FoodCard key={food.idCategory} food={food}></FoodCard>
        ))}
      </div>

      <div>
        <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold mt-9 md:mt-12 lg:mt-16 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
          What You Want
        </h1>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Foods;
