import React from 'react';

import { RssItemProps } from '@lib/types';

const EpisodeCard: React.FC<RssItemProps> = ({
  title,
  content,
  description,
  media
}: RssItemProps) => {
  const mediaInfo = media.thumbnail ? media.thumbnail[0] : null;

  return (
    <div className="mb-2 sm:-mx-6 lg:-mx-8 px-4 py-4 lg:py-8 shadow-lg rounded-lg">
      <h4 className="text-xl font-bold text-black">{title}</h4>
      <p
        dangerouslySetInnerHTML={{
          __html: content || description
        }}
        className="text-md font-light my-2 text-blueGray-500"
      />
      {mediaInfo && (
        <audio controls>
          <source src={mediaInfo.url} type={mediaInfo.type} />
        </audio>
      )}
    </div>
  );
};

export default EpisodeCard;
