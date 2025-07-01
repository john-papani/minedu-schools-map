"use client";
import React from "react";
import Logo from "../../../public/download.svg"; // Adjust the path as necessary
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();

  return (
    <header className="bg-[#003375] shadow-md fixed top-0 left-0 w-full z-50">
      <div className=" w-[90%] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between  items-center">
        <div className="flex  flex-row items-center gap-4">
          <Image
            src={Logo}
            alt="Minedu Schools Map Logo"
            width={120}
            height={80}
            className="cursor-pointer hover:opacity-80 transition"
            onClick={() => router.push("/")}
          />
          <p
            className="text-2xl font-bold text-[white] tracking-wide cursor-pointer hover:opacity-80 transition"
            onClick={() => router.push("/")}
          >
            Minedu Schools Map
          </p>
        </div>
        <p
          className="text-lg text-white italic font-bold text-space tracking-wide hover:cursor-pointer"
          onClick={() => router.push("/about")}
        >
          About
        </p>
      </div>
    </header>
  );
}
