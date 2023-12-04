import React from "react";
import err from "../../assets/images/err.jpg";
const Error = () => {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <img className="w-full h-screen" src={err} alt="" />
      </div>
    </div>
  );
};

export default Error;
