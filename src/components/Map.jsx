import React, { useState } from "react";
import Title from "../components/Title";
import styled from "styled-components";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const apartmentData = [
  {
    name: "Studio Economy",
    coordinates: [47.511513, 19.050734],
    link: "https://bpdeluxe.bhajko.dev/apartments/studio-economy"
  },
  {
    name: "Studio Basic",
    coordinates: [47.506469, 19.058158],
    link: "https://bpdeluxe.bhajko.dev/apartments/studio-basic"
  },
  {
    name: "Studio Standard",
    coordinates: [47.503962, 19.058501],
    link: "https://bpdeluxe.bhajko.dev/apartments/studio-standard"
  },
  {
    name: "Studio Deluxe",
    coordinates: [47.503759, 19.06172],
    link: "https://bpdeluxe.bhajko.dev/apartments/studio-deluxe"
  },
  {
    name: "Family Economy",
    coordinates: [47.502309, 19.050991],
    link: "https://bpdeluxe.bhajko.dev/apartments/family-economy"
  },
  {
    name: "Family Basic",
    coordinates: [47.506629, 19.055411],
    link: "https://bpdeluxe.bhajko.dev/apartments/family-basic"
  },
  {
    name: "Family Standard",
    coordinates: [47.509963, 19.054682],
    link: "https://bpdeluxe.bhajko.dev/apartments/family-standard"
  },
  {
    name: "Family Deluxe",
    coordinates: [47.510253, 19.03959],
    link: "https://bpdeluxe.bhajko.dev/apartments/family-deluxe"
  },
  {
    name: "Penthouse Economy",
    coordinates: [47.504803, 19.038588],
    link: "https://bpdeluxe.bhajko.dev/apartments/penthouse-economy"
  },
  {
    name: "Penthouse Basic",
    coordinates: [47.505006, 19.047257],
    link: "https://bpdeluxe.bhajko.dev/apartments/penthouse-basic"
  },
  {
    name: "Penthouse Standard",
    coordinates: [47.51289, 19.037129],
    link: "https://bpdeluxe.bhajko.dev/apartments/penthouse-standard"
  },
  {
    name: "Penthouse Deluxe",
    coordinates: [47.51247, 19.032409],
    link: "https://bpdeluxe.bhajko.dev/apartments/penthouse-deluxe"
  }
];

function Maps() {
  const [selectedApt, setSelectedApt] = useState(null);

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 47.5081789, lng: 19.0487008 }}
    >
      {apartmentData.map((apt, index) => (
        <Marker
          key={index + 1}
          position={{ lat: apt.coordinates[0], lng: apt.coordinates[1] }}
          onClick={() => {
            setSelectedApt(apt);
          }}
        />
      ))}
      {selectedApt && (
        <InfoWindow
          position={{
            lat: selectedApt.coordinates[0],
            lng: selectedApt.coordinates[1]
          }}
          onCloseClick={() => {
            setSelectedApt(null);
          }}
        >
          <div>
            <h4>{selectedApt.name}</h4>
            <MapLink href={selectedApt.link}>View</MapLink>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Maps));

const MapDiv = styled.div`
  width: 100%;
  height: 500px;
`;

const MapSection = styled.section`
  padding: 2rem 0 0 0;
`;

const MapLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: #ff312e;
  font-weight: bold;
`;

const Map = () => {
  return (
    <MapSection>
      <Title title="Check locations" />
      <MapDiv>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </MapDiv>
    </MapSection>
  );
};

export default Map;
