import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../pages/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
