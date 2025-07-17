import React from 'react'
import { useSelector } from 'react-redux'


function Checkout() {
    const data=useSelector(state=>state.cartslice.items);
    console.log(data);
    const counter =useSelector(state=>state.cartslice.total);
    const count =useSelector(state=>state.cartslice.count);
    return (
    <div>
    {data?.map((value, index) => (
        <div key={index} className="mt-5 container mx-auto ml-49">
  <div className="text-lg font-semibold">{value.name}</div>
  <div className="flex mt-2">
    <div className="text-sm text-gray-600 w-1/2">{value.description}</div>
    <div className="w-1/2 flex ml-30">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}
        alt={value.name}
        className="w-40 h-40 object-cover rounded-lg shadow-lg bg-transparent"
      />
    </div>
    </div>
    <div className='ml-50 text-xl'><h1>No.of quantity selected for this item : {value.quantity}</h1></div>
  {value.price ? (
    <div className="text-lg font-bold mt-2 text-gray-800">₹{value.price / 100}</div>
  ) : (
    <div className="text-sm text-gray-500 mt-2">Rs {counter/100}</div>
  )}
</div>
    )
    )}
        <div className='flex'>
          <div className='ml-200 mt-40 text-2xl font-medium text-amber-800'>Total Rs :{counter/100}</div>
          <div className='mt-40 ml-10 text-2xl mb-20 '>Total quantity:{count}</div>
          </div>
  </div>
  
  )
}

export default Checkout