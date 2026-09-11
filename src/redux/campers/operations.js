import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCampersRequest,
  fetchCamperByIdRequest,
} from '../../services/api';
import { PAGE_SIZE } from '../../constants/filters';

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters } = getState();
      return await fetchCampersRequest({ filters, page: 1, limit: PAGE_SIZE });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCampers = createAsyncThunk(
  'campers/fetchMore',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters, campers } = getState();
      return await fetchCampersRequest({
        filters,
        page: campers.page + 1,
        limit: PAGE_SIZE,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await fetchCamperByIdRequest(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
