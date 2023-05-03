import React from "react";
import { ImSpinner } from "react-icons/im";

const LoaderPage = () => {
  return (
    <div className="hero min-h-screen">
      <ImSpinner className="text-black h-20 w-40 animate-spin" />
    </div>
  );
};

export default LoaderPage;
