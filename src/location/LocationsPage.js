import React from "react";
import { useNavigate } from "react-router-dom";

const LocationsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="py-0 bg-white">
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700">
        OUR LOCATIONS{" "}
      </h1>
      <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We operate across a global network <br />
        Our business brings together an international team based in more than 50
        locations worldwide and a range of operational locations. We work with
        producers and customers in over 150 countries.
      </p>

      <div className="relative mx-auto w-50">
        <img src="https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157269&authkey=%21AIHrkHcPXyhZh8A&width=6000&height=3000" alt="World Map" className="w-full" />
        <button
          onClick={() => navigate("/contact")}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 px-6 py-3 bg-gradient-to-r from-green-700 to-lime-400 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Explore Locations
        </button>
      </div>
    </div>
  );
};

export default LocationsPage;
