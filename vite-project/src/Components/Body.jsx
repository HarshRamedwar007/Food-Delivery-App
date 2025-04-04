// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { restaurants } from "../utils/mockData";
// import RestaurantCard from "./RestaurantCard";
// import Search from "./Search";
// import TopRatedRestaurants from "./TopRatedRestaurants";
// function Body()
// {
//     const [filteredrestaurants, setfilteredrestaurants] = useState(restaurants);
  
    

//     function filterRestaurants(filterRestaurants)
//     {

//         setfilteredrestaurants(filterRestaurants);
//     }

//     function FilterTopRatedRestaurants(TopRatedRestaurants)
//     {
//         setfilteredrestaurants(TopRatedRestaurants);
//     }
//     function handleAddItem(item)
//         {
//             dispatch(addItem({payload:restaurant }));
//         } 
// return(
// <div className="bg-slate-50 w-3/4 mx-auto my-8 h-screen">
// <h1 className="font-bold text-xl">
// Restaurants with Online Food Delivery in India
// <Search filterFunc = {filterRestaurants} restaurants={filteredrestaurants}/>
// <TopRatedRestaurants restaurants={filteredrestaurants}   TopRatedFunc={FilterTopRatedRestaurants}/>
// </h1>
// <div className="flex flex-wrap">
// {filteredrestaurants.map((res) => (
//   <Link to={`/restaurant/${res.id}`} key={res.id}>
//     <RestaurantCard resDetails={res} />
//   </Link>
 
  
// ))}    
// </div>

// </div>
// );
// }
// export default Body;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import TopRatedRestaurants from "./TopRatedRestaurants";

function Body() {
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);
  function fetchRestaurants() {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:4000/api/restaurant', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setRestaurants(data);
          setfilteredrestaurants(data);
        })
        .catch(error => console.error(error));
    } else {
      console.error('No token found in local storage');
    }
  }

  function filterRestaurants(filterRestaurants) {
    setfilteredrestaurants(filterRestaurants);
  }

  function FilterTopRatedRestaurants(TopRatedRestaurants) {
    setfilteredrestaurants(TopRatedRestaurants);
  }

  function handleAddItem(item) {
    dispatch(addItem({ payload: restaurant }));
  }

  return (
    <div className="bg-slate-50 w-3/4 mx-auto my-8 h-screen">
      <h1 className="font-bold text-xl">
        Restaurants with Online Food Delivery in India
        <Search filterFunc={filterRestaurants} restaurants={filteredrestaurants} />
        <TopRatedRestaurants restaurants={filteredrestaurants} TopRatedFunc={FilterTopRatedRestaurants} />
      </h1>
      <div className="flex flex-wrap">
        {filteredrestaurants.map((res) => (
          <Link to={`/restaurant/${res.id}`} key={res.id}>
            <RestaurantCard resDetails={res} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;