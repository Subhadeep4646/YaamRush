import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="bg-[#ff5200] w-full">
      {/* Top Navbar */}
      <div className="flex flex-wrap justify-between items-center container mx-auto p-4 text-white font-serif text-lg">
        <img
          className="w-32 h-10 mt-2"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="Swiggy Logo"
        />
        <div className="flex flex-wrap gap-4 md:gap-10 items-center mt-2">
          <a className="mt-2" target="_blank" rel="noopener noreferrer" href="https://www.swiggy.com/corporate">
            Swiggy Corporate
          </a>
          <a className="mt-2" target="_blank" rel="noopener noreferrer" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a
            className="border border-white py-2 px-4 rounded-2xl mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://partner.swiggy.com/login#/swiggy"
          >
            Get the App ↗
          </a>
          <a
            className="border border-black px-6 py-2 rounded-2xl bg-black text-white mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://partner.swiggy.com/login#/swiggy"
          >
            Sign In
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative text-white text-center font-serif py-20 px-4">
        <div className="max-w-[850px] mx-auto text-3xl md:text-5xl font-bold leading-tight">
          <p>Order food & groceries. Discover best restaurants. Swiggy it!</p>
        </div>

        {/* Background Images */}
        <img
          className="hidden md:block h-64 w-44 absolute top-0 left-0 mt-10"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies"
        />
        <img
          className="hidden md:block h-72 w-48 absolute top-0 right-0 mt-10"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi"
        />

        {/* Search Section */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center mt-14">
          <input
            className="bg-white w-full md:w-[40%] px-5 py-3 text-lg md:text-xl rounded-2xl outline-none shadow-md text-black"
            placeholder="Enter your Delivery Location"
          />
          <input
            className="bg-white w-full md:w-[40%] px-5 py-3 text-lg md:text-xl rounded-2xl outline-none shadow-md text-black"
            placeholder="Search for restaurant, item or more"
          />
        </div>

        {/* Category Banners */}
        <div className="flex flex-wrap gap-4 justify-center mt-16">
          <Link to="/restaurant">
            <img
              className="w-36 md:w-48 lg:w-56 h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
              alt="Food"
            />
          </Link>
          <img
            className="w-36 md:w-48 lg:w-56 h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
            alt="Offers"
          />
          <img
            className="w-36 md:w-48 lg:w-56 h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
            alt="Discounts"
          />
          <img
            className="w-36 md:w-48 lg:w-56 h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
            alt="Genie"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
