import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe }) => {
  const instructions = recipe.strInstructions;
  let [isFavourite, setIsFavourite] = useState(false);

  const favourite = () => {
    isFavourite = !isFavourite;

    setIsFavourite(isFavourite);

    toast.success(
      `The ${recipe.strMeal} recipe is added as a your favorite meal.`,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  return (
    <div className="card m-2 rounded-lg shadow-lg shadow-zinc-800">
      <figure>
        <img
          className="md:h-full"
          src={recipe.strMealThumb}
          alt="Recipe Image"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Recipe Name: {recipe.strMeal}</h2>

        <span className="card-title">
          Rating :
          <FaStar color={"rgb(251 191 36)"} />
          <FaStar color={"rgb(251 191 36)"} />
          <FaStar color={"rgb(251 191 36)"} />
          <FaStar color={"rgb(251 191 36)"} />
          <FaStar color={"rgb(163 163 163)"} />
        </span>

        <h2 className="card-title">Ingredients</h2>
        <p className="font-semibold">1. {recipe.strIngredient1}</p>
        <p className="font-semibold">2. {recipe.strIngredient2}</p>
        <p className="font-semibold">3. {recipe.strIngredient3}</p>
        <p className="font-semibold">4. {recipe.strIngredient4}</p>
        <p className="font-semibold">5. {recipe.strIngredient5}</p>
        <p>
          <span className="text-md font-semibold">Cooking Method: </span>
          {instructions.length > 325
            ? instructions.slice(0, 325) + "....."
            : instructions}
        </p>

        <div className="card-actions justify-end">
          <button
            onClick={favourite}
            disabled={isFavourite}
            className="btn rounded-md btn-primary"
          >
            Favourite
          </button>
        </div>
      </div>

      {isFavourite && (
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      )}
    </div>
  );
};

export default RecipeCard;
