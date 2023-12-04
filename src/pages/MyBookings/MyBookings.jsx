import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import BookingCard from "./BookingCard/BookingCard";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [loadedBooking, setLoadedBooking] = useState([]);
  // const params = useParams();
  // console.log(params);
  // const [bookings, SetBookings] = useState(loadedBooking);
  const url = `https://classic-hotel-server.vercel.app/mybookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((result) => {
        setLoading(true);
        setLoadedBooking(result.data);
        // console.log(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://classic-hotel-server.vercel.app/myBookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });

              const remaining = loadedBooking.filter((book) => book._id !== id);
              setLoadedBooking(remaining);
              // console.log("deleted", remaining);
            }
          });
      }
    });
  };
  // console.log(bookings);
  return (
    <div>
      <Helmet>
        <title>My Booking</title>
      </Helmet>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-10">
          <h1 className="text-4xl text-center text-white ">My Booking</h1>
        </div>
      </div>
      <div>
        {loadedBooking.length > 0 ? (
          <div className="grid grid-cols-1  gap-3 md:grid-cols-2">
            {loadedBooking.map((booking) => (
              <BookingCard
                key={booking._id}
                handleCancelBooking={handleCancelBooking}
                booking={booking}
              ></BookingCard>
            ))}
          </div>
        ) : (
          <div className="text-center text-3xl py-40">
            {" "}
            <h2>You have no booking Yet!!!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
