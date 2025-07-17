import React from 'react';
import { Grocery } from '../Utils/Grocery';
import GroceryCard from './GroceryCard';

function Groceries() {
  return (
    <div className="mb-10">
      <h1 className="ml-25  font-bold text-3xl mb-10 mt-10">Shop groceries on Instamart</h1>
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-100 ml-15 container mx-auto">
        <div className="flex gap-5 w-max p-4 mb-5">
          {Grocery.map((foodData) => (
            <GroceryCard key={foodData.id} foodData={foodData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Groceries;
