import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'rss-to-json';

import { getPodcastData } from '@lib/api';
import { parserRss } from '@lib/helpers';
import { RootState } from '@store/index';
import { LoadingActions } from '@store/loading';
import { PodcastsActions } from '@store/podcasts';

import { PodcastInfo } from '@organisms/index';

const PodcastTemplate: React.FC = () => {
  const podcastsInfo = useSelector(
    (state: RootState) => state.podcasts.podcastsInfo
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentPodcastsInfo = podcastsInfo.find((data) => data.id === id);

  useEffect(() => {
    const storePodcastInfo = async (): Promise<void> => {
      const url = `${import.meta.env.VITE_API_PODCAST_DETAIL_URL as string}${
        id as string
      }`;
      dispatch(LoadingActions.setLoading(true));
      const res = (await getPodcastData(url, true)) as AxiosResponse;
      dispatch(LoadingActions.setLoading(false));
      /* eslint-disable */
      if (res.data.results[0]?.feedUrl) {
        const { feedUrl } = res.data.results[0];
        dispatch(LoadingActions.setLoading(true));
        const rss = await parse(
          `${import.meta.env.VITE_API_ALLOW_CORS_URL}${feedUrl}`
        );
        dispatch(LoadingActions.setLoading(false));
        dispatch(
          PodcastsActions.updatePodcastInfo(parserRss(id as string, rss))
        );
      }
      /* eslint-enable */
    };

    if (!currentPodcastsInfo) {
      storePodcastInfo() as unknown;
    }
  }, [podcastsInfo, dispatch, id, currentPodcastsInfo]);

  return (
    <>{currentPodcastsInfo && <PodcastInfo {...currentPodcastsInfo.rss} />}</>
  );
};

export default PodcastTemplate;
