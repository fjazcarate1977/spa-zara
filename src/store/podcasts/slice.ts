import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PodcastListCardProps, PodcastInfoProps } from '@lib/types';

interface PodcastsStateProps {
  podcastList: PodcastListCardProps[];
  podcastsInfo: PodcastInfoProps[];
}

const InitialPodcastsState: PodcastsStateProps = {
  podcastList: [],
  podcastsInfo: []
};

const PodcastsSlice = createSlice({
  name: 'podcasts',
  initialState: InitialPodcastsState,
  reducers: {
    setPodcastList(state, action: PayloadAction<PodcastListCardProps[]>) {
      state.podcastList = action.payload;
    },
    updatePodcastInfo(state, action: PayloadAction<PodcastInfoProps[]>) {
      state.podcastsInfo = [...state.podcastsInfo, ...action.payload];
    }
  }
});

export default PodcastsSlice;
