import React from "react";


const AboutPage = () => {
  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center bg-[#F2F2F2] px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Discover Schools Across Greece
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome! This is an independent project that brings together
          information about
          <strong> all schools in Greece</strong> on one easy-to-explore map.
          Using open data from the{" "}
          <a
            href="https://data.gov.gr/datasets/minedu_schools"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Greek Government’s Open Data Portal
          </a>
          , this site helps you see where schools are located and learn more
          about them — all in one place.
        </p>
        <p className="text-md text-gray-600 mb-6">
          This project is <strong>not an official government page</strong>. It
          simply makes public data more accessible for everyone interested in
          Greece’s educational landscape.
        </p>
        <p className="text-md text-gray-600 mb-6">
          Feel free to look around, explore regions, and see how education
          connects every corner of Greece!
        </p>
        <p className="text-md text-gray-600">
          Contact me at:{" "}
          <a
            href="mailto:johnpapani1@gmail.com"
            className="text-blue-600 underline italic hover:text-blue-400"
          >
            johnpapani1@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
