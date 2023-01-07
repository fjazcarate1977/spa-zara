import React from 'react';

import { RssCardProps } from '@lib/types';

const PodcastCard: React.FC<RssCardProps> = ({
  title,
  image,
  description
}: RssCardProps) => (
  <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
      <img
        alt={title}
        src={image}
        className="w-full px-6 py-4 align-middle rounded-t-lg"
      />
      <blockquote className="relative p-8 mb-4">
        <h4 className="text-xl font-bold text-black">{title}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: description
          }}
          className="text-md font-light mt-2 text-blueGray-500"
        />
      </blockquote>
    </div>
  </div>
);

export default PodcastCard;
