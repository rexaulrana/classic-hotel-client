import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NoWorkResult from "postcss/lib/no-work-result";
import Swal from "sweetalert2";

const UpdateBooking = () => {
  //   const params = useParams();
  //   console.log(params);
  const navigate = useNavigate();
  const booking = useLoaderData();
  //   console.log(booking);
  const { _id, date, room_images, room_name } = booking;

  const handleUpdate = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const newDate = { date };
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        fetch(`https://classic-hotel-server.vercel.app/myBookings/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newDate),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount > 0) {
            }
            navigate("/myBookings");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Update booking</title>
      </Helmet>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-10">
        <h1 className="text-4xl text-center text-white ">
          Update your booking
        </h1>
      </div>
      <div>
        {/* <h1 className="text-3xl text-center">Select Your New Booking Date</h1> */}
      </div>
      <div className="flex justify-center items-center">
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={room_images}
              alt="Shoes"
              className="rounded-xl h-[200px] w-full "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{room_name}</h2>
            <form className=" text-center py-5  " onSubmit={handleUpdate}>
              <h2 className="mb-4 font-medium">Change Booking Date</h2>
              <input type="date" name="date" defaultValue={date} id="" />
              <br />
              <button className=" mt-3 btn btn-success text-black">
                Submit
              </button>
            </form>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooking;
