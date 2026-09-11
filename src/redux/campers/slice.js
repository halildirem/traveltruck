import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCampers,
  fetchMoreCampers,
  fetchCamperById,
} from './operations';

const initialState = {
  items: [],
  total: 0,
  page: 1,
  isLoading: false,
  isLoadingMore: false,
  error: null,
  current: null,
  currentLoading: false,
  currentError: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearCurrent: (state) => {
      state.current = null;
      state.currentError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.items = [];
        state.total = 0;
        state.page = 1;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items;
        state.total = payload.total;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchMoreCampers.pending, (state) => {
        state.isLoadingMore = true;
        state.error = null;
      })
      .addCase(fetchMoreCampers.fulfilled, (state, { payload }) => {
        state.isLoadingMore = false;
        state.page += 1;
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })
      .addCase(fetchMoreCampers.rejected, (state, { payload }) => {
        state.isLoadingMore = false;
        state.error = payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.currentLoading = true;
        state.currentError = null;
        state.current = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.currentLoading = false;
        state.current = payload;
      })
      .addCase(fetchCamperById.rejected, (state, { payload }) => {
        state.currentLoading = false;
        state.currentError = payload;
      });
  },
});

export const { clearCurrent } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
