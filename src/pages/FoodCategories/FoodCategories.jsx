import React from "react";
import { useLoaderData } from "react-router-dom";
import FoodCategoryCard from "../FoodCategoryCard/FoodCategoryCard";

const FoodCategories = () => {
  const categories = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-2">
        {categories.map((category) => (
          <FoodCategoryCard
            key={category.id}
            category={category}
          ></FoodCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
