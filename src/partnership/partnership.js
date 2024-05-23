import React, { useEffect, useState } from 'react';
import './part.css'; // or whatever your CSS file name is


const services = [
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157272&authkey=%21ANGzGD1nDemBS2A&width=1000&height=1000" },
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157270&authkey=%21AAhfzDuy6mkX9C4&width=1000&height=1000" },
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157271&authkey=%21AFCs-IbtJesQpUM&width=1000&height=1000" },
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157274&authkey=%21ACIwNq1HhJSPD5c&width=1000&height=1000" },
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157275&authkey=%21AHCQ6aic5jX89yM&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157276&authkey=%21AGpbQ8H9FXfLdAU&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157277&authkey=%21ABpITqP4Mf9oCgM&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157278&authkey=%21AFZ-3eBbRMnvhJ4&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157279&authkey=%21APnemVcA3vwfhpY&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157280&authkey=%21AIcYfLuFlUDEzU4&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157281&authkey=%21ADOglkzqW2vTBnQ&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157282&authkey=%21AKkE2HlE1yidTd8&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157283&authkey=%21AN62mTglCrn8LuA&width=1000&height=1000"},
  { image: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157284&authkey=%21AHPylT90GD8QQ5U&width=1000&height=1000"}
];

const PartnerShip = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Adding a delay for animation effect
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen p-4 mt-10 ${animate ? 'animate-fade-in' : ''}`}>
      <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-gray-600 text-center mb-8">
          PARTNERSHIPS
        </h1>
        <p className="text-gray-700 text-lg text-center mb-12">
          VG Serengeti partnerships with different companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <img className="w-8/12 mx-auto" src={service.image} alt={`Partner ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
