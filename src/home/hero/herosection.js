import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from './video1.mov'

const HeroSection = () => {


  const navigate = useNavigate();

  return (
    <header className="bg-white relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      {/* Text Content */}
      <div className="relative z-30 p-5 text-4xl text-white bg-opacity-50 rounded-xl mb-8">
        VG SERENGETI GROUP
      </div>
      
      {/* Button */}
      <div className="relative z-30">
  <button className="px-8 py-4 bg-gradient-to-r from-green-700 to-lime-400 text-white text-lg font-regular text-sm rounded-full shadow-lg hover:opacity-80 transition duration-300" onClick={()=>navigate("/about")}>Discover who we are</button>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-20"></div>
      {/* <video autoPlay loop muted className="absolute z-10 w-full h-auto min-w-full min-h-full max-w-none max-h-none">
  <source
    src={video}
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video> */}

<iframe 
  src="" 
  className="absolute z-10 w-full h-auto min-w-full min-h-full max-w-none max-h-none"
  frameborder="0"
  allow="autoplay; loop; muted"
  allowfullscreen>
</iframe>


{/* <iframe 
  src="https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157291&authkey=!ADIyH6K7M1tRguc&autoplay=1&loop=1" 
  class="absolute z-10 w-full h-auto min-w-full min-h-full max-w-none max-h-none" 
  frameborder="0" 
  allow="autoplay" 
  allowfullscreen>
</iframe> */}

    </header>
  );
};

export default HeroSection;
