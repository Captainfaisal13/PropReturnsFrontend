import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyle from "./mapStyle";

const Map = () => {
  const coordinates = { lat: 29.742321445214937, lng: -95.42209878705238 };
  return (
    <div
      className="hidden sm:block w-full rounded-xl overflow-hidden map"
      style={{ height: "70vh" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          styles: mapStyle,
          disableDefaultUI: true,
          zoomControl: true,
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
