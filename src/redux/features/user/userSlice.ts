// src/redux/features/user/userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

interface User {
  id: string;
  nombre: string;
  email: string;
  role: String;
}

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

const getToken = (): string | null => localStorage.getItem('token');

const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/auth/verify' : '/api/auth/verify';

export const checkAuthentication = createAsyncThunk<UserState, void, { state: RootState }>(
  'user/checkAuthentication',
  async (_, { getState, rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      return rejectWithValue('Token no encontrado');
    }

    try {
      const response = await axios.get(API_BASE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { isAuthenticated: true, user: response.data as User, isLoading: false, error: null };
    } catch (error) {
      return rejectWithValue('No se pudo verificar la autenticación');
    }
  }
);

export const logoutUser = createAsyncThunk<void, void, { state: RootState }>(
  'user/logoutUser',
  async (_, { dispatch }) => {
    localStorage.removeItem('token');
    dispatch(logout());
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthentication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthentication.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(checkAuthentication.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.isLoading = false;
        state.error = action.error.message || 'Error desconocido';
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
