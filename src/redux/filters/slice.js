import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  equipment: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    toggleEquipment: (state, { payload }) => {
      state.equipment = state.equipment.includes(payload)
        ? state.equipment.filter((item) => item !== payload)
        : [...state.equipment, payload];
    },
    resetFilters: () => initialState,
  },
});

export const { setFilter, toggleEquipment, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
