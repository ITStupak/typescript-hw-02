import { RotatingLines } from "react-loader-spinner";
import { FC } from "react";

const Loader:FC = () => {
  return (
    <RotatingLines
      visible={true}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
};

export default Loader;
