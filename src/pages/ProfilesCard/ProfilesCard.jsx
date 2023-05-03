import React from "react";
import { Link } from "react-router-dom";

const ProfilesCard = ({ profile }) => {
  return (
    <div className="card w-124 glass m-2 rounded-lg shadow-lg shadow-zinc-800">
      <figure>
        <img src={profile.image} alt="Profile" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Name: {profile.name}</h2>
        <p>Experience: {profile.experience}</p>
        <p>Best Recipes: {profile.recipes} items</p>

        <div className="card-actions justify-end">
          <button className="btn rounded gap-4">
            Likes
            <div className="badge badge-primary">{profile.likes}</div>
          </button>

          <button className="btn rounded">
            <Link to={`/bestRecipes/${profile.id}`}>View Best Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilesCard;
