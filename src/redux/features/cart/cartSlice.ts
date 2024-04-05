// src/redux/features/cart/cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  cartItems: Product[];
}

// Verifica si estamos en el lado del cliente antes de acceder a localStorage
const isClient = typeof window !== "undefined";

const initialState: CartState = {
  cartItems: isClient
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload);
      if (isClient) {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      if (isClient) {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
