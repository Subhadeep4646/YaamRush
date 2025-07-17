import React, { useState } from 'react';
import {additems,Increment,Decrement} from  "../Store/CartSlicer"
import { useDispatch, useSelector } from 'react-redux';

function RestInfo({ resData }) {
    //const [Count,setCount]=useState(0);

    

    const items =useSelector(state=>state.cartslice.items);
    const element=items.find(item=>item.id===resData.id);
    const Count=element?element.quantity:0;
    
    const dispatch=useDispatch();

    function additemshandle(){
        dispatch(additems(resData));
    }
    function Incrementhandle(){
        dispatch(Increment(resData));
     }
     function Decrementhandle(){
        dispatch(Decrement(resData));
     }



  return (
   <div>
    <img className='w-6 h-6 ml-15 mt-4' src="https://www.shutterstock.com/image-vector/veg-sign-vector-illustration-vegetarian-260nw-2476192271.jpg"></img>
    <div className="flex justify-between items-center w-full p-2 ml-5 rounded-lg shadow-lg bg-white
    border-t-0 border-gray-200 mt-2">
      {/* Restaurant Details */}

      <div className="w-[90%] space-y-2 ml-7">
        <h2 className="text-xl font-bold text-gray-800">{resData?.name || "Unknown Restaurant"}</h2>
        <p className="text-lg font-bold text-gray-600">
          ₹{resData?.price/100||resData.defaultPrice/100}
        </p>
        <div className='flex'>
        <img  className="w-5 h-5"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcRciGUBK4Dw_yT7pRVMHrSMGFOTUHutrkg&s"></img>
        <p className='ml-1'>{resData?.ratings?.aggregatedRating?.rating}</p>
        <p className="ml-2">{resData?.ratings?.aggregatedRating?.ratingCountV2?`(${resData.ratings.aggregatedRating.ratingCountV2})`
        : "Not Enough reviews"}</p>
        </div>
        <p className="text-gray-600 text-sm">{resData?.category || "No category available"}</p>
        <p className="text-gray-500">{resData?.description || "No description available"}</p>
        <p>{resData?.itemAttribute.vegClassifier}</p>
      </div>

      {/* Restaurant Image */}
      <div className="w-[15%] ml-10  rounded-4xl relative">
        {resData?.imageId ? (
          <img 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData.imageId}`}
            alt={resData?.name}
            className="w-40 h-40 object-cover rounded-lg shadow-lg bg-transparent"
          />
        ) : (
          <div className="w-40 h-40 flex items-center justify-center bg-gray-200 rounded-lg text-gray-500">
            No Image
          </div>
        )}
        {Count === 0 ? (
            <button
              className="absolute top-28 left-8 w-24 text-green-600 font-extrabold bg-white rounded-xl shadow-lg hover:transform hover:translate-y-0.5 p-2"
            onClick={()=>additemshandle()}
            >
              Add
            </button>
          ) : (
            <div className="flex bg-white border border-gray-400 absolute top-28 left-8 p-1 rounded-lg w-[63%] items-center">
              <button className="ml-1 mr-4 border-gray-500 px-0.5 text-green-600 font-bold" onClick={()=>Incrementhandle()}>+</button>
              <p className=' text-green-600 font-bold'>{Count}</p>
              <button className="ml-4 border-gray-500 px-0.5  text-green-600 font-bold  pr-1" onClick={()=>Decrementhandle()}>-</button>
            </div>
          )}
      </div>
      </div>
      </div>
  );
}

export default RestInfo;
