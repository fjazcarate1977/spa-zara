import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RssProps, RssItemProps } from '@lib/types';

import { PodcastCard, Counter, EpisodeCard } from '@atoms/index';
import { EpisodeList } from '@molecules/index';

const PodcastInfo: React.FC<RssProps> = ({ card, items }: RssProps) => {
  const { ep } = useParams();
  const [episode, setEpisode] = useState<RssItemProps | null>(null);

  useEffect(() => {
    if (ep && items[Number(ep)]) {
      setEpisode(items[Number(ep)]);
    } else {
      setEpisode(null);
    }
  }, [ep, items]);

  return (
    <main>
      <section className="relative">
        <div className="container mx-auto px-4 pt-24 lg:pt-32 px-4 pb-24 lg:pb-32  ">
          <div className="flex flex-wrap ">
            <PodcastCard {...card} />
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-col">
                {episode ? (
                  <EpisodeCard {...episode} />
                ) : (
                  <>
                    <Counter itemsArray={items} />
                    <EpisodeList itemsArray={items} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PodcastInfo;
