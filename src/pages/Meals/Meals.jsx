import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MealCard from "../MealCard/MealCard";

const Meals = () => {
  let meals = useLoaderData();
  meals = meals.categories;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {meals.slice(3, 12).map((meal) => (
          <MealCard key={meal.idCategory} meal={meal}></MealCard>
        ))}
      </div>

      <div>
        <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-semibold mt-12 md:mt-15 lg:mt-24 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
          What You Want
        </h1>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Meals;
