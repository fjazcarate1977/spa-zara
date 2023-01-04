import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPodcastData } from '@lib/api';
import { RootState } from '@store/index';
import { PodcastsActions } from '@store/podcasts';

import { FilterList } from '@organisms/index';

const MainTemplate: React.FC = () => {
  const podcastList = useSelector(
    (state: RootState) => state.podcasts.podcastList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storeAllPodcast = async (): Promise<void> => {
      const res = (await getPodcastData()) as AxiosResponse;

      /* eslint-disable */
      if (res.data.feed?.entry) {
        const { entry } = res.data.feed;
        const parserEntry = entry.map((data: any) => ({
          image: data['im:image'][2].label,
          title: data['im:name'].label,
          author: data['im:artist'].label,
          id: data.id.attributes['im:id']
        }));
        dispatch(PodcastsActions.setPodcastList(parserEntry));
      }
      /* eslint-enable */
    };
    if (!(podcastList.length > 0)) {
      storeAllPodcast() as unknown;
    }
  }, [podcastList, dispatch]);

  return (
    <>{podcastList.length > 0 && <FilterList podcastList={podcastList} />}</>
  );
};

export default MainTemplate;
