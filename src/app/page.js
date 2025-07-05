"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const SchoolMap = dynamic(() => import("./Components/SchoolMap"), {
  ssr: false,
});

export default function Home() {
  const [showAllSchools, setShowAllSchools] = useState(true);
  return (
    <div className="flex flex-col lg:gap-2 lg:flex-row-reverse  items-center justify-center min-h-[90vh] md:min-h-[95vh] bg-[#F2F2F2] pt-[10vh] lg:pt-[3%]">
      <div className="w-full  p-4 bg-white shadow-md rounded-lg">
        <SchoolMap showAllSchools={showAllSchools} />
      </div>

      <div class="flex text-black bg-[#cdccce] border border-[#003375] rounded-lg p-4 mt-4 w-3/4 md:w-[10%]">
        <div class="flex items-center h-5">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            checked={showAllSchools}
            onChange={(e) => setShowAllSchools(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div class="ms-2 text-sm">
          <label for="helper-checkbox" class="font-medium">
            Προβολή όλων των σχολείων
          </label>
          <p
            id="helper-checkbox-text"
            class="text-xs font-normal text-gray-800"
          >
            Επιλέξτε αυτήν την επιλογή για να εμφανιστούν όλα τα σχολεία.
            <br />
          </p>
          <p class="text-xs font-normal text-gray-500">
            Αποεπιλέξτε την για να εμφανίζονται μόνο οι βασικές κατηγορίες
            σχολείων (Δημοτικά, Γυμνάσια, Λύκεια κτλ).
          </p>
        </div>
      </div>
    </div>
  );
}
