import React from "react";
import { useLoaderData } from "react-router-dom";

const BestChef = () => {
  const bestChef = useLoaderData();

  return (
    <div className="container mx-auto mt-24">
      <div className="card rounded-lg md:card-side md:shadow-lg md:shadow-zinc-800 max-w-3xl mx-auto">
        <figure>
          <img
            className="h-96 rounded-lg"
            src={bestChef.image}
            alt="Profile Image"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">Name: {bestChef.name}</h2>
          <p className="mb-0">Experience: {bestChef.experience}</p>

          <div className="card-actions justify-end">
            <button className="btn rounded-md pl-7 pr-7 btn-primary">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChef;
