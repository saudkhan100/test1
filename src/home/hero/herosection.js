import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
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
      <video autoPlay loop muted className="absolute z-10 w-full h-auto min-w-full min-h-full max-w-none max-h-none">
  <source
    src="https://cdn.pixabay.com/video/2024/05/28/214066.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

{/* <ReactPlayer
        url="https://www.youtube.com/watch?v=85kTHwJ1Ju8"
        playing={true}
        controls={false}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { modestbranding: 1, showinfo: 0, rel: 0 },
          },
        }}
        className="relative z-10 w-full h-full"
      /> */}
    






    </header>
  );
};

export default HeroSection;
