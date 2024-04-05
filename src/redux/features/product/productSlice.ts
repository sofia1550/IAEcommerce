import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Product } from "../../../app/components/products/productCard/productCard"; // Asegúrate de que la ruta sea correcta

interface ProductState {
  visibleProducts: Product[];
  showMore: boolean;
}

const initialState: ProductState = {
  visibleProducts: [],
  showMore: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setShowMore: (state, action: PayloadAction<boolean>) => {
      state.showMore = action.payload;
    },
    setVisibleProducts: (state, action: PayloadAction<Product[]>) => {
      state.visibleProducts = action.payload;
    },
  },
});

export const { setShowMore, setVisibleProducts } = productSlice.actions;

export const selectShowMore = (state: RootState) => state.product.showMore;
export const selectVisibleProducts = (state: RootState) =>
  state.product.visibleProducts;

export default productSlice.reducer;
