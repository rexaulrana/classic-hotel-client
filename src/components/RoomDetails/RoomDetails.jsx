import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import ReviewCard from "./AddReview/ReviewCard/ReviewCard";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const loadedData = useLoaderData();
  // console.log(loadedData);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  // console.log(details);
  useEffect(() => {
    setLoading(true);
    const data = loadedData?.find((d) => d?._id === id);
    setDetails(data);
    setLoading(false);
  }, []);

  const {
    room_images,
    room_size,
    room_description,
    available_seats,
    special_offers,
    room_name,
    price_per_night,
    _id,
  } = details;

  // when there is no seat then user can not add it
  const handleNotAvailable = () => {
    Swal.fire({
      title: "Sorry",
      text: "This room is not available !!! Please contact with us for advance booking.",
      icon: "error",
    });
  };

  // book now
  const handleBookNow = (e) => {
    e.preventDefault();
    if (!user?.email) {
      navigate("/login");
      return Swal.fire({
        title: "Sorry",
        text: "Please login or registration first",
        icon: "error",
      });
    }
    if (available_seats > 0) {
      const form = e.target;
      const date = form.date.value;
      const newBooking = {
        room_images,
        room_size,
        room_description,
        available_seats,
        special_offers,
        room_name,
        price_per_night,
        date,
        email: user.email,
      };
      //   console.log(newBooking);

      Swal.fire({
        title: "Are you sure?",
        text: `Room name: ${room_name}     ||                         Price(Per night):$${price_per_night} || Date: ${date}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add it!!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(
              "https://classic-hotel-server.vercel.app/bookings",
              newBooking
            )
            .then((result) => {
              //   console.log(result.data);
              if (result.data.acknowledged) {
                Swal.fire({
                  title: "Thank you",
                  titleText: "This room added  successfully",
                  icon: "success",
                });
                navigate("/myBookings");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    }
  };

  // display review
  useEffect(() => {
    fetch("https://classic-hotel-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.reviewItem);
        // console.log(details);
        setLoading(true);
        const loadedReview = data?.filter(
          (d) => d?.reviewItem?.room_name === details.room_name
        );
        // console.log(loadedReview);
        setReviews(loadedReview);
        setLoading(false);
        // console.log(review);
        // console.log(loadedData);

        // console.log(details.room_name);
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
    <div className="mb-8">
      <Helmet>
        <title>Room Details</title>
      </Helmet>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-10">
        <h1 className="text-4xl text-center text-white ">Room Details</h1>
      </div>
      <div>
        {/* <h1>id{_id}</h1> */}
        <div className="card mt-5 lg:card-side bg-base-100 shadow-xl">
          <div className="relative">
            <figure className="h-[400px] md:w-[500px]">
              <img
                className="h-[400px] w-full  rounded-lg"
                src={room_images}
                alt="Album"
              />
            </figure>
            <div className="absolute bg-yellow-600  opacity-100 top-3 right-3 rounded-lg  text-black py-2 px-3">
              {special_offers && (
                <h2 className="font-semibold">{special_offers}</h2>
              )}
            </div>
          </div>
          <div className="card-body">
            <h2 className=" text-2xl font-medium">{room_name}</h2>
            <p className="text-lg font-medium">
              Description:
              <span className="font-normal"> {room_description}</span>{" "}
            </p>
            <p className="text-lg font-medium">
              Price Per Night: ${price_per_night}
            </p>
            <p className="text-lg font-medium">Room Size: {room_size}</p>
            <div>
              {available_seats > 0 ? (
                <p className="text-lg font-medium">
                  Available Seats:{" "}
                  <span className="font-normal"> {available_seats}</span>{" "}
                </p>
              ) : (
                <p>No available seats</p>
              )}
            </div>
            {/* <p>Available Seats:{available_seats } </p> */}

            <form onSubmit={handleBookNow}>
              {" "}
              <span>
                <h1 className=" text-lg font-medium">Select Date</h1>
                <input required type="date" name="date" id="" />
              </span>
              <div className="card-actions justify-end">
                {available_seats > 0 ? (
                  <button className="btn btn-primary none ">Book Now</button>
                ) : (
                  <button
                    onClick={handleNotAvailable}
                    className="btn btn-warning none opacity-50 "
                  >
                    Book Now
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mt-6 mb-6">Customers Review</h1>
        <div>
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              reviews={reviews}
            ></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
