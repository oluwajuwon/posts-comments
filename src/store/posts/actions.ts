import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { BASE_URL } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPostComments = createAsyncThunk(
  'photos/getPostComments',
  async (postId: number, thunkAPI) => {
    try {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}comments?postId=${postId}`,
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
