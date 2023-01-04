import React, { useState } from 'react';

import { filterByString } from '@lib/helpers';
import { PodcastListCardProps } from '@lib/types';

import { InputText } from '@atoms/index';
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
    <div>
      <main>
        <section className="relative">
          <div className="container mx-auto px-4 pb-24 lg:pb-32 ">
            <InputText handleInput={(e) => handleSetSearchString(e)} />
          </div>

          <div className="container mx-auto px-4 pb-24 lg:pb-32 ">
            <PodcastList podcastList={podcastListFiltered} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FilterList;
