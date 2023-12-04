import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  //   console.log(room);
  const { room_name, img_link } = room;
  return (
    <div>
      <div>
        <div className="card  bg-base-100 shadow-xl image-full ">
          <figure>
            <img className="" src={img_link} alt={room_name} />
          </figure>
          <div className="card-body" data-aos="zoom-in">
            <h2 className="card-title">{room_name}</h2>

            <div className="card-actions py-20">
              <Link
                to={"/rooms"}
                className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-pink-500 hover:to-yellow-500 py-2
               px-2 rounded-xl text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
