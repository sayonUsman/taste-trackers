import { useLoaderData } from "react-router-dom";
import MealCategoryCard from "./MealCategoryCard/MealCategoryCard";

const MealCategories = () => {
  const categories = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-2">
        {categories.map((category) => (
          <MealCategoryCard
            key={category._id}
            category={category}
          ></MealCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default MealCategories;
