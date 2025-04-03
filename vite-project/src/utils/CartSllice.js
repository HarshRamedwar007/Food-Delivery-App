// import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       let item = state.items.find(item=> item.id == action.payloadid)
//       const data = {...action.payload , quantity : 1};
//      if(!item)
//      {
//       state.items.push(data);
//      }
//      else
//      {
//       item.quantity++;
//      }
//       state.items.push(action.payload);
      
//     },
//     removeItem: (state, action) => {
//       state.items.pop();
//       let item = state.items.find(item=> item.id == action.payloadid)
//     item.quantity--;
//     if(item.quantity ==0)
//     {
//       const items =state.item.filter(item => item.id != act.payload.id);
//       state.items =items;
//     }

//     },
//     clearCart: (state, action) => {
//       state.items = [];
//     },
//   },
// });

// export const {addItem , removeItem , clearCart}=cartSlice.actions;
// export default cartSlice.reducer; 

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);
      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        item.quantity++;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;