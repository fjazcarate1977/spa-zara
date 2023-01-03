import React from 'react';

interface ListCardProps {
  src: string;
  title: string;
  author: string;
}

const ListCard: React.FC<ListCardProps> = ({
  src,
  title,
  author
}: ListCardProps) => (
  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 h-180-px">
    <div className="relative h-full w-full px-6">
      <div className="absolute top-0 w-full">
        <img
          alt="..."
          src={src}
          className="rounded-full mx-auto max-w-120-px"
        />
      </div>

      <div className="absolute w-full bottom-0 p-3 pt-14 text-center shadow-md">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">{`Author: ${author}`}</p>
      </div>
    </div>
  </div>
);

export default ListCard;
