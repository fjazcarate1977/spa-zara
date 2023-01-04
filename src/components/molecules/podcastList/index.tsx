import React from 'react';

import { PodcastListCardProps } from '@lib/types';

import { PodcastListCard } from '@atoms/index';

interface PodcastListProps {
  podcastList: PodcastListCardProps[];
}

const PodcastList: React.FC<PodcastListProps> = ({
  podcastList = []
}: PodcastListProps) => (
  <div className="container mx-auto px-4 pb-32 lg:pb-48 ">
    <div className="flex flex-wrap justify-center">
      {podcastList.map((data, index: number) => (
        <PodcastListCard key={index} {...data} />
      ))}
    </div>
  </div>
);

export default PodcastList;
