import React from 'react';

import { RssProps } from '@lib/types';

import { PodcastCard, Counter } from '@atoms/index';
import { EpisodeList } from '@molecules/index';

const PodcastInfo: React.FC<RssProps> = ({ card, items }: RssProps) => (
  <div>
    <main>
      <section className="relative">
        <div className="container mx-auto px-4 pt-24 lg:pt-32 px-4 pb-24 lg:pb-32  ">
          <div className="flex flex-wrap ">
            <PodcastCard {...card} />
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-col">
                <Counter itemsArray={items} />
                <EpisodeList itemsArray={items} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default PodcastInfo;
