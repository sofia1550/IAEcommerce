// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/user/userSlice";
import uiSlice from "./features/ui/uiSlice";
import productReducer from "../redux/features/product/productSlice"; // Asegúrate de que la ruta sea correcta
import cartReducer from "../redux/features/cart/cartSlice"; // Asegúrate de que la ruta sea correcta

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer, // Agrega esta línea
    ui: uiSlice,
    cart: cartReducer,
  },
});

// Type for dispatch and RootState
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
