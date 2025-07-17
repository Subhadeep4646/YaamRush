import React from "react";

const Skimmer = () => {
  return (
    <div className=" ml-20 w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-xl animate-pulse">
          {/* Inner Divs (3 per block) */}
          <div className="h-20 bg-gray-300 rounded-lg mb-3"></div>
          <div className="h-6 bg-gray-300 rounded-lg mb-3"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default Skimmer;
