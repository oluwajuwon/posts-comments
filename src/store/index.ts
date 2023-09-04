import { configureStore } from '@reduxjs/toolkit';
import photoSlice from './photos/photoSlice';
import locationSlice from './location/locationSlice';
import postSlice from './posts/postSlice';

export const store = configureStore({
  reducer: {
    photos: photoSlice,
    location: locationSlice,
    posts: postSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: { warnAfter: 128 },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
