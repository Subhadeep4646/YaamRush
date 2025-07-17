import React, { useEffect, useState } from 'react';
import TopRestCard from './TopRestCard';
import RestCard from './RestCard';
import Skimmer from './Skimmer'

function Restaurant() {
  const [imageGridData, setImageGridData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const swiggyUrl = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1";
        
        const response = await fetch(proxyUrl + swiggyUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract Image Grid Data
        const imageGrid = data?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
        setImageGridData(imageGrid);

        // Extract Top Restaurants Data
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurantData(restaurants);
        console.log(restaurants);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if(restaurantData.length==0&&imageGridData.length==0)
    return <Skimmer/>
  return (
    <div>
      <h1 className='font-bold ml-38 mt-20 text-xl'>What's on your mind?</h1>
      <div className="w-[79%] overflow-x-auto whitespace-nowrap scrollbar-hide mt-5 mr-2 ml-40">
        <div className="flex mb-2 mt-10 ">
          {imageGridData.map((imageInfo, index) => (
            <div key={index} className="min-w-[160px]">
              <RestCard restinfo={imageInfo} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl ml-40 mt-15'>Restaurants with online food delivery in Delhi
        </h1>
      </div>
      <div className="w-[79%] overflow-x-auto whitespace-nowrap scrollbar-hide mt-5 mr-2 ml-40">
        <div className=" grid grid-rows-2 grid-flow-col gap-x-6 gap-y-4 mb-20 mt-10">
          {restaurantData.map((restinfo, index) => (
            <div key={index} className='min-w-[280px]'>
              <TopRestCard restinfo={restinfo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
