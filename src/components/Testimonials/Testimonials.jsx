import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/c2.jpg";
import c3 from "../../assets/images/c3.jpg";

const Testimonials = () => {
  return (
    <div className="mt-8 mb-8 ">
      <div data-aos="flip-down">
        <p className="text-4xl text-center mb-4">
          Customers
          <br />
          <span className="text-blue-500 ">Testimonials</span>
        </p>
      </div>

      <Carousel
      // showArrows={true}
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
      >
        <div className="h-[300px]">
          <img src={c2} alt="" />
          <div className="legend ">
            " "I stayed at this hotel for a business trip, and I was thoroughly
            impressed. The room was well-appointed and had all the amenities I
            needed. The hotel's location was convenient, and the breakfast
            buffet was fantastic. I'll be returning on my next visit.""
            <p className=" text-2xl font-medium">---Sarah Johnson</p>
          </div>
        </div>
        <div className=" h-[300px]">
          <img src={c3} alt="" />
          <div className="legend ">
            ""My family and I had a fantastic vacation at this hotel. The kids
            loved the pool, and we enjoyed the on-site restaurants. The staff
            went out of their way to make us feel welcome. A memorable
            experience for sure.""
            <p className=" text-2xl font-medium">---David Anderson</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
