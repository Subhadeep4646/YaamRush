import React from 'react';
import { imageGridCards } from '../Utils/Food';
import FoodCard from './FoodCard';

function FoodDisplay() {
  return (
    <div className="container mx-auto">
      {/* Horizontal Scroll Wrapper */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-100">
        
        {/* Grid Layout for Two Rows, Scrolling Horizontally */}
        <div className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-4 w-max p-4 mt-20 mb-10">
          {imageGridCards.map((foodData) => (
            <div key={foodData.id} className="w-40">
              <FoodCard foodData={foodData} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FoodDisplay;
