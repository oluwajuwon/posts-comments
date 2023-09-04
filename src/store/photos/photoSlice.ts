import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Photo } from '../../types';
import { getAllPhotos } from './actions';

type InitialState = {
  photos: Photo[];
  loading: boolean;
  error: any;
};
const initialState: InitialState = {
  photos: [],
  loading: false,
  error: false,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllPhotos.pending.type, state => {
        state.loading = true;
      })
      .addCase(getAllPhotos.fulfilled.type, (state, action: PayloadAction) => {
        if (Array.isArray(action?.payload)) {
          state.photos = action.payload;
        }
        state.loading = false;
      })
      .addCase(getAllPhotos.rejected.type, (state, action: PayloadAction) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default photosSlice.reducer;
