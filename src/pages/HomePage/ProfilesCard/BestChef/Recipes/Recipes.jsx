import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard/RecipeCard";
import useSetTitle from "../../../../../hooks/useSetTitle";

const Recipes = () => {
  const recipes = useLoaderData();
  useSetTitle("Recipes");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {recipes.meals.slice(0, 12).map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe}></RecipeCard>
      ))}
    </div>
  );
};

export default Recipes;
