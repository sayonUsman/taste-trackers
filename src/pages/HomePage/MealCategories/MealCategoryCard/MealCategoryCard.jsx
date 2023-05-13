const MealCategoryCard = ({ category }) => {
  return (
    <div
      className="hero h-50"
      style={{
        backgroundImage: `url(${category.img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{category.category}</h1>

            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button className="btn bg-white text-black hover:text-white">
              View Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCategoryCard;
