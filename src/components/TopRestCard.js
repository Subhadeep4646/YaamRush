import React from 'react';
import { Link } from 'react-router';
function TopRestCard({ restinfo }) {
  if (!restinfo || !restinfo.info) return null; // Handle empty data gracefully

  return (
    <Link to={"/city/delhi/"+restinfo.info.id}>
    <div className="m-2 mb-2">
        <div className='relative hover:scale-105 transition-transform'>
      <img 
        className=" w-180 h-50 rounded-xl " 
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${restinfo.info.cloudinaryImageId}`} 
        alt={restinfo.info.name} 
      />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <h2 className="text-md font-semibold mt-2 ml-1">{restinfo.info.name}</h2>
      <div className='flex items-center relative'>
        <div className='absolute bottom-16'>
        <p className='text-white font-bold ml-3 text-xl'>{restinfo?.info?.costForTwo}</p>
        </div>
        <img className='ml-2 w-4 h-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeav6-jz7cOHhL87nZagKk_X_46aJ23bsGw&s"></img>
        <div className='flex'>
        <h2 className='ml-2'>{restinfo.info.avgRating}</h2>
        <h2 className='ml-3'>{restinfo.info.sla.slaString}</h2>
        </div>
      </div>
      <div className='flex '>
      <h1 className='ml-2'>{restinfo.info.cuisines?.slice(0, 2).join(", ")}</h1>
      </div>
      <div>
      <h2 className='ml-2'>{restinfo.info.areaName}</h2>
      </div>
    </div>
    </Link>
  );
}

export default TopRestCard;
