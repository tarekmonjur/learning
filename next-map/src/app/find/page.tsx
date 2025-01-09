"use client";
const API_KEY = "AIzaSyCeaeLFe5MPBjooi92kfGNMe8EP-HJ1qak";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  AdvancedMarker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
type Poi = { key: string; location: google.maps.LatLngLiteral };

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import { useCallback, useEffect, useRef, useState } from "react";

import {Circle} from '@/components/circle'

const PoiMarkers = (props: { pois: Poi[] }) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  const [circleCenter, setCircleCenter] = useState(null)

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
    if (!map) return;
    if (!ev.latLng) return;
    setCircleCenter(ev.latLng);
    console.log("marker clicked:", ev.latLng.toString());
    map.panTo(ev.latLng);
  });

  return (
    <>
      <Circle
        radius={800}
        center={circleCenter}
        strokeColor={'#0c4cb3'}
        strokeOpacity={1}
        strokeWeight={3}
        fillColor={'#3b82f6'}
        fillOpacity={0.3}
      />
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={(marker) => setMarkerRef(marker, poi.key)}
          clickable={true}
          onClick={handleClick}
        >
          <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default function Page() {
  // const locations: Poi[] = [
  //   { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
  //   { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
  //   { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
  //   { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
  //   { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
  //   { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
  //   { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
  //   { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
  //   { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
  //   { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
  //   { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
  //   { key: "kingStreetWharf", location: { lat: -33.8665445, lng: 151.1989808 } },
  //   { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
  //   { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
  //   { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
  // ];

  const locations: Poi[] = [];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>test</h1>
      <APIProvider apiKey={API_KEY} onLoad={() => console.log("Maps API has loaded.")}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: -33.8567844, lng: 151.213108 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={"28659a7b75645af5"}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log("camera changed:", ev.detail.center, "zoom:", ev.detail.zoom)
          }
        >
          <PoiMarkers pois={locations} />
        </Map>
      </APIProvider>
    </div>
  );
}
