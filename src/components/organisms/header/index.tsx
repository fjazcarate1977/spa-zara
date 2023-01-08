import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/index';

import { Loading, Title } from '@atoms/index';

const Header: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  return (
    <div className="container mx-auto px-2 pb-2 mb-8 mt-12 border-b-2 border-gray-300">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <Title />
        </div>
        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
          {isLoading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default Header;
