import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string; // Agrega esta línea
}
interface CartState {
  cartItems: Product[];
}
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
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cartItems[index].quantity += 1; // Incrementa la cantidad si el producto ya está en el carrito
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Añade el producto al carrito con cantidad inicial de 1
      }
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
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        // Decrementa solo si la cantidad es mayor que 1.
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
