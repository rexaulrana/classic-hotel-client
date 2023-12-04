import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import SingleRoomCard from "../../components/singleRoomCard/SingleRoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://classic-hotel-server.vercel.app/rooms?sort=${
        asc ? "asc" : "dsc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.price_per_night);
        setRooms(data);
        setLoading(false);
      });
  }, [asc]);

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
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-10">
        <h1 className="text-4xl text-center text-white ">Our Amazing Rooms</h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-medium mr-3">Filter by price: </h1>
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-primary mb-5 mt-3"
        >
          {asc ? "High To Low " : "Low To High"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
        {rooms.map((room) => (
          <SingleRoomCard key={room._id} room={room}></SingleRoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
