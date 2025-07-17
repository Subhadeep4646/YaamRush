import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router'
import SearchDisplay from './SearchDisplay';

function Search() {
    const {id}=useParams();
    const [food,setFood]=useState("");
    const [filterData, setData] = useState(null); // ✅ Use state to store API response
    const [foodNames, setFoodNames] = useState([]); // Stores all food items
     useEffect(() => {
            async function fetchData() {
                try {
                    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                    const swiggyUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                    const response = await fetch(proxyUrl + swiggyUrl);
        
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
        
                    const jsonData = await response.json();
                    const tempData=jsonData?.data?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards;
                    const filterData=tempData.filter((items)=>'title'in items?.card?.card);
                    const foodNames = filterData?.flatMap(item => item?.card?.card?.itemCards || []) 
                    .map(item => ({
                        name: item?.card?.info?.name,
                        image: `https://media-assets.swiggy.com/swiggy/image/upload/${item?.card?.info?.imageId}`,
                        description:item.card.info.description,
                        price:item.card.info.defaultPrice||item.card.info.price,
                        rating:item.card.info.ratings.aggregatedRating.rating||"4.2"
                    }));
                      setFoodNames(foodNames);
                      setData(filterData); 
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            fetchData();
        }, [food]); 
        const filteredFoodNames = foodNames.filter(({name,image}) =>
            name.toLowerCase().includes(food.toLowerCase())
        );
  return (
    <div>
        <div className='w-[80%] mx-auto mt-30'>
            <input className="text-center w-[90%] py-2 rounded-2xl text-gray-700 font-bold border border-black bg-gray-300"
            placeholder='Search here for Dishes' onChange={(e)=>setFood(e.target.value)}></input>

            <div>
            {filteredFoodNames.length > 0 ? (
                        filteredFoodNames.map((item, index) => (
                            <SearchDisplay key={index} foodNames={item.name} filterData={filterData} 
                            filteredFoodNames={filteredFoodNames} image={item.image} 
                            description={item.description} price={item.price} rating={item.rating}/>
                        ))
                    ) : (
                        <p className="text-gray-600 mt-2">No matching dishes found</p>
                    )}
            </div>
        </div>
    </div>
  )
}
export default Search