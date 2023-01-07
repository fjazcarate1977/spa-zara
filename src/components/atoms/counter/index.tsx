import React from 'react';

import { RssItemProps } from '@lib/types';

interface CounterProps {
  isIcon?: boolean;
  itemsArray: RssItemProps[];
}

const Counter: React.FC<CounterProps> = ({
  isIcon,
  itemsArray = []
}: CounterProps) => {
  const length = itemsArray.length;

  return (
    <>
      {isIcon ? (
        <span>{length}</span>
      ) : (
        <div className="mb-2 sm:-mx-6 lg:-mx-8 px-4 py-4 lg:py-8 shadow-lg rounded-lg">
          <h3 className="text-3xl font-semibold leading-normal">{`Episodes: ${length}`}</h3>
        </div>
      )}
    </>
  );
};

export default Counter;
