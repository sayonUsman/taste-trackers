import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import ProfilesCard from "../ProfilesCard/ProfilesCard";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const bestChefs = useLoaderData();

  return (
    <div>
      <Header></Header>

      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold mt-9 md:mt-12 lg:mt-16 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
          Our Best Chefs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bestChefs.map((profile) => (
            <ProfilesCard key={profile.id} profile={profile}></ProfilesCard>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold mt-9 md:mt-12 lg:mt-16 mb-3 md:mb-7 lg:mb-9 xl:mb-12">
          Want to Taste
        </h1>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
