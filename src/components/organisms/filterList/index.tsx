import React, { useState } from 'react';

import { filterByString } from '@lib/helpers';
import { PodcastListCardProps } from '@lib/types';

import { InputText, Counter } from '@atoms/index';
import { PodcastList } from '@molecules/index';

interface FilterListProps {
  podcastList: PodcastListCardProps[];
}

const FilterList: React.FC<FilterListProps> = ({
  podcastList
}: FilterListProps) => {
  const [searchString, setSearchString] = useState('');

  const handleSetSearchString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const podcastListFiltered = [
    ...new Set([
      ...filterByString<PodcastListCardProps, 'title'>(
        podcastList,
        'title',
        searchString
      ),
      ...filterByString<PodcastListCardProps, 'author'>(
        podcastList,
        'author',
        searchString
      )
    ])
  ];

  return (
    <main>
      <section className="relative">
        <div className="container mx-auto px-4 pb-24 lg:pb-32 ">
          <div className="flex flex-wrap justify-end">
            <Counter isIcon itemsArray={podcastListFiltered} />
            <div className="w-full md:w-6/12 lg:w-3/12">
              <InputText handleInput={(e) => handleSetSearchString(e)} />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-24 lg:pb-32 ">
          <PodcastList podcastList={podcastListFiltered} />
        </div>
      </section>
    </main>
  );
};

export default FilterList;
