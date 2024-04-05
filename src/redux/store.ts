// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/user/userSlice";
import uiSlice from "./features/ui/uiSlice";
import productReducer from "./features/product/productSlice"; // Asegúrate de que la ruta sea correcta
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiSlice,
    product: productReducer, 
    cart: cartReducer,
  },
});

// Type for dispatch and RootState
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
