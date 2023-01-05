import { configureStore } from '@reduxjs/toolkit';

import { PodcastsSlice } from './podcasts';

const store = configureStore({
  reducer: { podcasts: PodcastsSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
