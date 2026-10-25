
"use client";

import { useEffect, useRef } from "react";
import { Map, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");

export default function ServiceMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new Map({
      container: mapContainer.current,
      center: [7.0116, 51.4556],
      zoom: 11,
      minZoom: 8,
      maxZoom: 18,
      style: "/stamen.json",
      attributionControl: {
        compact: true,
      },
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-full w-full min-w-0"
    />
  );
}
