import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { dateFormat, timeFormat } from '@lib/helpers';
import { RssItemProps } from '@lib/types';

interface EpisodeListProps {
  itemsArray: RssItemProps[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({
  itemsArray
}: EpisodeListProps) => {
  const location = useLocation();
  const { pathname } = location;

  const linkID = pathname.split('/')[2];

  return (
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 shadow-lg rounded-lg">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="table-fixed min-w-full">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsArray.map((data, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } border-b`}
                >
                  <td className="text-sm text-gray-900 font-light px-6 py-4">
                    <Link to={`/podcast/${linkID}/episode/${index}`}>
                      {data.title}
                    </Link>
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4">
                    {dateFormat(data.published)}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4">
                    {timeFormat(data.itunes_duration)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;
