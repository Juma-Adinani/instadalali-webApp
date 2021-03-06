import React, { useEffect, useState } from "react";
import {config } from "helpers";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const GOOGLE_KEY =config.GOOGLE_MAP_KEY ;

function Map(props) {
  const { item } = props;
  const location = item?.location;
  const position = [location?.lat, location?.lng];

  return !!location ? (
    <div className="google-map mb-120">
      {false ? (
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          style={{ height: 60, width: "100%" }}
          dragging={false}
          doubleClickZoom={false}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {location?.name} <br /> Exact location will be shared on booking
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <iframe
            title={location.name}
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}&q=${position.join(',')}`}
        ></iframe>
      )}
    </div>
  ) : (
    <div>
      <h6>Not Available</h6>
    </div>
  );
}

export default Map;
