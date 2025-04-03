// import { useParams } from "react-router-dom";
// import Header from "./Header";
// function RestaurantDetails()
// {
// const params = useParams();

// return(<>
//     <h1>{params.id}</h1>
//     <div className="m-4 bord w-fit p-3">
//         <img src={params.img} alt="" width="200px" height="200px" className="rounded-b-xl h-32" />
//         <h2 className="font-bold">{params.name}</h2>
//         <span>{params.rating}</span>
//         <span>{params.time}</span>
//         <p>{params.cuisine}</p>
//       </div>
//       </>
// )
// }
// export default RestaurantDetails;
import { useParams } from "react-router-dom";
import Header from "./Header";
import { restaurants } from "../utils/mockData";
import { useDispatch } from "react-redux";
import { use } from "react";
import { addItem } from "../utils/CartSllice";
function RestaurantDetails() {
  const params = useParams();
  const restaurantId = params.id;
  const dispatch=useDispatch();
  const restaurant   = restaurants.find((res) => res.id === parseInt(restaurantId));
    function handleAddItem(item)
    {
        dispatch(addItem({payload:restaurant }));
    } 

  return (
    <>
    <div className=" flex w-3/4 mx-auto border-b-4 p-4">
    <div className="flex flex-col w-3/4">
       <h1>{restaurant.name}</h1>

        <span>{restaurant.rating}</span>
        <span>{restaurant.time}</span>
        <p>{restaurant.cuisine}</p>
      </div>
      <img src={restaurant.img} alt="" width="200px" height="200px" className="w-52 h-44 rounded-md border shadow-lg border-gray-100" />

   <button className="border bg-green-300 h-8 relative top-16" onClick={()=>handleAddItem({restaurant})}>ADD</button>     
      </div>
    
    </>
  );
}
export default RestaurantDetails;