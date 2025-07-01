"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const SchoolMap = dynamic(() => import("./Components/SchoolMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#25282f]">
      <div className="w-[95%] p-4 bg-white shadow-md rounded-lg">
        <SchoolMap />
      </div>
    </div>
  );
}
