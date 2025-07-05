import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { schools } from "./minedu_schools.js";
import MarkerClusterGroup from "react-leaflet-cluster";
import RBush from "rbush";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ✅ Build RBush index ONCE outside React components
const index = new RBush();
const indexedSchools = schools
  .filter((school) => school.lat && school.lng)
  .map((school) => ({
    minX: school.lng,
    minY: school.lat,
    maxX: school.lng,
    maxY: school.lat,
    ...school,
  }));
index.load(indexedSchools);

function VisibleMarkers({ showAllSchools }) {
  const map = useMap();
  const [visibleSchools, setVisibleSchools] = useState([]);
  const allowedSubtypes = [
    "Ημερήσιο ΕΠΑΛ",
    "Εσπερινό ΕΠΑΛ",
    "Ημερήσιο Γυμνάσιο",
    "Ημερήσιο Γενικό Λύκειο",
    "Πειραματικό Γυμνάσιο",
    "Ενιαίου Τύπου Ολοήμερο Νηπιαγωγείο",
    "Ενιαίου Τύπου Ολοήμερο Δημοτικό Σχολείο",
  ];
  const [loading, setLoading] = useState(true);

  const updateVisibleSchools = () => {
    setLoading(true); // start loading

    const bounds = map.getBounds();
    const zoom = map.getZoom();
    console.log("Current zoom level:", zoom);

    if (zoom <= 10) {
      setVisibleSchools([]);
      setLoading(false); // done loading
      return;
    }

    // Use RBush for fast bounding box search
    const bbox = {
      minX: bounds.getWest(),
      minY: bounds.getSouth(),
      maxX: bounds.getEast(),
      maxY: bounds.getNorth(),
    };

    const allSchoolVisible = index.search(bbox);

    const mainSchoolVisible = allSchoolVisible.filter((school) =>
      allowedSubtypes.includes(school.school_subtype)
    );

    setVisibleSchools(showAllSchools ? allSchoolVisible : mainSchoolVisible);
    setLoading(false); // done loading
  };

  useEffect(() => {
    updateVisibleSchools();
    map.on("moveend", updateVisibleSchools);
    return () => map.off("moveend", updateVisibleSchools);
  }, [map,showAllSchools]);

  // Show loading spinner
  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          background: "rgba(255,255,255,0.9)",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          fontWeight: "bold",
        }}
      >
        Loading markers...
      </div>
    );
  }

  // Show message if no markers visible and zoom is out of range
  if (visibleSchools.length === 0) {
    return (
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.9)",
          padding: "8px 16px",
          borderRadius: 6,
          boxShadow: "0 0 6px rgba(0,0,0,0.2)",
          fontWeight: "bold",
          pointerEvents: "none", // so it doesn't block map interactions
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="size-7"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="italic text-base">Please zoom in/out to see schools.</p>
      </div>
    );
  }

  return (
    <MarkerClusterGroup chunkedLoading>
      {visibleSchools.map((school) => (
        <Marker key={school.school_code} position={[school.lat, school.lng]}>
          <Popup>
            <strong>{school.school_name}</strong>
            <br />
            {school.school_district}
            <br />
            {school.street_address}, {school.zip_code}
            <br />
           {school.phone_number?.toString().split(".")[0]}
            <br />
            {school.email}
            <br />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${school.lat},${school.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Δείτε στο Google Maps
            </a>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}

export default function SchoolMap({ showAllSchools }) {
  const center = [38.0795036, 23.7689699];
  return (
    <MapContainer
      center={center}
      zoom={11}
      className="h-[72vh] lg:h-[80vh] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <VisibleMarkers showAllSchools={showAllSchools} />
    </MapContainer>
  );
}
