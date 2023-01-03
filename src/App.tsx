import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

import { InputText } from '@atoms/index';
import { PodcastList } from '@molecules/index';

import { getPodcastData } from './lib/api';

export default function App() {
  const [podcastList, setPodcastList] = useState();

  useEffect(() => {
    getAllPodcast() as unknown;
  }, []);

  const getAllPodcast = async (): Promise<void> => {
    const res = (await getPodcastData()) as AxiosResponse;
    if (res.data.feed?.entry) {
      const { entry } = res.data.feed;
      setPodcastList(entry);
    }
  };

  return (
    <div>
      <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-3xl"
              href="/"
            >
              Podcaster
            </a>
          </div>
        </div>
      </nav>
      <div>
        <main>
          <section className="relative">
            <div className="container mx-auto px-4 pb-32 lg:pb-48 ">
              <InputText handleInput={() => console.warn('Callback working')} />
            </div>
            {podcastList && (
              <div className="container mx-auto px-4 pb-32 lg:pb-48 ">
                <PodcastList podcastList={podcastList} />
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
