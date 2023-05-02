import React from "react";
import header_image from "../../../assets/header_image.jpg";

const Header = () => {
  return (
    <div>
      <div class="bg-cover bg-center ">
        <img src={header_image} className="w-full max-h-screen"></img>
      </div>

      <div className="absolute text-white z-10 top-0 ml-7 md:ml-12 mt-28 md:mt-48 lg:mt-60 2xl:mt-72">
        <h1 className="text-xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          Want to Hire <br />
          Our Great Chef
        </h1>

        <h3 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold mt-1 md:mt-3 xl:mt-5 2xl:mt-7">
          Enjoy Every Day with Delicious Taste
        </h3>
      </div>
    </div>
  );
};

export default Header;
