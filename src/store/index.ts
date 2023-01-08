import { configureStore } from '@reduxjs/toolkit';

import { LoadingSlice } from './loading';
import { PodcastsSlice } from './podcasts';

const store = configureStore({
  reducer: { podcasts: PodcastsSlice.reducer, loading: LoadingSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
