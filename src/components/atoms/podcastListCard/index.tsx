import React from 'react';

import { PodcastListCardProps } from '@lib/types';

const PodcastListCard: React.FC<PodcastListCardProps> = ({
  image,
  title,
  author,
  id
}: PodcastListCardProps) => (
  <div className="w-full md:w-6/12 lg:w-3/12 mb-12 px-4 min-h-300-px">
    <div className="relative h-full w-full px-6">
      <div className="w-full text-center -mb-12">
        <img
          alt={title}
          src={image}
          className="rounded-full mx-auto max-w-120-px"
        />
      </div>

      <div className="w-full bottom-0 p-3 pt-14 text-center shadow-md">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">{`Author: ${author} ${id}`}</p>
      </div>
    </div>
  </div>
);

export default PodcastListCard;
