import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookingCard = ({ booking, handleCancelBooking }) => {
  //   console.log(booking);
  const { _id, room_name, room_images, date } = booking;

  return (
    <div className="card  bg-base-100 h-full shadow-xl">
      <figure className="px-10 pt-10">
        <img src={room_images} className=" h-[300px] w-full rounded-xl" />
      </figure>
      <div className="card-body  items-center text-center">
        <h2 className="card-title">{room_name}</h2>
        <p>Date: {date}</p>
        <div className="card-actions flex flex-col md:flex-none">
          <Link
            booking={booking}
            to={`/addReview/${_id}`}
            className="btn btn-outline btn-info "
          >
            Add Review
          </Link>
          <Link
            to={`/updateBooking/${_id}`}
            className="btn btn-outline btn-success"
          >
            Update date
          </Link>
          <button
            onClick={() => handleCancelBooking(_id)}
            className="btn btn-outline btn-warning"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
