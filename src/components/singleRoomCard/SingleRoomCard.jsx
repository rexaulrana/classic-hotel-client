import React from "react";
import { Link } from "react-router-dom";

const SingleRoomCard = ({ room }) => {
  const {
    _id,
    room_name,
    room_images,
    price_per_night,
    available_seats,
    special_offers,
  } = room;

  return (
    <Link to={`/rooms/${_id}`}>
      <div className="card h-[400px]  bg-base-100 shadow-xl image-full">
        <figure className="">
          <img className="w-full" src={room_images} alt={room_name} />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title">{room_name}</h2>
          <p>
            Per Night: <span className="font-medium">${price_per_night}</span>
          </p>
          {/* <div className="absolute right-2 top-1 rounded-lg  badge badge-info  opacity-100 text-black ">
            <h2 className="font-medium">{special_offers}</h2>
          </div> */}
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Book Now</button> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleRoomCard;
