import React from "react";
import header_image from "../../../assets/header_image.jpg";

const Header = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${header_image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Want to Hire <br />
              Our Great Chef
            </h1>
            <p className="mb-5">Enjoy Every With Delicious Taste</p>
            <button className="btn rounded-md bg-white text-black hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
