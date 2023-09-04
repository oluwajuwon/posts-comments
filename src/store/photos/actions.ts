import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { Photo } from '../../types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getAllPhotos = createAsyncThunk(
  'photos/getAllPhotos',
  async (_, thunkAPI) => {
    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}photos`);
      return response.data?.slice(0, 19);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
