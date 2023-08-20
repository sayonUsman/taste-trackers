import { Link } from "react-router-dom";

const ProfilesCard = ({ chefProfile }) => {
  return (
    <div className="card w-124 glass m-2 rounded-lg">
      <figure>
        <img src={chefProfile.image} alt="Profile Image" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Name: {chefProfile.name}</h2>
        <p>Experience: {chefProfile.experience}</p>
        <p>Best Recipes: {chefProfile.recipes} items</p>

        <div className="card-actions justify-end">
          <button className="btn rounded text-white gap-4">
            Likes
            <div className="badge badge-primary">{chefProfile.likes}</div>
          </button>

          <button className="btn rounded text-white">
            <Link to={`/bestChef/${chefProfile._id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilesCard;
