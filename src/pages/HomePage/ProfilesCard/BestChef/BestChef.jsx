import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../../SharedPage/Footer/Footer";

const BestChef = () => {
  const bestChef = useLoaderData();

  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="card glass rounded-lg md:card-side max-w-3xl mx-auto">
          <figure>
            <img
              className="h-96 rounded-l-lg"
              src={bestChef.image}
              alt="Profile Image"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Name: {bestChef.name}</h2>
            <p className="mb-0">
              <span className="text-md font-semibold">Experience: </span>
              {bestChef.experience}
              <br />
              <span className="text-md font-semibold">Best Recipes: </span>
              {bestChef.recipes} items
            </p>

            <div className="card-actions justify-end">
              <button className="btn rounded-md text-white pl-7 pr-7">
                Like
              </button>
            </div>
          </div>
        </div>

        <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-semibold mt-9 md:mt-12 lg:mt-24 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
          Recipes
        </h1>

        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default BestChef;
