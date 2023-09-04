import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Comment } from '../../types';
import { getPostComments } from './actions';

type InitialState = {
  comments: Comment[];
  loading: boolean;
  error: any;
};
const initialState: InitialState = {
  comments: [],
  loading: false,
  error: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPostComments.pending.type, state => {
        state.loading = true;
      })
      .addCase(
        getPostComments.fulfilled.type,
        (state, action: PayloadAction) => {
          if (Array.isArray(action?.payload)) state.comments = action.payload;
          state.loading = false;
        },
      )
      .addCase(
        getPostComments.rejected.type,
        (state, action: PayloadAction) => {
          state.error = action.payload;
          state.loading = false;
        },
      );
  },
});

export default postsSlice.reducer;
