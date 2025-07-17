import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';

function RestHeader() {
     const counter =useSelector(state=>state.cartslice.count);
  return (
    <div className='container mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center rounded-2xl'>
        <div>
            <p className='text-orange-600 rounded-2xl p-2 font-bold'>Swiggy</p>
        </div>
        <div>
            <Link to ="/CHECKOUT" >
            <p className='p-4 bg-amber-300 rounded-3xl'>Cart{`${counter}`}</p>
            </Link>
        </div>
    </div>
  )
}
export default RestHeader