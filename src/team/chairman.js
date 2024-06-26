import React from 'react';

const Chairman = () => {
  // Assuming there's only one chairman
  const chairman = {
    name: 'MR. KODZO MASSENYA',
    title: 'CHAIRMAN',
    avatar: "https://onedrive.live.com/embed?resid=38E489A2E9BE257B%2157286&authkey=%21AEF1sceYXwgaDOA&width=357&height=357"
  };

  return (
    <div className="container max-w-7xl px-4 mt-20">
      <div className="flex flex-col items-center justify-center">
        {/* Chairman Image */}
        <div className="mb-6">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={chairman.avatar}
            alt={chairman.name}
          />
        </div>
        {/* Chairman Details */}
        <div className="text-center">
          <h1 className="text-gray-900 text-2xl lg:text-2xl font-bold mb-2">{chairman.name}</h1>
          <div className="text-gray-700 text-2xl mb-4">{chairman.title}</div>
      
        </div>
      </div>
    </div>
  );
};

export default Chairman;
