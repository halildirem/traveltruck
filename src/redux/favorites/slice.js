import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { ids: [] },
  reducers: {
    toggleFavorite: (state, { payload }) => {
      state.ids = state.ids.includes(payload)
        ? state.ids.filter((id) => id !== payload)
        : [...state.ids, payload];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
