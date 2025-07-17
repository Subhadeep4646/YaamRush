import React from 'react';

function SearchDisplay({ foodNames, image, description, price,rating}) {
    return (
        <div className="flex justify-between  p-4 rounded-lg shadow-md w-[70%] ml-30 mt-10">
            {/* ✅ Left Section: Food Details */}
            <div className="flex flex-col w-3/4">
            <div>
                <img className='w-5 h-5 object-cover mb-2' src="https://cdn.vectorstock.com/i/1000v/00/43/non-vegetarian-sign-veg-logo-symbol-vector-50890043.jpg"></img>
            </div>
                <h1 className="text-xl font-semibold text-gray-800">{foodNames}</h1>
                <h3 className="text-lg font-normal text-black mt-2 ml-1 mb-2">₹{price/100}</h3>
                <div className='flex h-4 w-5 items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyWMSXcIc8-U_lYB5Ak0n_eIpmbh3-3QJKw&s"></img>
                <h2 className='ml-1 text-green-600 font-bold'>{rating}</h2>
                </div>
                <h2 className="text-gray-600 mt-6 line-clamp-2">
                   {description}</h2>
            </div>

            {/* ✅ Right Section: Image */}
            <div className="relative  flex justify-end">
    {/* ✅ Food Image */}
    <img 
        src={image} 
        alt={foodNames} 
        className="w-80 h-55 rounded-lg shadow-lg"
    />
    
    {/* ✅ Positioned Button */}
    <button className="absolute  bottom-4 left-25 ml-2 bg-white text-green-500 text-2xl px-5 py-1 rounded-md shadow-md">
        Add
    </button>
</div>

        </div>
    );
}

export default SearchDisplay;
