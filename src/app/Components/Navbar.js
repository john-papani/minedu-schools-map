"use client";
import React, { useState } from "react";
import Logo from "../../../public/download.svg"; 
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#003375] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={Logo}
            alt="Minedu Schools Map Logo"
            width={120}
            height={80}
            className="cursor-pointer hover:opacity-80 transition"
            onClick={() => router.push("/")}
          />
          <p
            className="text-base md:text-2xl font-bold text-white tracking-wide cursor-pointer hover:opacity-80 transition"
            onClick={() => router.push("/")}
          >
            Minedu Schools Map
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <p
            className="text-lg text-white italic font-bold tracking-wide cursor-pointer hover:opacity-80 transition"
            onClick={() => router.push("/about")}
          >
            About
          </p>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#003375] px-6 pb-4">
          <p
            className="text-lg text-white italic font-bold tracking-wide cursor-pointer hover:opacity-80 transition"
            onClick={() => {
              router.push("/about");
              setIsOpen(false);
            }}
          >
            About
          </p>
        </div>
      )}
    </header>
  );
}
