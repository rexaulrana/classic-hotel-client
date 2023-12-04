import React from "react";

const ReviewCard = ({ review }) => {
  //   console.log(review);
  const { comment, name, rating, reviewDate } = review;
  return (
    <div className="text-left border-amber-500 border-2 py-3 px-5 mb-5 w-[400px]">
      <h1 className="font-bold">
        Customer Name: <span className="font-medium">{name}</span>{" "}
      </h1>
      <h1 className="font-bold">
        Review Date: <span className="font-medium">{reviewDate}</span>{" "}
      </h1>
      <h1 className="font-bold">
        Rating: <span className="font-medium">{rating}</span>{" "}
      </h1>
      <h1 className="font-bold">
        Comment: <span className="font-medium">{comment}</span>{" "}
      </h1>
    </div>
  );
};

export default ReviewCard;
