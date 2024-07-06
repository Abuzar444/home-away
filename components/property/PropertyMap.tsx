"use client";
import { findCountryByCode } from "@/utils/countries";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Title from "./Title";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import CountryFlagAndName from "../card/CountryFlagAndName";
const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl,
  iconSize: [20, 30],
});

const PropertyMap = ({ countryCode }: { countryCode: string }) => {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryByCode(countryCode)?.location as [number, number];
  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <Title text='Where you will be staying' />
        <CountryFlagAndName countryCode={countryCode} />
      </div>
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className='h-[50vh] rounded relative  z-0'
        center={location || defaultLocation}
        zoom={7}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker
          position={location || defaultLocation}
          icon={markerIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
};
export default PropertyMap;