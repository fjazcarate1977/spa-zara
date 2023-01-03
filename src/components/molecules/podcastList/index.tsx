import React from 'react';

import { PodcastListCard } from '@atoms/index';

interface PodcastListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  podcastList: any[];
}

const PodcastList: React.FC<PodcastListProps> = ({
  podcastList = []
}: PodcastListProps) => (
  <div className="container mx-auto px-4 pb-32 lg:pb-48 ">
    <div className="flex flex-wrap justify-center">
      {podcastList.map((data, index: number) => (
        <PodcastListCard
          key={index}
          image={data['im:image'][2].label}
          title={data['im:name'].label}
          author={data['im:artist'].label}
          id={data.id.attributes['im:id']}
        />
      ))}
    </div>
  </div>
);

export default PodcastList;
