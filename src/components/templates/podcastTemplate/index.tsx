import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'rss-to-json';

import { getPodcastData } from '@lib/api';
import { parserRss, dateFormat, timeFormat } from '@lib/helpers';
import { RootState } from '@store/index';
import { PodcastsActions } from '@store/podcasts';

const PodcastTemplate: React.FC = () => {
  const podcastsInfo = useSelector(
    (state: RootState) => state.podcasts.podcastsInfo
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  const checkPodcastsInfo = podcastsInfo.find((data) => data.id === id);

  useEffect(() => {
    const storePodcastInfo = async (): Promise<void> => {
      const url = `${import.meta.env.VITE_API_PODCAST_DETAIL_URL as string}${
        id as string
      }`;
      const res = (await getPodcastData(url, true)) as AxiosResponse;

      /* eslint-disable */
      if (res.data.results[0]?.feedUrl) {
        const { feedUrl } = res.data.results[0];

        const rss = await parse(
          `${import.meta.env.VITE_API_ALLOW_CORS_URL}${feedUrl}`
        );

        dispatch(
          PodcastsActions.updatePodcastInfo(parserRss(id as string, rss))
        );
      }
      /* eslint-enable */
    };

    if (!checkPodcastsInfo) {
      storePodcastInfo() as unknown;
    }
  }, [podcastsInfo, dispatch, id, checkPodcastsInfo]);

  return (
    <>
      {checkPodcastsInfo && (
        <div>
          <main>
            <section className="relative">
              <div className="container mx-auto px-4 pt-24 lg:pt-32 px-4 pb-24 lg:pb-32  ">
                <div className="flex flex-wrap ">
                  <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                      <img
                        alt={checkPodcastsInfo.rss.title}
                        src={checkPodcastsInfo.rss.image}
                        className="w-full px-6 py-4 align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <h4 className="text-xl font-bold text-black">
                          {checkPodcastsInfo.rss.title}
                        </h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: checkPodcastsInfo.rss.description
                          }}
                          className="text-md font-light mt-2 text-blueGray-500"
                        />
                      </blockquote>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 px-4">
                    <div className="flex flex-col">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 shadow-lg rounded-lg">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="table-fixed min-w-full">
                              <thead className="bg-white border-b">
                                <tr>
                                  <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                  >
                                    Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                  >
                                    Date
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                  >
                                    Duration
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {checkPodcastsInfo.rss.items.map(
                                  (data, index) => (
                                    <tr
                                      key={index}
                                      className={`${
                                        index % 2 === 0
                                          ? 'bg-gray-100'
                                          : 'bg-white'
                                      } border-b`}
                                    >
                                      <td className="text-sm text-gray-900 font-light px-6 py-4">
                                        {data.title}
                                      </td>
                                      <td className="text-sm text-gray-900 font-light px-6 py-4">
                                        {dateFormat(data.published)}
                                      </td>
                                      <td className="text-sm text-gray-900 font-light px-6 py-4">
                                        {timeFormat(data.itunes_duration)}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default PodcastTemplate;
