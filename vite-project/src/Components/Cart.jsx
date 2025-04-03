// import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../utils/CartSllice";
// function Cart()
// {
//     const dispatch = useDispatch();
// const cartItems = useSelector((store)=> store.cart.items);

// return(<>

// <button className="border bg-green-300 h-8 relative top-16" onClick={()=>dispatch(clearCart())}>Clear</button>

// {cartItems.map((restaurant)=>
// {
//     return(<>

//         <div key={restaurant.id}className=" flex w-3/4 mx-auto border-b-4 p-4">
//             <div className="flex flex-col w-3/4">
//                <h1>{restaurant.name}</h1>

//                 <span>{restaurant.rating}</span>
//                 <span>{restaurant.time}</span>
//                 <p>{restaurant.cuisine}</p>
//               </div>
//               <img src={restaurant.img} alt="" width="200px" height="200px" className="w-52 h-44 rounded-md border shadow-lg border-gray-100" />

//             </div>

//         </>)
// })
// }
// </>)

// }
// export default Cart;

import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/CartSllice";
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-center">
        <button
          className="border bg-slate-50 h-8 relative top-16 "
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </button>
      </div>

      {cartItems.map((restaurant, index) => (
        <div key={index} className="flex w-3/4 mx-auto border-b-4 p-4">
          <div className="flex flex-col w-3/4">
            <h1>{restaurant.payload.name}</h1>
            <span>{restaurant.payload.rating}</span>
            <span>{restaurant.payload.time}</span>
            <p>{restaurant.payload.cuisine}</p>
            <span> 
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(addItem({ payload: restaurant }))}
              >
                {restaurant.quantity }
                 ADD
              </button>
            </span>
            <span>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 ml-auto"
                onClick={() => dispatch(removeItem())}
              >
                Delete
              </button>
            </span>
          </div>
          <img
            src={restaurant.payload.img}
            alt=""
            width="200px"
            height="200px"
            className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
          />
        </div>
      ))}
    </>
  );
}
export default Cart;
