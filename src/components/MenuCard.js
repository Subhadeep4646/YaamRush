import React, { useState } from "react";
import RestInfo from "./RestInfo";

//restaurant

function MenuCard({ menuItems,selected }) {
  const [isOpen, setIsOpen] = useState(true);

  // If `categories` exist, recursively render subcategories
  if ("categories" in menuItems) {
    return (
      <div className="w-[full] container mx-auto">
        <p className="ml-4 mb-6 text-2xl mt-5 font-extrabold text-red-600">
          {menuItems.title}
        </p>
        <div>
          {menuItems.categories?.map((items) => (
            <MenuCard key={items.title} menuItems={items} selected={selected} />
          ))}
        </div>
      </div>
    );
  }
   
  if(selected ==='Veg'){
     return(
        <div>
               <div className="w-[85%] container mx-auto">
      {/* Header with title, count, and toggle button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="ml-4 mb-6 text-xl mt-12 font-extrabold text-red-600 shadow-lg">
            {menuItems.title}
          </p>
          <p className="font-bold text-xl mt-5 ml-2">
            ({menuItems?.itemCards?.length || 0})
          </p>
        </div>
        <button
          className="text-3xl font-extrabold ml-[100px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "˄"}
        </button>
      </div>
      {/* Show items only if isOpen is true */}
      {isOpen && (
        <div>
          {menuItems?.itemCards?.filter((food)=> ("isVeg" in food?.card?.info)).map((items) => (
            <RestInfo key={items?.card?.info?.id} resData={items?.card?.info} />
          ))}
        </div>
      )}
    </div>
          
        </div>
     )
  }


  if(selected ==='Non-Veg'){
    return(
       <div>
            <div className="w-[85%] container mx-auto">
      {/* Header with title, count, and toggle button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="ml-4 mb-6 text-xl mt-12 font-extrabold text-red-600 shadow-lg">
            {menuItems.title}
          </p>
          <p className="font-bold text-xl mt-5 ml-2">
            ({menuItems?.itemCards?.length || 0})
          </p>
        </div>
        <button
          className="text-3xl font-extrabold ml-[100px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "˄"}
        </button>
      </div>

      {/* Show items only if isOpen is true */}
      {isOpen && (
        <div>
          {menuItems?.itemCards?.filter(food=>!("isVeg" in food?.card?.info)).map((items) => (
            <RestInfo key={items?.card?.info?.id} resData={items?.card?.info} />
          ))}
        </div>
      )}
    </div>
       </div>
    )
 }
  

  return (
    <div>
    <div className="w-[85%] container mx-auto">
      {/* Header with title, count, and toggle button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="ml-4 mb-6 text-xl mt-12 font-extrabold text-red-600 shadow-lg">
            {menuItems.title}
          </p>
          <p className="font-bold text-xl mt-5 ml-2">
            ({menuItems?.itemCards?.length || 0})
          </p>
        </div>
        <button
          className="text-3xl font-extrabold ml-[100px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "˄"}
        </button>
      </div>

      {/* Show items only if isOpen is true */}
      {isOpen && (
        <div>
          {menuItems?.itemCards?.map((items) => (
            <RestInfo key={items?.card?.info?.id} resData={items?.card?.info} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default MenuCard;
