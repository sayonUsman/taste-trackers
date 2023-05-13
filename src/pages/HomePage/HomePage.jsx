import Header from "./Header/Header";
import Footer from "../SharedPage/Footer/Footer";
import ProfilesCard from "./ProfilesCard/ProfilesCard";
import { Outlet, useLoaderData } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const Home = () => {
  const bestChefs = useLoaderData();
  useSetTitle("Home");

  return (
    <div>
      <div className="container mx-auto">
        <Header></Header>

        <div>
          <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-semibold mt-12 md:mt-15 lg:mt-24 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
            Our Best Chefs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bestChefs.map((chefProfile) => (
              <ProfilesCard
                key={chefProfile.id}
                chefProfile={chefProfile}
              ></ProfilesCard>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-semibold mt-12 md:mt-15 lg:mt-24 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
            Want to Taste
          </h1>

          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
