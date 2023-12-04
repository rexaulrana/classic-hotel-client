import Featured from "../../components/Featured/Featured";
import Galleries from "../../components/Galleries/Galleries";
import Videos from "../../components/Galleries/videos/Videos";
import Navbar from "../../components/Navbar/Navbar";
import Testimonials from "../../components/Testimonials/Testimonials";
import LocationMap from "../../components/map/LocationMap";
import Subscription from "../../components/subscribtion/Subscription";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Featured></Featured>
      <Galleries></Galleries>
      {/* <Videos></Videos> */}
      <Testimonials></Testimonials>
      <LocationMap></LocationMap>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
