import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PodcastListCardProps } from '@lib/types';

interface PodcastsStateProps {
  podcastList: PodcastListCardProps[];
}

const InitialPodcastsState: PodcastsStateProps = { podcastList: [] };

const PodcastsSlice = createSlice({
  name: 'podcasts',
  initialState: InitialPodcastsState,
  reducers: {
    setPodcastList(state, action: PayloadAction<PodcastListCardProps[]>) {
      state.podcastList = action.payload;
    }
  }
});

export default PodcastsSlice;
