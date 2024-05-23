import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageOne = () => {

  const navigate = useNavigate();

  return(
  <div className="relative max-w-7xl mx-auto mt-20">
    <img
      className="h-96 w-full object-cover rounded-md"
      src="https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157268&authkey=%21ALc47L1upi7EB5c&width=1024"
      alt="Random image"
    />
    <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8">2023 PRODUCTS AND REPORTS</h2>
      <div>
        <button onClick={()=>navigate("/products")} className="px-6 py-3 bg-gradient-to-r from-green-700 to-lime-400 text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-80 transition duration-300">Check Now</button>
      </div>
    </div>
  </div>
  )
};

export default ImageOne;
