"use client";

import dynamic from "next/dynamic";

const SchoolMap = dynamic(() => import("./SchoolMap"), {
  ssr: false,
});
export default function MapAnelkystiresPage() {
  return (
    <div className="p-4">
      <SchoolMap />
    </div>
  );
}