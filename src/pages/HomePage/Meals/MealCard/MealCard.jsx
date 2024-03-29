const MealCard = ({ meal }) => {
  return (
    <div className="card w-124 glass m-2 rounded-lg">
      <figure>
        <img src={meal.strCategoryThumb} alt="Meal Image" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{meal.strCategory}</h2>

        <div className="card-actions justify-end">
          <button className="btn rounded text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
