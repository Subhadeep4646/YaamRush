import React from 'react'

function RestCard({restinfo}) {
  return (
    <div>
        <img className="w-35 h-45 rounded-xl"src={'https://media-assets.swiggy.com/swiggy/image/upload/'+restinfo.imageId}></img>
    </div>
  )
}

export default RestCard