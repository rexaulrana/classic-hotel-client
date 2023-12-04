import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
// import { reload } from "firebase/auth";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [reviewItem, setReviewItem] = useState({});
  const url = `https://classic-hotel-server.vercel.app/mybookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        // setLoading(true);
        // setLoadedBooking(result.data);
        // console.log(result.data);
        const item = result?.data?.find((d) => d._id === id);
        // console.log(item);
        setReviewItem(item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //   const { room_name, email, price_per_night } = reviewItem;
  //   console.log(reviewItem);
  //   const navigate = useNavigate();
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = parseInt(form.rating.value);
    const comment = form.comment.value;
    // const reviewDate = new Date();
    const reviewDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    // console.log(reviewDate);
    const newReview = {
      name,
      rating,
      comment,
      reviewDate,

      reviewItem,
    };
    // console.log(newReview);

    axios
      .post("https://classic-hotel-server.vercel.app/reviews", newReview)
      .then((result) => {
        // console.log(result.data);
        if (result.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review has been saved",
            showConfirmButton: true,
            timer: 1500,
          });
          form.reset();
          navigate("/myBookings");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   if (reload()) {
  //     navigate("/myBookings");
  //   }
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-10">
        <h1 className="text-4xl text-center text-white ">
          Add Your Valuable Review
        </h1>
      </div>

      <div>
        <form
          onSubmit={handleAddReview}
          className="flex flex-col justify-center items-center"
        >
          {/* name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* rating */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* comment */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Comment</span>
            </label>
            <textarea
              name="comment"
              className="textarea textarea-bordered"
              placeholder="write here"
              required
            ></textarea>
          </div>
          <button className="mt-1 btn  btn-outline btn-accent">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
