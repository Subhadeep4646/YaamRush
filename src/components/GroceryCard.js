import React from 'react'
function GroceryCard({foodData}) {
  return (
    <div >
    <a href={foodData?.action?.link}>
    <div className='flex'>
   <img  className="w-45 h-50 p-3 rounded-2xl "src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
   </div>
   </a>
   <h2>{foodData?.action?.text}</h2>
</div>
  )
}

export default GroceryCard