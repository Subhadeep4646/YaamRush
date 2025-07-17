import React from 'react'
import { restaurants } from '../Utils/RestroType'
import DineCard from './DineCard'
function RestroDisplay() {
  return (
    <div >
        <div className='w-[90%] container mx-auto '>
        <h1 className='text-2xl font-bold'>Discover multiple restaurants in Dineout</h1>
        </div>
        <div className='flex flex-no-wrap overflow-x-auto mt-5 mr-4'>
          {
            restaurants.map((restro)=><DineCard key={restro?.info.id} restro={restro} />)
          }
        </div>

        <div className='mb-30 rounded-xl'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
        </div>
        {/* footer */}
    <div className="py-10 container mx-auto items-center w-[80%]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section 1: Cities with food delivery */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cities with food delivery</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[
              "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune", 
              "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Jaipur"
            ].map((city, index) => (
              <button key={index} className=" h-15 border border-gray-300 rounded-lg p-3 text-gray-700 hover:bg-gray-200">
                Order food online in {city}
              </button>
            ))}
            <button className="text-red-500 font-bold flex items-center ml-4">
              Show More <span className="ml-2">⬇</span>
            </button>
          </div>
        </div>

        {/* Section 2: Cities with grocery delivery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Cities with grocery delivery</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[
              "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune", 
              "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Jaipur"
            ].map((city, index) => (
              <button key={index} className="border border-gray-300 rounded-lg p-3 text-gray-700 hover:bg-gray-200">
                Order grocery delivery in {city}
              </button>
            ))}
            <button className="text-red-500 font-bold flex items-center ml-4">
              Show More <span className="ml-2">⬇</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-700">
          {/* Swiggy Logo */}
          <div className="col-span-2 lg:col-span-1">
            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="Swiggy Logo" className="w-28 mb-3" />
            <p className="text-gray-500">© 2025 Swiggy Limited</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              {["About Us", "Swiggy Corporate", "Careers", "Team", "Swiggy One", "Swiggy Instamart", "Swiggy Dineout", "Swiggy Genie", "Minis"].map((item, index) => (
                <li key={index} className="hover:text-orange-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact us</h3>
            <ul className="space-y-1">
              {["Help & Support", "Partner With Us", "Ride With Us"].map((item, index) => (
                <li key={index} className="hover:text-orange-500 cursor-pointer">{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4">Legal</h3>
            <ul className="space-y-1">
              {["Terms & Conditions", "Cookie Policy", "Privacy Policy"].map((item, index) => (
                <li key={index} className="hover:text-orange-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Available Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Available in:</h3>
            <ul className="space-y-1">
              {["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"].map((city, index) => (
                <li key={index} className="hover:text-orange-500 cursor-pointer">{city}</li>
              ))}
            </ul>
            <select className="mt-3 px-3 py-2 border border-gray-300 rounded-lg text-gray-600">
              <option>685 cities</option>
            </select>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Life at Swiggy</h3>
            <ul className="space-y-1">
              {["Explore With Swiggy", "Swiggy News", "Snackables"].map((item, index) => (
                <li key={index} className="hover:text-orange-500 cursor-pointer">{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4">Social Links</h3>
            <div className="flex space-x-3 mt-2">
              {["linkedin", "instagram", "facebook", "pinterest", "twitter"].map((icon, index) => (
                <i key={index} className={`fab fa-${icon} text-gray-500 hover:text-orange-500 text-xl cursor-pointer`}></i>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center">
          <h3 className="font-semibold text-lg">For better experience, download the Swiggy app now</h3>
          <div className="flex justify-center mt-4 space-x-4">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="Google Play" className="h-12 cursor-pointer" />
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="App Store" className="h-12 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RestroDisplay