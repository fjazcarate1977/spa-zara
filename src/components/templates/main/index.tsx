import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPodcastData } from '@lib/api';
import { parserEntry } from '@lib/helpers';
import { useReload } from '@lib/hooks';
import { RootState } from '@store/index';
import { LoadingActions } from '@store/loading';
import { PodcastsActions } from '@store/podcasts';

import { FilterList } from '@organisms/index';

const Main: React.FC = () => {
  const podcastList = useSelector(
    (state: RootState) => state.podcasts.podcastList
  );
  const dispatch = useDispatch();
  const reload = useReload('nextUpdateList');

  useEffect(() => {
    const storeAllPodcast = async (): Promise<void> => {
      const url = import.meta.env.VITE_API_PODCAST_LIST_URL as string;
      dispatch(LoadingActions.setLoading(true));
      const res = (await getPodcastData(url)) as AxiosResponse;
      dispatch(LoadingActions.setLoading(false));

      /* eslint-disable */
      if (res.data.feed?.entry) {
        const { entry } = res.data.feed;
        dispatch(PodcastsActions.setPodcastList(parserEntry(entry)));
      }
      /* eslint-enable */
    };
    if (!(podcastList.length > 0) || reload) {
      storeAllPodcast() as unknown;
    }
  }, [podcastList, dispatch, reload]);

  return (
    <>{podcastList.length > 0 && <FilterList podcastList={podcastList} />}</>
  );
};

export default Main;
