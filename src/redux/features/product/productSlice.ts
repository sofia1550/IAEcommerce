// Actualiza tus thunks en productSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
// Importa tu tipo Product correctamente
import { Product } from "../../../app/components/products/productCard/productCard";
import { API_BASE_URL } from '../../../config';
interface ProductState {
  visibleProducts: Product[];
  showMore: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  visibleProducts: [],
  showMore: false,
  status: 'idle',
  error: null,
};

// Utiliza la variable de entorno para la URL base
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/api/products`);
  return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product: Product) => {
  const response = await axios.post<Product>(`${API_BASE_URL}/api/products/add`, product);
  return response.data;
});
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, ...product }: Product & { id: string }) => {
    const response = await axios.put<Product>(`${API_BASE_URL}/api/products/update/${id}`, product);
    return response.data;
  }
);

// Thunk para eliminar un producto
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: string) => {
    await axios.delete(`${API_BASE_URL}/api/products/delete/${id}`);
    return id;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setShowMore: (state, action: PayloadAction<boolean>) => {
      state.showMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.visibleProducts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.visibleProducts.push(action.payload); 
        state.status = 'succeeded';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.visibleProducts.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.visibleProducts[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.visibleProducts = state.visibleProducts.filter(product => product.id !== action.payload);
      })
  },
});

export const { setShowMore } = productSlice.actions;

export const selectShowMore = (state: RootState) => state.product.showMore;
export const selectVisibleProducts = (state: RootState) => state.product.visibleProducts;

export default productSlice.reducer;
