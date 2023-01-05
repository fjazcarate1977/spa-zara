import { PodcastInfoProps } from '@lib/types';

export const filterByString = <T, K extends keyof T>(
  data: T[],
  field: K,
  filter: string
): T[] =>
  data.filter(
    (el: T) =>
      (el[field as keyof typeof el] as string)
        .toLowerCase()
        .indexOf(filter.toLowerCase()) !== -1
  );

/* eslint-disable */
export const parserEntry = <T>(data: any): T[] =>
  data.map((data: any) => ({
    image: data['im:image'][2].label,
    title: data['im:name'].label,
    author: data['im:artist'].label,
    id: data.id.attributes['im:id'],
    summary: data.summary.label
  }));
/* eslint-enable */

/* eslint-disable */
export const parserRss = (id: string, data: any): PodcastInfoProps[] => {
  const rssToJson = JSON.stringify(data, null, 3);
  const jsonToObject = JSON.parse(rssToJson);

  const { title, description, image, items } = jsonToObject;
  return [
    {
      id,
      rss: {
        title,
        description,
        image,
        items
      }
    }
  ];
};
/* eslint-enable */

export const dateFormat = (date: number | Date): string =>
  new Intl.DateTimeFormat('en-GB').format(date);

export const timeFormat = (time: number | string): string => {
  if (isNaN(time as number)) return time as string;
  const date = new Date(0);
  date.setSeconds(time as number);
  const timeString = date.toISOString().substring(11, 19);
  return timeString;
};
