import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuCard from './MenuCard';
import { Link } from 'react-router';

function RestaurantMenu() {
    const { id } = useParams(); // ✅ Correctly extracting `id`
    const [filterData, setData] = useState(null); // ✅ Use state to store API response
    const [selected,setselected]=useState(false);

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
                setData(filterData); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [id]); 
    
    console.log("Fetched Data:", filterData); 

    return (
        <div>
            <div >
                <Link to={`/city/delhi/${id}/search`}>
                <p className=" text-xl ml-40 rounded-2xl mt-10 w-[80%] bg-gray-200 py-3 text-center">Search for Dishes</p>
                </Link>
            </div>
       <div className="flex text-xl ml-40 mt-10 w-[80%]">
            <button className={`border border-gray-700 rounded-xl p-1.5 px-2 ${selected==='Veg'?"bg-green-400":"bg-gray-300"}`}
             onClick={()=>setselected(selected==='Veg'?null:'Veg')}>Veg</button>
            <button className={`p-1.5 border border-gray-700 ml-3 rounded-xl ${selected==='Non-Veg'?"bg-red-500":"bg-gray-300"}`}
            onClick={()=>setselected(selected==='Non-Veg'?null:'Non-Veg')} >Non-Veg</button>
        </div>
        <div className='w-[80]% mx-auto'>
       {
        filterData?.map((menuItems)=>(
            <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} selected={selected}/>
        ))
       }
        </div>
        </div>
    );
}

export default RestaurantMenu;
