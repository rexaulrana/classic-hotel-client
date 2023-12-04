import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Helmet } from "react-helmet-async";

const Slider = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="Coverflow"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log()}
      >
        <SwiperSlide className="w-full mx auto">
          <img
            src="https://i.ibb.co/xqPJmcP/slider.jpg"
            className="w-full opacity-40 h-screen"
          />
          <div className="absolute  left-20 top-56 md:top-52 md:left-80 ">
            <h1 className="text-left text-white  text-xl md:text-6xl  font-semibold">
              Spend Time <br /> with Awesome <br />
              <span className="text-blue-500	">Places</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/WGyFfv7/slider4.jpg"
            className="w-full opacity-25 h-screen"
          />
          <div className="absolute  left-20 top-56 md:top-52 md:left-80  ">
            <h1 className="text-left text-white  text-xl lg:text-7xl font-semibold">
              MAKE <br /> YOURSELF <br /> AT <br />{" "}
              <span className="text-blue-500	">HOME</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/4V4N7F1/slider3.jpg"
            className="w-full opacity-40 h-screen"
          />
          <div className="absolute  left-20 top-56 md:top-52 md:left-80  ">
            <h1 className="text-left text-white  text-xl lg:text-7xl font-semibold">
              Live with <br /> Amazing <br />{" "}
              <span className="text-blue-500	">Environment</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/wCtpSvB/slider2.jpg"
            className="h-screen w-full opacity-40"
          />
          <div className="absolute  left-20 top-56 md:top-52 md:left-80 ">
            <h1 className="text-left text-white  text-xl lg:text-7xl font-semibold">
              Experience <br /> the greatest <br /> for your <br />{" "}
              <span className="text-blue-500	">Holidays.</span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
