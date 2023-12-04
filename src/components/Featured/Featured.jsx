import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { BallTriangle } from "react-loader-spinner";

const Featured = () => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setLoading(true);

    fetch("https://classic-hotel-server.vercel.app/featuredRooms")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRooms(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex  justify-center items-center py-40 ">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="blue"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="mt-8 mb-8">
      <div data-aos="flip-left" data-aos-delay="300">
        <h2 className="text-4xl text-center  ">
          Featured
          <span className="text-blue-500 ml-3">Rooms</span>
        </h2>
      </div>
      <div className=" mt-5 grid grid-cols-1 gap-3 w-full mx-auto md:grid-cols-3  ">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
