import { ImSpinner } from "react-icons/im";

const Loader = () => {
  return (
    <div className="hero min-h-screen">
      <ImSpinner className="text-black h-20 w-40 animate-spin" />
    </div>
  );
};

export default Loader;
