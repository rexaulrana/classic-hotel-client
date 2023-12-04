import React from "react";
import Tilt from "react-parallax-tilt";

const Galleries = () => {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-4xl text-center mb-4 " data-aos="flip-right">
          Our
          <span className="text-blue-500 mb-6"> Gallery</span>
        </h1>

        <div>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={0.5}
            gyroscope={true}
          >
            <div className="flex-col justify-center items-center w-full md:grid grid-cols-2">
              <img
                src="https://i.ibb.co/vJR24Jn/f4.jpg"
                className=" inner-element "
                alt="pic"
              />
              <img src="https://i.ibb.co/SX8HTj2/f3.jpg" alt="" />
              <img src="https://i.ibb.co/xSxdnDj/f1.jpg" alt="" />
              <img src="https://i.ibb.co/mzLrN1S/f2.jpg" alt="" />
              <img src="https://i.ibb.co/Sd87P3N/f8.jpg" alt="" />
              <img src="https://i.ibb.co/6Ft6NX1/f7.jpg" alt="" />
              <img src="https://i.ibb.co/vDtSdCD/f6.jpg" alt="" />
              <img src="https://i.ibb.co/sjd0hr4/f5.jpg" alt="" />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
