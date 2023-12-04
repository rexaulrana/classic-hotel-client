import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css

const Videos = () => {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-6xl text-center">
          {" "}
          Want To <br />
          <span className="text-blue-500 ml-3">Explore More? </span>
        </h1>
      </div>

      <div className="flex justify-center mt-3">
        <Player>
          <source src="../../../assets/videos/v1.mp4" type="video/mp4" />
        </Player>
      </div>
      {/* <div className="flex justify-center">
        <video autoPlay muted width="640" height="360" controls>
          <source
            src="https://www.youtube.com/results?search_query=vip+hotel+room"
            type="video/mp4"
          ></source>
        </video>
      </div> */}
    </div>
  );
};

export default Videos;
