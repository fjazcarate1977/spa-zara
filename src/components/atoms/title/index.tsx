import React from 'react';
import { Link } from 'react-router-dom';

const Title: React.FC = () => (
  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    <Link
      className="text-black font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-3xl"
      to="/"
    >
      Podcaster
    </Link>
  </div>
);

export default Title;
