import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: Array<{
    id: number;
    name: string;
    price: string;
    quantity: number;
  }>;
  value: number;
}

const initialState: CartState = {
  items: [],
  value: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addToCart: (state, action: PayloadAction<{
      id: number;
      name: string;
      price: string;
    }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.value += 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { increment, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;