import React from 'react'

function DineCard({restro}) {
  return (
    <div className='max-w-sm flex-none mb-30 ml-13 border border-gray-200 rounded-xl shadow-lg'>
        <div className='relative'>
            <img className="w-200 h-90 object-cover rounded-4xl p-3  "src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restro?.info?.mediaFiles[0]?.url}></img>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <p className=' absolute bottom-6 left-6 font-extrabold text-white text-2xl'>{restro.info.name}</p>
            <p className='absolute bottom-72 left-65 font-extrabold rounded-xl bg-green-400 text-2xl p-1 w-23 px-13'>{restro.info.rating.value}</p>
        <img className="absolute bottom-74 left-68 font-extrabold text-white text-2xl h-6 w-7 rounded-xl object-cover"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifZ798Bhcb4A_yjLOIXMHYqLQ9oQ26ceOfZW9dH9dYJQf7H_QML8rrLw0cQ-jrQ2zWSg&usqp=CAU"></img>
        </div>
        <div className="text-gray-700 ml-5 mr-5">
       <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-2 mt-2">
           <p>{restro?.info?.cuisines?.[0]},</p>
            <p>{restro?.info?.cuisines?.[1]}</p>
        </div>
        <p>{restro?.info?.costForTwo}</p>
       </div>
          <div className='flex justify-between'>
            <p className=''>{restro.info.locationInfo.formattedAddress}</p>
            <p className=''>{restro.info.locationInfo.distanceString}</p>
            </div>
        </div>
        <div>
            <button className='bg-gray-200 ml-5 mt-6 w-40 rounded-2xl h-10 shadow-lg'> ✅ Table Booking</button>
        </div>
        <div className='bg-green-700 ml-5 mt-6 w-85 rounded-xl h-13 text-white font-bold flex justify-between p-3 shadow-lg '>
            <button className=''> % Flat 40% off on pre-booking</button>
            <button className=''> +3 more</button>
        </div>
        <div className='bg-green-300 ml-5 mt-4 w-85 rounded-xl h-13 text-green-600 font-normal text-serif flex justify-between p-3 shadow-lg '>
        <button className=''> Upto 10% off with bank-offers</button>
        </div>
    </div>
  )
}

export default DineCard