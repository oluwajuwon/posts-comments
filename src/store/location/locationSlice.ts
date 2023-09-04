import { createSlice } from '@reduxjs/toolkit';
import { GeoPosition } from 'react-native-geolocation-service';

type InitialState = {
  location: null | GeoPosition;
};
const initialState: InitialState = {
  location: null,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      return { ...state, location: action.payload };
    },
  },
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;
