import React from "react";
import { Map, Marker } from "pigeon-maps";
const LocationMap = () => {
  return (
    <div className="mt-8">
      <div>
        <h1 className="text-6xl text-center">
          Find Our Location <br /> Using Map
        </h1>
      </div>
      <div className="mt-5">
        {" "}
        <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    </div>
  );
};

export default LocationMap;
